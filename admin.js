const SUPABASE_URL = window.SUPABASE_CONFIG.url;
const SUPABASE_ANON_KEY = window.SUPABASE_CONFIG.anonKey;

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const adminAlert = document.getElementById('admin-alert');
const userTableBody = document.getElementById('user-table-body');
const logoutBtn = document.getElementById('logout-btn');

const userFormPopup = document.getElementById('user-form-popup');
const registerUserFormPopup = document.getElementById('register-user-form-popup');
const overlay = document.getElementById('overlay');

const userIdInput = document.getElementById('user-id');
const userEmailInput = document.getElementById('user-email');
const userNameInput = document.getElementById('user-name');
const userCurrentDayInput = document.getElementById('user-current-day');
const userUnlockedAchievementsInput = document.getElementById('user-unlocked-achievements');
const userIsAdminInput = document.getElementById('user-is-admin');
const saveUserBtn = document.getElementById('save-user-btn');
const cancelUserBtn = document.getElementById('cancel-user-btn');

// Elementos de contraseña
const togglePasswordChangeBtn = document.getElementById('toggle-password-change');
const passwordInputsDiv = document.getElementById('password-inputs');
const userNewPasswordInput = document.getElementById('user-new-password');
const userConfirmPasswordInput = document.getElementById('user-confirm-password');
const passwordStrengthDiv = document.getElementById('password-strength');

const registerEmailInput = document.getElementById('register-email');
const registerPasswordInput = document.getElementById('register-password');
const registerNameInput = document.getElementById('register-name');
const registerNewUserBtn = document.getElementById('register-new-user-btn');
const cancelRegisterBtn = document.getElementById('cancel-register-btn');
const addUserBtn = document.getElementById('add-user-btn');

function showAlert(message, type) {
    adminAlert.textContent = message;
    adminAlert.className = `alert ${type}`;
    adminAlert.classList.add('show');
    setTimeout(() => {
        adminAlert.classList.remove('show');
    }, 4000);
}

async function checkAdminAuth() {
    const sessionUser = sessionStorage.getItem('user');

    if (!sessionUser) {
        showAlert('🔒 Debes iniciar sesión para acceder al panel de administración.', 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return false;
    }

    const parsedUser = JSON.parse(sessionUser);

    const { data: userData, error: userError } = await supabaseClient
        .from('users')
        .select('is_admin')
        .eq('id', parsedUser.id)
        .single();

    if (userError || !userData || !userData.is_admin) {
        console.error('No tiene permisos de admin:', userError);
        showAlert('⛔ Acceso denegado. No tienes permisos de administrador.', 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return false;
    }

    return true;
}

async function renderUsers() {
    userTableBody.innerHTML = '<tr><td colspan="8" class="loading">Cargando usuarios</td></tr>';

    const { data: users, error } = await supabaseClient
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error al cargar usuarios:', error);
        userTableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; color: #f85149;">❌ Error al cargar usuarios</td></tr>';
        showAlert('❌ Error al cargar usuarios.', 'error');
        return;
    }

    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = userTableBody.insertRow();
        row.dataset.userId = user.id;

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        };

        row.innerHTML = `
            <td><code>${user.id.substring(0, 8)}...</code></td>
            <td>${user.email}</td>
            <td>${user.name || '<em>Sin nombre</em>'}</td>
            <td><span style="background: linear-gradient(135deg, #58a6ff, #79c0ff); padding: 4px 8px; border-radius: 12px; font-size: 0.85em;">${user.current_day}</span></td>
            <td>${user.unlocked_achievements ? user.unlocked_achievements.length + ' logros' : '0 logros'}</td>
            <td>${user.is_admin ? '<span style="color: #2ea44f;">✅ Sí</span>' : '<span style="color: #8b949e;">❌ No</span>'}</td>
            <td>${formatDate(user.created_at)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-secondary btn-sm edit-user-btn" data-id="${user.id}">✏️ Editar</button>
                    <button class="btn btn-danger btn-sm delete-user-btn" data-id="${user.id}">🗑️ Eliminar</button>
                </div>
            </td>
        `;

        row.querySelector('.edit-user-btn').addEventListener('click', () => editUser(user.id));
        row.querySelector('.delete-user-btn').addEventListener('click', () => deleteUser(user.id, user.email));
    });
}

async function editUser(userId) {
    const { data: user, error } = await supabaseClient
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error al cargar datos del usuario para edición:', error);
        showAlert('❌ Error al cargar datos del usuario.', 'error');
        return;
    }

    userIdInput.value = user.id;
    userEmailInput.value = user.email;
    userNameInput.value = user.name || '';
    userCurrentDayInput.value = user.current_day || 1;
    userUnlockedAchievementsInput.value = user.unlocked_achievements ? user.unlocked_achievements.join(', ') : '';
    userIsAdminInput.checked = user.is_admin || false;

    // Resetear campos de contraseña
    userNewPasswordInput.value = '';
    userConfirmPasswordInput.value = '';
    passwordStrengthDiv.textContent = '';
    passwordInputsDiv.classList.remove('show');
    togglePasswordChangeBtn.textContent = 'Mostrar opciones de contraseña';

    showPopup(userFormPopup);
}

// Función para validar la fortaleza de la contraseña
function checkPasswordStrength(password) {
    const strengthDiv = passwordStrengthDiv;

    if (!password) {
        strengthDiv.textContent = '';
        strengthDiv.className = 'password-strength';
        return '';
    }

    let strength = 0;
    let feedback = [];

    // Longitud mínima
    if (password.length >= 8) {
        strength += 1;
    } else {
        feedback.push('Al menos 8 caracteres');
    }

    // Contiene mayúsculas
    if (/[A-Z]/.test(password)) {
        strength += 1;
    } else {
        feedback.push('Una mayúscula');
    }

    // Contiene minúsculas
    if (/[a-z]/.test(password)) {
        strength += 1;
    } else {
        feedback.push('Una minúscula');
    }

    // Contiene números
    if (/[0-9]/.test(password)) {
        strength += 1;
    } else {
        feedback.push('Un número');
    }

    // Contiene caracteres especiales
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    } else {
        feedback.push('Un carácter especial');
    }

    let strengthText = '';
    let strengthClass = '';

    if (strength <= 2) {
        strengthText = '🔴 Débil';
        strengthClass = 'weak';
    } else if (strength <= 4) {
        strengthText = '🟡 Media';
        strengthClass = 'medium';
    } else {
        strengthText = '🟢 Fuerte';
        strengthClass = 'strong';
    }

    if (feedback.length > 0) {
        strengthText += ` - Falta: ${feedback.join(', ')}`;
    }

    strengthDiv.textContent = strengthText;
    strengthDiv.className = `password-strength ${strengthClass}`;

    return strengthClass;
}

// Función para validar que las contraseñas coincidan
function validatePasswordMatch() {
    const newPassword = userNewPasswordInput.value;
    const confirmPassword = userConfirmPasswordInput.value;

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
        userConfirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
        userConfirmPasswordInput.style.borderColor = '#f85149';
        return false;
    } else {
        userConfirmPasswordInput.setCustomValidity('');
        userConfirmPasswordInput.style.borderColor = '';
        return true;
    }
}

async function saveUser() {
    const id = userIdInput.value;
    const name = userNameInput.value.trim();
    const current_day = parseInt(userCurrentDayInput.value);
    const unlocked_achievements = userUnlockedAchievementsInput.value
        .split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));
    const is_admin = userIsAdminInput.checked;
    const newPassword = userNewPasswordInput.value.trim();
    const confirmPassword = userConfirmPasswordInput.value.trim();

    // Validar datos básicos
    if (!name) {
        showAlert('👤 El nombre es obligatorio.', 'error');
        return;
    }

    if (current_day < 1 || current_day > 30) {
        showAlert('📅 El día actual debe estar entre 1 y 30.', 'error');
        return;
    }

    // Validar contraseña si se está cambiando
    let passwordChangeNeeded = false;
    if (newPassword || confirmPassword) {
        if (!newPassword || !confirmPassword) {
            showAlert('🔒 Debes completar ambos campos de contraseña.', 'error');
            return;
        }

        if (newPassword !== confirmPassword) {
            showAlert('🔒 Las contraseñas no coinciden.', 'error');
            return;
        }

        if (newPassword.length < 6) {
            showAlert('🔒 La contraseña debe tener al menos 6 caracteres.', 'error');
            return;
        }

        passwordChangeNeeded = true;
    }

    try {
        // Guardar la sesión actual del administrador
        const currentAdminSession = await supabaseClient.auth.getSession();

        // Actualizar datos del usuario en la tabla public.users
        const { error: updateError } = await supabaseClient
            .from('users')
            .update({ name, current_day, unlocked_achievements, is_admin })
            .eq('id', id);

        if (updateError) {
            console.error('Error al actualizar usuario:', updateError);
            showAlert('❌ Error al guardar el usuario: ' + updateError.message, 'error');
            return;
        }

        // Si se necesita cambiar la contraseña, usar la Edge Function
        if (passwordChangeNeeded) {
            const { data: passwordResponse, error: passwordError } = await supabaseClient.functions.invoke('update-user-password', {
                body: {
                    userId: id,
                    newPassword: newPassword
                }
            });

            if (passwordError) {
                console.error('Error al cambiar contraseña via Edge Function:', passwordError);
                showAlert(`❌ Usuario actualizado pero error al cambiar contraseña: ${passwordError.message}`, 'warning');
                // Continuar con el proceso ya que los datos del usuario sí se actualizaron
            } else if (passwordResponse && !passwordResponse.success) {
                showAlert(`❌ Usuario actualizado pero error al cambiar contraseña: ${passwordResponse.error || 'Error desconocido'}`, 'warning');
            } else {
                showAlert('✅ Usuario y contraseña actualizados correctamente.', 'success');
            }

            // Verificar que la sesión del admin sigue activa
            const sessionAfterUpdate = await supabaseClient.auth.getSession();
            if (!sessionAfterUpdate.data.session && currentAdminSession.data.session) {
                console.log('La sesión se perdió después de cambiar contraseña, restaurando...');
                await supabaseClient.auth.setSession(currentAdminSession.data.session);
            }
        } else {
            showAlert('✅ Usuario actualizado correctamente.', 'success');
        }

        hidePopup(userFormPopup);
        renderUsers();

    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        showAlert(`❌ Error al actualizar usuario: ${error.message}`, 'error');
    }
}

async function deleteUser(userId, userEmail) {
    if (!confirm(`⚠️ ¿Estás seguro de que quieres eliminar al usuario ${userEmail}?\n\nEsta acción eliminará al usuario completamente de ambas tablas (auth.users y public.users) y es IRREVERSIBLE.\n\n¿Continuar?`)) {
        return;
    }

    try {
        // Guardar la sesión actual antes de llamar a la Edge Function
        const currentSession = await supabaseClient.auth.getSession();

        console.log(`Eliminando usuario ${userId} de auth.users...`);

        const { data: deleteResponse, error: deleteAuthError } = await supabaseClient.functions.invoke('delete-user', {
            body: {
                userId: userId,
                tableName: 'users'
            }
        });

        if (deleteAuthError) {
            console.error('Error al llamar a la Edge Function:', deleteAuthError);
            throw new Error(`Error en Edge Function: ${deleteAuthError.message}`);
        }

        console.log('Respuesta de Edge Function:', deleteResponse);

        if (deleteResponse && !deleteResponse.success) {
            throw new Error(`Error en eliminación: ${deleteResponse.error || 'Error desconocido'}`);
        }

        // Verificar si la sesión sigue activa después de la operación
        const sessionAfterDelete = await supabaseClient.auth.getSession();
        if (!sessionAfterDelete.data.session && currentSession.data.session) {
            console.log('La sesión se perdió después de eliminar usuario, restaurando...');
            // Intentar restaurar la sesión
            await supabaseClient.auth.setSession(currentSession.data.session);
        }

        console.log(`Usuario ${userId} eliminado exitosamente de ambas tablas`);
        showAlert('✅ Usuario eliminado completamente del sistema.', 'success');
        renderUsers();

    } catch (error) {
        console.error('Error completo al eliminar usuario:', error);
        showAlert(`❌ Error al eliminar el usuario: ${error.message}`, 'error');
    }
}

// SOLUCIÓN PRINCIPAL: Crear un cliente separado para operaciones administrativas
async function registerNewUser() {
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();
    const name = registerNameInput.value.trim();

    if (!email || !password) {
        showAlert('📧 Email y contraseña son obligatorios para registrar un nuevo usuario.', 'error');
        return;
    }

    if (password.length < 6) {
        showAlert('🔒 La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }

    try {
        // Guardar la sesión actual del administrador
        const currentAdminSession = await supabaseClient.auth.getSession();

        // Usar la Edge Function para crear usuarios sin afectar la sesión actual
        const { data: registerResponse, error: registerError } = await supabaseClient.functions.invoke('admin-create-user', {
            body: {
                email: email,
                password: password,
                name: name
            }
        });

        if (registerError) {
            console.error('Error al crear usuario via Edge Function:', registerError);
            showAlert(`❌ Error al registrar usuario: ${registerError.message}`, 'error');
            return;
        }

        if (registerResponse && !registerResponse.success) {
            showAlert(`❌ Error al registrar usuario: ${registerResponse.error || 'Error desconocido'}`, 'error');
            return;
        }

        // Verificar que la sesión del admin sigue activa
        const sessionAfterRegister = await supabaseClient.auth.getSession();
        if (!sessionAfterRegister.data.session && currentAdminSession.data.session) {
            console.log('La sesión se perdió después de crear usuario, restaurando...');
            await supabaseClient.auth.setSession(currentAdminSession.data.session);
        }

        showAlert(`🎉 Usuario ${email} registrado exitosamente.`, 'success');
        hidePopup(registerUserFormPopup);
        registerEmailInput.value = '';
        registerPasswordInput.value = '';
        registerNameInput.value = '';
        renderUsers();

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        showAlert(`❌ Error al registrar usuario: ${error.message}`, 'error');
    }
}

function showPopup(popupElement) {
    popupElement.style.display = 'block';
    overlay.style.display = 'block';
    overlay.classList.add('show');

    setTimeout(() => {
        popupElement.classList.add('show');
    }, 10);
}

function hidePopup(popupElement) {
    popupElement.classList.remove('show');
    overlay.classList.remove('show');

    setTimeout(() => {
        popupElement.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

async function signOutUser() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error('Error al cerrar sesión:', error);
        showAlert('❌ Error al cerrar sesión.', 'error');
    } else {
        sessionStorage.removeItem('user');
        // Limpiar sessionStorage y localStorage
        sessionStorage.clear();
        localStorage.clear();
        showAlert('👋 Sesión cerrada correctamente.', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    const isAdmin = await checkAdminAuth();
    if (!isAdmin) {
        return;
    }

    renderUsers();

    // Event listeners existentes
    saveUserBtn.addEventListener('click', saveUser);
    cancelUserBtn.addEventListener('click', () => hidePopup(userFormPopup));
    logoutBtn.addEventListener('click', signOutUser);
    addUserBtn.addEventListener('click', () => showPopup(registerUserFormPopup));
    registerNewUserBtn.addEventListener('click', registerNewUser);
    cancelRegisterBtn.addEventListener('click', () => hidePopup(registerUserFormPopup));

    // Event listeners para contraseñas
    togglePasswordChangeBtn.addEventListener('click', () => {
        const isVisible = passwordInputsDiv.classList.contains('show');

        if (isVisible) {
            passwordInputsDiv.classList.remove('show');
            togglePasswordChangeBtn.textContent = 'Mostrar opciones de contraseña';
            // Limpiar campos cuando se oculta
            userNewPasswordInput.value = '';
            userConfirmPasswordInput.value = '';
            passwordStrengthDiv.textContent = '';
        } else {
            passwordInputsDiv.classList.add('show');
            togglePasswordChangeBtn.textContent = 'Ocultar opciones de contraseña';
        }
    });

    userNewPasswordInput.addEventListener('input', () => {
        checkPasswordStrength(userNewPasswordInput.value);
        validatePasswordMatch();
    });

    userConfirmPasswordInput.addEventListener('input', validatePasswordMatch);

    overlay.addEventListener('click', () => {
        hidePopup(userFormPopup);
        hidePopup(registerUserFormPopup);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hidePopup(userFormPopup);
            hidePopup(registerUserFormPopup);
        }
    });
});