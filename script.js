const exercises = [
    {
        day: 1,
        title: "¡Bienvenido a PyQuest! Tu Primer 'Hola Mundo'",
        description: "Tu primer desafío en Python: Imprime el mensaje 'Hola, mundo!' en la consola utilizando la función `print()`. Este es el tradicional primer programa que todo programador debe escribir.",
        theory: `
            <p>Imagina que <code>print()</code> es como un megáfono que usas para gritar mensajes al mundo (o a tu pantalla). Es la forma más básica de mostrar información en Python, como decir "¡Aquí estoy!" en tu código.</p>
            <p>📌 <strong>¿Cómo funciona?</strong> <code>print(valor)</code> toma lo que le des (texto, números, etc.) y lo muestra en la consola.</p>
            <p>📌 <strong>Texto entre comillas:</strong> En Python, cualquier texto debe ir entre comillas simples <code>'texto'</code> o dobles <code>"texto"</code>. Esto le dice a Python: "¡Esto es una cadena de texto literal, no un comando!"</p>
            <p>📌 <strong>Analogía:</strong> Piensa en las comillas como las tapas de un sándwich: envuelven el contenido para que Python sepa que es texto comestible.</p>
            <p>📌 <strong>Por qué importa:</strong> Este es el primer paso para que tu programa se comunique con el usuario, como escribir una nota en un cuaderno que todos puedan leer.</p>
        `,
        example: `# Los comentarios (con #) son como notas al margen para explicar tu código
# No se ejecutan, son solo para humanos

# Imprimir un mensaje simple
print("¡Hola, mundo!")  # Muestra: ¡Hola, mundo!

# También puedes combinar varios elementos
print("Python", "es", "genial")  # Muestra: Python es genial

# Nota: Los espacios entre palabras se añaden automáticamente cuando usas comas
`,
        hint: "Usa la función `print()` y no olvides las comillas para el texto.",
        solution: "print(\"Hola, mundo!\")",
        validationRules: {
            type: "exact_output",
            expected: "Hola, mundo!",
            case_sensitive: false
        },
        expectedOutput: "Hola, mundo!",
        isBoss: false
    },
    {
        day: 2,
        title: "Variables: Guardando Información",
        description: "Aprende a almacenar datos creando una variable llamada `nombre` y asígnale tu nombre. Después, imprime un saludo personalizado usando esa variable. Formato esperado: 'Hola, [TuNombre]!'",
        theory: `
            <p>Piensa en las <strong>variables</strong> como cajas etiquetadas en un almacén. Cada caja (variable) tiene un nombre (etiqueta) y guarda algo dentro (un valor, como un nombre o un número).</p>
            <p>📌 <strong>Crear una variable:</strong> Usas <code>nombre = valor</code>. El signo <code>=</code> es como decir "guarda esto en la caja llamada 'nombre'".</p>
            <p>📌 <strong>Usar variables:</strong> Una vez que guardas algo, puedes usar el nombre de la variable para acceder a su contenido, como abrir la caja.</p>
            <p>📌 <strong>Reglas para nombres de variables:</strong></p>
            <ul>
                <li>Pueden usar letras, números o guiones bajos (<code>_</code>), pero no espacios.</li>
                <li>Deben empezar con una letra o guion bajo, nunca con un número.</li>
                <li>Son sensibles a mayúsculas: <code>Nombre</code> y <code>nombre</code> son diferentes.</li>
                <li>No uses palabras reservadas como <code>print</code> o <code>if</code>.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Si tu programa es una cocina, las variables son los frascos etiquetados donde guardas ingredientes (datos) para usarlos más tarde.</p>
        `,
        example: `# Ejemplo: Guardando y usando información
nombre = "Lucía"  # Guardamos "Lucía" en la variable nombre
edad = 28         # Guardamos 28 en la variable edad

# Usamos las variables en un mensaje
print("Hola,", nombre, "!")  # Muestra: Hola, Lucía !
print("Tienes", edad, "años.")  # Muestra: Tienes 28 años.

# Nota: Las comas en print() añaden espacios automáticamente
`,
        hint: "Define `nombre = \"TuNombre\"` y luego usa `print(\"Hola,\", nombre, \"!\")`.",
        solution: `nombre = "Ana"
print("Hola,", nombre, "!")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "nombre",
                    value_type: "string"
                },
                {
                    type: "print_with_variable",
                    contains: ["Hola", "nombre"],
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "Hola, [cualquier_nombre]!",
        isBoss: false
    },
    {
        day: 3,
        title: "Tipos de Datos: Números y Texto",
        description: "Explora los diferentes tipos de datos creando dos variables numéricas: `numero1` con valor 10 y `numero2` con valor 5. Realiza operaciones básicas (suma y resta) e imprime ambos resultados con etiquetas descriptivas.",
        theory: `
            <p>En Python, los datos tienen <strong>tipos</strong>, como ingredientes en una receta. Los más comunes son números (para cálculos) y texto (para mensajes).</p>
            <p>📌 <strong>Tipos numéricos:</strong></p>
            <ul>
                <li><strong>Enteros (int):</strong> Números sin decimales, como 5, -10 o 0. Perfectos para contar cosas.</li>
                <li><strong>Flotantes (float):</strong> Números con decimales, como 3.14 o -0.5. Útiles para medidas precisas.</li>
            </ul>
            <p>📌 <strong>Texto (strings):</strong> Cadenas de caracteres entre comillas, como <code>"hola"</code>. Ideales para nombres, mensajes, etc.</p>
            <p>📌 <strong>Operaciones con números:</strong></p>
            <ul>
                <li><code>+</code>: Suma (10 + 5 = 15)</li>
                <li><code>-</code>: Resta (10 - 5 = 5)</li>
                <li><code>*</code>: Multiplicación</li>
                <li><code>/</code>: División</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Los números son como manzanas que puedes sumar o restar, mientras que el texto es como una nota escrita que puedes mostrar pero no sumar directamente.</p>
        `,
        example: `# Ejemplo: Operaciones con números
a = 15  # Entero
b = 4   # Entero

# Calculamos
suma = a + b
resta = a - b

# Mostramos resultados con etiquetas claras
print("Suma de", a, "y", b, "es:", suma)    # Muestra: Suma de 15 y 4 es: 19
print("Resta de", a, "y", b, "es:", resta)  # Muestra: Resta de 15 y 4 es: 11
`,
        hint: "Usa `+` para sumar y `-` para restar. Guarda los resultados en nuevas variables.",
        solution: `numero1 = 10
numero2 = 5
suma = numero1 + numero2
resta = numero1 - numero2
print("Suma:", suma)
print("Resta:", resta)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "numero1",
                    value: 10
                },
                {
                    type: "variable_assignment",
                    variable: "numero2",
                    value: 5
                },
                {
                    type: "arithmetic_operation",
                    operation: "addition",
                    operands: ["numero1", "numero2"]
                },
                {
                    type: "arithmetic_operation",
                    operation: "subtraction",
                    operands: ["numero1", "numero2"]
                },
                {
                    type: "print_results",
                    expected_outputs: ["15", "5"]
                }
            ],
            flexible_output: true
        },
        expectedOutput: "Suma: 15\nResta: 5",
        isBoss: false
    },
    {
        day: 4,
        title: "Concatenación de Cadenas",
        description: "Domina la unión de textos creando las variables `nombre` y `apellido`. Combínalas para formar tu nombre completo y muéstralo junto con el mensaje 'Mi nombre completo es:'.",
        theory: `
            <p>La <strong>concatenación</strong> es como pegar piezas de un rompecabezas de texto para formar una frase más grande. En Python, unes strings con el operador <code>+</code>.</p>
            <p>📌 <strong>Regla clave:</strong> Solo puedes concatenar texto con texto. Si quieres incluir un número, conviértelo con <code>str(numero)</code>.</p>
            <p>📌 <strong>Espacios:</strong> El operador <code>+</code> no añade espacios automáticamente, así que debes incluirlos manualmente (por ejemplo, <code>" "</code>).</p>
            <p>📌 <strong>Analogía:</strong> Imagina que estás armando una carta. Cada pedazo de texto es una palabra, y <code>+</code> es el pegamento que las une, pero tú decides dónde van los espacios.</p>
            <p>📌 <strong>Por qué es útil:</strong> Concatenar te permite crear mensajes personalizados combinando datos, como nombres o direcciones.</p>
        `,
        example: `# Ejemplo: Construyendo un mensaje
nombre = "Sofía"
apellido = "López"
saludo = "Hola, " + nombre + " " + apellido + "!"

print(saludo)  # Muestra: Hola, Sofía López!

# También puedes concatenar directamente
print("Mi nombre es: " + nombre + " " + apellido)  # Muestra: Mi nombre es: Sofía López
`,
        hint: "Usa el operador `+` para unir las variables `nombre` y `apellido`. No olvides añadir un espacio \" \" entre ellas.",
        solution: `nombre = "Maria"
apellido = "García"
nombre_completo = nombre + " " + apellido
print("Mi nombre completo es:", nombre_completo)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "nombre",
                    value_type: "string"
                },
                {
                    type: "variable_assignment",
                    variable: "apellido",
                    value_type: "string"
                },
                {
                    type: "string_concatenation",
                    variables: ["nombre", "apellido"]
                },
                {
                    type: "print_contains",
                    contains: ["Mi nombre completo es"],
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "Mi nombre completo es: [cualquier_nombre] [cualquier_apellido]",
        isBoss: false
    },
    {
        day: 5,
        title: "BOSS 1: Calculadora Simple de Área",
        description: "¡Tu primer desafío de jefe! Crea un programa que calcule el área y perímetro de un rectángulo. Define las variables `base` y `altura` con valores numéricos (ejemplo: 7 y 4). Calcula el área (base × altura) y el perímetro (2 × (base + altura)). Imprime ambos resultados de forma clara y profesional.",
        theory: `
            <p>¡Es hora de brillar! Este desafío es como construir una calculadora básica para un arquitecto. Necesitas usar variables, matemáticas y mensajes claros para calcular las dimensiones de un rectángulo.</p>
            <p>📌 <strong>Fórmulas geométricas:</strong></p>
            <ul>
                <li><strong>Área:</strong> Multiplica la base por la altura (<code>base * altura</code>).</li>
                <li><strong>Perímetro:</strong> Suma la base y la altura, multiplica por 2 (<code>2 * (base + altura)</code>).</li>
            </ul>
            <p>📌 <strong>Pasos clave:</strong></p>
            <ol>
                <li>Define variables para <code>base</code> y <code>altura</code>.</li>
                <li>Haz los cálculos y guárdalos en variables.</li>
                <li>Imprime los resultados con etiquetas claras, como "Área: 28".</li>
            </ol>
            <p>📌 <strong>Analogía:</strong> Piensa en un rectángulo como una sábana. El área es cuánta tela necesitas, y el perímetro es cuánta cuerda necesitas para rodearla.</p>
        `,
        example: `# Ejemplo: Calculando dimensiones
base = 6
altura = 3

# Cálculos
area = base * altura
perimetro = 2 * (base + altura)

# Resultados claros
print("Área del rectángulo:", area)      # Muestra: Área del rectángulo: 18
print("Perímetro del rectángulo:", perimetro)  # Muestra: Perímetro del rectángulo: 18
`,
        hint: "Define `base` y `altura`. Calcula `area = base * altura` y `perimetro = 2 * (base + altura)`. Imprime cada resultado con una etiqueta descriptiva.",
        solution: `base = 7
altura = 4
area = base * altura
perimetro = 2 * (base + altura)
print("El área es:", area)
print("El perímetro es:", perimetro)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "base",
                    value_type: "number"
                },
                {
                    type: "variable_assignment",
                    variable: "altura",
                    value_type: "number"
                },
                {
                    type: "formula_calculation",
                    formula: "area = base * altura",
                    variables: ["base", "altura"]
                },
                {
                    type: "formula_calculation",
                    formula: "perimetro = 2 * (base + altura)",
                    variables: ["base", "altura"]
                },
                {
                    type: "print_labels",
                    labels: ["area", "perimetro"],
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "El área es: 28\nEl perímetro es: 22",
        isBoss: true
    },
    {
        day: 6,
        title: "Condicionales: La Sentencia `if`",
        description: "Introduce la lógica condicional en tus programas. Crea una variable `edad` con valor 18 y escribe un programa que imprima 'Eres mayor de edad.' ÚNICAMENTE si la edad es mayor o igual a 18.",
        theory: `
            <p>Las <strong>condicionales</strong> son como tomar decisiones en un videojuego: "Si tienes más de 18 años, puedes pasar". En Python, usamos <code>if</code> para que el programa decida qué hacer según una condición.</p>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>if condicion:
    # Código que se ejecuta si la condición es verdadera
    # Usa 4 espacios para indentar</code></pre>
            <p>📌 <strong>Operadores de comparación:</strong></p>
            <ul>
                <li><code>==</code>: Igual a</li>
                <li><code>!=</code>: Diferente de</li>
                <li><code>></code>: Mayor que</li>
                <li><code><</code>: Menor que</li>
                <li><code>>=</code>: Mayor o igual que</li>
                <li><code><=</code>: Menor o igual que</li>
            </ul>
            <p>📌 <strong>Indentación:</strong> Python usa espacios para saber qué código pertenece al <code>if</code>. Sin indentación correcta, tendrás errores.</p>
            <p>📌 <strong>Analogía:</strong> Es como un guardia en una puerta que solo deja pasar a las personas que cumplen una regla (la condición).</p>
        `,
        example: `# Ejemplo: Decidiendo si puedes conducir
edad = 17

if edad >= 18:
    print("¡Puedes conducir!")  # Solo se ejecuta si la condición es verdadera

print("Fin del chequeo")  # Esto se ejecuta siempre
`,
        hint: "Usa `if edad >= 18:` y recuerda la indentación correcta para el bloque de código.",
        solution: `edad = 18
if edad >= 18:
    print("Eres mayor de edad.")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "edad",
                    value: 18
                },
                {
                    type: "if_condition",
                    condition: "edad >= 18",
                    expected_output: "Eres mayor de edad.",
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "Eres mayor de edad.",
        isBoss: false
    },
    {
        day: 7,
        title: "Condicionales: `if` y `else`",
        description: "Expande tu lógica condicional con alternativas. Crea una variable `temperatura` con valor 25. Si la temperatura es mayor a 30, imprime 'Hace mucho calor.'. Si no es así, imprime 'La temperatura es agradable.'.",
        theory: `
            <p>Con <code>if</code> y <code>else</code>, tu programa puede elegir entre dos caminos, como decidir si llevar paraguas o gafas de sol según el clima.</p>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>if condicion:
    # Código si la condición es verdadera
else:
    # Código si la condición es falsa</code></pre>
            <p>📌 <strong>Flujo:</strong> Python comprueba la condición del <code>if</code>. Si es verdadera, ejecuta su bloque. Si es falsa, salta al <code>else</code>.</p>
            <p>📌 <strong>Analogía:</strong> Es como un interruptor de luz: enciendes la bombilla (<code>if</code>) o la dejas apagada (<code>else</code>).</p>
            <p>📌 <strong>Por qué usar else:</strong> Garantiza que siempre hagas algo, incluso si la condición falla, haciendo tu programa más robusto.</p>
        `,
        example: `# Ejemplo: ¿Llevas chaqueta?
temperatura = 15

if temperatura < 20:
    print("Lleva chaqueta, hace frío.")
else:
    print("¡Disfruta el buen clima!")
`,
        hint: "Usa `if temperatura > 30:` seguido de `else:`. Recuerda que ambos bloques necesitan indentación correcta.",
        solution: `temperatura = 25
if temperatura > 30:
    print("Hace mucho calor.")
else:
    print("La temperatura es agradable.")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "temperatura",
                    value: 25
                },
                {
                    type: "if_else_structure",
                    condition: "temperatura > 30",
                    if_output: "Hace mucho calor.",
                    else_output: "La temperatura es agradable.",
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "La temperatura es agradable.",
        isBoss: false
    },
    {
        day: 8,
        title: "Condicionales: `if`, `elif`, `else`",
        description: "Maneja múltiples condiciones con `elif`. Asigna un valor numérico a `puntuacion`. Implementa esta lógica: si es 100 → '¡Perfecto!', si está entre 70-99 → 'Buen trabajo.', en cualquier otro caso → 'Necesitas practicar más.'",
        theory: `
            <p>Con <code>elif</code>, tu programa puede tomar decisiones más complejas, como un menú con varias opciones. Evalúa condiciones en orden y ejecuta solo la primera que sea verdadera.</p>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>if condicion1:
    # Código para condicion1
elif condicion2:
    # Código para condicion2
else:
    # Código para cualquier otro caso</code></pre>
            <p>📌 <strong>Flujo:</strong> Python prueba cada condición de arriba abajo. La primera que sea verdadera ejecuta su bloque y salta el resto.</p>
            <p>📌 <strong>Analogía:</strong> Es como un semáforo con varias luces: rojo (para), ámbar (precaución), verde (avanza). Cada luz tiene su propia instrucción, pero solo una se aplica a la vez.</p>
        `,
        example: `# Ejemplo: Clasificando un examen
nota = 85

if nota == 100:
    print("¡Perfecto, máxima puntuación!")
elif nota >= 80:
    print("¡Muy bien, notable!")
elif nota >= 60:
    print("Aprobado, pero puedes mejorar.")
else:
    print("No aprobado, a estudiar más.")
`,
        hint: "Usa `elif puntuacion >= 70:` para el rango 70-99. El orden de las condiciones es importante: empieza por la más específica (100).",
        solution: `puntuacion = 85
if puntuacion == 100:
    print("¡Perfecto!")
elif puntuacion >= 70:
    print("Buen trabajo.")
else:
    print("Necesitas practicar más.")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "puntuacion",
                    value_type: "number"
                },
                {
                    type: "if_elif_else_structure",
                    conditions: [
                        { condition: "puntuacion == 100", output: "¡Perfecto!" },
                        { condition: "puntuacion >= 70", output: "Buen trabajo." },
                        { condition: "else", output: "Necesitas practicar más." }
                    ],
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "Buen trabajo.",
        isBoss: false
    },
    {
        day: 9,
        title: "Operadores Lógicos: `and`, `or`, `not`",
        description: "Combina múltiples condiciones usando operadores lógicos. Con `es_soleado = True` y `temperatura = 28`, imprime 'Día perfecto para salir.' si es soleado Y la temperatura es mayor a 20. De lo contrario, imprime 'Quizás otro día.'",
        theory: `
            <p>Los <strong>operadores lógicos</strong> son como las reglas de un club: combinan condiciones para decidir quién entra. Con ellos, puedes hacer que tu programa tome decisiones más sofisticadas.</p>
            <p>📌 <strong>Operadores:</strong></p>
            <ul>
                <li><code>and</code>: Verdadero solo si <strong>ambas</strong> condiciones son verdaderas. Ejemplo: "Es soleado <strong>y</strong> hace calor".</li>
                <li><code>or</code>: Verdadero si <strong>al menos una</strong> condición es verdadera. Ejemplo: "Es sábado <strong>o</strong> domingo".</li>
                <li><code>not</code>: Invierte una condición (verdadero → falso, falso → verdadero). Ejemplo: "No llueve".</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Piensa en <code>and</code> como una puerta que necesita dos llaves, <code>or</code> como una puerta que se abre con cualquiera de dos llaves, y <code>not</code> como un interruptor que cambia "sí" por "no".</p>
        `,
        example: `# Ejemplo: Decidiendo si salir
es_soleado = True
temperatura = 25

if es_soleado and temperatura > 20:
    print("¡Perfecto para un picnic!")
else:
    print("Mejor quédate en casa.")

# Ejemplo con or
es_fin_de_semana = False
es_feriado = True
if es_fin_de_semana or es_feriado:
    print("¡Tienes libre!")
`,
        hint: "Usa `if es_soleado and temperatura > 20:` para combinar ambas condiciones. Ambas deben ser verdaderas para que el mensaje se muestre.",
        solution: `es_soleado = True
temperatura = 28
if es_soleado and temperatura > 20:
    print("Día perfecto para salir.")
else:
    print("Quizás otro día.")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "es_soleado",
                    value: "True"
                },
                {
                    type: "variable_assignment",
                    variable: "temperatura",
                    
                },
                {
                    type: "logical_condition",
                    condition: "es_soleado and temperatura > 20",
                    true_output: "Día perfecto para salir.",
                    false_output: "Quizás otro día.",
                    case_sensitive: "False"
                }
            ],
            flexible_output: true
        },
        expectedOutput: "Día perfecto para salir.",
        isBoss: false
    },
    {
        day: 10,
        title: "BOSS 2: Clasificador de Notas",
        description: "¡Segundo desafío de jefe! Crea un sistema de calificación académica. Define una variable `nota` con un valor entre 0 y 100, luego implementa un clasificador con estos rangos:\n• 90-100: 'A (Excelente)'\n• 80-89: 'B (Notable)'\n• 70-79: 'C (Aprobado)'\n• Menos de 70: 'F (Reprobado)'",
        theory: `
            <p>Este desafío es como ser un profesor que asigna calificaciones según el desempeño. Usarás condicionales para clasificar una nota en diferentes categorías, como si estuvieras poniendo sellos en un examen.</p>
            <p>📌 <strong>Estrategia:</strong></p>
            <ul>
                <li>Evalúa desde el rango más alto (90-100) hacia abajo.</li>
                <li>Usa <code>elif</code> para manejar rangos intermedios.</li>
                <li>El <code>else</code> captura todo lo que no encaja en los rangos anteriores.</li>
            </ul>
            <p>📌 <strong>Por qué el orden importa:</strong> Si pones primero <code>nota >= 70</code>, capturará notas de 90 o más, y nunca llegarás a las condiciones de "A" o "B".</p>
            <p>📌 <strong>Analogía:</strong> Es como clasificar frutas: primero las perfectas (A), luego las buenas (B), las aceptables (C), y finalmente las que no pasan (F).</p>
        `,
        example: `# Ejemplo: Clasificando una nota
calificacion = 92

if calificacion >= 90:
    print("A - ¡Excelente trabajo!")
elif calificacion >= 80:
    print("B - Muy bien, sigue así.")
elif calificacion >= 70:
    print("C - Aprobado, pero puedes mejorar.")
else:
    print("F - Necesitas repasar.")
`,
        hint: "Empieza con la condición más alta `if nota >= 90:` y ve descendiendo. Cada `elif` se evalúa solo si las condiciones anteriores fueron falsas.",
        solution: `nota = 75
if nota >= 90:
    print("A (Excelente)")
elif nota >= 80:
    print("B (Notable)")
elif nota >= 70:
    print("C (Aprobado)")
else:
    print("F (Reprobado)")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "nota",
                    value_type: "number",
                    range: { min: 0, max: 100 }
                },
                {
                    type: "grade_classification",
                    ranges: [
                        { min: 90, max: 100, grade: "A (Excelente)" },
                        { min: 80, max: 89, grade: "B (Notable)" },
                        { min: 70, max: 79, grade: "C (Aprobado)" },
                        { min: 0, max: 69, grade: "F (Reprobado)" }
                    ],
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "C (Aprobado)",
        isBoss: true
    },
    {
        day: 11,
        title: "Listas: Colecciones Ordenadas",
        description: "Crea una lista llamada `frutas` con los elementos 'manzana', 'banana' y 'cereza'. Imprime la lista completa. Luego, imprime solo la 'banana' accediendo a ella por su índice.",
        theory: `
            <p>Las <strong>listas</strong> son como carritos de supermercado: puedes guardar varios artículos (elementos) en orden, y acceder a ellos por su posición.</p>
            <p>📌 <strong>Creación:</strong> Se definen con corchetes <code>[]</code>, con elementos separados por comas.</p>
            <p>📌 <strong>Índices:</strong> Cada elemento tiene una posición, empezando desde 0. Por ejemplo, en <code>["a", "b", "c"]</code>, "b" está en el índice 1.</p>
            <p>📌 <strong>Analogía:</strong> Imagina una fila de casilleros numerados. Cada casillero (índice) guarda un elemento, y puedes abrir uno específico usando su número.</p>
            <p>📌 <strong>Por qué usar listas:</strong> Son perfectas para almacenar colecciones ordenadas, como una lista de tareas o nombres de estudiantes.</p>
        `,
        example: `# Ejemplo: Una lista de colores
colores = ["rojo", "verde", "azul"]
print("Lista completa:", colores)  # Muestra: ['rojo', 'verde', 'azul']
print("Segundo color:", colores[1])  # Muestra: verde

# También puedes usar índices para cambiar elementos
colores[0] = "amarillo"
print("Lista modificada:", colores)  # Muestra: ['amarillo', 'verde', 'azul']
`,
        hint: "El índice de 'banana' en la lista `frutas` es 1.",
        solution: `frutas = ["manzana", "banana", "cereza"]
print(frutas)
print(frutas[1])`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "list_creation",
                    variable: "frutas",
                    elements: ["manzana", "banana", "cereza"],
                    exact_order: true
                },
                {
                    type: "list_access",
                    variable: "frutas",
                    index: 1,
                    expected_element: "banana"
                },
                {
                    type: "print_list_and_element",
                    list_variable: "frutas"
                }
            ],
            flexible_output: false
        },
        expectedOutput: "['manzana', 'banana', 'cereza']\nbanana",
        isBoss: false
    },
    {
        day: 12,
        title: "Listas: Añadir y Quitar Elementos",
        description: "Aprende a modificar listas dinámicamente. Empieza con la lista `tareas = ['Comprar pan', 'Estudiar']`. Añade 'Hacer ejercicio' al final. Luego, elimina 'Comprar pan'. Finalmente, imprime la lista modificada.",
        theory: `
            <p>Las <strong>listas</strong> son como listas de tareas en una pizarra: puedes añadir nuevas tareas, borrar las completadas o cambiarlas. Son mutables, lo que las hace súper flexibles.</p>
            <p>📌 <strong>Métodos clave:</strong></p>
            <ul>
                <li><code>append(elemento)</code>: Añade un elemento al final, como escribir una nueva tarea al final de la lista.</li>
                <li><code>remove(elemento)</code>: Borra la primera aparición de un elemento, como tachar una tarea específica.</li>
                <li><code>pop()</code>: Quita el último elemento y lo devuelve, como sacar la última tarea de la pila.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Imagina una lista como un cuaderno de notas. Puedes pegar una nueva nota al final (<code>append</code>) o arrancar una página específica (<code>remove</code>).</p>
        `,
        example: `# Ejemplo: Gestionando una lista de tareas
tareas = ["Llamar a mamá", "Comprar leche"]
print("Tareas iniciales:", tareas)

# Añadir una tarea
tareas.append("Pasear al perro")
print("Con nueva tarea:", tareas)

# Eliminar una tarea
tareas.remove("Comprar leche")
print("Tareas restantes:", tareas)

# Usar pop para eliminar la última
ultima_tarea = tareas.pop()
print("Tarea eliminada:", ultima_tarea)
print("Lista final:", tareas)
`,
        hint: "Usa `append()` para añadir al final y `remove()` para eliminar por valor. Recuerda imprimir el resultado final.",
        solution: `tareas = ['Comprar pan', 'Estudiar']
tareas.append('Hacer ejercicio')
tareas.remove('Comprar pan')
print(tareas)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "list_creation",
                    variable: "tareas",
                    elements: ["Comprar pan", "Estudiar"],
                    exact_order: true
                },
                {
                    type: "list_method_call",
                    variable: "tareas",
                    method: "append",
                    argument: "Hacer ejercicio"
                },
                {
                    type: "list_method_call",
                    variable: "tareas",
                    method: "remove",
                    argument: "Comprar pan"
                },
                {
                    type: "print_with_variable",
                    contains: ["tareas"],
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "['Estudiar', 'Hacer ejercicio']",
        isBoss: false
    },
    {
        day: 13,
        title: "Iterando Listas con `for`",
        description: "Domina el arte de recorrer colecciones. Dada la lista `numeros = [1, 2, 3, 4, 5]`, usa un bucle `for` para imprimir cada número de la lista, cada uno en una nueva línea.",
        theory: `
            <p>Un bucle <code>for</code> es como un cartero que reparte cada carta (elemento) de una pila (lista) una por una. Te permite trabajar con cada elemento sin repetir código.</p>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>for elemento in lista:
    # Hacer algo con elemento</code></pre>
            <p>📌 <strong>Por qué usar for:</strong> Es más limpio que contar índices manualmente y reduce errores. Python se encarga de recorrer la lista por ti.</p>
            <p>📌 <strong>Analogía:</strong> Imagina que tienes una bandeja de cupcakes. Un bucle <code>for</code> es como tomar cada cupcake, decorarlo y servirlo, uno por uno.</p>
        `,
        example: `# Ejemplo: Imprimiendo nombres
amigos = ["Ana", "Ben", "Clara"]
print("Lista de invitados:")
for amigo in amigos:
    print(f"- {amigo}")  # Muestra cada nombre en una línea

# Ejemplo con números
numeros = [10, 20, 30]
for num in numeros:
    print(f"Número: {num}")
`,
        hint: "Recorre la lista `numeros` con un `for` y usa `print()` dentro del bucle. Cada número debe aparecer en su propia línea.",
        solution: `numeros = [1, 2, 3, 4, 5]
for numero in numeros:
    print(numero)`,
        validationRules: {
            type: "exact_output",
            expected: "1\n2\n3\n4\n5",
            case_sensitive: true
        },
        expectedOutput: "1\n2\n3\n4\n5",
        isBoss: false
    },
    {
        day: 14,
        title: "Tuplas: Listas Inmutables",
        description: "Explora las estructuras de datos inmutables. Crea una tupla llamada `coordenadas` con los valores (10, 20). Imprime la tupla completa y luego intenta cambiar el primer elemento (por ejemplo, a 5). Observa el error que se produce y explica por qué en un comentario.",
        theory: `
            <p>Las <strong>tuplas</strong> son como sobres sellados: una vez que pones algo dentro, no puedes cambiarlo. Son perfectas para datos que deben permanecer constantes.</p>
            <p>📌 <strong>Creación:</strong> Usa paréntesis <code>()</code> con elementos separados por comas.</p>
            <p>📌 <strong>Inmutabilidad:</strong> No puedes modificar, añadir o quitar elementos. Esto asegura que los datos no cambien accidentalmente.</p>
            <p>📌 <strong>Usos comunes:</strong> Coordenadas (x, y), colores RGB, o cualquier dato que deba ser fijo.</p>
            <p>📌 <strong>Analogía:</strong> Una tupla es como una placa de identificación grabada en metal: puedes leerla, pero no puedes reescribirla.</p>
        `,
        example: `# Ejemplo: Una tupla para coordenadas
ubicacion = (40, -3)  # Latitud, longitud
print("Coordenadas:", ubicacion)
print("Latitud:", ubicacion[0])

# Intentar cambiar causará error
# ubicacion[0] = 50  # ¡Error! Las tuplas no se pueden modificar
`,
        hint: "Intenta `coordenadas[0] = 5` después de imprimir la tupla. El error te mostrará por qué las tuplas son inmutables.",
        solution: `coordenadas = (10, 20)
print(coordenadas)
# Las tuplas son inmutables, no se pueden cambiar sus elementos después de creadas.
# Si intentas descomentar la siguiente línea, verás un TypeError:
# coordenadas[0] = 5`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "coordenadas",
                    value: "(10, 20)",
                    data_type: "tuple"
                },
                {
                    type: "print_statement",
                    variable: "coordenadas"
                },
                {
                    type: "comment_explanation",
                    required_keywords: ["inmutable", "tupla", "error"]
                }
            ],
            flexible_output: false
        },
        expectedOutput: "(10, 20)",
        isBoss: false
    },
    {
        day: 15,
        title: "BOSS 3: Filtrando una Lista",
        description: "¡Desafío de Jefe! Combina todo lo aprendido sobre listas, bucles y condicionales. Dada la lista `edades = [22, 16, 30, 19, 14, 25]`, crea una nueva lista llamada `mayores_de_edad` que contenga solo las edades mayores o iguales a 18. Imprime la nueva lista.",
        theory: `
            <p>Este desafío es como seleccionar solo los adultos de un grupo para un evento. Usarás listas, bucles y condicionales para filtrar datos, un patrón muy común en programación.</p>
            <p>📌 <strong>Pasos:</strong></p>
            <ol>
                <li>Crea una lista vacía para guardar las edades válidas.</li>
                <li>Recorre la lista original con un bucle <code>for</code>.</li>
                <li>Usa un <code>if</code> para verificar si cada edad cumple la condición.</li>
                <li>Añade las edades válidas a la nueva lista con <code>append</code>.</li>
            </ol>
            <p>📌 <strong>Analogía:</strong> Imagina que estás revisando una lista de invitados. Solo dejas pasar a los mayores de 18, y anotas sus edades en una nueva lista.</p>
        `,
        example: `# Ejemplo: Filtrando números mayores a 10
numeros = [5, 12, 8, 15, 3, 20]
mayores = []

for num in numeros:
    if num > 10:
        mayores.append(num)

print("Números originales:", numeros)
print("Números mayores a 10:", mayores)  # Muestra: [12, 15, 20]
`,
        hint: "1) Crea una lista vacía `mayores_de_edad = []`. 2) Usa un bucle `for` para iterar sobre `edades`. 3) Dentro del bucle, usa `if edad >= 18:` para verificar la condición. 4) Si cumple, usa `append()` para añadir a la nueva lista.",
        solution: `edades = [22, 16, 30, 19, 14, 25]
mayores_de_edad = []
for edad in edades:
    if edad >= 18:
        mayores_de_edad.append(edad)
print(mayores_de_edad)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "edades",
                    value: [22, 16, 30, 19, 14, 25]
                },
                {
                    type: "empty_list_creation",
                    variable: "mayores_de_edad"
                },
                {
                    type: "for_loop_with_condition",
                    iterable: "edades",
                    condition: ">= 18",
                    append_to: "mayores_de_edad"
                },
                {
                    type: "expected_output",
                    output: "[22, 30, 19, 25]",
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "[22, 30, 19, 25]",
        isBoss: true
    },
    {
        day: 16,
        title: "Bucles `while`: Repeticiones Condicionales",
        description: "Domina los bucles controlados por condiciones. Usa un bucle `while` para imprimir los números del 1 al 5. Asegúrate de tener una condición de parada para evitar un bucle infinito lo cual consumiría toda la memoria disponible.",
        theory: `
            <p>El bucle <code>while</code> es como una alarma que sigue sonando mientras no la apagues. Ejecuta código repetidamente hasta que una condición se vuelva falsa.</p>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>while condicion:
    # Código a repetir
    # Algo debe cambiar la condición</code></pre>
            <p>📌 <strong>Componentes:</strong></p>
            <ul>
                <li><strong>Inicialización:</strong> Crea una variable antes del bucle (ej. contador).</li>
                <li><strong>Condición:</strong> Decide si el bucle sigue o se detiene.</li>
                <li><strong>Actualización:</strong> Cambia la variable dentro del bucle para evitar un bucle infinito.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Es como contar ovejas hasta quedarte dormido. Si no incrementas el contador, ¡seguirás contando para siempre!</p>
        `,
        example: `# Ejemplo: Contando hasta 3
contador = 1
while contador <= 3:
    print(f"Conteo: {contador}")
    contador += 1  # Incrementamos para evitar un bucle infinito

# Muestra:
# Conteo: 1
# Conteo: 2
# Conteo: 3
`,
        hint: "Inicializa un contador en 1, y en cada iteración del while, imprímelo y auméntalo. La condición debe ser `while contador <= 5:`",
        solution: `contador = 1
while contador <= 5:
    print(contador)
    contador += 1`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_initialization",
                    variable: "contador",
                    value: 1
                },
                {
                    type: "while_loop",
                    condition: "contador <= 5",
                    increment: "contador += 1"
                },
                {
                    type: "expected_output",
                    output: "1\n2\n3\n4\n5",
                    case_sensitive: true
                }
            ],
            flexible_output: false
        },
        expectedOutput: "1\n2\n3\n4\n5",
        isBoss: false
    },
    {
        day: 17,
        title: "Strings: Métodos Básicos (`.upper()`, `.lower()`, `.strip()`)",
        description: "Aprende a manipular texto con métodos incorporados. Dada la cadena `mensaje = '   Hola Mundo   '` (¡con 3 espacios exactos después de la primera comilla y antes de la última!), conviértela a mayúsculas, luego a minúsculas y finalmente elimina los espacios en blanco al inicio y al final. Imprime cada resultado, asegurándote de que la salida coincida exactamente en contenido y formato de línea.",
        theory: `
            <p>Los <strong>strings</strong> son como bloques de arcilla: puedes moldearlos con métodos para cambiar su forma. Estos métodos son herramientas para limpiar o transformar texto.</p>
            <p>📌 <strong>Métodos clave:</strong></p>
            <ul>
                <li><code>upper()</code>: Convierte todo a mayúsculas, como gritar.</li>
                <li><code>lower()</code>: Convierte todo a minúsculas, como susurrar.</li>
                <li><code>strip()</code>: Quita espacios al inicio y final, como recortar los bordes de una hoja.</li>
            </ul>
            <p>📌 <strong>Inmutabilidad:</strong> Los strings no cambian; cada método crea un nuevo string con los cambios.</p>
            <p>📌 <strong>Analogía:</strong> Piensa en un string como un mensaje en una pizarra. Puedes copiarlo en mayúsculas o limpiarlo, pero la pizarra original no cambia.</p>
        `,
        example: `# Ejemplo: Transformando un texto
texto = "   Hola Python   "
print("Original:", texto)

# Cambiando el caso
print("Mayúsculas:", texto.upper())  # Muestra:    HOLA PYTHON   
print("Minúsculas:", texto.lower())  # Muestra:    hola python   
print("Sin espacios:", texto.strip())  # Muestra: Hola Python
`,
        hint: "Llama a cada método en la variable `mensaje` e imprime el resultado. Puedes guardar cada resultado en variables separadas o imprimir directamente.",
        solution: `mensaje = '   Hola Mundo   '
mayusculas = mensaje.upper()
minusculas = mensaje.lower()
sin_espacios = mensaje.strip()

print(mayusculas)
print(minusculas)
print(sin_espacios)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "mensaje",
                    value: "'   Hola Mundo   '"
                },
                {
                    type: "method_call",
                    method: "upper",
                    on_variable: "mensaje"
                },
                {
                    type: "method_call",
                    method: "lower",
                    on_variable: "mensaje"
                },
                {
                    type: "method_call",
                    method: "strip",
                    on_variable: "mensaje"
                },
                {
                    type: "expected_output",
                    output: "   HOLA MUNDO   \n   hola mundo   \nHola Mundo",
                    case_sensitive: true
                }
            ],
            flexible_output: false
        },
        expectedOutput: "   HOLA MUNDO   \n   hola mundo   \nHola Mundo",
        isBoss: false
    },
    {
        day: 18,
        title: "Strings: Dividir y Unir (`.split()`, `.join()`)",
        description: "Domina la manipulación avanzada de texto. Dada la cadena `cadena_numeros = '10-20-30-40'`, divídela por el guion (`-`) en una lista de strings. Luego, une esa lista con un espacio (` `) como separador. Imprime ambos resultados.",
        theory: `
            <p>Los métodos <code>split()</code> y <code>join()</code> son como tijeras y pegamento para texto. Con <code>split()</code> cortas un string en pedazos, y con <code>join()</code> los unes de nuevo con un separador.</p>
            <p>📌 <strong>split():</strong> Divide un string en una lista usando un separador, como cortar una cuerda en trozos.</p>
            <p>📌 <strong>join():</strong> Une una lista de strings en uno solo, usando un separador como pegamento.</p>
            <p>📌 <strong>Analogía:</strong> Imagina que tienes una frase escrita en una tira de papel. <code>split()</code> la corta en palabras, y <code>join()</code> las pega de nuevo con espacios o guiones.</p>
        `,
        example: `# Ejemplo: Manipulando una lista de palabras
frase = "sol-luna-estrella"
partes = frase.split("-")
print("Dividido:", partes)  # Muestra: ['sol', 'luna', 'estrella']

unido = " * ".join(partes)
print("Unido con *:", unido)  # Muestra: sol * luna * estrella
`,
        hint: "Usa `cadena_numeros.split('-')` para dividir. Para unir, el separador (`' '`) llama a `.join()` con la lista resultante como argumento.",
        solution: `cadena_numeros = '10-20-30-40'
lista_de_numeros = cadena_numeros.split('-')
print(lista_de_numeros)

cadena_unida = ' '.join(lista_de_numeros)
print(cadena_unida)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "cadena_numeros",
                    value: "'10-20-30-40'"
                },
                {
                    type: "method_call",
                    method: "split",
                    argument: "'-'",
                    on_variable: "cadena_numeros"
                },
                {
                    type: "method_call",
                    method: "join",
                    separator: "' '",
                    on_list: "lista_de_numeros"
                },
                {
                    type: "expected_output",
                    output: "['10', '20', '30', '40']\n10 20 30 40",
                    case_sensitive: true
                }
            ],
            flexible_output: false
        },
        expectedOutput: "['10', '20', '30', '40']\n10 20 30 40",
        isBoss: false
    },
    {
        day: 19,
        title: "Strings: Slicing (Cortar Cadenas)",
        description: "Dada la cadena `alfabeto = 'abcdefghijklmnopqrstuvwxyz'`. Imprime:\n1. Los primeros 5 caracteres.\n2. Los caracteres del índice 10 al 15 (inclusive).\n3. Los últimos 3 caracteres.",
        theory: `
            <p>El <strong>slicing</strong> es como cortar una rebanada de pan: eliges qué parte del string quieres, usando índices para definir el inicio y el fin.</p>
            <p>📌 <strong>Sintaxis:</strong> <code>cadena[inicio:fin]</code></p>
            <ul>
                <li><code>inicio</code>: Desde qué posición (incluida).</li>
                <li><code>fin</code>: Hasta qué posición (excluida).</li>
                <li>Si omites <code>inicio</code>, empieza desde 0. Si omites <code>fin</code>, va hasta el final.</li>
            </ul>
            <p>📌 <strong>Índices negativos:</strong> Cuentan desde el final. <code>-1</code> es el último carácter.</p>
            <p>📌 <strong>Analogía:</strong> Es como elegir un trozo de una cuerda: decides dónde empezar y terminar de cortar.</p>
        `,
        example: `# Ejemplo: Cortando un string
palabra = "televisión"
print(palabra[:4])     # Muestra: tele
print(palabra[4:7])    # Muestra: vis
print(palabra[-3:])    # Muestra: ión
`,
        hint: "Para los primeros 5: `[0:5]` o `[:5]`. Para los últimos 3: `[-3:]`.",
        solution: `alfabeto = 'abcdefghijklmnopqrstuvwxyz'
print(alfabeto[:5])
print(alfabeto[10:16]) # El índice final es exclusivo, por eso 16 para incluir el 15
print(alfabeto[-3:])`,
        validationRules: {
            type: "output_match",
            expected_outputs: [
                "abcde",
                "klmnop", 
                "xyz"
            ],
            flexible_output: false
        },
        expectedOutput: "abcde\nklmnop\nxyz",
        isBoss: false
    },
    {
        day: 20,
        title: "BOSS 4: Manipulación de Email",
        description: "Tienes la cadena `email = 'usuario.ejemplo@dominio.com'`. Extrae y imprime solo el 'nombre de usuario' (la parte antes del '@'). Luego, extrae y imprime solo el 'dominio' (la parte después del '@', sin incluir el '@').",
        theory: `
            <p>Este desafío es como abrir una carta para separar el remitente del destinatario. Usarás <code>split()</code> para dividir el email en partes, usando '@' como el cuchillo que corta la cadena.</p>
            <p>📌 <strong>Estrategia:</strong></p>
            <ul>
                <li>Divide el email con <code>split('@')</code> para obtener una lista con dos partes.</li>
                <li>Accede a cada parte usando índices: [0] para el usuario, [1] para el dominio.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Es como separar una dirección en "calle" y "ciudad" usando una coma como separador.</p>
        `,
        example: `# Ejemplo: Separando un email
correo = "ana.smith@ejemplo.org"
partes = correo.split("@")
print("Usuario:", partes[0])  # Muestra: ana.smith
print("Dominio:", partes[1])  # Muestra: ejemplo.org
`,
        hint: "Usa el método `.split('@')` para dividir la cadena en dos partes. Luego, accede a los elementos de la lista resultante por su índice.",
        solution: `email = 'usuario.ejemplo@dominio.com'
partes_email = email.split('@')

usuario = partes_email[0]
dominio = partes_email[1]

print("Usuario:", usuario)
print("Dominio:", dominio)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "email",
                    value: "usuario.ejemplo@dominio.com"
                },
                {
                    type: "output_contains",
                    text: "Usuario: usuario.ejemplo",
                    case_sensitive: false
                },
                {
                    type: "output_contains", 
                    text: "Dominio: dominio.com",
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "Usuario: usuario.ejemplo\nDominio: dominio.com",
        isBoss: true
    },
    {
        day: 21,
        title: "Diccionarios: Pares Clave-Valor",
        description: "Crea un diccionario llamado `persona` con las claves 'nombre', 'edad' y 'ciudad' y asígnale valores. Imprime el diccionario completo. Luego, imprime solo la edad de la persona.",
        theory: `
            <p>Un <strong>diccionario</strong> es como una libreta de contactos: cada nombre (clave) está asociado a información específica (valor), como un teléfono o dirección.</p>
            <p>📌 <strong>Creación:</strong> Usa llaves <code>{}</code> con pares <code>clave: valor</code> separados por comas.</p>
            <p>📌 <strong>Acceso:</strong> Usa la clave entre corchetes <code>diccionario['clave']</code> para obtener el valor.</p>
            <p>📌 <strong>Analogía:</strong> Es como buscar un número en tu agenda: usas el nombre de la persona para encontrar su información rápidamente.</p>
        `,
        example: `# Ejemplo: Un diccionario para un estudiante
estudiante = {"nombre": "Carlos", "edad": 20, "carrera": "Informática"}
print("Datos completos:", estudiante)
print("Edad del estudiante:", estudiante["edad"])  # Muestra: 20
`,
        hint: "Accede a la edad usando `persona['edad']`.",
        solution: `persona = {
    'nombre': 'Ana',
    'edad': 30,
    'ciudad': 'Madrid'
}
print(persona)
print("Edad:", persona['edad'])`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "persona",
                    contains_keys: ["nombre", "edad", "ciudad"]
                },
                {
                    type: "dictionary_access",
                    variable: "persona",
                    key: "edad"
                },
                {
                    type: "output_contains",
                    text: "Edad:",
                    case_sensitive: false
                }
            ],
            flexible_output: true
        },
        expectedOutput: "{'nombre': '[cualquier_nombre]', 'edad': [cualquier_edad], 'ciudad': '[cualquier_ciudad]'}\nEdad: [cualquier_edad]",
        isBoss: false
    },
    {
        day: 22,
        title: "Diccionarios: Añadir y Modificar Elementos",
        description: "Partiendo del diccionario `producto = {'nombre': 'Laptop', 'precio': 1200}`. Añade una nueva clave 'cantidad' con valor 5. Luego, cambia el precio a 1150. Imprime el diccionario modificado.",
        theory: `
            <p>Los <strong>diccionarios</strong> son como formularios que puedes actualizar: puedes añadir nuevos campos o cambiar los existentes.</p>
            <p>📌 <strong>Modificar:</strong> Usa <code>diccionario['clave'] = nuevo_valor</code> para cambiar un valor o añadir uno nuevo si la clave no existe.</p>
            <p>📌 <strong>Analogía:</strong> Es como actualizar una ficha de inventario: añades un nuevo dato (como la cantidad) o corriges el precio.</p>
        `,
        example: `# Ejemplo: Gestionando un producto
articulo = {"nombre": "Teléfono", "precio": 500}
articulo["color"] = "Negro"  # Añadir nueva clave
articulo["precio"] = 450     # Cambiar precio
print(articulo)  # Muestra: {'nombre': 'Teléfono', 'precio': 450, 'color': 'Negro'}
`,
        hint: "Para añadir: `producto['cantidad'] = 5`. Para modificar: `producto['precio'] = 1150`.",
        solution: `producto = {'nombre': 'Laptop', 'precio': 1200}
producto['cantidad'] = 5
producto['precio'] = 1150
print(producto)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "producto",
                    initial_keys: ["nombre", "precio"]
                },
                {
                    type: "dictionary_modification",
                    variable: "producto",
                    add_key: "cantidad",
                    add_value: 5
                },
                {
                    type: "dictionary_modification",
                    variable: "producto", 
                    modify_key: "precio",
                    new_value: 1150
                }
            ],
            flexible_output: false
        },
        expectedOutput: "{'nombre': 'Laptop', 'precio': 1150, 'cantidad': 5}",
        isBoss: false
    },
    {
        day: 23,
        title: "Iterando Diccionarios: Claves, Valores, Ítems",
        description: "Dado el diccionario `capitales = {'España': 'Madrid', 'Francia': 'París', 'Alemania': 'Berlín'}`. Usa un bucle `for` para imprimir solo las claves. Luego, usa otro bucle `for` para imprimir solo los valores. Finalmente, usa un bucle `for` para imprimir cada par clave-valor.",
        theory: `
            <p>Iterar un <strong>diccionario</strong> es como revisar una agenda: puedes mirar solo los nombres, solo los números, o ambos juntos.</p>
            <p>📌 <strong>Métodos de iteración:</strong></p>
            <ul>
                <li><code>keys()</code>: Obtienes los nombres (claves).</li>
                <li><code>values()</code>: Obtienes los datos (valores).</li>
                <li><code>items()</code>: Obtienes pares (clave, valor) como tuplas.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Es como revisar un cuaderno de direcciones: puedes listar solo los nombres, solo las ciudades, o ambas cosas juntas.</p>
        `,
        example: `# Ejemplo: Iterando un diccionario de frutas
frutas = {"manzana": 3, "banana": 5}
print("Frutas:")
for fruta in frutas:
    print(fruta)  # Muestra: manzana, banana

print("Cantidades:")
for cantidad in frutas.values():
    print(cantidad)  # Muestra: 3, 5

print("Detalles:")
for fruta, cantidad in frutas.items():
    print(f"{fruta}: {cantidad}")  # Muestra: manzana: 3, banana: 5
`,
        hint: "Para ítems usa: `for pais, capital in capitales.items():`",
        solution: `capitales = {'España': 'Madrid', 'Francia': 'París', 'Alemania': 'Berlín'}

print("Claves:")
for pais in capitales: # O capitales.keys()
    print(pais)

print("\nValores:")
for capital in capitales.values():
    print(capital)

print("\nPares Clave-Valor:")
for pais, capital in capitales.items():
    print(f"{pais}: {capital}") # Usamos f-string para un formato bonito`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "for_loop",
                    iterates_over: "capitales",
                    loop_type: "keys"
                },
                {
                    type: "for_loop", 
                    iterates_over: "capitales",
                    loop_type: "values"
                },
                {
                    type: "for_loop",
                    iterates_over: "capitales",
                    loop_type: "items",
                    unpacked_vars: 2
                }
            ],
            flexible_output: false
        },
       expectedOutput: "Claves:\nEspaña\nFrancia\nAlemania\n\nValores:\nMadrid\nParís\nBerlín\n\nPares Clave-Valor:\nEspaña: Madrid\nFrancia: París\nAlemania: Berlín",
        isBoss: false
    },
    {
        day: 24,
        title: "Sets: Colecciones Desordenadas sin Duplicados",
        description: "Crea un set llamado `numeros_unicos` con los valores {1, 2, 3, 2, 4, 1}. Imprime el set. Luego, intenta añadir el número 3 y el número 5. Imprime el set de nuevo.",
        theory: `
            <p>Un <strong>set</strong> es como una bolsa de canicas únicas: no hay dos iguales, y no importa en qué orden estén.</p>
            <p>📌 <strong>Características:</strong></p>
            <ul>
                <li>Elimina duplicados automáticamente.</li>
                <li>No mantiene un orden específico.</li>
                <li>Es mutable: puedes añadir o quitar elementos.</li>
            </ul>
            <p>📌 <strong>Métodos:</strong> Usa <code>add()</code> para añadir un elemento. Si ya existe, no pasa nada.</p>
            <p>📌 <strong>Analogía:</strong> Es como una lista de invitados únicos: no puedes invitar a la misma persona dos veces.</p>
        `,
        example: `# Ejemplo: Creando un set
colores = {"rojo", "azul", "rojo", "verde"}
print(colores)  # Muestra: {'rojo', 'verde', 'azul'} (sin duplicados)

colores.add("amarillo")
print(colores)  # Muestra: {'rojo', 'verde', 'azul', 'amarillo'}
`,
        hint: "Los sets eliminan duplicados automáticamente al crearse. `add()` no añade si el elemento ya está.",
        solution: `numeros_unicos = {1, 2, 3, 2, 4, 1}
print(numeros_unicos)

numeros_unicos.add(3) # No tendrá efecto
numeros_unicos.add(5)
print(numeros_unicos)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "variable_assignment",
                    variable: "numeros_unicos",
                    value_type: "set",
                    contains_elements: [1, 2, 3, 4]
                },
                {
                    type: "method_call",
                    object: "numeros_unicos",
                    method: "add",
                    argument: 3
                },
                {
                    type: "method_call",
                    object: "numeros_unicos",
                    method: "add",
                    argument: 5
                },
                {
                    type: "output_contains",
                    text: "5",
                    case_sensitive: true
                }
            ],
            flexible_output: false
        },
        expectedOutput: "{1, 2, 3, 4}\n{1, 2, 3, 4, 5}",
        isBoss: false
    },
    {
        day: 25,
        title: "BOSS 5: Contador de Palabras",
        description: "Dada la cadena `frase = 'Esto es una prueba y esto es una frase de prueba'`. Crea un diccionario donde las claves sean cada palabra única de la frase y los valores sean la cantidad de veces que aparece esa palabra. Imprime el diccionario resultante.",
        theory: `
            <p>Este desafío es como contar cuántas veces aparece cada ingrediente en una receta. Usarás strings, bucles y diccionarios para analizar una frase y resumirla.</p>
            <p>📌 <strong>Estrategia:</strong></p>
            <ul>
                <li>Divide la frase en palabras con <code>split()</code>.</li>
                <li>Usa <code>lower()</code> para que "Esto" y "esto" cuenten como la misma palabra.</li>
                <li>Recorre las palabras y usa un diccionario para contarlas.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Es como contar cuántas veces aparece cada tipo de carta en un mazo: cada carta única es una clave, y su conteo es el valor.</p>
        `,
        example: `# Ejemplo: Contando palabras
texto = "gato perro gato"
conteo = {}
for palabra in texto.lower().split():
    if palabra in conteo:
        conteo[palabra] += 1
    else:
        conteo[palabra] = 1
print(conteo)  # Muestra: {'gato': 2, 'perro': 1}
`,
        hint: "Primero, divide la frase en palabras usando `split()`. Luego, itera sobre las palabras y actualiza (o añade) las entradas del diccionario. Puedes usar `word.lower()` para ignorar mayúsculas/minúsculas.",
        solution: `frase = 'Esto es una prueba y esto es una frase de prueba'
palabras = frase.lower().split()
conteo_palabras = {}

for palabra in palabras:
    palabra = palabra.strip(".,!?\"'")
    if palabra in conteo_palabras:
        conteo_palabras[palabra] += 1
    else:
        conteo_palabras[palabra] = 1

print(conteo_palabras)`,
        validationRules: {
            type: "output_match",
            expected_keys: ["esto", "es", "una", "prueba", "y", "frase", "de"],
            expected_values: {"esto": 2, "es": 2, "una": 2, "prueba": 2, "y": 1, "frase": 1, "de": 1},
            output_type: "dictionary",
            flexible_output: false
        },
        expectedOutput: "{'esto': 2, 'es': 2, 'una': 2, 'prueba': 2, 'y': 1, 'frase': 1, 'de': 1}",
        isBoss: true
    },
    {
        day: 26,
        title: "Funciones: Organizando tu Código",
        description: "Define una función llamada `saludar` que no tome argumentos e imprima '¡Hola desde mi función!'. Luego, llama a esa función.",
        theory: `
            <p>Las <strong>funciones</strong> son como atajos mágicos en tu código: agrupan instrucciones para que las puedas usar una y otra vez sin repetirte. Esto hace que tu programa sea más organizado y fácil de entender.</p>
            <p>📌 <strong>Definición:</strong> Usa <code>def nombre_funcion():</code> para crear una función. Todo el código dentro debe estar indentado con 4 espacios, como si pusieras las instrucciones en una caja.</p>
            <p>📌 <strong>Llamada:</strong> Para usar la función, simplemente escribe su nombre seguido de paréntesis <code>nombre_funcion()</code>. Es como presionar un botón para ejecutar las instrucciones guardadas.</p>
            <p>📌 <strong>Analogía:</strong> Imagina que una función es una receta escrita en un cuaderno. La defines una vez (escribiendo los pasos) y la usas cada vez que quieras cocinar ese plato (llamándola).</p>
            <p>📌 <strong>Por qué importa:</strong> Las funciones evitan que copies y pegues código, reducen errores y hacen que tu programa sea más fácil de modificar.</p>
        `,
        example: `# Ejemplo: Una función para dar la bienvenida
def dar_bienvenida():
    print("¡Bienvenido al mundo de Python!")  # Mensaje principal
    print("Prepárate para aprender algo nuevo.")  # Mensaje adicional

# Llamamos la función para ejecutarla
dar_bienvenida()  # Muestra:
                  # ¡Bienvenido al mundo de Python!
                  # Prepárate para aprender algo nuevo.

# Podemos llamarla varias veces
dar_bienvenida()  # Vuelve a mostrar lo mismo

print("Esto está fuera de la función.")  # Muestra: Esto está fuera de la función.
`,
        hint: "Usa `def saludar():` para definirla (no olvides los dos puntos). Indenta el `print()` dentro de la función. Luego usa `saludar()` para llamarla.",
        solution: `def saludar():
    print("¡Hola desde mi función!")

saludar()`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "function_definition",
                    function_name: "saludar",
                    parameters: [],
                    contains_print: true
                },
                {
                    type: "function_call",
                    function_name: "saludar",
                    expected_output: "¡Hola desde mi función!"
                }
            ],
            flexible_output: false
        },
        expectedOutput: "¡Hola desde mi función!",
        isBoss: false
    },
    {
        day: 27,
        title: "Funciones con Parámetros y Argumentos",
        description: "Define una función llamada `sumar` que tome dos argumentos, `a` y `b`. La función debe imprimir la suma de `a` y `b`. Llama a la función `sumar` con los números 5 y 3.",
        theory: `
            <p>Los <strong>parámetros</strong> son como espacios en blanco en un formulario: defines dónde irá la información. Los <strong>argumentos</strong> son los datos que llenan esos espacios cuando usas la función.</p>
            <p>📌 <strong>Definición:</strong> En <code>def nombre_funcion(param1, param2):</code>, los parámetros (<code>param1</code>, <code>param2</code>) actúan como variables que reciben valores cuando llamas a la función.</p>
            <p>📌 <strong>Llamada:</strong> Al usar <code>nombre_funcion(valor1, valor2)</code>, los argumentos (<code>valor1</code>, <code>valor2</code>) se asignan a los parámetros en orden.</p>
            <p>📌 <strong>Analogía:</strong> Es como pedir un café personalizado. Los parámetros son las opciones (tamaño, tipo de leche), y los argumentos son tus elecciones específicas (grande, con leche de avena).</p>
            <p>📌 <strong>Por qué importa:</strong> Los parámetros hacen que las funciones sean flexibles, permitiéndote usarlas con diferentes datos sin cambiar su código.</p>
        `,
        example: `# Ejemplo: Una función para saludar a alguien
def saludar_con_edad(nombre, edad):
    print(f"¡Hola, {nombre}!")  # Usa el parámetro nombre
    print(f"Tienes {edad} años.")  # Usa el parámetro edad

# Llamamos la función con diferentes argumentos
saludar_con_edad("Lucía", 25)  # Muestra: ¡Hola, Lucía!
                               #         Tienes 25 años.
saludar_con_edad("Sofía", 30)  # Muestra: ¡Hola, Sofía!
                               #         Tienes 30 años.
`,
        hint: "Define la función como `def sumar(a, b):`. Dentro de la función, usa `print(a + b)`. Luego llama con `sumar(5, 3)`.",
        solution: `def sumar(a, b):
    print(a + b)

sumar(5, 3)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "function_definition",
                    function_name: "sumar",
                    parameters: ["a", "b"],
                    contains_print: true
                },
                {
                    type: "function_call",
                    function_name: "sumar",
                    arguments: [5, 3],
                    expected_output: "8"
                }
            ],
            flexible_output: false
        },
        expectedOutput: "8",
        isBoss: false
    },
    {
        day: 28,
        title: "Funciones con Valor de Retorno (`return`)",
        description: "Define una función llamada `multiplicar` que tome dos números, `x` e `y`. La función debe devolver (return) el producto de `x` e `y`. Llama a la función con 4 y 6, y guarda el resultado en una variable `resultado_multiplicacion`. Imprime esa variable.",
        theory: `
            <p>El <strong>return</strong> es como el momento en que un chef entrega un plato terminado: la función calcula algo y lo devuelve para que lo uses en otra parte de tu código.</p>
            <p>📌 <strong>Diferencia clave:</strong></p>
            <ul>
                <li><code>print()</code>: Solo muestra algo en pantalla, pero no puedes usar ese valor fácilmente.</li>
                <li><code>return</code>: Envía un valor al lugar donde se llamó la función, para que puedas almacenarlo o usarlo en cálculos.</li>
            </ul>
            <p>📌 <strong>Sintaxis:</strong></p>
            <pre><code>def nombre_funcion():
    # Calcula algo
    return valor  # Envía el valor al que llamó la función

resultado = nombre_funcion()  # Guarda el valor retornado
</code></pre>
            <p>📌 <strong>Analogía:</strong> Es como pedirle a un amigo que calcule algo por ti. Con <code>print</code>, solo te lo dice; con <code>return</code>, te da el resultado para que lo uses.</p>
            <p>📌 <strong>Nota:</strong> Si no usas <code>return</code>, la función devuelve <code>None</code> por defecto.</p>
        `,
        example: `# Ejemplo: Calculando el triple de un número
def calcular_triple(numero):
    triple = numero * 3
    return triple  # Devuelve el valor para usarlo fuera

# Usamos la función y guardamos su resultado
valor = 5
resultado = calcular_triple(valor)
print(f"El triple de {valor} es {resultado}")  # Muestra: El triple de 5 es 15

# Podemos usar el resultado en otros cálculos
nuevo_valor = resultado + 10
print(f"Sumando 10: {nuevo_valor}")  # Muestra: Sumando 10: 25
`,
        hint: "Dentro de la función usa `return x * y` (no print). Luego asigna el resultado: `resultado_multiplicacion = multiplicar(4, 6)` y finalmente imprime la variable.",
        solution: `def multiplicar(x, y):
    return x * y

resultado_multiplicacion = multiplicar(4, 6)
print(resultado_multiplicacion)`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "function_definition",
                    function_name: "multiplicar",
                    parameters: ["x", "y"],
                    has_return: true
                },
                {
                    type: "variable_assignment",
                    variable: "resultado_multiplicacion",
                    
                },
                {
                    type: "print_statement",
                    expected_output: 24
                }
            ],
            flexible_output: false
        },
        expectedOutput: "24",
        isBoss: false
    },
    {
        day: 29,
        title: "Manejo de Errores: `try` y `except`",
        description: "Escribe un programa que intente dividir un número por cero dentro de un bloque `try`. Usa un bloque `except` para capturar el error `ZeroDivisionError` y en su lugar imprime '¡Error: No se puede dividir por cero!'.",
        theory: `
            <p>El <strong>manejo de errores</strong> es como tener un plan B en caso de que algo salga mal. En Python, usas <code>try</code> y <code>except</code> para evitar que tu programa se detenga cuando ocurre un error inesperado.</p>
            <p>📌 <strong>Cómo funciona:</strong></p>
            <ul>
                <li><code>try</code>: Aquí pones el código que podría fallar.</li>
                <li><code>except</code>: Aquí defines qué hacer si ocurre un error específico.</li>
            </ul>
            <p>📌 <strong>Ejemplo de error:</strong> Dividir un número por cero provoca un <code>ZeroDivisionError</code>, porque matemáticamente no está definido.</p>
            <p>📌 <strong>Analogía:</strong> Es como intentar cruzar un puente que podría estar roto. Con <code>try</code>, intentas cruzar; con <code>except</code>, tienes un bote listo si el puente falla.</p>
            <p>📌 <strong>Por qué importa:</strong> El manejo de errores hace que tu programa sea más robusto y amigable, evitando que se detenga abruptamente.</p>
        `,
        example: `# Ejemplo: Intentando convertir texto a número
try:
    texto = "abc"
    numero = int(texto)  # Esto causará un ValueError
    print(f"El número es: {numero}")
except ValueError:
    print("¡Error: No se pudo convertir el texto a número!")
except ZeroDivisionError:
    print("¡Error: No se puede dividir por cero!")

# El programa sigue ejecutándose
print("Continuamos con el resto del programa.")
# Muestra:
# ¡Error: No se pudo convertir el texto a número!
# Continuamos con el resto del programa.
`,
        hint: "Coloca una división como `10 / 0` dentro del bloque `try`. Usa `except ZeroDivisionError:` para capturar específicamente ese error.",
        solution: `try:
    resultado = 10 / 0
    print(resultado)
except ZeroDivisionError:
    print("¡Error: No se puede dividir por cero!")`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "try_except_block",
                    exception_type: "ZeroDivisionError",
                    expected_output: "¡Error: No se puede dividir por cero!",
                    case_sensitive: false
                }
            ],
            flexible_output: false
        },
        expectedOutput: "¡Error: No se puede dividir por cero!",
        isBoss: false
    },
    {
        day: 30,
        title: "BOSS 6: Calculadora Segura de Promedio",
        description: "Define una función llamada `calcular_promedio` que reciba una lista de números. La función debe calcular el promedio de los números. Si la lista está vacía, debe capturar el error (posible `ZeroDivisionError` si intentas dividir por `len([])`) y devolver el mensaje 'La lista está vacía, no se puede calcular el promedio.'. De lo contrario, devuelve el promedio. Prueba la función con una lista vacía y con `[10, 20, 30]`.",
        theory: `
            <p>¡Último desafío de jefe! Este ejercicio combina funciones, listas, y manejo de errores para crear una calculadora confiable. Imagina que eres un estadístico calculando el promedio de una lista de notas, pero necesitas asegurarte de que no haya problemas si la lista está vacía.</p>
            <p>📌 <strong>Pasos clave:</strong></p>
            <ul>
                <li>Verifica si la lista está vacía usando <code>if not lista:</code>.</li>
                <li>Usa <code>sum(lista)</code> para sumar los elementos y <code>len(lista)</code> para contarlos.</li>
                <li>Usa <code>try-except</code> para manejar posibles errores, como dividir por cero.</li>
                <li>Retorna el promedio o un mensaje de error según el caso.</li>
            </ul>
            <p>📌 <strong>Analogía:</strong> Es como calcular el promedio de las puntuaciones de un equipo en un juego. Si nadie jugó (lista vacía), no puedes calcular el promedio, pero puedes avisar amablemente en lugar de fallar.</p>
            <p>📌 <strong>Por qué importa:</strong> Este tipo de lógica es común en aplicaciones reales, como analizar datos o generar reportes, donde los errores deben manejarse con elegancia.</p>
        `,
        example: `# Ejemplo: Calculando el promedio de una lista
def promedio_seguro(notas):
    if not notas:  # Verifica si la lista está vacía
        return "No hay notas para calcular el promedio."
    try:
        total = sum(notas)  # Suma los elementos
        cantidad = len(notas)  # Cuenta los elementos
        return total / cantidad  # Calcula el promedio
    except ZeroDivisionError:
        return "Error inesperado: división por cero."

# Pruebas
print(promedio_seguro([5, 10, 15]))  # Muestra: 10.0
print(promedio_seguro([]))  # Muestra: No hay notas para calcular el promedio.
`,
        hint: "Dentro de la función, primero verifica si la lista está vacía con `if not numeros:`. Si no está vacía, calcula la suma con `sum(numeros)` y divídela por `len(numeros)`. Usa try-except como medida adicional de seguridad.",
        solution: `def calcular_promedio(numeros):
    if not numeros:
        return "La lista está vacía, no se puede calcular el promedio."
    
    try:
        suma = sum(numeros)
        promedio = suma / len(numeros)
        return promedio
    except ZeroDivisionError:
        return "Error inesperado al calcular el promedio (división por cero)."

# Pruebas
print(calcular_promedio([]))
print(calcular_promedio([10, 20, 30]))`,
        validationRules: {
            type: "pattern_match",
            patterns: [
                {
                    type: "function_definition",
                    function_name: "calcular_promedio",
                    parameters: ["numeros"],
                    has_return: true
                },
                {
                    type: "function_call",
                    function_name: "calcular_promedio",
                    arguments: [[]],
                    expected_output: "La lista está vacía, no se puede calcular el promedio."
                },
                {
                    type: "function_call",
                    function_name: "calcular_promedio",
                    arguments: [[10, 20, 30]],
                    expected_output: "20.0"
                }
            ],
            flexible_output: false
        },
        expectedOutput: "La lista está vacía, no se puede calcular el promedio.\n20.0",
        isBoss: true
    }
];


// Logros disponibles
const achievements = [
    { id: 1, title: "Primer Paso", icon: "🚀", description: "Completaste tu primer ejercicio", day: 1 },
    { id: 2, title: "Variables Maestro", icon: "📦", description: "Aprendiste a usar variables", day: 2 },
    { id: 3, title: "Matemático", icon: "🧮", description: "Dominaste operaciones matemáticas", day: 3 },
    { id: 4, title: "Manipulador de Texto", icon: "🔤", description: "Concatenaste strings correctamente", day: 4 },
    { id: 5, title: "Jefe Derrotado (Básico)", icon: "🥋", description: "Venciste al primer jefe", day: 5 },
    { id: 6, title: "Condicionales", icon: "🚦", description: "Dominaste las sentencias if/else", day: 7 },
    { id: 7, title: "Lógico", icon: "🧠", description: "Usaste operadores lógicos", day: 9 },
    { id: 8, title: "Jefe Derrotado (Control de Flujo)", icon: "🏆", description: "Venciste al jefe de condicionales", day: 10 },
    { id: 9, title: "Listas", icon: "📋", description: "Creaste y manipulaste listas", day: 12 },
    { id: 10, title: "Iterador", icon: "🔁", description: "Usaste bucles para recorrer listas", day: 13 },
    { id: 11, title: "Jefe Derrotado (Listas)", icon: "⚔️", description: "Venciste al jefe de listas", day: 15 },
    { id: 12, title: "Bucles Infinitos (No)", icon: "♾️", description: "Dominaste el bucle while", day: 16 },
    { id: 13, title: "Maestro de Cadenas", icon: "📝", description: "Manipulaste texto con métodos de string", day: 18 },
    { id: 14, title: "Cortador Pro", icon: "✂️", description: "Usaste slicing para strings", day: 19 },
    { id: 15, title: "Jefe Derrotado (Strings y Bucles)", icon: "👑", description: "Venciste al jefe de strings y bucles", day: 20 },
    { id: 16, title: "Diccionarios", icon: "📚", description: "Trabajaste con diccionarios", day: 22 },
    { id: 17, title: "Sets", icon: "🧩", description: "Usaste sets para elementos únicos", day: 24 },
    { id: 18, title: "Jefe Derrotado (Estructuras de Datos)", icon: "💎", description: "Venciste al jefe de estructuras de datos", day: 25 },
    { id: 19, title: "Funcionario", icon: "⚙️", description: "Definiste y usaste tu primera función", day: 26 },
    { id: 20, title: "Argumentos", icon: "🗣️", description: "Pasaste argumentos a funciones", day: 27 },
    { id: 21, title: "Retorno de Valor", icon: "↩️", description: "Hiciste que una función devolviera un valor", day: 28 },
    { id: 22, title: "Manejador de Errores", icon: "🛡️", description: "Implementaste manejo de errores", day: 29 },
    { id: 23, title: "Jefe Final Derrotado", icon: "🐉", description: "Venciste al jefe final y dominaste Python!", day: 30 },
    { id: 24, title: "Semana 1", icon: "🌟", description: "Completaste la primera semana de PyQuest", day: 7 },
    { id: 25, title: "Semana 2", icon: "🌟🌟", description: "Completaste la segunda semana de PyQuest", day: 14 },
    { id: 26, title: "Semana 3", icon: "🌟🌟🌟", description: "Completaste la tercera semana de PyQuest", day: 21 },
    { id: 27, title: "PyQuest Completo", icon: "🎓", description: "Has terminado todos los desafíos de PyQuest", day: 30 }
];


// Elementos del DOM
const loginPage = document.getElementById('login-page');
const gamePage = document.getElementById('game-page');
const emailInput = document.getElementById('email'); // Nuevo campo para email
const passwordInput = document.getElementById('password'); // Nuevo campo para password
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const signupBtn = document.getElementById('signup-btn'); // Nuevo botón para registrarse
const logoutBtn = document.getElementById('logout-btn');
const usernameDisplay = document.getElementById('user-name');
const currentDayDisplay = document.getElementById('current-day');
const currentExerciseDisplay = document.getElementById('current-exercise');
const dayNumberDisplay = document.getElementById('day-number');
const exerciseTitleDisplay = document.getElementById('exercise-title');
const challengeText = document.getElementById('challenge-text');
const bossIndicator = document.getElementById('boss-indicator');
const codeEditor = document.getElementById('code-editor');
const consoleOutput = document.getElementById('console-output');
const runCodeBtn = document.getElementById('run-code');
const verifyBtn = document.getElementById('verify-answer');
const hintBtn = document.getElementById('hint-btn');
const clearConsoleBtn = document.getElementById('clear-console');
const nextExerciseBtn = document.getElementById('next-exercise');
const progressBar = document.getElementById('progress-bar');
const achievementsGrid = document.getElementById('achievements-grid');
const consoleStatus = document.getElementById('console-status');
//const usersList = document.getElementById('users-list');
const theoryContent = document.getElementById('theory-content');
const exampleContent = document.getElementById('example-content');

// Añadir el listener para la tecla Tab en el editor de código
codeEditor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault(); // Evita el comportamiento predeterminado del tabulador (cambiar de foco)

        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Si hay texto seleccionado, identa todas las líneas seleccionadas
        if (start !== end) {
            const lines = this.value.substring(start, end).split('\n');
            const indentedLines = lines.map(line => '    ' + line).join('\n'); // 4 espacios para indentación
            this.value = this.value.substring(0, start) + indentedLines + this.value.substring(end);
            this.selectionStart = start + 4; // Ajusta la selección para la primera línea indentada
            this.selectionEnd = end + (4 * lines.length); // Ajusta el final de la selección
        } else {
            // Inserta 4 espacios en la posición del cursor
            this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
            this.selectionStart = start + 4;
            this.selectionEnd = start + 4;
        }
    }
});

// Configuración de Supabase
const SUPABASE_URL = window.SUPABASE_CONFIG.url;
const SUPABASE_ANON_KEY = window.SUPABASE_CONFIG.anonKey;

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Estado de la aplicación
let currentUser = null; // Ahora almacenará el objeto de usuario de Supabase
let currentDay = 1;
let currentOutput = '';
let isExerciseCompleted = false;
let unlockedAchievements = [];
let pyodideReady = false;
let pyodide; // Variable para almacenar la instancia de Pyodide

const PLACEHOLDER_CODE = "# Escribe tu código aquí\n";

// Función para inicializar Pyodide
async function initializePyodide() {
    console.log('Loading Pyodide...');
    showAlert('Cargando intérprete de Python, por favor espera...', 'info');

    // Cargar Pyodide desde CDN
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js";
    script.onload = async () => {
        try {
            pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/",
                // Configuración para capturar stdout y stderr
                stdout: (text) => {
                    currentOutput += text + '\n';
                    consoleOutput.textContent += text + '\n';
                },
                stderr: (text) => {
                    currentOutput += text + '\n';
                    consoleOutput.textContent += text + '\n';
                    consoleStatus.textContent = "❌ Error en la ejecución";
                    consoleStatus.style.color = "var(--neon-pink)";
                    showAlert('Error: ' + text, 'error');
                }
            });
            pyodideReady = true;
            console.log('Pyodide loaded.');
            showAlert('Intérprete de Python cargado. ¡Listo para codificar!', 'success');
            initApp(); // Iniciar la aplicación después de cargar Pyodide
        } catch (error) {
            console.error('Failed to load Pyodide:', error);
            showAlert('Error al cargar el intérprete de Python. Por favor recarga la página.', 'error');
        }
    };
    script.onerror = () => {
        console.error('Failed to load Pyodide script.');
        showAlert('Error al cargar el script de Pyodide. Revisa tu conexión a internet.', 'error');
    };
    document.head.appendChild(script);
}

// --- FUNCIÓN DE REGISTRO ACTUALIZADA ---
// Esta versión NO intenta crear manualmente el perfil del usuario
// El trigger se encarga automáticamente

async function registerUser() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, ingresa tu email y contraseña para registrarte.');
        return;
    }

    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: email.split('@')[0] // Opcional: usar parte del email como nombre inicial
                }
            }
        });

        if (error) {
            console.error('Error durante el registro:', error.message);
            alert('Error al registrarse: ' + error.message);
            return;
        }

        if (data.user && data.user.identities && data.user.identities.length === 0) {
            // Esto ocurre si la confirmación por correo está activada y el email ya existe
            alert('Ya existe una cuenta con este email. Por favor, revisa tu bandeja de entrada para confirmar o inicia sesión.');
            return;
        }

        if (data.user) {
            // El usuario se ha registrado con éxito
            // El trigger automáticamente creará el registro en public.users
            alert('¡Registro exitoso! Por favor, revisa tu correo para confirmar tu cuenta. Una vez confirmada, inicia sesión.');

            // ELIMINAMOS ESTA LÍNEA PROBLEMÁTICA:
            // await createUserProfile(data.user.id, data.user.email, data.user.user_metadata.name || email.split('@')[0]);

            // renderUserList(); // Actualizar la lista de usuarios guardados wliminada
        } else {
            // Caso en que data.user es null pero no hay error, típico de confirmación por email
            alert('¡Registro exitoso! Por favor, revisa tu correo electrónico para confirmar tu cuenta.');
        }

    } catch (error) {
        console.error('Excepción al intentar registrar:', error);
        alert('Ocurrió un error inesperado durante el registro.');
    }
}

// --- FUNCIÓN OPCIONAL PARA VERIFICAR QUE EL PERFIL SE CREÓ ---
// Puedes usar esta función para verificar que el trigger funcionó correctamente

async function checkUserProfile(userId) {
    try {
        const { data, error } = await supabaseClient
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error al verificar perfil:', error);
            return null;
        }

        console.log('Perfil de usuario creado:', data);
        return data;
    } catch (error) {
        console.error('Error al verificar perfil:', error);
        return null;
    }
}

// Función para iniciar sesión
async function loginUser() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Por favor, ingresa tu email y contraseña para iniciar sesión.');
        return;
    }

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Error durante el inicio de sesión:', error.message);
            alert('Error al iniciar sesión: ' + error.message);
            return;
        }

        if (data.user) {
            alert('¡Inicio de sesión exitoso!');
            // Obtener el perfil de usuario de public.users
            const { data: userProfile, error: profileError } = await supabaseClient
                .from('users')
                .select('*')
                .eq('id', data.user.id)
                .single();

            if (profileError || !userProfile) {
                console.error('Error al cargar perfil de usuario:', profileError);
                alert('Error al cargar tu perfil de usuario.');
                // Considerar crear el perfil si no existe (aunque ya debería haber sido creado en el registro)
                await createUserProfile(data.user.id, data.user.email, data.user.user_metadata.name || data.user.email.split('@')[0]);
                await loadGameData(data.user.id, data.user.email, data.user.email.split('@')[0]); // Recargar data
                return;
            }

            loadGameData(userProfile.id, userProfile.email, userProfile.name);
        }
    } catch (error) {
        console.error('Excepción al intentar iniciar sesión:', error);
        alert('Ocurrió un error inesperado durante el inicio de sesión.');
    }
}

// Función para crear/actualizar el perfil de usuario en la tabla 'users'
async function createUserProfile(userId, userEmail, userName) {
    const { data: existingProfile, error: fetchError } = await supabaseClient
        .from('users')
        .select('id')
        .eq('id', userId)
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 es 'No rows found'
        console.error('Error checking existing user profile:', fetchError);
        return;
    }

    if (!existingProfile) {
        // Si no existe, inserta un nuevo perfil
        const { error: insertError } = await supabaseClient
            .from('users')
            .insert([
                {
                    id: userId,
                    email: userEmail,
                    name: userName,
                    current_day: 1, // Día inicial
                    unlocked_achievements: [] // Logros iniciales
                }
            ]);

        if (insertError) {
            console.error('Error al crear perfil de usuario en DB:', insertError.message);
            alert('Error al inicializar tu perfil de usuario.');
        } else {
            console.log('Perfil de usuario creado en DB.');
        }
    } else {
        console.log('Perfil de usuario ya existe en DB.');
    }
}


// **CAMBIO:** Función para obtener usuarios de Supabase (ya no de localStorage)
async function getUsersSupabase() {
    const { data, error } = await supabaseClient
        .from('users')
        .select('*');
    if (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
    return data;
}

// **CAMBIO:** Función para guardar el usuario actual en Supabase (upsert)
async function saveCurrentUser() {
    if (!currentUser || !currentUser.id) return; // Asegúrate de que el usuario tenga un ID

    const userData = {
        id: currentUser.id, // ID del usuario de Supabase Auth
        email: currentUser.email,
        name: currentUser.user_metadata?.username || currentUser.email, // Obtener nombre si existe en metadata, sino usar email
        current_day: currentDay,
        unlocked_achievements: unlockedAchievements
    };

    const { data, error } = await supabaseClient
        .from('users')
        .upsert(userData, { onConflict: 'id' }); // Usar upsert para insertar o actualizar

    if (error) {
        console.error('Error al guardar el usuario en Supabase:', error);
        showAlert('Error al guardar tu progreso. Intenta de nuevo.', 'error');
    } else {
        console.log('Progreso guardado en Supabase:', data);
    }
}

// **CAMBIO:** Función para eliminar un usuario de Supabase
async function deleteUserSupabase(userId) {
    const { error } = await supabaseClient
        .from('users')
        .delete()
        .eq('id', userId); // Eliminar por ID de usuario

    if (error) {
        console.error('Error al eliminar usuario:', error);
        showAlert('Error al eliminar el usuario. Intenta de nuevo.', 'error');
    } else {
        showAlert('Usuario eliminado correctamente.', 'success');
        // renderUserList(); // Volver a renderizar la lista
    }
}

// Renderizar lista de usuarios (ahora para propósitos de administración/visualización, no de login)


// Inicializar la aplicación
// Inicializar la aplicación
async function initApp() {
    const userData = sessionStorage.getItem('user');
    if (userData) {
        currentUser = JSON.parse(userData);
        await loadUserData(currentUser.id);
        showGamePage();
        loadExercise(currentDay);
    } else {
        showLoginPage();
    }
}

// **CAMBIO:** Función para cargar los datos del usuario desde Supabase
async function loadUserData(userId) {
    const { data, error } = await supabaseClient
        .from('users')
        .select('current_day, unlocked_achievements, name, is_admin') // <--- AÑADIR 'is_admin' AQUÍ
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error al cargar datos del usuario:', error);
        currentDay = 1;
        unlockedAchievements = [];
        // Si hay un error, el usuario no tiene perfil aún en public.users.
        // Esto puede pasar si el trigger falló o el usuario se registró antes de que se creara el trigger.
        // Se intenta crear el perfil.
        await createUserProfile(userId, currentUser.email, currentUser.user_metadata?.username || currentUser.email.split('@')[0]);
        // Después de intentar crear, volvemos a cargar los datos para asegurarnos de tenerlos.
        await loadUserData(userId); // Llamada recursiva para asegurar que los datos estén cargados.
    } else if (data) {
        currentDay = data.current_day || 1;
        unlockedAchievements = data.unlocked_achievements || [];
        // Actualizar el nombre del usuario si está en la metadata o en el registro de la tabla 'users'
        currentUser.user_metadata = { ...currentUser.user_metadata, username: data.name || currentUser.email };
        // Almacenar el estado de admin en el objeto currentUser
        currentUser.is_admin = data.is_admin; // <--- ALMACENAR EL ESTADO DE ADMIN
    }
}


// Mostrar página de inicio de sesión
function showLoginPage() {
    loginPage.style.display = 'flex';
    gamePage.style.display = 'none';
    // renderUserList(); // Mantener la lista de usuarios para administración
}

// Mostrar página del juego
function showGamePage() {
    loginPage.style.display = 'none';
    gamePage.style.display = 'block';

    // Actualizar la UI con la información del usuario
    usernameDisplay.textContent = currentUser.user_metadata?.username || currentUser.email;
    updateProgressBar();
    loadAchievements();
}

// Cargar ejercicio para el día actual
function loadExercise(day) {
    const exercise = exercises.find(e => e.day === day);

    if (!exercise) {
        showAlert('¡Felicidades! Has completado todos los desafíos disponibles.', 'success');
        return;
    }

    // Resetear estado del ejercicio
    isExerciseCompleted = false;
    currentOutput = '';

    // COMPROBACIONES NULL AQUÍ

    if (currentDayDisplay) {
        currentDayDisplay.textContent = day;
    }
    if (currentExerciseDisplay) {
        currentExerciseDisplay.textContent = day;
    }
    if (dayNumberDisplay) {
        dayNumberDisplay.textContent = day;
    }
    if (exerciseTitleDisplay) {
        exerciseTitleDisplay.textContent = exercise.title;
    }

    document.getElementById('theory-day-number').textContent = day;
    document.getElementById('theory-exercise-title').textContent = exercise.title;

    // Actualizar contenido
    if (challengeText) {
        challengeText.textContent = exercise.description;
    }

    // Teoría
    if (theoryContent) {
        theoryContent.innerHTML = `<div class="theory-box">${exercise.theory}</div>`;
    }

    // Ejemplo
    if (exampleContent) {
        exampleContent.innerHTML = `<div class="example-box"><pre><code>${exercise.example}</code></pre></div>`;
    }

    // Mostrar indicador de jefe si es necesario
    if (bossIndicator) { // Comprobación añadida
        bossIndicator.style.display = exercise.isBoss ? 'block' : 'none';
    }

    // Limpiar el editor de código y establecer el placeholder
    if (codeEditor) { // Comprobación añadida
        codeEditor.value = PLACEHOLDER_CODE;
        codeEditor.classList.add('placeholder-active');
    }

    // Limpiar la consola
    if (consoleOutput) { // Comprobación añadida
        consoleOutput.textContent = '';
    }
    if (consoleStatus) { // Comprobación añadida
        consoleStatus.textContent = "▶ Lista para ejecutar";
        consoleStatus.style.color = "var(--neon-green)";
    }

    // Actualizar estados de botones
    updateButtonStates(); // Asume que updateButtonStates también maneja si sus elementos son null

    // Actualizar la barra de progreso
    updateProgressBar(); // Asume que updateProgressBar también maneja si sus elementos son null
}

// Actualizar estados de los botones
function updateButtonStates() {
    if (verifyBtn) {
        verifyBtn.disabled = !currentOutput;
        verifyBtn.style.opacity = currentOutput ? '1' : '0.5';
    }

    if (nextExerciseBtn) {
        nextExerciseBtn.disabled = !isExerciseCompleted;
        nextExerciseBtn.style.opacity = isExerciseCompleted ? '1' : '0.5';
    }
}

// Actualizar la barra de progreso
function updateProgressBar() {
    const progress = (currentDay / exercises.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Cargar logros
function loadAchievements() {
    achievementsGrid.innerHTML = '';

    achievements.forEach(achievement => {
        // Unlock condition for achievements: either explicitly unlocked or the current day reached the achievement's day
        const isUnlocked = unlockedAchievements.includes(achievement.id) || currentDay > achievement.day || (currentDay === achievement.day && isExerciseCompleted);

        const achievementEl = document.createElement('div');
        achievementEl.className = `achievement ${isUnlocked ? '' : 'locked'}`;
        achievementEl.innerHTML = `
               <div class="achievement-icon">${achievement.icon}</div>
               <div class="achievement-title">${achievement.title}</div>
               <div class="achievement-description">${achievement.description}</div>
           `;
        // Only show date if unlocked for a better UX, or a placeholder if not
        if (isUnlocked) {
            const now = new Date();
            const dateString = now.toLocaleDateString();
            achievementEl.innerHTML += `<div class="achievement-date">${dateString}</div>`;
        } else {
            achievementEl.innerHTML += `<div class="achievement-date">Bloqueado</div>`;
        }

        achievementsGrid.appendChild(achievementEl);
    });
}

// Desbloquear logro
function unlockAchievement(achievementId) {
    if (!unlockedAchievements.includes(achievementId)) {
        unlockedAchievements.push(achievementId);
        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement) {
            showAlert(`🏆 ¡Logro desbloqueado! ${achievement.title}`, 'success');
            loadAchievements(); // Reload achievements to show the new one
        }
    }
    // Check for "week" achievements
    if (currentDay === 7 && unlockedAchievements.indexOf(24) === -1) unlockAchievement(24);
    if (currentDay === 14 && unlockedAchievements.indexOf(25) === -1) unlockAchievement(25);
    if (currentDay === 21 && unlockedAchievements.indexOf(26) === -1) unlockAchievement(26);
    if (currentDay === 30 && unlockedAchievements.indexOf(27) === -1 && isExerciseCompleted) unlockAchievement(27); // Final achievement
}


// Mostrar alerta
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;

    // Límite de caracteres para determinar si mostrar scroll
    const MAX_ALERT_LENGTH = 150;
    let isLongMessage = message.length > MAX_ALERT_LENGTH;

    // Icono según el tipo de alerta
    let icon = '💡';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    if (type === 'info') icon = 'ℹ️';
    if (type === 'boss') icon = '👾';

    // Si es un mensaje largo, crear estructura con scroll
    if (isLongMessage) {
        alert.innerHTML = `
            <span class="alert-icon">${icon}</span>
            <div style="max-height: 150px; overflow-y: auto;">
                <span>${message}</span>
            </div>
        `;
    } else {
        alert.innerHTML = `
            <span class="alert-icon">${icon}</span>
            <span>${message}</span>
        `;
    }

    document.body.appendChild(alert);

    // Mostrar alerta
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);

    // Determinar duración según longitud del mensaje
    const baseDuration = 5000; // 5 segundos base
    const extraDuration = isLongMessage ? Math.min(message.length * 30, 8000) : 0; // Máximo 8 segundos extra
    const totalDuration = baseDuration + extraDuration;

    // Ocultar después del tiempo calculado
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(alert)) {
                document.body.removeChild(alert);
            }
        }, 500);
    }, totalDuration);
}

// ignorame Función mejorada para traducir errores ya la tengo 
function translatePythonError(error) {
    const translations = {
        // Errores de sintaxis básicos
        "SyntaxError": "Error de sintaxis",
        "NameError": "Error de nombre",
        "TypeError": "Error de tipo",
        "IndentationError": "Error de indentación",
        "TabError": "Error de tabulación",
        "ValueError": "Error de valor",
        "AttributeError": "Error de atributo",
        "IndexError": "Error de índice",
        "KeyError": "Error de clave",
        "ImportError": "Error de importación",
        "ModuleNotFoundError": "Módulo no encontrado",
        "FileNotFoundError": "Archivo no encontrado",
        "PermissionError": "Error de permisos",
        "ZeroDivisionError": "Error de división por cero",
        "RuntimeError": "Error de ejecución",
        "RecursionError": "Error de recursión",
        "OverflowError": "Error de desbordamiento",
        "MemoryError": "Error de memoria",
        "UnboundLocalError": "Error de variable local no vinculada",
        "EOFError": "Error de fin de archivo",
        "KeyboardInterrupt": "Interrupción del teclado",
        "SystemExit": "Salida del sistema",
        "StopIteration": "Iteración detenida",
        "AssertionError": "Error de aserción",
        "NotImplementedError": "Error no implementado",
        "UnicodeError": "Error de Unicode",
        "UnicodeDecodeError": "Error de decodificación Unicode",
        "UnicodeEncodeError": "Error de codificación Unicode",
        "FloatingPointError": "Error de punto flotante",
        "ConnectionError": "Error de conexión",
        "TimeoutError": "Error de tiempo de espera",

        // Mensajes de error específicos - Nombres y variables
        "is not defined": "no está definido",
        "local variable '.*' referenced before assignment": "variable local '$1' referenciada antes de ser asignada",
        "global name '.*' is not defined": "nombre global '$1' no está definido",

        // Errores de cadenas de texto
        "unterminated string literal": "cadena de texto sin terminar",
        "EOL while scanning string literal": "final de línea inesperado en cadena de texto",
        "unterminated triple-quoted string literal": "cadena de texto con triple comilla sin terminar",

        // Errores de sintaxis
        "invalid syntax": "sintaxis inválida",
        "invalid decimal literal": "literal decimal inválido",
        "invalid token": "token inválido",
        "unexpected EOF while parsing": "fin de archivo inesperado durante el análisis",
        "can't assign to literal": "no se puede asignar a un literal",
        "cannot assign to literal": "no se puede asignar a un literal",
        "can't assign to operator": "no se puede asignar al operador",
        "can't assign to function call": "no se puede asignar a una llamada de función",

        // Errores de indentación
        "expected an indented block": "se esperaba un bloque indentado",
        "unexpected indent": "indentación inesperada",
        "unindent does not match any outer indentation level": "la des-indentación no coincide con ningún nivel de indentación exterior",
        "inconsistent use of tabs and spaces in indentation": "uso inconsistente de tabulaciones y espacios en la indentación",

        // Errores de paréntesis y delimitadores
        "missing parentheses": "faltan paréntesis",
        "unmatched '\\)'": "paréntesis ')' sin coincidencia",
        "unmatched '\\]'": "corchete ']' sin coincidencia",
        "unmatched '\\}'": "llave '}' sin coincidencia",
        "unexpected character after line continuation character": "carácter inesperado después del carácter de continuación de línea",

        // Errores de puntuación y delimitadores faltantes
        "Missing parentheses in call to 'print'": "Faltan paréntesis en la llamada a 'print'",
        "Missing comma between arguments": "Falta coma entre argumentos",
        "Missing colon": "Faltan dos puntos",
        "Missing opening parenthesis": "Falta paréntesis de apertura '('",
        "Missing closing parenthesis": "Falta paréntesis de cierre ')'",
        "Missing opening bracket": "Falta corchete de apertura '['",
        "Missing closing bracket": "Falta corchete de cierre ']'",
        "Missing opening brace": "Falta llave de apertura '{'",
        "Missing closing brace": "Falta llave de cierre '}'",
        "Missing quote": "Falta comilla",
        "Missing opening quote": "Falta comilla de apertura",
        "Missing closing quote": "Falta comilla de cierre",
        "Missing semicolon": "Falta punto y coma",
        "Missing period": "Falta punto",
        "Missing equals sign": "Falta signo de igual",
        "Missing operator": "Falta operador",

        // Errores específicos de puntuación detectados por el parser
        "expected ':'": "se esperaban dos puntos ':'",
        "expected ')'": "se esperaba paréntesis de cierre ')'",
        "expected ']'": "se esperaba corchete de cierre ']'",
        "expected '}'": "se esperaba llave de cierre '}'",
        "expected ','": "se esperaba una coma ','",
        "expected '='": "se esperaba signo de igual '='",
        "expected '('": "se esperaba paréntesis de apertura '('",
        "expected '['": "se esperaba corchete de apertura '['",
        "expected '{'": "se esperaba llave de apertura '{'",
        "expected '\"'": "se esperaba comilla doble '\"'",
        "expected \"'\"": "se esperaba comilla simple \"'\"",

        // Errores comunes de sintaxis por falta de puntuación
        "invalid syntax. Maybe you meant '==' or ':=' instead of '='?": "sintaxis inválida. ¿Quisiste decir '==' o ':=' en lugar de '='?",
        "invalid syntax. Perhaps you forgot a comma?": "sintaxis inválida. ¿Quizás olvidaste una coma?",
        "invalid syntax. Did you forget to add quotes?": "sintaxis inválida. ¿Olvidaste agregar comillas?",
        "invalid syntax. Maybe you forgot a colon?": "sintaxis inválida. ¿Quizás olvidaste dos puntos?",
        "invalid syntax. Did you mean to use '==' instead of '='?": "sintaxis inválida. ¿Quisiste usar '==' en lugar de '='?",

        // Errores específicos de print (muy común en principiantes)
        "print statement not supported": "la declaración print no está soportada (usa print() con paréntesis)",

        // Errores de elementos no cerrados (was never closed)
        "'\\(' was never closed": "'(' nunca fue cerrado",
        "'\\)' was never closed": "')' nunca fue cerrado",
        "'\\[' was never closed": "'[' nunca fue cerrado",
        "'\\]' was never closed": "']' nunca fue cerrado",
        "'\\{' was never closed": "'{' nunca fue cerrado",
        "'\\}' was never closed": "'}' nunca fue cerrado",
        "'\"' was never closed": "'\"' nunca fue cerrada",
        "\"'\" was never closed": "\"'\" nunca fue cerrada",
        "opening parenthesis '\\(' was never closed": "el paréntesis de apertura '(' nunca fue cerrado",
        "opening bracket '\\[' was never closed": "el corchete de apertura '[' nunca fue cerrado",
        "opening brace '\\{' was never closed": "la llave de apertura '{' nunca fue cerrada",
        "parenthesis was never closed": "el paréntesis nunca fue cerrado",
        "bracket was never closed": "el corchete nunca fue cerrado",
        "brace was never closed": "la llave nunca fue cerrada",
        "quote was never closed": "la comilla nunca fue cerrada",
        "string was never closed": "la cadena nunca fue cerrada",

        // Errores de listas y diccionarios
        "Trailing comma in list": "Coma final en lista (puede estar bien o mal según el contexto)",
        "Missing comma in list": "Falta coma en lista",
        "Missing comma in dictionary": "Falta coma en diccionario",
        "Missing colon in dictionary": "Faltan dos puntos en diccionario",

        // Errores de if, for, while, def, class
        "Missing colon after 'if'": "Faltan dos puntos después de 'if'",
        "Missing colon after 'for'": "Faltan dos puntos después de 'for'",
        "Missing colon after 'while'": "Faltan dos puntos después de 'while'",
        "Missing colon after 'def'": "Faltan dos puntos después de 'def'",
        "Missing colon after 'class'": "Faltan dos puntos después de 'class'",
        "Missing colon after 'else'": "Faltan dos puntos después de 'else'",
        "Missing colon after 'elif'": "Faltan dos puntos después de 'elif'",
        "Missing colon after 'try'": "Faltan dos puntos después de 'try'",
        "Missing colon after 'except'": "Faltan dos puntos después de 'except'",
        "Missing colon after 'finally'": "Faltan dos puntos después de 'finally'",
        "Missing colon after 'with'": "Faltan dos puntos después de 'with'",

        // Errores de argumentos de función
        "positional argument": "argumento posicional",
        "required positional argument": "argumento posicional requerido",
        "unexpected keyword argument": "argumento de palabra clave inesperado",
        "got multiple values for argument": "recibió múltiples valores para el argumento",
        "takes no arguments": "no toma argumentos",

        // Errores de tipos
        "unsupported operand type\\(s\\)": "tipo(s) de operando no soportado(s)",
        "can't multiply sequence by non-int": "no se puede multiplicar secuencia por un no-entero",
        "must be str, not": "debe ser str, no",
        "can only concatenate str": "solo se puede concatenar str",
        "object is not subscriptable": "el objeto no es suscriptible",
        "object has no attribute": "el objeto no tiene el atributo",
        "object is not callable": "el objeto no es callable",
        "object is not iterable": "el objeto no es iterable",
        "argument must be": "el argumento debe ser",

        // Errores de índices y claves
        "list index out of range": "índice de lista fuera de rango",
        "string index out of range": "índice de cadena fuera de rango",
        "tuple index out of range": "índice de tupla fuera de rango",
        "dictionary key": "clave de diccionario",
        "list assignment index out of range": "índice de asignación de lista fuera de rango",

        // Errores de división
        "division by zero": "división por cero",
        "float division by zero": "división de punto flotante por cero",
        "integer division or modulo by zero": "división entera o módulo por cero",

        // Errores de importación
        "No module named": "No existe el módulo",
        "cannot import name": "no se puede importar el nombre",
        "attempted relative import with no known parent package": "intento de importación relativa sin paquete padre conocido",

        // Errores de archivos
        "No such file or directory": "No existe el archivo o directorio",
        "Permission denied": "Permiso denegado",
        "Is a directory": "Es un directorio",
        "Not a directory": "No es un directorio",

        // Errores de caracteres y encoding
        "invalid character in identifier": "carácter inválido en identificador",
        "Non-UTF-8 code starting with": "código no-UTF-8 que comienza con",
        "Non-ASCII character": "carácter no-ASCII",

        // Errores de recursión y memoria
        "maximum recursion depth exceeded": "profundidad máxima de recursión excedida",
        "too many values to unpack": "demasiados valores para desempaquetar",
        "not enough values to unpack": "no hay suficientes valores para desempaquetar",

        // Errores comunes en estructuras de control
        "break outside loop": "break fuera del bucle",
        "continue not properly in loop": "continue no está correctamente dentro del bucle",
        "return outside function": "return fuera de función",
        "yield outside function": "yield fuera de función",

        // Errores de assert
        "assertion failed": "aserción falló",

        // Otros errores comunes
        "can't use starred expression here": "no se puede usar expresión con asterisco aquí",
        "keyword can't be an expression": "la palabra clave no puede ser una expresión",
        "positional argument follows keyword argument": "argumento posicional sigue a argumento de palabra clave",
        "duplicate argument": "argumento duplicado",
        "non-default argument follows default argument": "argumento no-predeterminado sigue a argumento predeterminado"
    };

    // Validar entrada
    if (!error || typeof error !== 'string') {
        return "Error desconocido";
    }

    let translatedError = error;

    // Aplicar las traducciones
    for (const [englishPattern, spanishTranslation] of Object.entries(translations)) {
        try {
            // Para patrones que contienen regex (caracteres especiales)
            if (englishPattern.includes('\\') || englishPattern.includes('.*')) {
                const regex = new RegExp(englishPattern, 'gi');
                translatedError = translatedError.replace(regex, spanishTranslation);
            } else {
                // Para coincidencias de texto simple (case insensitive)
                const regex = new RegExp(englishPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                translatedError = translatedError.replace(regex, spanishTranslation);
            }
        } catch (regexError) {
            // Si hay error en regex, usar replace simple
            translatedError = translatedError.replace(new RegExp(englishPattern, 'gi'), spanishTranslation);
        }
    }

    return translatedError;
}



// Función para mostrar errores en la consola del juego
function showErrorInConsole(error) {
    const translatedError = translatePythonError(error);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `<span class="error-icon">❌</span> ${translatedError}`;

    // Insertar el mensaje de error al principio de la consola
    consoleOutput.prepend(errorMessage);

    // Resaltar la consola de error
    consoleStatus.textContent = "❌ Error en la ejecución";
    consoleStatus.style.color = "var(--neon-pink)";

    // Mostrar alerta
    showAlert(`Error en tu código: ${translatedError}`, 'error');
}

// Función para ejecutar código Python con Pyodide
async function runPythonCode(code) {
    if (!pyodideReady) {
        showAlert('El intérprete de Python se está cargando. Por favor espera un momento e intenta de nuevo.', 'warning');
        return;
    }

    // Resetear salida
    currentOutput = '';
    consoleOutput.textContent = '';
    consoleStatus.textContent = "⌛ Ejecutando código...";
    consoleStatus.style.color = "var(--neon-yellow)";

    try {
        await pyodide.runPythonAsync(code);
        consoleStatus.textContent = "✅ Ejecución completada";
        consoleStatus.style.color = "var(--neon-green)";
        updateButtonStates();
    } catch (e) {
        // Capturar y mostrar el error en español
        console.error("Pyodide execution error:", e);
        let errorMessage = e.message;

        // Intentar obtener un mensaje más específico si es posible
        if (e instanceof Error && e.type === "PythonError") {
            try {
                errorMessage = e.message.split('\n').slice(-2).join(' ');
            } catch (parseErr) {
                console.error("Error parsing Python error:", parseErr);
            }
        }

        showErrorInConsole(errorMessage);
        updateButtonStates();
    }
}

// funcion de confeti
function createConfetti() {
    const celebrationContainer = document.createElement('div');
    celebrationContainer.classList.add('level-complete-celebration');
    document.body.appendChild(celebrationContainer);

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        celebrationContainer.appendChild(confetti);
    }

    setTimeout(() => {
        celebrationContainer.remove();
    }, 3000); // Remove confetti after animation
}

// Sistema de verificación actualizado para PyQuest
// Sistema de verificación actualizado para PyQuest
// Compatible con las nuevas reglas de validación flexibles

function verifyAnswer() {
    const exercise = exercises.find(e => e.day === currentDay);
    if (!exercise) return;

    if (!currentOutput.trim() && !getUserCode().trim()) {
        showAlert('Primero escribe y ejecuta tu código para generar una salida.', 'warning');
        return;
    }

    const userCode = getUserCode();
    // ¡CAMBIO CLAVE AQUÍ!
    // Se elimina el .trim() para preservar los espacios iniciales y finales
    // de la salida generada por el usuario.
    const userOutput = currentOutput; // Antes: currentOutput.trim();

    // Determinar el tipo de validación según las reglas del ejercicio
    const validationResult = validateExercise(exercise, userCode, userOutput);

    if (validationResult.isCorrect) {
        // Respuesta correcta
        isExerciseCompleted = true;
        updateButtonStates();

        // Calcular puntos según el tipo de ejercicio
        const pointsEarned = exercise.isBoss ? 100 : 50; // Boss: 100 puntos, Normal: 50 puntos

        // Mostrar efectos de éxito
        createConfetti();
        // Desbloquear logro correspondiente al día
        unlockAchievement(currentDay);

        if (exercise.isBoss) {
            showAlert('🎉 ¡Increíble! Derrotaste al jefe. ¡Eres un verdadero programador!', 'boss');
        } else {
            showAlert('🎉 ¡Perfecto! Has resuelto el ejercicio correctamente.', 'success');
        }

        // Guardar progreso del usuario
        saveCurrentUser();

    } else {
        // Respuesta incorrecta - mostrar mensaje específico
        showAlert(`❌ ${validationResult.message}`, 'error');
    }
}

function validateExercise(exercise, userCode, userOutput) {
    const rules = exercise.validationRules;

     // --- NUEVA LÓGICA CLAVE AQUÍ: Validar siempre si existe exercise.expectedOutput ---
      if (exercise.expectedOutput !== undefined && exercise.expectedOutput !== null) {
        // Si rules.flexible_output es true, significa que la salida esperada es flexible,
        // por lo tanto, NO realizamos una validación estricta de expectedOutput aquí.
        if (rules && rules.flexible_output === true) {
            
            
        } else {
            // Si flexible_output NO es true, entonces procedemos con la validación estricta.
            const outputPattern = {
                output: exercise.expectedOutput,
                case_sensitive: true // Puedes ajustar esto según necesidad
            };
            const outputValidationResult = validateExpectedOutput(outputPattern, userOutput);
            if (!outputValidationResult.isValid) {
                return {
                    isCorrect: false,
                    message: `La salida no coincide con lo esperado: ${outputValidationResult.message}`
                };
            }
        }
    }
    
    switch (rules.type) {
        case 'exact_output':
            return validateExactOutput(rules, userOutput);
            
        case 'pattern_match':
            return validatePatternMatch(rules, userCode, userOutput);
            
        case 'flexible_validation':
            return validateFlexibleRequirements(rules, userCode, userOutput);

        case 'output_match':
            return validateOutputMatch(rules, userOutput);    
            
        default:
            // Fallback para ejercicios sin reglas específicas
            return validateLegacyFormat(exercise, userOutput);
    }
}


function validateExactOutput(rules, userOutput) {
    const expected = rules.expected;
    const caseSensitive = rules.case_sensitive !== false; // Por defecto es sensible
    
    // Función para limpiar espacios no intencionales
    function cleanUnintentionalSpaces(text) {
        return text
            // Eliminar espacios al inicio y final
            .trim()
            // Eliminar múltiples espacios consecutivos y reemplazar por uno solo
            .replace(/\s+/g, ' ')
            // Eliminar espacios antes de signos de puntuación
            .replace(/\s+([,.!?;:])/g, '$1')
            // Eliminar espacios después de signos de apertura
            .replace(/([¡¿])\s+/g, '$1')
            // Limpiar espacios alrededor de comillas
            .replace(/"\s+/g, '"')
            .replace(/\s+"/g, '"')
            .replace(/'\s+/g, "'")
            .replace(/\s+'/g, "'");
    }
    
    // Limpiar ambos textos
    const cleanUserOutput = cleanUnintentionalSpaces(userOutput);
    const cleanExpected = cleanUnintentionalSpaces(expected);
    
    // Aplicar sensibilidad de mayúsculas/minúsculas
    const userText = caseSensitive ? cleanUserOutput : cleanUserOutput.toLowerCase();
    const expectedText = caseSensitive ? cleanExpected : cleanExpected.toLowerCase();
    
    if (userText === expectedText) {
        return { isCorrect: true };
    } else {
        // Detectar el tipo de error específico
        let errorType = "";
        
        // Verificar si solo hay diferencia de espacios
        if (userOutput.replace(/\s/g, '') === expected.replace(/\s/g, '')) {
            errorType = " (problema de espacios)";
        }
        // Verificar si solo hay diferencia de mayúsculas/minúsculas
        else if (userOutput.toLowerCase().trim() === expected.toLowerCase().trim()) {
            errorType = " (problema de mayúsculas/minúsculas)";
        }
        // Verificar si hay caracteres extra o faltantes
        else if (Math.abs(userOutput.length - expected.length) <= 3) {
            errorType = " (caracteres extra o faltantes)";
        }
        
        return { 
            isCorrect: false, 
            message: `Se esperaba: "${expected}" pero obtuviste: "${userOutput}"${errorType}`,
            cleaned: {
                expected: cleanExpected,
                user: cleanUserOutput
            }
        };
    }
}

function validatePatternMatch(rules, userCode, userOutput) {
    const patterns = rules.patterns;
    const errors = [];
    
    for (const pattern of patterns) {
        const result = validatePattern(pattern, userCode, userOutput);
        if (!result.isValid) {
            errors.push(result.message);
        }
    }
    
    if (errors.length === 0) {
        return { isCorrect: true };
    } else {
        return { 
            isCorrect: false, 
            message: `Problemas encontrados:\n• ${errors.join('\n• ')}` 
        };
    }
}

function validatePattern(pattern, userCode, userOutput) {
    switch (pattern.type) {
        case 'variable_assignment':
            return validateVariableAssignment(pattern, userCode);
            
        case 'print_with_variable':
            return validatePrintWithVariable(pattern, userCode, userOutput);
            
        case 'arithmetic_operation':
            return validateArithmeticOperation(pattern, userCode);
            
        case 'string_concatenation':
            return validateStringConcatenation(pattern, userCode);
            
        case 'if_condition':
            return validateIfCondition(pattern, userCode, userOutput);
            
        case 'if_else_structure':
            return validateIfElseStructure(pattern, userCode);
            
        case 'if_elif_else_structure':
            return validateIfElifElseStructure(pattern, userCode);
            
        case 'logical_condition':
            return validateLogicalCondition(pattern, userCode, userOutput);
            
        case 'list_creation':
            return validateListCreation(pattern, userCode);
            
        case 'list_access':
            return validateListAccess(pattern, userCode);
            
        case 'grade_classification':
            return validateGradeClassification(pattern, userCode, userOutput);
			
		case 'list_method_call':
			return validateListMethodCall(pattern, userCode);	
			
		case 'for_loop':
			return validateForLoop(pattern, userCode);
		case 'expected_output':
			return validateExpectedOutput(pattern, userOutput);	

        case 'dictionary_access':
            return validateDictionaryAccess(pattern, userCode);
            
        case 'dictionary_modification':
            return validateDictionaryModification(pattern, userCode);
            
        case 'output_contains':
            return validateOutputContains(pattern, userOutput);    
            
        default:
            return { isValid: true }; // Patrón no reconocido, asumir válido
    }
}


function validateOutputMatch(rules, userOutput) {
    // Si es validación de diccionario (como ejercicio 25)
    if (rules.output_type === 'dictionary') {
        return validateDictionaryOutput(rules, userOutput);
    }
    
    // Si es validación de múltiples líneas (ejercicios anteriores)
    if (rules.expected_outputs) {
        return validateMultipleOutputs(rules, userOutput);
    }
    
    // Fallback para otros casos
    return { isCorrect: true };
}

// Validar acceso a diccionario (ej: persona['edad'])
function validateDictionaryAccess(pattern, userCode) {
    const varName = pattern.variable;
    const key = pattern.key;
    
    // Buscar acceso con corchetes - acepta tanto comillas simples como dobles
    const accessRegex = new RegExp(`${varName}\\s*\\[\\s*['"]*${key}['"]*\\s*\\]`);
    
    if (!accessRegex.test(userCode)) {
        return { 
            isValid: false, 
            message: `Debes acceder a la clave '${key}' del diccionario '${varName}' usando ${varName}['${key}']` 
        };
    }
    
    return { isValid: true };
}

// Validar modificación de diccionario (añadir o cambiar valores)
function validateDictionaryModification(pattern, userCode) {
    const varName = pattern.variable;
    
    if (pattern.add_key && pattern.add_value !== undefined) {
        // Validar que se añade una nueva clave
        const addKey = pattern.add_key;
        const addValue = pattern.add_value;
        
        const addRegex = new RegExp(`${varName}\\s*\\[\\s*['"]*${addKey}['"]*\\s*\\]\\s*=\\s*${addValue}`);
        
        if (!addRegex.test(userCode)) {
            return { 
                isValid: false, 
                message: `Debes añadir la clave '${addKey}' con valor ${addValue} al diccionario '${varName}'` 
            };
        }
    }
    
    if (pattern.modify_key && pattern.new_value !== undefined) {
        // Validar que se modifica una clave existente
        const modifyKey = pattern.modify_key;
        const newValue = pattern.new_value;
        
        const modifyRegex = new RegExp(`${varName}\\s*\\[\\s*['"]*${modifyKey}['"]*\\s*\\]\\s*=\\s*${newValue}`);
        
        if (!modifyRegex.test(userCode)) {
            return { 
                isValid: false, 
                message: `Debes modificar la clave '${modifyKey}' del diccionario '${varName}' con el valor ${newValue}` 
            };
        }
    }
    
    return { isValid: true };
}

// NUEVA FUNCIÓN: Validar salida de diccionario
function validateDictionaryOutput(rules, userOutput) {
    const expectedKeys = rules.expected_keys || [];
    const expectedValues = rules.expected_values || {};
    const allowPartialMatch = rules.allow_partial_match || false;
    
    try {
        // Intentar extraer el diccionario de la salida
        let dictString = userOutput.trim();
        
        // Si hay múltiples líneas, buscar la línea que contiene el diccionario
        const lines = dictString.split('\n');
        let foundDict = null;
        
        for (const line of lines) {
            const dictMatch = line.match(/\{[^}]+\}/);
            if (dictMatch) {
                foundDict = dictMatch[0];
                break;
            }
        }
        
        if (!foundDict) {
            return {
                isCorrect: false,
                message: `No se encontró un diccionario válido en la salida. Asegúrate de imprimir el diccionario.`
            };
        }
        
        // Convertir formato Python a JSON válido
        let jsonString = foundDict
            .replace(/'/g, '"')  // Comillas simples a dobles
            .replace(/True/g, 'true')  // Boolean Python a JSON
            .replace(/False/g, 'false')  // Boolean Python a JSON
            .replace(/None/g, 'null');  // None Python a JSON
        
        // Parsear el diccionario
        const userDict = JSON.parse(jsonString);
        
        // Verificar que todas las claves esperadas estén presentes
        for (const expectedKey of expectedKeys) {
            if (!(expectedKey in userDict)) {
                return {
                    isCorrect: false,
                    message: `Falta la clave '${expectedKey}' en tu diccionario`
                };
            }
        }
        
        // Verificar que los valores sean correctos
        for (const [key, expectedValue] of Object.entries(expectedValues)) {
            if (userDict[key] !== expectedValue) {
                return {
                    isCorrect: false,
                    message: `La clave '${key}' debe tener el valor ${expectedValue}, pero tu resultado muestra ${userDict[key]}`
                };
            }
        }
        
        // Verificar que no haya claves extra (a menos que se permita coincidencia parcial)
        if (!allowPartialMatch) {
            const userKeys = Object.keys(userDict);
            const extraKeys = userKeys.filter(key => !expectedKeys.includes(key));
            if (extraKeys.length > 0) {
                return {
                    isCorrect: false,
                    message: `Tu diccionario contiene claves no esperadas: ${extraKeys.join(', ')}`
                };
            }
        }
        
        return { isCorrect: true };
        
    } catch (error) {
        return {
            isCorrect: false,
            message: `Error al analizar tu salida. Asegúrate de que imprimes un diccionario válido. Error: ${error.message}`
        };
    }
}



// FUNCIÓN AUXILIAR: Validar múltiples líneas de salida (para otros ejercicios)
function validateMultipleOutputs(rules, userOutput) {
    const expectedOutputs = rules.expected_outputs;
    const caseSensitive = rules.case_sensitive !== false;
    
    // Dividir la salida del usuario en líneas
    const userLines = userOutput.split('\n').filter(line => line.trim() !== '');
    
    // Verificar que tengamos el número correcto de líneas
    if (userLines.length !== expectedOutputs.length) {
        return {
            isCorrect: false,
            message: `Se esperaban ${expectedOutputs.length} líneas de salida, pero obtuviste ${userLines.length}`
        };
    }
    
    // Comparar cada línea
    for (let i = 0; i < expectedOutputs.length; i++) {
        let expected = expectedOutputs[i];
        let userLine = userLines[i];
        
        if (!caseSensitive) {
            expected = expected.toLowerCase();
            userLine = userLine.toLowerCase();
        }
        
        if (userLine !== expected) {
            return {
                isCorrect: false,
                message: `Línea ${i + 1} incorrecta. Se esperaba: "${expectedOutputs[i]}" pero obtuviste: "${userLines[i]}"`
            };
        }
    }
    
    return { isCorrect: true };
}



function validateListMethodCall(pattern, userCode) {
    const varName = pattern.variable;
    const method = pattern.method;
    const argument = pattern.argument;
    
    // Buscar llamada al método en el código
    const methodRegex = new RegExp(`${varName}\\.${method}\\(\\s*['"]*${argument}['"]*\\s*\\)`);
    
    if (!methodRegex.test(userCode)) {
        return { 
            isValid: false, 
            message: `Debes usar ${varName}.${method}('${argument}')` 
        };
    }
    
    return { isValid: true };
}

function validateExpectedOutput(pattern, userOutput) {
    const expectedOutput = pattern.output;
    // Por defecto, sensible a mayúsculas/minúsculas, a menos que se especifique explícitamente false
    const caseSensitive = pattern.case_sensitive !== false;

    // Paso 1: Normalizar ambas salidas dividiéndolas en líneas
    let normalizedExpectedLines = expectedOutput.split('\n');
    let normalizedUserLines = userOutput.split('\n');

    // **NUEVA LÓGICA DE NORMALIZACIÓN:**
    // Eliminar líneas vacías al final de AMBAS salidas
    // Esto es crucial para ignorar el '\n' extra que `print()` puede añadir al final de la salida total.
    while (normalizedExpectedLines.length > 0 && normalizedExpectedLines[normalizedExpectedLines.length - 1].trim() === '') {
        normalizedExpectedLines.pop();
    }
    while (normalizedUserLines.length > 0 && normalizedUserLines[normalizedUserLines.length - 1].trim() === '') {
        normalizedUserLines.pop();
    }

    // Paso 2: Comparar el número de líneas después de la normalización
    if (normalizedExpectedLines.length !== normalizedUserLines.length) {
        return {
            isValid: false,
            message: `Número de líneas incorrecto en la salida. Esperadas: ${normalizedExpectedLines.length}, Obtenidas: ${normalizedUserLines.length}.`
        };
    }

    // Paso 3: Comparar cada línea individualmente
    for (let i = 0; i < normalizedExpectedLines.length; i++) {
        let expectedLine = normalizedExpectedLines[i];
        let userLine = normalizedUserLines[i];

        // Aplicar la sensibilidad a mayúsculas/minúsculas
        if (!caseSensitive) {
            expectedLine = expectedLine.toLowerCase();
            userLine = userLine.toLowerCase();
        }

        // Si deseas ignorar los espacios iniciales/finales de CADA LÍNEA
        // (por ejemplo, si '  Hola' debe coincidir con 'Hola  '), puedes descomentar las siguientes líneas.
        // Sin embargo, para tu ejercicio del Día 17, donde los espacios sí importan
        // ('   Hola Mundo   '), DEBES MANTENERLAS COMENTADAS.
        // expectedLine = expectedLine.trim();
        // userLine = userLine.trim();


        if (expectedLine !== userLine) {
            return {
                isValid: false,
                message: `La línea ${i + 1} de la salida es incorrecta. Se esperaba: "${expectedLine}", pero se obtuvo: "${userLine}".`
            };
        }
    }

    // Si todas las líneas coinciden
    return { isValid: true };
}

// Validadores específicos para cada tipo de patrón
function validateVariableAssignment(pattern, userCode) {
    const varName = pattern.variable;
    const expectedType = pattern.value_type;
    const expectedValue = pattern.value;

    // Regex corregida: Eliminadas las etiquetas HTML y el escape de {
    const assignmentRegex = new RegExp(`${varName}\\s*=\\s*(.+?)\\s*(?:$|;|\\n)`, 'i');
    const match = userCode.match(assignmentRegex);

    if (!match) {
        return {
            isValid: false,
            message: `No se encontró la asignación de la variable '${varName}'. Asegúrate de declararla.`
        };
    }

    // Captura el valor asignado exactamente como está en el código del usuario,
    // incluyendo comillas y espacios internos/externos que el usuario haya escrito.
    const assignedValueRaw = match[1];

    // --- Validar tipo si se especifica en el patrón ---
    if (expectedType) {
        if (expectedType === 'string') {
            // Un string debe empezar y terminar con comillas simples o dobles
            if (!(assignedValueRaw.startsWith('"') && assignedValueRaw.endsWith('"')) &&
                !(assignedValueRaw.startsWith("'") && assignedValueRaw.endsWith("'"))) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una cadena de texto (usar comillas simples o dobles).`
                };
            }
        } else if (expectedType === 'number') {
            // Intenta parsear como número. Si no es un número válido, falla.
            if (isNaN(parseFloat(assignedValueRaw))) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe contener un valor numérico.`
                };
            }
        } else if (expectedType === 'array' || expectedType === 'list') {
            // Para arrays/listas, debe empezar y terminar con corchetes
            if (!(assignedValueRaw.startsWith('[') && assignedValueRaw.endsWith(']'))) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una lista (usar corchetes [ ]).`
                };
            }
        }
    }

    // --- Validar valor específico si se especifica en el patrón ---
    if (expectedValue !== undefined) {
        if (typeof expectedValue === 'string') {
            // **MEJORA CLAVE AQUÍ:** Normaliza la cadena quitando las comillas externas de ambos lados
            // para comparar solo el contenido. Esto permite al usuario usar ' o "
            let normalizedAssignedString = assignedValueRaw.replace(/^['"]|['"]$/g, '');
            let normalizedExpectedString = expectedValue.replace(/^['"]|['"]$/g, '');

            if (normalizedAssignedString !== normalizedExpectedString) {
                // Mensaje de error corregido: Eliminadas las etiquetas HTML
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe tener el valor exacto: '${normalizedExpectedString}'.`
                };
            }
        } else if (Array.isArray(expectedValue)) {
            // Para arrays: intenta parsear la cadena del usuario como un array JSON
            // Primero, reemplaza comillas simples por dobles para JSON.parse
            let userArrayString = assignedValueRaw.replace(/'/g, '"');
            try {
                const parsedUserArray = JSON.parse(userArrayString);

                // Compara los arrays como cadenas JSON para una comparación profunda
                if (JSON.stringify(parsedUserArray) !== JSON.stringify(expectedValue)) {
                    return {
                        isValid: false,
                        message: `La variable '${varName}' debe ser la lista: ${JSON.stringify(expectedValue)}.`
                    };
                }
            } catch (e) {
                // Si el parseo falla, el formato de la lista del usuario es incorrecto
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una lista válida, por ejemplo: ${JSON.stringify(expectedValue)}.`
                };
            }
        } else if (typeof expectedValue === 'number' || typeof expectedValue === 'boolean') {
            // Para números y booleanos, se parsea el valor asignado y se compara
            // Se usa String() para asegurar que la comparación sea del valor y no del tipo exacto de string
            if (String(parseFloat(assignedValueRaw)) !== String(expectedValue)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe tener el valor ${expectedValue}.`
                };
            }
        }
    }

    return { isValid: true };
}


function validateMethodCall(pattern, userCode) {
    const varName = pattern.on_variable;
    const method = pattern.method;

    // Regex para buscar la llamada al método en la variable especificada
    // Busca algo como 'variable.metodo()'
    const methodRegex = new RegExp(`${varName}\\s*\\.\\s*${method}\\s*\\(`);

    if (!methodRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes llamar al método '.${method}()' en la variable '${varName}'.`
        };
    }

    return { isValid: true };
}

function validatePrintWithVariable(pattern, userCode, userOutput) {
    const requiredWords = pattern.contains || [];
    const caseSensitive = pattern.case_sensitive !== false;
    
    const codeToCheck = caseSensitive ? userCode : userCode.toLowerCase();
    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    
    // Verificar que hay un print con variable
    if (!codeToCheck.includes('print(')) {
        return { 
            isValid: false, 
            message: 'Debes usar la función print() para mostrar el resultado' 
        };
    }
    
    // Verificar que contiene las palabras requeridas
    for (const word of requiredWords) {
        const wordToCheck = caseSensitive ? word : word.toLowerCase();
        if (!outputToCheck.includes(wordToCheck) && !codeToCheck.includes(wordToCheck)) {
            return { 
                isValid: false, 
                message: `El resultado debe contener la palabra '${word}'` 
            };
        }
    }
    
    return { isValid: true };
}

function validateArithmeticOperation(pattern, userCode) {
    const operation = pattern.operation;
    const operands = pattern.operands;
    
    let operatorSymbol;
    let operationName;
    
    switch (operation) {
        case 'addition':
            operatorSymbol = '+';
            operationName = 'suma';
            break;
        case 'subtraction':
            operatorSymbol = '-';
            operationName = 'resta';
            break;
        case 'multiplication':
            operatorSymbol = '*';
            operationName = 'multiplicación';
            break;
        case 'division':
            operatorSymbol = '/';
            operationName = 'división';
            break;
        default:
            return { isValid: true };
    }
    
    // Buscar la operación en el código
    const operationRegex = new RegExp(`${operands.join('\\s*\\' + operatorSymbol + '\\s*')}|\\w+\\s*=\\s*${operands[0]}\\s*\\${operatorSymbol}\\s*${operands[1]}`);
    
    if (!operationRegex.test(userCode)) {
        return { 
            isValid: false, 
            message: `Debes realizar la ${operationName} de ${operands.join(' y ')}` 
        };
    }
    
    return { isValid: true };
}

function validateIfCondition(pattern, userCode, userOutput) {
    const condition = pattern.condition;
    const expectedOutput = pattern.expected_output;
    const caseSensitive = pattern.case_sensitive !== false;
    
    // Verificar estructura if
    if (!userCode.includes('if ') || !userCode.includes(':')) {
        return { 
            isValid: false, 
            message: 'Debes usar una estructura if con la sintaxis correcta (if condición:)' 
        };
    }
    
    // Verificar condición específica
    if (!userCode.includes(condition)) {
        return { 
            isValid: false, 
            message: `La condición debe ser: ${condition}` 
        };
    }
    
    // Verificar salida esperada
    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    const expectedToCheck = caseSensitive ? expectedOutput : expectedOutput.toLowerCase();
    
    if (outputToCheck.includes(expectedToCheck)) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: `Con los valores dados, la salida debe ser: "${expectedOutput}"` 
        };
    }
}

function validateGradeClassification(pattern, userCode, userOutput) {
    const ranges = pattern.ranges;
    
    // Verificar estructura básica
    if (!userCode.includes('if ') || !userCode.includes('elif ')) {
        return { 
            isValid: false, 
            message: 'Debes usar una estructura if-elif-else para clasificar las notas' 
        };
    }
    
    // Para este validador, asumimos que el código es correcto si tiene la estructura
    // y la salida corresponde a uno de los rangos esperados
    const caseSensitive = pattern.case_sensitive !== false;
    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    
    const validGrades = ranges.map(r => caseSensitive ? r.grade : r.grade.toLowerCase());
    const hasValidGrade = validGrades.some(grade => outputToCheck.includes(grade));
    
    if (hasValidGrade) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: 'La salida debe mostrar una calificación válida según los rangos especificados' 
        };
    }
}

function validateFlexibleRequirements(rules, userCode, userOutput) {
    const requirements = rules.requirements;
    const errors = [];
    
    for (const req of requirements) {
        const result = validateFlexibleRequirement(req, userCode, userOutput);
        if (!result.isValid) {
            errors.push(result.message);
        }
    }
    
    if (errors.length === 0) {
        return { isCorrect: true };
    } else {
        return { 
            isCorrect: false, 
            message: `Problemas encontrados:\n• ${errors.join('\n• ')}` 
        };
    }
}

function validateFlexibleRequirement(requirement, userCode, userOutput) {
    switch (requirement.type) {
        case 'function_definition':
            return validateFunctionDefinition(requirement, userCode);
            
        case 'string_processing':
            return validateStringProcessing(requirement, userCode);
            
        case 'dictionary_creation':
            return validateDictionaryCreation(requirement, userCode);
            
        case 'word_counting':
            return validateWordCounting(requirement, userOutput);
            
        default:
            return { isValid: true, message: requirement.description };
    }
}

function validateFunctionDefinition(requirement, userCode) {
    const funcName = requirement.name;
    const paramCount = requirement.parameters;
    
    const funcRegex = new RegExp(`def\\s+${funcName}\\s*\\([^)]*\\)\\s*:`);
    
    if (!funcRegex.test(userCode)) {
        return { 
            isValid: false, 
            message: `Debes definir una función llamada '${funcName}'` 
        };
    }
    
    return { isValid: true };
}

function validateStringProcessing(requirement, userCode) {
    if (userCode.includes('.split(') || userCode.includes('split(')) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: 'Debes procesar la cadena dividiéndola en palabras (usar split())' 
        };
    }
}

function validateDictionaryCreation(requirement, userCode) {
    if (userCode.includes('{}') || userCode.includes('dict(')) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: 'Debes crear un diccionario para almacenar los datos' 
        };
    }
}

function validateWordCounting(requirement, userOutput) {
    const expectedCounts = requirement.expected_counts;
    
    // Esta es una validación simplificada - en una implementación real
    // podrías ejecutar el código del usuario y verificar el resultado
    try {
        // Intenta parsear la salida como un diccionario de Python
        const outputStr = userOutput.replace(/'/g, '"');
        const result = JSON.parse(outputStr);
        
        for (const [word, expectedCount] of Object.entries(expectedCounts)) {
            if (result[word] !== expectedCount) {
                return { 
                    isValid: false, 
                    message: `La palabra '${word}' debe aparecer ${expectedCount} veces` 
                };
            }
        }
        
        return { isValid: true };
    } catch (e) {
        return { 
            isValid: false, 
            message: 'La salida debe ser un diccionario válido con el conteo de palabras' 
        };
    }
}

function validateLegacyFormat(exercise, userOutput) {
    // Fallback para ejercicios que aún usen el formato anterior
    if (exercise.expectedOutput) {
        const expected = exercise.expectedOutput.trim();
        if (userOutput === expected) {
            return { isCorrect: true };
        } else {
            return { 
                isCorrect: false, 
                message: `Se esperaba: "${expected}" pero obtuviste: "${userOutput}"` 
            };
        }
    }
    
    // Si no hay expectedOutput, asumir que es correcto
    return { isCorrect: true };
}

// Función auxiliar para obtener el código del usuario
function getUserCode() {
    // Esta función debe ser implementada según tu editor de código
    // Por ejemplo, si usas CodeMirror o un textarea:
    return document.getElementById('code-editor').value || '';
}

// Validadores adicionales para casos específicos
function validateStringConcatenation(pattern, userCode) {
    const variables = pattern.variables;
    
    // Buscar concatenación con +
    const hasPlus = userCode.includes('+');
    const hasVariables = variables.every(varName => userCode.includes(varName));
    
    if (hasPlus && hasVariables) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: `Debes concatenar las variables ${variables.join(' y ')} usando el operador +` 
        };
    }
}

function validateIfElseStructure(pattern, userCode) {
    const condition = pattern.condition;
    
    if (!userCode.includes('if ') || !userCode.includes('else:')) {
        return { 
            isValid: false, 
            message: 'Debes usar una estructura if-else completa' 
        };
    }
    
    if (!userCode.includes(condition)) {
        return { 
            isValid: false, 
            message: `La condición debe ser: ${condition}` 
        };
    }
    
    return { isValid: true };
}

function validateIfElifElseStructure(pattern, userCode) {
    const conditions = pattern.conditions;
    
    if (!userCode.includes('if ') || !userCode.includes('elif ') || !userCode.includes('else:')) {
        return { 
            isValid: false, 
            message: 'Debes usar una estructura if-elif-else completa' 
        };
    }
    
    return { isValid: true };
}

// validacion de forloop
function validateForLoop(pattern, userCode) {
    const iteratesOver = pattern.iterates_over || '';
    const loopType = pattern.loop_type || 'generic';
    const unpackedVars = pattern.unpacked_vars || 1;

    // Escapar caracteres especiales para expresiones regulares
    const escapedIteratesOver = iteratesOver.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    let loopRegex;
    let message;

    // Construir la expresión regular y el mensaje de validación
    if (loopType === 'keys') {
        loopRegex = new RegExp(
            `for\\s+\\w+\\s+in\\s+${escapedIteratesOver}(?:\\.keys\\(\\))?\\s*:`,
            's'
        );
        message = `Debes usar un bucle for para iterar sobre las claves del diccionario '${iteratesOver}' (por ejemplo: 'for clave in ${iteratesOver}:' o 'for clave in ${iteratesOver}.keys():').`;

    } else if (loopType === 'values') {
        // ✅ Solo aceptar .values(), no .values().values()
        loopRegex = new RegExp(
            `for\\s+\\w+\\s+in\\s+${escapedIteratesOver}\\.values\\(\\)\\s*:`,
            's'
        );
        message = `Debes usar un bucle for para iterar sobre los valores del diccionario con '${iteratesOver}.values()'.`;

    } else if (loopType === 'items') {
        // ✅ Solo aceptar .items(), no .items().items()
        loopRegex = new RegExp(
            `for\\s+\\w+\\s*,\\s*\\w+\\s+in\\s+${escapedIteratesOver}\\.items\\(\\)\\s*:`,
            's'
        );
        message = `Debes usar un bucle for para iterar sobre los pares clave-valor del diccionario con '${iteratesOver}.items()' y dos variables (ejemplo: 'for clave, valor in ${iteratesOver}.items():').`;

    } else {
        // Bucle genérico
        loopRegex = new RegExp(
            `for\\s+\\w+\\s+in\\s+${escapedIteratesOver}\\s*:`,
            's'
        );
        message = `Debes usar un bucle for para iterar sobre '${iteratesOver}'.`;
    }

    // Validar si el patrón se encuentra en el código del usuario
    if (!loopRegex.test(userCode)) {
        return { isValid: false, message };
    }

    // Validar el número de variables desempaquetadas si se espera más de una
    if (unpackedVars > 1) {
        const match = userCode.match(loopRegex);
        if (match) {
            const loopLine = match[0];
            const variables = loopLine.match(/for\s+((?:\w+\s*,?\s*)+)\s+in/)?.[1];
            if (variables) {
                const varCount = variables
                    .split(',')
                    .map(v => v.trim())
                    .filter(v => v).length;

                if (varCount !== unpackedVars) {
                    return {
                        isValid: false,
                        message: `El bucle for con '${iteratesOver}' debe desempaquetar exactamente ${unpackedVars} variable(s) (ejemplo: 'for ${'var,'.repeat(unpackedVars - 1)}var in ${iteratesOver}.items():').`
                    };
                }
            }
        }
    }

    return { isValid: true };
}



function validateLogicalCondition(pattern, userCode, userOutput) {
    const condition = pattern.condition;
    const trueOutput = pattern.true_output;
    const falseOutput = pattern.false_output;
    const caseSensitive = pattern.case_sensitive !== false;
    
    if (!userCode.includes('and') && !userCode.includes('or') && !userCode.includes('not')) {
        return { 
            isValid: false, 
            message: 'Debes usar operadores lógicos (and, or, not)' 
        };
    }
    
    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    const trueToCheck = caseSensitive ? trueOutput : trueOutput.toLowerCase();
    const falseToCheck = caseSensitive ? falseOutput : falseOutput.toLowerCase();
    
    if (outputToCheck.includes(trueToCheck) || outputToCheck.includes(falseToCheck)) {
        return { isValid: true };
    } else {
        return { 
            isValid: false, 
            message: `La salida debe ser "${trueOutput}" o "${falseOutput}" según la condición` 
        };
    }
}

function validateListCreation(pattern, userCode) {
    const varName = pattern.variable;
    const expectedElements = pattern.elements;
    const exactOrder = pattern.exact_order;
    
    const listRegex = new RegExp(`${varName}\\s*=\\s*\\[([^\\]]+)\\]`);
    const match = userCode.match(listRegex);
    
    if (!match) {
        return { 
            isValid: false, 
            message: `Debes crear una lista llamada '${varName}'` 
        };
    }
    
    const elementsStr = match[1];
    if (exactOrder) {
        // Verificar que los elementos estén en el orden correcto
        for (const element of expectedElements) {
            if (!elementsStr.includes(`"${element}"`) && !elementsStr.includes(`'${element}'`)) {
                return { 
                    isValid: false, 
                    message: `La lista debe contener el elemento '${element}'` 
                };
            }
        }
    }
    
    return { isValid: true };
}

// Función para validar que la salida contenga ciertos elementos
function validateOutputContains(pattern, userOutput) {
    const contains = Array.isArray(pattern.contains) ? pattern.contains : [];
    const caseSensitive = pattern.case_sensitive !== false;

    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    for (const word of contains) {
        const wordToCheck = caseSensitive ? word : word.toLowerCase();
        if (!outputToCheck.includes(wordToCheck)) {
            return {
                isValid: false,
                message: `La salida debe contener: "${word}".`
            };
        }
    }

    return { isValid: true };
}

function validateListAccess(pattern, userCode) {
    const varName = pattern.variable;
    const index = pattern.index;
    
    const accessRegex = new RegExp(`${varName}\\[${index}\\]`);
    
    if (!accessRegex.test(userCode)) {
        return { 
            isValid: false, 
            message: `Debes acceder al elemento en el índice ${index} de la lista '${varName}'` 
        };
    }
    
    return { isValid: true };
}


// Ir al siguiente ejercicio
function nextExercise() {
    if (!isExerciseCompleted) {
        showAlert('Primero debes completar el ejercicio actual.', 'warning');
        return;
    }
    
    if (currentDay < exercises.length) {
        currentDay++;
        loadExercise(currentDay);
        showAlert(`¡Avanzaste al día ${currentDay}!`, 'info');
        saveCurrentUser(); // Guardar progreso
    } else {
        // ¡Curso completado! Mostrar mensaje y redirigir a la celebración
        showAlert('¡Felicidades! Has completado todos los ejercicios del curso.', 'success');
        
        // Desbloquear logro final
        unlockAchievement(27);
        saveCurrentUser(); // Guardar progreso final
        
        // Esperar un momento para que el usuario vea el mensaje
        setTimeout(() => {
            // Redirigir a la página de celebración
            window.location.href = 'celebration.html';
        }, 2000); // Esperar 2 segundos antes de redirigir
    }
}

// **CAMBIO:** Funciones de autenticación con Supabase
async function signUpWithEmail(email, password, username) {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                username: username
            }
        }
    });

    if (error) {
        showAlert(`Error al registrarse: ${error.message}`, 'error');
        return null;
    } else if (data.user) {
        currentUser = data.user;
        currentDay = 1; // Nuevo usuario, empieza en el día 1
        unlockedAchievements = [];
        await saveCurrentUser(); // Guarda los datos iniciales del nuevo usuario en la tabla 'users'
        showAlert('¡Registro exitoso! Te hemos enviado un email de confirmación. Por favor, revísalo.', 'success');
        return data.user;
    }
    return null;
}

async function signInWithEmail(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        showAlert(`Error al iniciar sesión: ${error.message}`, 'error');
        return null;
    }

    if (data.user) {
        currentUser = data.user;
        await loadUserData(currentUser.id);

        // Obtener sesión actual
        const { data: { session } } = await supabaseClient.auth.getSession();

        // Registrar sesión y limpiar anteriores
        try {
            const response = await fetch(`${window.SUPABASE_CONFIG.functionsBase}/session-control`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session.access_token}`
                },
                body: JSON.stringify({
                    user_id: currentUser.id,
                    session_id: session.refresh_token
                })
            });

            const result = await response.json();
            if (!result.success) {
                console.error('Error en control de sesión:', result.error);
            }
        } catch (err) {
            console.error('Error llamando a session-control:', err);
        }

        // Configurar Realtime para esta sesión
        setupSessionRealtime(session.refresh_token);

        // Comportamiento según tipo de usuario
        if (currentUser.is_admin) { // Verificar si el usuario es administrador
            sessionStorage.setItem('user', JSON.stringify(currentUser));
            showAlert(`¡Bienvenido, Administrador ${currentUser.user_metadata?.username || currentUser.email}! Redirigiendo al panel de administración.`, 'success');
            window.location.href = 'admin.html'; // Redirigir a la página de administración
            return data.user; // Retornar para finalizar la función aquí
        } else {
            sessionStorage.setItem('user', JSON.stringify(currentUser));
            showAlert(`¡Bienvenido ${currentUser.email}!`, 'success');
            return data.user;
        }
    }
    return null;
}

// Configurar Realtime para la sesión actual
function setupSessionRealtime(refreshToken) {
    const channelName = `session_${btoa(refreshToken).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')}`;
    const channel = supabaseClient.channel(channelName);

    channel.on('broadcast', { event: 'force_logout' }, (payload) => {
        showAlert('Se inició sesión en otro dispositivo. Serás redirigido.', 'error');
        setTimeout(() => {
            sessionStorage.clear();
            localStorage.clear();
            signOutUser();
            window.location.reload();
        }, 3000);
    }).subscribe();
}

//  Mejorar la función signOutUser para limpiar canales
let currentChannel = null; // Variable global para trackear el canal actual

async function signOutUser() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.error('Error al cerrar sesión:', error);
        showAlert('Error al cerrar sesión. Intenta de nuevo.', 'error');
    } else {
        // IMPORTANTE: Limpiar el canal de Realtime ANTES de limpiar datos
        if (currentChannel) {
            await currentChannel.unsubscribe();
            currentChannel = null;
        }

        // Limpiar campos de login
        emailInput.value = '';
        passwordInput.value = '';

        // Limpiar datos de sesión
        sessionStorage.removeItem('user');
        sessionStorage.clear();
        localStorage.clear();

        // Pequeña pausa para asegurar que el canal se desconecte completamente
        await new Promise(resolve => setTimeout(resolve, 500));

        // Mostrar estado
        showLoginPage();
        showAlert('Sesión cerrada. ¡Vuelve pronto!', 'info');
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Iniciar la carga de Pyodide
    initializePyodide();

    // boton de Login con email y contraseña
    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email && password) {
                const user = await signInWithEmail(email, password);
                if (user && !currentUser.is_admin) {
                    showGamePage();
                    loadExercise(currentDay);
                }
            } else {
                showAlert('Por favor ingresa tu email y contraseña.', 'warning');
            }
        });
    }

    // **CAMBIO:** Registro de usuario con email y contraseña
    if (signupBtn) {
        signupBtn.addEventListener('click', async () => {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            // Puedes agregar un campo para el nombre de usuario si lo deseas en el formulario de registro
            const username = email.split('@')[0]; // Ejemplo: usar la parte del email como nombre de usuario por defecto

            if (email && password) {
                const user = await signUpWithEmail(email, password, username);
                if (user) {
                    // Después del registro, Supabase envía un correo de confirmación.
                    // El usuario debe confirmar su correo antes de poder iniciar sesión.
                    // Aquí podrías redirigir a una página de "Revisa tu correo" o similar.
                    // Por ahora, solo se muestra el mensaje de alerta.
                    showLoginPage(); // Vuelve a la página de login para que el usuario inicie sesión después de confirmar
                }
            } else {
                showAlert('Por favor ingresa un email y contraseña válidos.', 'warning');
            }
        });
    }

    // Permitir login con Enter
    if (passwordInput) { // Ahora el evento es en el campo de contraseña
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });

    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', signOutUser);
    }

    // Ejecutar código
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', () => {
            const code = codeEditor.value;
            // Ensure the placeholder is not sent as code
            if (code.trim() && code.trim() !== PLACEHOLDER_CODE.trim()) {
                runPythonCode(code);
            } else {
                showAlert('Escribe algo de código primero.', 'warning');
            }
        });
    }

    // Verificar respuesta
    if (verifyBtn) {
        verifyBtn.addEventListener('click', verifyAnswer);
    }

    // Siguiente ejercicio
    if (nextExerciseBtn) {
        nextExerciseBtn.addEventListener('click', nextExercise);
    }


    // Mostrar pista
    if (hintBtn) {
        hintBtn.addEventListener('click', () => {
            const exercise = exercises.find(e => e.day === currentDay);
            if (exercise) {
                showAlert(`💡 Pista: ${exercise.hint}`, 'info');
            }
        });
    }

    // Limpiar consola
    if (clearConsoleBtn) {
        clearConsoleBtn.addEventListener('click', () => {
            consoleOutput.textContent = '';
            currentOutput = '';
            consoleStatus.textContent = "▶ Lista para ejecutar";
            consoleStatus.style.color = "var(--neon-green)";
            updateButtonStates();
        });
    }

    // Placeholder behavior for code editor
    if (codeEditor) {
        // When user focuses on the editor
        codeEditor.addEventListener('focus', () => {
            if (codeEditor.value.trim() === PLACEHOLDER_CODE.trim()) {
                codeEditor.value = '';
                codeEditor.classList.remove('placeholder-active');
            }
        });

        // When user blurs (clicks away) from the editor
        codeEditor.addEventListener('blur', () => {
            if (codeEditor.value.trim() === '') {
                codeEditor.value = PLACEHOLDER_CODE;
                codeEditor.classList.add('placeholder-active');
            }
        });

        // Allow running code with Ctrl+Enter
        codeEditor.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                runCodeBtn.click();
            }
        });
    }


    // Eventos para cambiar pestañas
    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('tab-btn')) {
            const tabName = e.target.dataset.tab;
            const tabContent = document.querySelector('.tab-content');

            // Remover clase active de todos los botones y paneles
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => {
                el.classList.remove('active');
            });

            // Activar el botón clicado
            e.target.classList.add('active');

            // Activar el panel correspondiente
            document.getElementById(`${tabName}-content`).classList.add('active');
        }
    });
});