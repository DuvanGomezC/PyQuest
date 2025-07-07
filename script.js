const exercises = [
    {
        day: 1,
        title: "¡Bienvenido a PyQuest! Tu Primer 'Hola Mundo'",
        description: "Tu primer desafío en Python: Imprime el mensaje 'Hola, mundo!' en la consola utilizando la función `print()`. Este es el tradicional primer programa que todo programador debe escribir.",
        theory: `
            <p>La función <code>print()</code> es la herramienta fundamental para mostrar información en Python. Es tu ventana para comunicarte con el usuario y mostrar resultados.</p>
            <p>📌 <strong>Sintaxis básica:</strong> <code>print(valor_a_mostrar)</code></p>
            <p>📌 <strong>Cadenas de texto (strings):</strong> Todo texto literal debe ir encerrado entre comillas simples <code>'texto'</code> o dobles <code>"texto"</code>.</p>
            <p>📌 <strong>¿Por qué son importantes las comillas?</strong> Le dicen a Python que el contenido es texto literal, no una variable o comando.</p>
            <p>📌 <strong>Ejemplo práctico:</strong> <code>print("¡Hola!")</code> mostrará exactamente: ¡Hola!</p>
        `,
        example: `# Los comentarios empiezan con # y no se ejecutan
# Sirven para documentar tu código

# Imprime un mensaje simple
print("Bienvenido a Python")

# Puedes imprimir múltiples valores separándolos con comas
print("Nombre:", "Juan", "Edad:", 25)

# Resultado: Nombre: Juan Edad: 25`,
        hint: "Usa la función `print()` y no olvides las comillas para el texto.",
        solution: "print(\"Hola, mundo!\")",
        validationRules: {
            type: "exact_output",
            expected: "Hola, mundo!",
            case_sensitive: false
        },
        isBoss: false
    },
    {
        day: 2,
        title: "Variables: Guardando Información",
        description: "Aprende a almacenar datos creando una variable llamada `nombre` y asígnale tu nombre. Después, imprime un saludo personalizado usando esa variable. Formato esperado: 'Hola, [TuNombre]!'",
        theory: `
            <p>Las <strong>variables</strong> son contenedores que almacenan datos en la memoria de tu programa. Piensa en ellas como cajas etiquetadas donde guardas información para usar después.</p>
            <p>📌 <strong>Asignación:</strong> Usa el operador <code>=</code> para asignar un valor a una variable.</p>
            <p>📌 <strong>Reglas para nombres de variables:</strong></p>
            <ul>
                <li>Solo letras, números y guiones bajos (<code>_</code>)</li>
                <li>Deben comenzar con letra o guion bajo (no con número)</li>
                <li>Son sensibles a mayúsculas: <code>nombre</code> ≠ <code>Nombre</code></li>
                <li>No uses palabras reservadas de Python (como <code>print</code>, <code>if</code>, etc.)</li>
            </ul>
            <p>📌 <strong>Buenas prácticas:</strong> Usa nombres descriptivos como <code>edad_usuario</code> en lugar de <code>x</code>.</p>
        `,
        example: `# Creando y usando variables
mi_nombre = "Ana"
mi_edad = 30

# Combinando texto y variables en print()
print("Mi nombre es", mi_nombre, "y tengo", mi_edad, "años.")

# Resultado: Mi nombre es Ana y tengo 30 años.`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 3,
        title: "Tipos de Datos: Números y Texto",
        description: "Explora los diferentes tipos de datos creando dos variables numéricas: `numero1` con valor 10 y `numero2` con valor 5. Realiza operaciones básicas (suma y resta) e imprime ambos resultados con etiquetas descriptivas.",
        theory: `
            <p>Python maneja automáticamente diferentes tipos de datos. Los tipos básicos más importantes son:</p>
            <p>📌 <strong>Tipos numéricos:</strong></p>
            <ul>
                <li><strong>Enteros (int):</strong> Números sin decimales → <code>5</code>, <code>-100</code>, <code>0</code></li>
                <li><strong>Flotantes (float):</strong> Números con decimales → <code>3.14</code>, <code>0.5</code>, <code>-2.7</code></li>
            </ul>
            <p>📌 <strong>Tipo texto:</strong></p>
            <ul>
                <li><strong>Cadenas (str):</strong> Texto entre comillas → <code>"Python"</code>, <code>'Hola mundo'</code></li>
            </ul>
            <p>📌 <strong>Operadores aritméticos básicos:</strong></p>
            <ul>
                <li><code>+</code> suma</li>
                <li><code>-</code> resta</li>
                <li><code>*</code> multiplicación</li>
                <li><code>/</code> división</li>
            </ul>
        `,
        example: `# Trabajando con números
num1 = 20
num2 = 7

# Realizando operaciones
suma = num1 + num2
producto = num1 * num2

# Mostrando resultados con etiquetas
print("Suma:", suma)          # Suma: 27
print("Producto:", producto)  # Producto: 140`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 4,
        title: "Concatenación de Cadenas",
        description: "Domina la unión de textos creando las variables `nombre` y `apellido`. Combínalas para formar tu nombre completo y muéstralo junto con el mensaje 'Mi nombre completo es:'.",
        theory: `
            <p>La <strong>concatenación</strong> es el proceso de unir dos o más cadenas de texto para crear una cadena más larga. Es como pegar palabras para formar oraciones.</p>
            <p>📌 <strong>Operador de concatenación:</strong> Usa <code>+</code> para unir strings.</p>
            <p>📌 <strong>Regla importante:</strong> Solo puedes concatenar strings con strings. Si tienes un número, primero conviértelo con <code>str(numero)</code>.</p>
            <p>📌 <strong>Espacios en blanco:</strong> No se añaden automáticamente, debes incluirlos manualmente.</p>
            <p>📌 <strong>Ejemplo práctico:</strong></p>
            <pre><code>saludo = "Hola"
nombre = "mundo"
mensaje = saludo + " " + nombre + "!"
# Resultado: "Hola mundo!"</code></pre>
        `,
        example: `# Concatenación básica
saludo = "Hola"
persona = "Mundo"

# Uniendo strings con espacios y signos
mensaje_completo = saludo + " " + persona + "!"
print(mensaje_completo)  # Hola Mundo!

# También puedes concatenar directamente en print()
print("Buenos " + "días " + "amigo")  # Buenos días amigo`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 5,
        title: "BOSS 1: Calculadora Simple de Área",
        description: "¡Tu primer desafío de jefe! Crea un programa que calcule el área y perímetro de un rectángulo. Define las variables `base` y `altura` con valores numéricos (ejemplo: 7 y 4). Calcula el área (base × altura) y el perímetro (2 × (base + altura)). Imprime ambos resultados de forma clara y profesional.",
        theory: `
            <p>¡Momento de demostrar todo lo aprendido! Este desafío combina múltiples conceptos:</p>
            <p>📌 <strong>Variables numéricas:</strong> Para almacenar las dimensiones</p>
            <p>📌 <strong>Operaciones aritméticas:</strong> Multiplicación y suma</p>
            <p>📌 <strong>Fórmulas geométricas:</strong></p>
            <ul>
                <li>Área del rectángulo = base × altura</li>
                <li>Perímetro del rectángulo = 2 × (base + altura)</li>
            </ul>
            <p>📌 <strong>Salida clara:</strong> Los resultados deben ser fáciles de entender</p>
            <p><strong>Consejo:</strong> Organiza tu código paso a paso: definir variables, calcular, mostrar resultados.</p>
        `,
        example: `# Ejemplo con un cuadrado y un rectángulo
lado1 = 5
lado2 = 8

# Cálculos
area_cuadrado = lado1 * lado1
perimetro_rectangulo = 2 * (lado1 + lado2)

# Resultados con etiquetas descriptivas
print("Área de un cuadrado con lado 5:", area_cuadrado)
print("Perímetro de un rectángulo 5x8:", perimetro_rectangulo)`,
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
            ]
        },
        isBoss: true
    },
    {
        day: 6,
        title: "Condicionales: La Sentencia `if`",
        description: "Introduce la lógica condicional en tus programas. Crea una variable `edad` con valor 18 y escribe un programa que imprima 'Eres mayor de edad.' ÚNICAMENTE si la edad es mayor o igual a 18.",
        theory: `
            <p>Las <strong>condicionales</strong> permiten que tu programa tome decisiones basadas en condiciones específicas. Son fundamentales para crear programas inteligentes.</p>
            <p>📌 <strong>Sintaxis de if:</strong></p>
            <pre><code>if condicion:
    # Código que se ejecuta si la condición es verdadera
    # ¡La indentación es OBLIGATORIA!</code></pre>
            <p>📌 <strong>Operadores de comparación:</strong></p>
            <ul>
                <li><code>==</code> igual a (¡no confundir con = que es asignación!)</li>
                <li><code>!=</code> diferente de</li>
                <li><code>&lt;</code> menor que</li>
                <li><code>&gt;</code> mayor que</li>
                <li><code>&lt;=</code> menor o igual que</li>
                <li><code>&gt;=</code> mayor o igual que</li>
            </ul>
            <p>📌 <strong>Indentación:</strong> Python usa espacios (4 espacios o 1 tab) para determinar qué código pertenece al bloque if.</p>
        `,
        example: `# Ejemplo de condicional simple
puntos = 100

if puntos > 90:
    print("¡Felicidades, lograste una puntuación alta!")
    print("Mereces un premio")  # También está dentro del if

# Este print siempre se ejecuta (no está indentado)
print("Fin del programa")`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 7,
        title: "Condicionales: `if` y `else`",
        description: "Expande tu lógica condicional con alternativas. Crea una variable `temperatura` con valor 25. Si la temperatura es mayor a 30, imprime 'Hace mucho calor.'. Si no es así, imprime 'La temperatura es agradable.'.",
        theory: `
            <p>La cláusula <code>else</code> maneja todos los casos que no cumplen la condición del <code>if</code>. Garantiza que siempre se ejecute una de las dos opciones.</p>
            <p>📌 <strong>Sintaxis if-else:</strong></p>
            <pre><code>if condicion:
    # Código si la condición es verdadera
else:
    # Código si la condición es falsa</code></pre>
            <p>📌 <strong>Características importantes:</strong></p>
            <ul>
                <li>Solo uno de los dos bloques se ejecuta, nunca ambos</li>
                <li>El <code>else</code> no necesita condición (maneja todos los casos restantes)</li>
                <li>Solo puede haber un <code>else</code> por cada <code>if</code></li>
                <li>Ambos bloques deben estar correctamente indentados</li>
            </ul>
            <p>📌 <strong>Flujo de ejecución:</strong> Python evalúa la condición → si es verdadera ejecuta el primer bloque, si es falsa ejecuta el bloque else.</p>
        `,
        example: `# Ejemplo de if-else
tiene_dinero = True

if tiene_dinero:
    print("Puedes comprar el producto.")
    print("Disfruta tu compra")
else:
    print("No tienes suficiente dinero.")
    print("Ahorra un poco más")

print("Gracias por visitarnos")  # Siempre se ejecuta`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 8,
        title: "Condicionales: `if`, `elif`, `else`",
        description: "Maneja múltiples condiciones con `elif`. Asigna un valor numérico a `puntuacion`. Implementa esta lógica: si es 100 → '¡Perfecto!', si está entre 70-99 → 'Buen trabajo.', en cualquier otro caso → 'Necesitas practicar más.'",
        theory: `
            <p><code>elif</code> (contracción de "else if") permite evaluar múltiples condiciones de forma ordenada y eficiente.</p>
            <p>📌 <strong>Sintaxis completa:</strong></p>
            <pre><code>if condicion1:
    # Código si condicion1 es verdadera
elif condicion2:
    # Código si condicion1 es falsa Y condicion2 es verdadera
elif condicion3:
    # Código si condicion1 y condicion2 son falsas Y condicion3 es verdadera
else:
    # Código si todas las condiciones anteriores son falsas</code></pre>
            <p>📌 <strong>Evaluación secuencial:</strong></p>
            <ul>
                <li>Python evalúa las condiciones de arriba hacia abajo</li>
                <li>Se ejecuta el primer bloque cuya condición sea verdadera</li>
                <li>Una vez que se ejecuta un bloque, se salta el resto</li>
                <li>El <code>else</code> es opcional y se ejecuta si ninguna condición fue verdadera</li>
            </ul>
            <p>📌 <strong>Ventaja:</strong> Más eficiente que múltiples <code>if</code> independientes.</p>
        `,
        example: `# Sistema de clasificación por día de la semana
dia = "Martes"

if dia == "Lunes":
    print("Inicio de semana, ¡a trabajar!")
elif dia == "Miércoles":
    print("Mitad de semana, sigue adelante")
elif dia == "Viernes":
    print("¡Fin de semana cerca!")
else:
    print("Día normal de la semana")`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 9,
        title: "Operadores Lógicos: `and`, `or`, `not`",
        description: "Combina múltiples condiciones usando operadores lógicos. Con `es_soleado = True` y `temperatura = 28`, imprime 'Día perfecto para salir.' si es soleado Y la temperatura es mayor a 20. De lo contrario, imprime 'Quizás otro día.'",
        theory: `
            <p>Los <strong>operadores lógicos</strong> permiten combinar múltiples condiciones en una sola expresión, creando lógica más compleja y realista.</p>
            <p>📌 <strong>Operador AND:</strong></p>
            <ul>
                <li><code>condicion1 and condicion2</code> → verdadero solo si AMBAS condiciones son verdaderas</li>
                <li>Ejemplo: <code>edad >= 18 and tiene_licencia == True</code></li>
            </ul>
            <p>📌 <strong>Operador OR:</strong></p>
            <ul>
                <li><code>condicion1 or condicion2</code> → verdadero si AL MENOS UNA condición es verdadera</li>
                <li>Ejemplo: <code>es_fin_de_semana or es_feriado</code></li>
            </ul>
            <p>📌 <strong>Operador NOT:</strong></p>
            <ul>
                <li><code>not condicion</code> → invierte el valor (verdadero se vuelve falso y viceversa)</li>
                <li>Ejemplo: <code>not llueve</code> (verdadero si NO llueve)</li>
            </ul>
            <p>📌 <strong>Precedencia:</strong> <code>not</code> se evalúa primero, luego <code>and</code>, después <code>or</code>. Usa paréntesis para mayor claridad.</p>
        `,
        example: `# Ejemplo de sistema de acceso
edad = 20
tiene_identificacion = True
es_miembro = False

# Usando AND
if edad >= 18 and tiene_identificacion:
    print("Acceso permitido al club")

# Usando OR
if es_miembro or edad >= 21:
    print("Puede acceder al área VIP")

# Usando NOT
if not es_miembro:
    print("Considera hacerte miembro para más beneficios")`,
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
                    value: 28
                },
                {
                    type: "logical_condition",
                    condition: "es_soleado and temperatura > 20",
                    true_output: "Día perfecto para salir.",
                    false_output: "Quizás otro día.",
                    case_sensitive: "False"
                }
            ]
        },
        isBoss: false
    },
    {
        day: 10,
        title: "BOSS 2: Clasificador de Notas",
        description: "¡Segundo desafío de jefe! Crea un sistema de calificación académica. Define una variable `nota` con un valor entre 0 y 100, luego implementa un clasificador con estos rangos:\n• 90-100: 'A (Excelente)'\n• 80-89: 'B (Notable)'\n• 70-79: 'C (Aprobado)'\n• Menos de 70: 'F (Reprobado)'",
        theory: `
            <p>Este desafío pone a prueba tu dominio de las estructuras condicionales complejas. Debes crear un sistema de clasificación que evalúe rangos de números de forma precisa y eficiente.</p>
            <p>📌 <strong>Estrategia de rangos:</strong></p>
            <ul>
                <li>Comienza siempre por el rango más alto (90-100)</li>
                <li>Continúa en orden descendente</li>
                <li>Cada <code>elif</code> solo se evalúa si los anteriores fueron falsos</li>
                <li>El <code>else</code> captura todos los casos restantes</li>
            </ul>
            <p>📌 <strong>¿Por qué este orden?</strong> Si una nota es 95, la primera condición <code>nota >= 90</code> será verdadera y se ejecutará inmediatamente, sin evaluar las demás.</p>
            <p>📌 <strong>Consejo profesional:</strong> Siempre prueba tu código con valores límite (70, 80, 90) para asegurar que funciona correctamente.</p>
        `,
        example: `# Ejemplo de clasificador simple
calificacion = 75

if calificacion >= 90:
    print("Sobresaliente")
elif calificacion >= 70:
    print("Bueno")
else:
    print("Insuficiente")

# Con calificacion = 75, se imprime "Bueno"`,
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
            ]
        },
        isBoss: true
    },
    {
        day: 11,
        title: "Listas: Colecciones Ordenadas",
        description: "Crea una lista llamada `frutas` con los elementos 'manzana', 'banana' y 'cereza'. Imprime la lista completa. Luego, imprime solo la 'banana' accediendo a ella por su índice.",
        theory: `
            <p>Una <strong>lista</strong> es una colección ordenada y modificable de elementos. Los elementos pueden ser de diferentes tipos de datos.</p>
            <p>📌 <strong>Creación:</strong> Las listas se definen con corchetes <code>[]</code> y los elementos separados por comas.</p>
            <p>📌 <strong>Acceso a elementos:</strong> Puedes acceder a elementos individuales usando su <strong>índice</strong> (posición), que comienza en 0 para el primer elemento.</p>
            <p>📌 <strong>Ejemplo:</strong></p>
            <pre><code class="language-python">mis_numeros = [10, 20, 30]
print(mis_numeros[0]) # Imprime 10
print(mis_numeros[2]) # Imprime 30</code></pre>
        `,
        example: `colores = ["rojo", "verde", "azul"]
print(colores)
print(colores[1]) # Accede al segundo elemento`,
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
            ]
        },
        isBoss: false
    },
    {
        day: 12,
    title: "Listas: Añadir y Quitar Elementos",
    description: "Aprende a modificar listas dinámicamente. Empieza con la lista `tareas = ['Comprar pan', 'Estudiar']`. Añade 'Hacer ejercicio' al final. Luego, elimina 'Comprar pan'. Finalmente, imprime la lista modificada.",
    theory: `
        <p>Las <strong>listas</strong> son estructuras de datos mutables, lo que significa que puedes modificar su contenido después de crearlas. Esta flexibilidad las hace extremadamente útiles para almacenar y manipular datos dinámicos.</p>
        <p>📌 <strong>Métodos principales para modificar listas:</strong></p>
        <ul>
            <li><code>lista.append(elemento)</code>: Añade un elemento al final de la lista</li>
            <li><code>lista.remove(elemento)</code>: Elimina la primera ocurrencia de un elemento específico</li>
            <li><code>lista.pop()</code>: Elimina y devuelve el último elemento</li>
            <li><code>lista.pop(indice)</code>: Elimina y devuelve el elemento en el índice especificado</li>
            <li><code>lista.insert(indice, elemento)</code>: Inserta un elemento en la posición especificada</li>
        </ul>
        <p>📌 <strong>Diferencia importante:</strong> <code>remove()</code> elimina por valor, <code>pop()</code> elimina por posición.</p>
    `,
    example: `# Ejemplo de manipulación de listas
lista_de_compras = ["leche", "huevos"]
print("Lista inicial:", lista_de_compras)
# Añadir elemento
lista_de_compras.append("pan")
print("Después de añadir pan:", lista_de_compras)
# Eliminar elemento por valor
lista_de_compras.remove("leche")
print("Después de eliminar leche:", lista_de_compras)
# Eliminar último elemento
ultimo = lista_de_compras.pop()
print("Elemento eliminado:", ultimo)
print("Lista final:", lista_de_compras)`,
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
        ]
    },
    expectedOutput: "['Estudiar', 'Hacer ejercicio']",
    isBoss: false
},
{
    day: 13,
    title: "Iterando Listas con `for`",
    description: "Domina el arte de recorrer colecciones. Dada la lista `numeros = [1, 2, 3, 4, 5]`, usa un bucle `for` para imprimir cada número de la lista, cada uno en una nueva línea.",
    theory: `
        <p>El bucle <code>for</code> es una de las estructuras de control más poderosas en Python. Te permite ejecutar un bloque de código para cada elemento en una secuencia (lista, tupla, string, etc.).</p>
        <p>📌 <strong>Sintaxis del bucle for:</strong></p>
        <pre><code>for elemento in secuencia:
    # Código a ejecutar para cada elemento
    # La variable 'elemento' toma el valor de cada ítem</code></pre>
        <p>📌 <strong>Ventajas del for:</strong></p>
        <ul>
            <li>Más legible que los bucles while para recorrer colecciones</li>
            <li>Menos propenso a errores (no hay que manejar índices manualmente)</li>
            <li>Automáticamente se detiene al final de la secuencia</li>
        </ul>
        <p>📌 <strong>Variaciones útiles:</strong></p>
        <ul>
            <li><code>for i, elemento in enumerate(lista):</code> - Obtener índice y valor</li>
            <li><code>for i in range(len(lista)):</code> - Recorrer por índices</li>
        </ul>
    `,
    example: `# Ejemplo básico de iteración
animales = ["perro", "gato", "pez"]
print("Mis mascotas favoritas:")
for animal in animales:
    print(f"- {animal}")
# Ejemplo con enumerate para obtener índices
print("\nCon numeración:")
for i, animal in enumerate(animales, 1):
    print(f"{i}. {animal}")`,
    hint: "Recorre la lista `numeros` con un `for` y usa `print()` dentro del bucle. Cada número debe aparecer en su propia línea.",
    solution: `numeros = [1, 2, 3, 4, 5]
for numero in numeros:
    print(numero)`,
    validationRules: {
        type: "exact_output",
        expected: "1\n2\n3\n4\n5",
        case_sensitive: true
    },
    isBoss: false
},
{
    day: 14,
    title: "Tuplas: Listas Inmutables",
    description: "Explora las estructuras de datos inmutables. Crea una tupla llamada `coordenadas` con los valores (10, 20). Imprime la tupla completa y luego intenta cambiar el primer elemento (por ejemplo, a 5). Observa el error que se produce y explica por qué en un comentario.",
    theory: `
        <p>Las <strong>tuplas</strong> son colecciones ordenadas e <strong>inmutables</strong>. Una vez creadas, no puedes cambiar, añadir o eliminar sus elementos. Esta característica las hace ideales para datos que no deben modificarse.</p>
        <p>📌 <strong>Características de las tuplas:</strong></p>
        <ul>
            <li>Se definen con paréntesis <code>()</code></li>
            <li>Son inmutables (no se pueden modificar)</li>
            <li>Permiten elementos duplicados</li>
            <li>Mantienen el orden de inserción</li>
            <li>Se pueden usar como claves en diccionarios (a diferencia de las listas)</li>
        </ul>
        <p>📌 <strong>Casos de uso comunes:</strong></p>
        <ul>
            <li>Coordenadas geográficas: <code>(latitud, longitud)</code></li>
            <li>Colores RGB: <code>(255, 128, 0)</code></li>
            <li>Configuraciones que no deben cambiar</li>
            <li>Valores de retorno múltiples en funciones</li>
        </ul>
        <p>📌 <strong>Acceso a elementos:</strong> Igual que las listas, usando índices <code>tupla[0]</code></p>
    `,
    example: `# Creación y uso de tuplas
punto = (3, 5, 7)
print("Coordenada:", punto)
print("Valor X:", punto[0])
print("Valor Y:", punto[1])

# Tupla de un solo elemento (necesita coma)
tupla_simple = (42,)  # Sin la coma sería solo un paréntesis
print("Tupla simple:", tupla_simple)

# Intentar modificar causará error
# punto[0] = 1  # TypeError: 'tuple' object does not support item assignment`,
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
        ]
    },
    isBoss: false
},
{
    day: 15,
    title: "BOSS 3: Filtrando una Lista",
    description: "¡Desafío de Jefe! Combina todo lo aprendido sobre listas, bucles y condicionales. Dada la lista `edades = [22, 16, 30, 19, 14, 25]`, crea una nueva lista llamada `mayores_de_edad` que contenga solo las edades mayores o iguales a 18. Imprime la nueva lista.",
    theory: `
        <p>Este desafío integra múltiples conceptos fundamentales de Python: <strong>listas</strong>, <strong>bucles for</strong> y <strong>condicionales if</strong>. Es un patrón muy común en programación llamado <strong>filtrado de datos</strong>.</p>
        <p>📌 <strong>Estrategia de resolución:</strong></p>
        <ol>
            <li>Crear una lista vacía para almacenar los resultados</li>
            <li>Recorrer cada elemento de la lista original</li>
            <li>Evaluar cada elemento con una condición</li>
            <li>Si cumple la condición, añadirlo a la nueva lista</li>
        </ol>
        <p>📌 <strong>Conceptos aplicados:</strong></p>
        <ul>
            <li><strong>Inicialización:</strong> <code>nueva_lista = []</code></li>
            <li><strong>Iteración:</strong> <code>for elemento in lista_original:</code></li>
            <li><strong>Condición:</strong> <code>if elemento cumple_condicion:</code></li>
            <li><strong>Acumulación:</strong> <code>nueva_lista.append(elemento)</code></li>
        </ul>
        <p>💡 <strong>Tip avanzado:</strong> En Python avanzado, esto se puede hacer con list comprehensions: <code>[x for x in lista if condicion]</code></p>
    `,
    example: `# Ejemplo: Filtrar números pares
numeros = [1, 8, 3, 12, 5, 6]
pares = []  # Lista para almacenar resultados

for numero in numeros:
    if numero % 2 == 0:  # % es el operador módulo (resto de división)
        pares.append(numero)

print("Números originales:", numeros)
print("Números pares:", pares)

# Otro ejemplo: Filtrar palabras largas
palabras = ["casa", "programación", "sol", "computadora"]
palabras_largas = []

for palabra in palabras:
    if len(palabra) > 5:
        palabras_largas.append(palabra)

print("Palabras largas:", palabras_largas)`,
    hint: "1) Crea una lista vacía `mayores_de_edad = []`. 2) Usa un bucle `for` para iterar sobre `edades`. 3) Dentro del bucle, usa `if edad >= 18:` para verificar la condición. 4) Si cumple, usa `append()` para añadir a la nueva lista.",
    solution: `edades = [22, 30, 19, 25]
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
        ]
    },
    expectedOutput: "[22, 30, 19, 25]",
    isBoss: true
},
{
    day: 16,
    title: "Bucles `while`: Repeticiones Condicionales",
    description: "Domina los bucles controlados por condiciones. Usa un bucle `while` para imprimir los números del 1 al 5. Asegúrate de tener una condición de parada para evitar un bucle infinito.",
    theory: `
        <p>El bucle <code>while</code> ejecuta un bloque de código <strong>mientras</strong> una condición sea verdadera. A diferencia del <code>for</code>, que recorre una secuencia predefinida, el <code>while</code> puede ejecutarse un número variable de veces.</p>
        <p>📌 <strong>Sintaxis del while:</strong></p>
        <pre><code>while condicion:
    # Código a ejecutar
    # ¡IMPORTANTE: Algo debe cambiar la condición!</code></pre>
        <p>📌 <strong>Componentes esenciales:</strong></p>
        <ul>
            <li><strong>Inicialización:</strong> Establecer la variable de control antes del bucle</li>
            <li><strong>Condición:</strong> La expresión que se evalúa en cada iteración</li>
            <li><strong>Actualización:</strong> Modificar la variable de control dentro del bucle</li>
        </ul>
        <p>⚠️ <strong>Peligro - Bucle Infinito:</strong> Si la condición nunca se vuelve falsa, el programa se ejecutará indefinidamente. Siempre asegúrate de que algo dentro del bucle modifique la condición.</p>
        <p>📌 <strong>Cuándo usar while vs for:</strong></p>
        <ul>
            <li><strong>Use for:</strong> Cuando conoces el número de iteraciones o recorres una colección</li>
            <li><strong>Use while:</strong> Cuando el número de iteraciones depende de una condición dinámica</li>
        </ul>
    `,
    example: `# Ejemplo básico: Contador
contador = 0
while contador < 3:
    print(f"Iteración {contador}")
    contador += 1  # Equivale a: contador = contador + 1

print("Bucle terminado")

# Ejemplo práctico: Validación de entrada
respuesta = ""
while respuesta.lower() != "si":
    respuesta = input("¿Deseas continuar? (si/no): ")
    if respuesta.lower() == "no":
        break  # Salir del bucle

# Ejemplo: Búsqueda en lista
numeros = [2, 7, 1, 9, 5]
objetivo = 9
i = 0
encontrado = False

while i < len(numeros) and not encontrado:
    if numeros[i] == objetivo:
        print(f"Encontrado {objetivo} en posición {i}")
        encontrado = True
    i += 1`,
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
        ]
    },
    expectedOutput: "1\n2\n3\n4\n5",
    isBoss: false
},
{
    day: 17,
    title: "Strings: Métodos Básicos (`.upper()`, `.lower()`, `.strip()`)",
    description: "Aprende a manipular texto con métodos incorporados. Dada la cadena `mensaje = '   Hola Mundo   '` (¡con 3 espacios exactos después de la primera comilla y antes de la última!), conviértela a mayúsculas, luego a minúsculas y finalmente elimina los espacios en blanco al inicio y al final. Imprime cada resultado, asegurándote de que la salida coincida exactamente en contenido y formato de línea.",
    theory: `
        <p>Los <strong>strings</strong> en Python vienen con muchos métodos incorporados que facilitan la manipulación de texto. Estos métodos son fundamentales para el procesamiento de datos y la limpieza de texto.</p>
        <p>📌 <strong>Métodos de transformación básicos:</strong></p>
        <ul>
            <li><code>string.upper()</code>: Convierte todos los caracteres a mayúsculas</li>
            <li><code>string.lower()</code>: Convierte todos los caracteres a minúsculas</li>
            <li><li><code>string.title()</code>: Convierte la primera letra de cada palabra a mayúscula</li>
            <li><code>string.capitalize()</code>: Solo la primera letra del string en mayúscula</li>
        </ul>
        <p>📌 <strong>Métodos de limpieza:</strong></p>
        <ul>
            <li><code>string.strip()</code>: Elimina espacios al inicio y final</li>
            <li><code>string.lstrip()</code>: Elimina espacios solo al inicio (left)</li>
            <li><code>string.rstrip()</code>: Elimina espacios solo al final (right)</li>
        </ul>
        <p>⚠️ <strong>Importante:</strong> Los strings son <strong>inmutables</strong>. Estos métodos NO modifican el string original, sino que devuelven una nueva cadena con los cambios aplicados.</p>
        <p>📌 <strong>Casos de uso reales:</strong></p>
        <ul>
            <li>Normalización de datos de entrada del usuario</li>
            <li>Limpieza de datos importados de archivos</li>
            <li>Formateo consistente de texto para comparaciones</li>
        </ul>
    `,
    example: `# Ejemplo completo de manipulación de strings
nombre_usuario = "   JuAn PeReZ   "
print("Original:", f"'{nombre_usuario}'")

# Transformaciones de caso
mayusculas = nombre_usuario.upper()
minusculas = nombre_usuario.lower()
titulo = nombre_usuario.title()

print("Mayúsculas:", f"'{mayusculas}'")
print("Minúsculas:", f"'{minusculas}'")
print("Título:", f"'{titulo}'")

# Limpieza de espacios
limpio = nombre_usuario.strip()
print("Limpio:", f"'{limpio}'")

# Combinando métodos
nombre_final = nombre_usuario.strip().title()
print("Procesado:", f"'{nombre_final}'")

# Ejemplo práctico: Validación de email
email = "   USUARIO@EJEMPLO.COM   "
email_limpio = email.strip().lower()
print("Email procesado:", email_limpio)`,
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
                // ¡AÑADIDO \n AL FINAL!
                output: "   HOLA MUNDO   \n   hola mundo   \nHola Mundo\n",
                case_sensitive: true
            }
        ]
    },
    // ¡AÑADIDO \n AL FINAL!
    expectedOutput: "   HOLA MUNDO   \n   hola mundo   \nHola Mundo",
    isBoss: false
},
{
    day: 18,
    title: "Strings: Dividir y Unir (`.split()`, `.join()`)",
    description: "Domina la manipulación avanzada de texto. Dada la cadena `cadena_numeros = '10-20-30-40'`, divídela por el guion (`-`) en una lista de strings. Luego, une esa lista con un espacio (` `) como separador. Imprime ambos resultados.",
    theory: `
        <p>Los métodos <code>.split()</code> y <code>.join()</code> son herramientas poderosas para el procesamiento de texto, especialmente útiles para analizar datos estructurados y formatear salidas.</p>
        <p>📌 <strong>El método split():</strong></p>
        <ul>
            <li><code>string.split(separador)</code>: Divide una cadena en una lista usando el separador especificado</li>
            <li><code>string.split()</code>: Sin parámetros, divide por cualquier espacio en blanco</li>
            <li><code>string.split(sep, maxsplit)</code>: Limita el número de divisiones</li>
        </ul>
        <p>📌 <strong>El método join():</strong></p>
        <ul>
            <li><code>separador.join(lista)</code>: Une elementos de una lista en un string</li>
            <li>El separador es el string que llama al método</li>
            <li>Todos los elementos de la lista deben ser strings</li>
        </ul>
        <p>📌 <strong>Casos de uso comunes:</strong></p>
        <ul>
            <li><strong>Análisis de CSV:</strong> <code>linea.split(',')</code></li>
            <li><strong>Procesamiento de rutas:</strong> <code>ruta.split('/')</code></li>
            <li><strong>Tokenización de texto:</strong> <code>frase.split()</code></li>
            <li><strong>Formateo de salida:</strong> <code>' | '.join(items)</code></li>
        </ul>
        <p>💡 <strong>Tip:</strong> <code>split()</code> y <code>join()</code> son operaciones inversas. Lo que divide uno, lo puede unir el otro.</p>
    `,
    example: `# Ejemplo básico de split y join
frase = "Python es genial para programar"
palabras = frase.split(" ")  # Dividir por espacios
print("Palabras:", palabras)

# Unir con diferente separador
frase_con_guiones = "-".join(palabras)
print("Con guiones:", frase_con_guiones)

# Ejemplo práctico: Procesamiento de datos CSV
datos_csv = "Juan,25,Madrid,Ingeniero"
campos = datos_csv.split(",")
print("Campos:", campos)

# Reformatear la salida
salida_formateada = " | ".join(campos)
print("Formateado:", salida_formateada)

# Ejemplo: Análisis de ruta de archivo
ruta = "/usuarios/documentos/archivo.txt"
partes_ruta = ruta.split("/")
print("Partes de la ruta:", partes_ruta)
nombre_archivo = partes_ruta[-1]  # Último elemento
print("Nombre del archivo:", nombre_archivo)

# Ejemplo con límite de divisiones
texto = "uno-dos-tres-cuatro-cinco"
limitado = texto.split("-", 2)  # Solo las primeras 2 divisiones
print("División limitada:", limitado)`,
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
        ]
    },
    expectedOutput: "['10', '20', '30', '40']\n10 20 30 40",
    isBoss: false
},
{
    day: 19,
    title: "Strings: Slicing (Cortar Cadenas)",
    description: "Dada la cadena `alfabeto = 'abcdefghijklmnopqrstuvwxyz'`. Imprime:\n1. Los primeros 5 caracteres.\n2. Los caracteres del índice 10 al 15 (inclusive).\n3. Los últimos 3 caracteres.",
    theory: `
        <p>El <strong>slicing</strong> te permite obtener una porción (o "rebanada") de un string (o lista, o tupla) usando índices.</p>
        <p>📌 <strong>Sintaxis:</strong> <code>cadena[inicio:fin:paso]</code></p>
        <ul>
            <li><code>inicio</code>: Índice donde comienza el corte (incluido). Si se omite, es 0.</li>
            <li><code>fin</code>: Índice donde termina el corte (EXCLUIDO). Si se omite, es hasta el final.</li>
            <li><code>paso</code>: Salto entre caracteres (por defecto 1).</li>
        </ul>
        <p>Los índices negativos cuentan desde el final (<code>-1</code> es el último elemento).</p>
    `,
    example: `# Ejemplo de slicing en strings
texto = "programacion"
print(texto[0:3])   # pro
print(texto[5:])    # amacion
print(texto[-4:])   # cion
print(texto[::2])   # pogaain (cada 2 caracteres)`,
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
        case_sensitive: true
    },
    expectedOutput: "abcde\nklmnop\nxyz",
    isBoss: false
},
{
    day: 20,
    title: "BOSS 4: Manipulación de Email",
    description: "Tienes la cadena `email = 'usuario.ejemplo@dominio.com'`. Extrae y imprime solo el 'nombre de usuario' (la parte antes del '@'). Luego, extrae y imprime solo el 'dominio' (la parte después del '@', sin incluir el '@').",
    theory: `
        <p>Este desafío te hará combinar lo aprendido sobre métodos de strings. El método <code>.split()</code> es perfecto para dividir una cadena usando un delimitador.</p>
        <p>📌 <strong>Método split():</strong> Divide una cadena en una lista usando un separador.</p>
        <pre><code>cadena.split(separador)</code></pre>
        <p>Piensa en cómo puedes usar el carácter <code>'@'</code> como un delimitador para separar las partes del email.</p>
    `,
    example: `# Ejemplo de división de cadena
direccion = "test@mail.org"
partes = direccion.split("@")
print("Usuario:", partes[0])
print("Servidor:", partes[1])`,
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
        ]
    },
    expectedOutput: "Usuario: usuario.ejemplo\nDominio: dominio.com",
    isBoss: true
},
{
    day: 21,
    title: "Diccionarios: Pares Clave-Valor",
    description: "Crea un diccionario llamado `persona` con las claves 'nombre', 'edad' y 'ciudad' y asígnale valores. Imprime el diccionario completo. Luego, imprime solo la edad de la persona.",
    theory: `
        <p>Un <strong>diccionario</strong> es una colección no ordenada de pares <strong>clave-valor</strong>. Cada clave debe ser única y se usa para acceder a su valor asociado.</p>
        <p>📌 <strong>Creación:</strong> Se definen con llaves <code>{}</code>, con pares clave:valor separados por comas.</p>
        <p>📌 <strong>Acceso a valores:</strong> Se usa la clave entre corchetes <code>[]</code>.</p>
        <p>📌 <strong>Sintaxis:</strong></p>
        <pre><code>mi_diccionario = {"clave1": "valor1", "clave2": "valor2"}
print(mi_diccionario["clave1"]) # Imprime valor1</code></pre>
    `,
    example: `# Ejemplo de diccionario
coche = {
    "marca": "Toyota",
    "modelo": "Corolla",
    "año": 2020
}
print(coche)
print("El modelo es:", coche["modelo"])`,
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
        ]
    },
    expectedOutput: "{'nombre': 'Ana', 'edad': 30, 'ciudad': 'Madrid'}\nEdad: 30",
    isBoss: false
},
{
    day: 22,
    title: "Diccionarios: Añadir y Modificar Elementos",
    description: "Partiendo del diccionario `producto = {'nombre': 'Laptop', 'precio': 1200}`. Añade una nueva clave 'cantidad' con valor 5. Luego, cambia el precio a 1150. Imprime el diccionario modificado.",
    theory: `
        <p>Los diccionarios son mutables, lo que significa que puedes cambiar su contenido después de crearlos.</p>
        <p>📌 <strong>Añadir/Modificar elementos:</strong></p>
        <ul>
            <li>Para añadir: <code>diccionario["nueva_clave"] = valor</code></li>
            <li>Para modificar: <code>diccionario["clave_existente"] = nuevo_valor</code></li>
        </ul>
        <p>📌 <strong>Eliminar elementos:</strong></p>
        <ul>
            <li><code>del diccionario["clave"]</code>: Elimina el par clave-valor</li>
            <li><code>diccionario.pop("clave")</code>: Elimina y devuelve el valor</li>
        </ul>
    `,
    example: `# Ejemplo de modificación de diccionario
tienda = {"camisa": 25, "pantalon": 40}
tienda["gorra"] = 15 # Añadir nueva clave
tienda["camisa"] = 20 # Modificar valor existente
print(tienda)`,
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
        ]
    },
    expectedOutput: "{'nombre': 'Laptop', 'precio': 1150, 'cantidad': 5}",
    isBoss: false
},
{
    day: 23,
    title: "Iterando Diccionarios: Claves, Valores, Ítems",
    description: "Dado el diccionario `capitales = {'España': 'Madrid', 'Francia': 'París', 'Alemania': 'Berlín'}`. Usa un bucle `for` para imprimir solo las claves. Luego, usa otro bucle `for` para imprimir solo los valores. Finalmente, usa un bucle `for` para imprimir cada par clave-valor.",
    theory: `
        <p>Puedes iterar sobre diccionarios de varias maneras para acceder a diferentes partes de los datos:</p>
        <p>📌 <strong>Métodos de iteración:</strong></p>
        <ul>
            <li><strong>Claves:</strong> <code>for clave in diccionario:</code> o <code>for clave in diccionario.keys():</code></li>
            <li><strong>Valores:</strong> <code>for valor in diccionario.values():</code></li>
            <li><strong>Pares clave-valor:</strong> <code>for clave, valor in diccionario.items():</code></li>
        </ul>
        <p>El método <code>.items()</code> devuelve tuplas de (clave, valor) que puedes desempaquetar directamente en el bucle for.</p>
    `,
    example: `# Ejemplo de iteración en diccionarios
inventario = {"manzanas": 10, "naranjas": 5}

for fruta in inventario.keys():
    print("Fruta:", fruta)

for cantidad in inventario.values():
    print("Cantidad:", cantidad)

for item, valor in inventario.items():
    print(f"{item} -> {valor}")`,
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
                iterates_over: "capitales.values()",
                loop_type: "values"
            },
            {
                type: "for_loop",
                iterates_over: "capitales.items()",
                loop_type: "items",
                unpacked_vars: 2
            }
        ]
    },
    expectedOutput: "Claves:\nEspaña\nFrancia\nAlemania\n\nValores:\nMadrid\nParís\nBerlín\n\nPares Clave-Valor:\nEspaña: Madrid\nFrancia: París\nAlemania: Berlín",
    isBoss: false
},
{
    day: 24,
    title: "Sets: Colecciones Desordenadas sin Duplicados",
    description: "Crea un set llamado `numeros_unicos` con los valores {1, 2, 3, 2, 4, 1}. Imprime el set. Luego, intenta añadir el número 3 y el número 5. Imprime el set de nuevo.",
    theory: `
        <p>Un <strong>set</strong> es una colección de elementos únicos y no ordenados. Son perfectos para eliminar duplicados y realizar operaciones matemáticas de conjuntos.</p>
        <p>📌 <strong>Características principales:</strong></p>
        <ul>
            <li>No permite elementos duplicados</li>
            <li>No mantiene orden específico</li>
            <li>Es mutable (puedes añadir/eliminar elementos)</li>
        </ul>
        <p>📌 <strong>Creación:</strong> Se definen con llaves <code>{}</code>. Para un set vacío usa <code>set()</code>.</p>
        <p>📌 <strong>Métodos principales:</strong></p>
        <ul>
            <li><code>set.add(elemento)</code>: Añade un elemento (si no existe)</li>
            <li><code>set.remove(elemento)</code>: Elimina un elemento (error si no existe)</li>
            <li><code>set.discard(elemento)</code>: Elimina un elemento (sin error si no existe)</li>
        </ul>
    `,
    example: `# Ejemplo de sets
frutas_set = {"manzana", "banana", "naranja"}
frutas_set.add("mango")
print(frutas_set)
frutas_set.add("banana") # No añade duplicado
print(len(frutas_set)) # Sigue siendo 4 elementos`,
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
        ]
    },
    expectedOutput: "{1, 2, 3, 4}\n{1, 2, 3, 4, 5}",
    isBoss: false
},
{
    day: 25,
    title: "BOSS 5: Contador de Palabras",
    description: "Dada la cadena `frase = 'Esto es una prueba y esto es una frase de prueba'`. Crea un diccionario donde las claves sean cada palabra única de la frase y los valores sean la cantidad de veces que aparece esa palabra. Imprime el diccionario resultante.",
    theory: `
        <p>Este es un gran desafío que combina strings (división), bucles y diccionarios. Piensa en cómo puedes dividir la frase en palabras y cómo puedes usar un diccionario para llevar la cuenta de cada palabra.</p>
        <p>📌 <strong>División de strings:</strong> Usa <code>split()</code> para dividir una cadena en una lista de palabras.</p>
        <p>📌 <strong>Normalización:</strong> Usa <code>lower()</code> para convertir todo a minúsculas y evitar que 'Esto' y 'esto' se cuenten como palabras diferentes.</p>
        <p>📌 <strong>Diccionarios para contar:</strong> Puedes verificar si una clave existe con <code>if clave in diccionario:</code> y luego incrementar o inicializar el valor.</p>
        <p>Considera normalizar las palabras (por ejemplo, pasarlas a minúsculas) para que 'Esto' y 'esto' se cuenten como la misma palabra.</p>
    `,
    example: `texto = "hola mundo hola"
conteo = {}
palabras = texto.split(" ")
for p in palabras:
    p = p.lower() # Normalizar a minúsculas
    if p in conteo:
        conteo[p] += 1
    else:
        conteo[p] = 1
print(conteo)`,
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
        output_type: "dictionary"
    },
    expectedOutput: "{'esto': 2, 'es': 2, 'una': 2, 'prueba': 2, 'y': 1, 'frase': 1, 'de': 1}",
    isBoss: true
},
{
    day: 26,
    title: "Funciones: Organizando tu Código",
    description: "Define una función llamada `saludar` que no tome argumentos e imprima '¡Hola desde mi función!'. Luego, llama a esa función.",
    theory: `
        <p>Las <strong>funciones</strong> son bloques de código reutilizables que realizan una tarea específica. Ayudan a organizar tu código y evitar la repetición.</p>
        <p>📌 <strong>Definición:</strong> Usas la palabra clave <code>def</code> seguida del nombre de la función, paréntesis <code>()</code> y dos puntos <code>:</code>. El código de la función debe estar indentado.</p>
        <p>📌 <strong>Sintaxis básica:</strong></p>
        <pre><code>def nombre_funcion():
    # Código de la función (indentado)
    print("Algo")</code></pre>
        <p>📌 <strong>Llamada:</strong> Para ejecutar el código de una función, la 'llamas' usando su nombre seguido de paréntesis <code>()</code>.</p>
        <p>📌 <strong>Ventajas:</strong> Las funciones hacen tu código más organizado, reutilizable y fácil de mantener.</p>
    `,
    example: `def mostrar_mensaje():
    print("Este es un mensaje desde la función.")
    print("Puedo tener múltiples líneas.")

mostrar_mensaje() # Llamando a la función
print("Esto está fuera de la función.")`,
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
        ]
    },
    expectedOutput: "¡Hola desde mi función!",
    isBoss: false
},
{
    day: 27,
    title: "Funciones con Parámetros y Argumentos",
    description: "Define una función llamada `sumar` que tome dos argumentos, `a` y `b`. La función debe imprimir la suma de `a` y `b`. Llama a la función `sumar` con los números 5 y 3.",
    theory: `
        <p>Las funciones pueden aceptar <strong>parámetros</strong>, que son variables que actúan como marcadores de posición para los datos que la función necesita para trabajar. Cuando llamas a la función, le pasas <strong>argumentos</strong>, que son los valores actuales para esos parámetros.</p>
        <p>📌 <strong>Diferencia importante:</strong></p>
        <ul>
            <li><strong>Parámetros:</strong> Las variables en la definición de la función</li>
            <li><strong>Argumentos:</strong> Los valores actuales que pasas cuando llamas a la función</li>
        </ul>
        <p>📌 <strong>Sintaxis:</strong></p>
        <pre><code>def nombre_funcion(parametro1, parametro2):
    # Código que usa parametro1 y parametro2

nombre_funcion(argumento1, argumento2) # Llamada con argumentos</code></pre>
        <p>📌 <strong>Orden importa:</strong> Los argumentos se asignan a los parámetros en el mismo orden en que los defines.</p>
    `,
    example: `def saludar_persona(nombre, edad):
    print(f"Hola, {nombre}!")
    print(f"Tienes {edad} años.")

saludar_persona("María", 25)
saludar_persona("Carlos", 30)`,
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
        ]
    },
    expectedOutput: "8",
    isBoss: false
},
{
    day: 28,
    title: "Funciones con Valor de Retorno (`return`)",
    description: "Define una función llamada `multiplicar` que tome dos números, `x` e `y`. La función debe devolver (return) el producto de `x` e `y`. Llama a la función con 4 y 6, y guarda el resultado en una variable `resultado_multiplicacion`. Imprime esa variable.",
    theory: `
        <p>La palabra clave <code>return</code> permite que una función envíe un valor de vuelta al lugar donde fue llamada. Una vez que se ejecuta <code>return</code>, la función termina inmediatamente.</p>
        <p>📌 <strong>Diferencia entre print y return:</strong></p>
        <ul>
            <li><code>print()</code>: Muestra algo en pantalla pero no devuelve nada útil</li>
            <li><code>return</code>: Devuelve un valor que puedes usar en otras partes del código</li>
        </ul>
        <p>📌 <strong>Sintaxis:</strong></p>
        <pre><code>def mi_funcion():
    resultado = 5 * 3
    return resultado  # Devuelve el valor

valor = mi_funcion()  # valor ahora contiene 15</code></pre>
        <p>📌 <strong>Importante:</strong> Si una función no tiene una sentencia <code>return</code> explícita, automáticamente devuelve <code>None</code>.</p>
    `,
    example: `def obtener_doble(numero):
    resultado = numero * 2
    return resultado  # Devuelve el valor calculado

valor_original = 7
doble = obtener_doble(valor_original)
print(f"El doble de {valor_original} es {doble}")`,
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
                value: 24
            },
            {
                type: "print_statement",
                expected_output: "24"
            }
        ]
    },
    expectedOutput: "24",
    isBoss: false
},
{
    day: 29,
    title: "Manejo de Errores: `try` y `except`",
    description: "Escribe un programa que intente dividir un número por cero dentro de un bloque `try`. Usa un bloque `except` para capturar el error `ZeroDivisionError` y en su lugar imprime '¡Error: No se puede dividir por cero!'.",
    theory: `
        <p>El <strong>manejo de errores</strong> te permite controlar cómo responde tu programa a los errores (excepciones) que ocurren durante la ejecución, en lugar de detenerse abruptamente.</p>
        <p>📌 <strong>¿Por qué es importante?</strong> Sin manejo de errores, tu programa se detiene completamente cuando encuentra un problema. Con manejo de errores, puedes decidir qué hacer cuando algo sale mal.</p>
        <p>📌 <strong>Sintaxis básica:</strong></p>
        <pre><code>try:
    # Código que podría causar un error
    resultado = 10 / 0
except TipoDeError:
    # Código a ejecutar si ocurre ese tipo de error
    print("¡Hubo un error!")</code></pre>
        <p>📌 <strong>Tipos comunes de errores:</strong></p>
        <ul>
            <li><code>ZeroDivisionError</code>: División por cero</li>
            <li><code>ValueError</code>: Valor incorrecto (ej: convertir "abc" a número)</li>
            <li><code>IndexError</code>: Índice fuera de rango en listas</li>
        </ul>
        <p>Puedes usar un <code>except</code> genérico sin un tipo de error para capturar cualquier excepción, pero es mejor especificar el tipo de error cuando sea posible.</p>
    `,
    example: `try:
    numero_texto = "abc"
    numero = int(numero_texto)  # Esto causará un ValueError
    print(numero)
except ValueError:
    print("¡No es un número válido!")
except ZeroDivisionError:
    print("¡No se puede dividir por cero!")
    
print("El programa continúa ejecutándose.")`,
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
        ]
    },
    expectedOutput: "¡Error: No se puede dividir por cero!",
    isBoss: false
},
{
    day: 30,
    title: "BOSS 6: Calculadora Segura de Promedio",
    description: "Define una función llamada `calcular_promedio` que reciba una lista de números. La función debe calcular el promedio de los números. Si la lista está vacía, debe capturar el error (posible `ZeroDivisionError` si intentas dividir por `len([])`) y devolver el mensaje 'La lista está vacía, no se puede calcular el promedio.'. De lo contrario, devuelve el promedio. Prueba la función con una lista vacía y con `[10, 20, 30]`.",
    theory: `
        <p>Este es tu último desafío de jefe y pone a prueba tu conocimiento de funciones, manejo de errores y listas. Necesitarás calcular la suma de los elementos y dividirlos por la cantidad de elementos. Considera qué sucede si la lista está vacía y cómo puedes manejar esa situación de forma segura.</p>
        <p>📌 <strong>Estrategias para listas vacías:</strong></p>
        <ul>
            <li>Verificar si la lista está vacía antes de hacer cálculos: <code>if not lista:</code></li>
            <li>Usar try-except para capturar el ZeroDivisionError</li>
            <li>Combinar ambos métodos para máxima seguridad</li>
        </ul>
        <p>📌 <strong>Funciones útiles:</strong></p>
        <ul>
            <li><code>sum(lista)</code>: Suma todos los elementos de una lista</li>
            <li><code>len(lista)</code>: Devuelve la cantidad de elementos</li>
        </ul>
    `,
    example: `def dividir_seguro(a, b):
    try:
        resultado = a / b
        return resultado
    except ZeroDivisionError:
        return "División por cero no permitida."

print(dividir_seguro(10, 2))  # 5.0
print(dividir_seguro(10, 0))  # "División por cero no permitida."`,
    hint: "Dentro de la función, primero verifica si la lista está vacía con `if not numeros:`. Si no está vacía, calcula la suma con `sum(numeros)` y divídela por `len(numeros)`. Usa try-except como medida adicional de seguridad.",
    solution: `def calcular_promedio(numeros):
    if not numeros: # Equivalente a if len(numeros) == 0:
        return "La lista está vacía, no se puede calcular el promedio."
    
    try:
        suma = sum(numeros) # sum() es una función incorporada de Python
        promedio = suma / len(numeros)
        return promedio
    except ZeroDivisionError:
        # Aunque ya manejamos la lista vacía, este except serviría para otros casos de división por cero
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
        ]
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

    // Límite de caracteres para el resumen en la alerta
    const MAX_ALERT_LENGTH = 150; // Puedes ajustar este valor
    let displayMessage = message;

    // Si el mensaje es más largo que el límite, resumirlo
    // y dejar el mensaje completo en la consola para depuración.
    if (message.length > MAX_ALERT_LENGTH) {
        displayMessage = message.substring(0, MAX_ALERT_LENGTH) + '... (ver detalles en Consola de Salida)';
    }

    // Icono según el tipo de alerta
    let icon = '💡';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    if (type === 'info') icon = 'ℹ️';
    if (type === 'boss') icon = '👾';

    alert.innerHTML = `
           <span class="alert-icon">${icon}</span>
           <span>${displayMessage}</span> `;

    document.body.appendChild(alert);

    // Mostrar alerta
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);

    // Ocultar después de 5 segundos
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(alert)) {
                document.body.removeChild(alert);
            }
        }, 500);
    }, 5000);
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
    
    const userText = caseSensitive ? userOutput : userOutput.toLowerCase();
    const expectedText = caseSensitive ? expected : expected.toLowerCase();
    
    if (userText === expectedText) {
        return { isCorrect: true };
    } else {
        return { 
            isCorrect: false, 
            message: `Se esperaba: "${expected}" pero obtuviste: "${userOutput}"` 
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
        showAlert('¡Felicidades! Has completado todos los ejercicios disponibles.', 'success');
        // Final achievement will be unlocked here if not already
        unlockAchievement(27);
        saveCurrentUser(); // Guardar progreso final
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