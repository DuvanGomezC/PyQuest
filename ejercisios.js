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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        },
        expectedOutput: "La lista está vacía, no se puede calcular el promedio.\n20.0",
        isBoss: true
    }
];

//validador de ejrcicios
// Verifica la respuesta del usuario para el ejercicio actual
function verifyAnswer() {
    const exercise = exercises.find(e => e.day === currentDay);
    if (!exercise) {
        showAlert('Ejercicio no encontrado.', 'error');
        return;
    }

    const userCode = getUserCode();
    const userOutput = currentOutput || ''; // Preservar espacios y líneas vacías

    if (!userCode && !userOutput) {
        showAlert('Primero escribe y ejecuta tu código para generar una salida.', 'warning');
        return;
    }

    const validationResult = validateExercise(exercise, userCode, userOutput);

    if (validationResult.isCorrect) {
        isExerciseCompleted = true;
        updateButtonStates();

        const pointsEarned = exercise.isBoss ? 100 : 50;
        createConfetti();
        unlockAchievement(currentDay);

        showAlert(
            exercise.isBoss
                ? '🎉 ¡Increíble! Derrotaste al jefe. ¡Eres un verdadero programador!'
                : '🎉 ¡Perfecto! Has resuelto el ejercicio correctamente.',
            exercise.isBoss ? 'boss' : 'success'
        );

        saveCurrentUser();
    } else {
        showAlert(`❌ ${validationResult.message}`, 'error');
    }
}

// Normaliza texto para comparaciones (elimina espacios extra y líneas vacías finales)
function normalizeText(text) {
    if (!text) return '';
    return text
        .split('\n')
        .map(line => line.trimEnd())
        .filter(line => line.trim() !== '')
        .join('\n')
        .trim();
}

// Selecciona el tipo de validación según las reglas del ejercicio
function validateExercise(exercise, userCode, userOutput) {
    const rules = exercise.validationRules || { type: 'exact_output' };
    const normalizedUserOutput = normalizeText(userOutput);
    const normalizedExpectedOutput = normalizeText(exercise.expectedOutput || '');

    switch (rules.type) {
        case 'exact_output':
            return validateExactOutput(rules, normalizedUserOutput, normalizedExpectedOutput);
        case 'pattern_match':
            return validatePatternMatch(rules, userCode, normalizedUserOutput, normalizedExpectedOutput);
        case 'output_match':
            return validateOutputMatch(rules, normalizedUserOutput, normalizedExpectedOutput);
        default:
            return {
                isCorrect: false,
                message: `Tipo de validación no reconocido: ${rules.type}.`
            };
    }
}

// Valida salida exacta (ej. Día 1, Día 13, Día 16)
function validateExactOutput(rules, userOutput, expectedOutput) {
    const caseSensitive = rules.case_sensitive !== false;

    let userText = userOutput;
    let expectedText = expectedOutput;

    if (!caseSensitive) {
        userText = userText.toLowerCase();
        expectedText = expectedText.toLowerCase();
    }

    if (userText === expectedText) {
        return { isCorrect: true };
    }
    return {
        isCorrect: false,
        message: `Se esperaba: "${expectedOutput}", pero se obtuvo: "${userOutput}".`
    };
}

// Valida múltiples patrones (ej. Día 2, Día 3, Día 4, Día 5, etc.)
function validatePatternMatch(rules, userCode, userOutput, expectedOutput) {
    const patterns = Array.isArray(rules.patterns) ? rules.patterns : [];
    const errors = [];

    for (const pattern of patterns) {
        const result = validatePattern(pattern, userCode, userOutput, expectedOutput);
        if (!result.isValid) {
            errors.push(result.message);
        }
    }

    // Validar que la salida coincida con expectedOutput si no es flexible
    if (!rules.flexible_output && userOutput !== expectedOutput) {
        errors.push(`La salida no coincide con la esperada: "${expectedOutput}", pero se obtuvo: "${userOutput}".`);
    }

    if (errors.length === 0) {
        return { isCorrect: true };
    }
    return {
        isCorrect: false,
        message: `Problemas encontrados:\n• ${errors.join('\n• ')}`
    };
}

// Selecciona el validador según el tipo de patrón
function validatePattern(pattern, userCode, userOutput, expectedOutput) {
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
        case 'list_method_call':
            return validateListMethodCall(pattern, userCode);
        case 'for_loop':
            return validateForLoop(pattern, userCode, userOutput);
        case 'for_loop_with_condition':
            return validateForLoopWithCondition(pattern, userCode, userOutput);
        case 'expected_output':
            return validateExpectedOutput(pattern, userOutput, expectedOutput);
        case 'dictionary_access':
            return validateDictionaryAccess(pattern, userCode);
        case 'dictionary_modification':
            return validateDictionaryModification(pattern, userCode);
        case 'dictionary_creation':
            return validateDictionaryCreation(pattern, userCode);
        case 'output_contains':
            return validateOutputContains(pattern, userOutput);
        case 'function_definition':
            return validateFunctionDefinition(pattern, userCode);
        case 'function_call':
            return validateFunctionCall(pattern, userCode, userOutput);
        case 'method_call':
            return validateMethodCall(pattern, userCode);
        case 'try_except_block':
            return validateTryExceptBlock(pattern, userCode, userOutput);
        case 'grade_classification':
            return validateGradeClassification(pattern, userCode, userOutput);
        case 'comment_explanation':
            return validateCommentExplanation(pattern, userCode);
        case 'empty_list_creation':
            return validateEmptyListCreation(pattern, userCode);
        default:
            console.warn(`Patrón no reconocido: ${pattern.type}`);
            return { isValid: true };
    }
}

// Valida salida para múltiples líneas (ej. Día 19)
function validateOutputMatch(rules, userOutput, expectedOutput) {
    if (rules.output_type === 'dictionary') {
        return validateDictionaryOutput(rules, userOutput);
    }
    if (rules.expected_outputs) {
        return validateMultipleOutputs(rules, userOutput);
    }
    if (userOutput !== expectedOutput) {
        return {
            isCorrect: false,
            message: `La salida no coincide. Se esperaba: "${expectedOutput}", pero se obtuvo: "${userOutput}".`
        };
    }
    return { isCorrect: true };
}

// Valida asignación de variable (ej. Día 2, Día 3, Día 6, etc.)
function validateVariableAssignment(pattern, userCode) {
    const varName = pattern.variable || '';
    const expectedType = pattern.value_type;
    const expectedValue = pattern.value;
    const range = pattern.range;

    const assignmentRegex = new RegExp(`^${varName}\\s*=\\s*(.+?)(?:$|\\n)`, 'm');
    const match = userCode.match(assignmentRegex);

    if (!match) {
        return {
            isValid: false,
            message: `No se encontró la asignación de la variable '${varName}'.`
        };
    }

    let assignedValue = match[1].trim();

    if (expectedType) {
        if (expectedType === 'string') {
            const stringRegex = /^['"](.*)['"]$/;
            const strMatch = assignedValue.match(stringRegex);
            if (!strMatch) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una cadena de texto (usar comillas).`
                };
            }
            assignedValue = strMatch[1];
        } else if (expectedType === 'number') {
            const numValue = parseFloat(assignedValue);
            if (isNaN(numValue)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser un número.`
                };
            }
            assignedValue = numValue;
            if (range) {
                if (numValue < range.min || numValue > range.max) {
                    return {
                        isValid: false,
                        message: `La variable '${varName}' debe estar en el rango [${range.min}, ${range.max}].`
                    };
                }
            }
        } else if (expectedType === 'list' || expectedType === 'array') {
            if (!assignedValue.match(/^\[.*\]$/)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una lista (usar corchetes []).`
                };
            }
        } else if (expectedType === 'boolean') {
            if (!['True', 'False'].includes(assignedValue)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser un valor booleano (True o False).`
                };
            }
            assignedValue = assignedValue === 'True';
        } else if (expectedType === 'tuple') {
            if (!assignedValue.match(/^\(.*\)$/)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una tupla (usar paréntesis ()).`
                };
            }
        } else if (expectedType === 'set') {
            if (!assignedValue.match(/^\{.*\}$/)) {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser un conjunto (usar llaves {}).`
                };
            }
        }
    }

    if (expectedValue !== undefined) {
        if (expectedType === 'string' && assignedValue !== expectedValue) {
            return {
                isValid: false,
                message: `La variable '${varName}' debe tener el valor "${expectedValue}".`
            };
        } else if (expectedType === 'number' && assignedValue !== expectedValue) {
            return {
                isValid: false,
                message: `La variable '${varName}' debe tener el valor ${expectedValue}.`
            };
        } else if (expectedType === 'boolean' && assignedValue !== expectedValue) {
            return {
                isValid: false,
                message: `La variable '${varName}' debe tener el valor ${expectedValue ? 'True' : 'False'}.`
            };
        } else if (expectedType === 'list' && Array.isArray(expectedValue)) {
            try {
                const userList = JSON.parse(assignedValue.replace(/'/g, '"'));
                if (JSON.stringify(userList) !== JSON.stringify(expectedValue)) {
                    return {
                        isValid: false,
                        message: `La variable '${varName}' debe ser la lista: ${JSON.stringify(expectedValue)}.`
                    };
                }
            } catch {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser una lista válida.`
                };
            }
        } else if (expectedType === 'set' && Array.isArray(pattern.contains_elements)) {
            try {
                const userSet = JSON.parse(assignedValue.replace(/'/g, '"'));
                const expectedSet = pattern.contains_elements;
                if (!expectedSet.every(elem => userSet.includes(elem))) {
                    return {
                        isValid: false,
                        message: `El conjunto '${varName}' debe contener los elementos: ${JSON.stringify(expectedSet)}.`
                    };
                }
            } catch {
                return {
                    isValid: false,
                    message: `La variable '${varName}' debe ser un conjunto válido.`
                };
            }
        }
    }

    return { isValid: true };
}

// Valida uso de print con variable (ej. Día 2, Día 4)
function validatePrintWithVariable(pattern, userCode, userOutput) {
    const requiredWords = Array.isArray(pattern.contains) ? pattern.contains : [];
    const caseSensitive = pattern.case_sensitive !== false;
    const variable = pattern.variable;

    const codeToCheck = caseSensitive ? userCode : userCode.toLowerCase();
    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();

    if (!codeToCheck.includes('print(')) {
        return {
            isValid: false,
            message: 'Debes usar la función print() para mostrar el resultado.'
        };
    }

    if (variable && !codeToCheck.includes(caseSensitive ? variable : variable.toLowerCase())) {
        return {
            isValid: false,
            message: `Debes usar la variable '${variable}' en la función print().`
        };
    }

    for (const word of requiredWords) {
        const wordToCheck = caseSensitive ? word : word.toLowerCase();
        if (!outputToCheck.includes(wordToCheck)) {
            return {
                isValid: false,
                message: `La salida debe contener la palabra "${word}".`
            };
        }
    }

    return { isValid: true };
}

// Valida operación aritmética (ej. Día 3, Día 5)
function validateArithmeticOperation(pattern, userCode) {
    const operation = pattern.operation || '';
    const operands = Array.isArray(pattern.operands) ? pattern.operands : [];
    const variable = pattern.variable;

    let operatorSymbol, operationName;
    switch (operation) {
        case 'addition':
            operatorSymbol = '\\+';
            operationName = 'suma';
            break;
        case 'subtraction':
            operatorSymbol = '-';
            operationName = 'resta';
            break;
        case 'multiplication':
            operatorSymbol = '\\*';
            operationName = 'multiplicación';
            break;
        case 'division':
            operatorSymbol = '/';
            operationName = 'división';
            break;
        default:
            return { isValid: false, message: `Operación no reconocida: ${operation}.` };
    }

    let operationRegex;
    if (variable) {
        operationRegex = new RegExp(`${variable}\\s*=\\s*${operands[0]}\\s*${operatorSymbol}\\s*${operands[1]}`);
    } else {
        operationRegex = new RegExp(`${operands[0]}\\s*${operatorSymbol}\\s*${operands[1]}`);
    }

    if (!operationRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes realizar la ${operationName} de ${operands.join(' y ')}${variable ? ` y asignarla a '${variable}'` : ''}.`
        };
    }

    return { isValid: true };
}

// Valida concatenación de cadenas (ej. Día 4)
function validateStringConcatenation(pattern, userCode) {
    const variables = Array.isArray(pattern.variables) ? pattern.variables : [];

    const concatRegex = variables.map(v => v).join('.*\\+.*');
    const regex = new RegExp(concatRegex);
    if (!regex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes concatenar las variables ${variables.join(' y ')} usando el operador +.`
        };
    }

    return { isValid: true };
}

// Valida condición if (ej. Día 6)
function validateIfCondition(pattern, userCode, userOutput) {
    const condition = pattern.condition || '';
    const expectedOutput = pattern.expected_output || '';
    const caseSensitive = pattern.case_sensitive !== false;

    if (!userCode.match(/if\s+.*:/)) {
        return {
            isValid: false,
            message: 'Debes usar una estructura if con la sintaxis correcta (if condición:).'
        };
    }

    const escapedCondition = condition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    if (!userCode.match(new RegExp(`if\\s+${escapedCondition}\\s*:\\s*`))) {
        return {
            isValid: false,
            message: `La condición debe ser: ${condition}.`
        };
    }

    if (expectedOutput) {
        const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
        const expectedToCheck = caseSensitive ? expectedOutput : expectedOutput.toLowerCase();
        if (!outputToCheck.includes(expectedToCheck)) {
            return {
                isValid: false,
                message: `La salida debe contener: "${expectedOutput}".`
            };
        }
    }

    return { isValid: true };
}

// Valida estructura if-else (ej. Día 7, Día 9)
function validateIfElseStructure(pattern, userCode) {
    const condition = pattern.condition || '';
    const ifOutput = pattern.if_output || '';
    const elseOutput = pattern.else_output || '';
    const caseSensitive = pattern.case_sensitive !== false;

    if (!userCode.match(/if\s+.*:[\s\S]*else\s*:/)) {
        return {
            isValid: false,
            message: 'Debes usar una estructura if-else completa.'
        };
    }

    if (condition) {
        const escapedCondition = condition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        if (!userCode.match(new RegExp(`if\\s+${escapedCondition}\\s*:\\s*`))) {
            return {
                isValid: false,
                message: `La condición debe ser: ${condition}.`
            };
        }
    }

    return { isValid: true };
}

// Valida estructura if-elif-else (ej. Día 8, Día 10)
function validateIfElifElseStructure(pattern, userCode) {
    const conditions = Array.isArray(pattern.conditions) ? pattern.conditions : [];

    if (!userCode.match(/if\s+.*:[\s\S]*elif\s+.*:[\s\S]*else\s*:/)) {
        return {
            isValid: false,
            message: 'Debes usar una estructura if-elif-else completa.'
        };
    }

    for (const cond of conditions) {
        const escapedCondition = cond.condition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        if (!userCode.match(new RegExp(`(?:if|elif)\\s+${escapedCondition}\\s*:\\s*`))) {
            return {
                isValid: false,
                message: `Debes incluir la condición: ${cond.condition}.`
            };
        }
    }

    return { isValid: true };
}

// Valida condición lógica (ej. Día 9)
function validateLogicalCondition(pattern, userCode, userOutput) {
    const condition = pattern.condition || '';
    const trueOutput = pattern.true_output || '';
    const falseOutput = pattern.false_output || '';
    const caseSensitive = pattern.case_sensitive !== false;

    if (!userCode.match(/\b(and|or|not)\b/)) {
        return {
            isValid: false,
            message: 'Debes usar operadores lógicos (and, or, not).'
        };
    }

    if (condition) {
        const escapedCondition = condition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        if (!userCode.match(new RegExp(`if\\s+${escapedCondition}\\s*:\\s*`))) {
            return {
                isValid: false,
                message: `La condición debe ser: ${condition}.`
            };
        }
    }

    if (trueOutput || falseOutput) {
        const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
        const trueToCheck = caseSensitive ? trueOutput : trueOutput.toLowerCase();
        const falseToCheck = caseSensitive ? falseOutput : falseOutput.toLowerCase();
        if (!outputToCheck.includes(trueToCheck) && !outputToCheck.includes(falseToCheck)) {
            return {
                isValid: false,
                message: `La salida debe ser "${trueOutput}" o "${falseOutput}".`
            };
        }
    }

    return { isValid: true };
}

// Valida creación de lista (ej. Día 11, Día 12, Día 15)
function validateListCreation(pattern, userCode) {
    const varName = pattern.variable || '';
    const expectedElements = Array.isArray(pattern.elements) ? pattern.elements : [];
    const exactOrder = pattern.exact_order || false;

    const listRegex = new RegExp(`^${varName}\\s*=\\s*\\[([^\\]]*)\\]`, 'm');
    const match = userCode.match(listRegex);

    if (!match) {
        return {
            isValid: false,
            message: `Debes crear una lista llamada '${varName}' con corchetes [].`
        };
    }

    if (expectedElements.length > 0) {
        const elementsStr = match[1].trim();
        const userElements = elementsStr.split(',').map(e => e.trim()).filter(e => e);

        if (exactOrder) {
            for (let i = 0; i < expectedElements.length; i++) {
                const expected = String(expectedElements[i]).replace(/['"]/g, '');
                const userElement = userElements[i]?.replace(/['"]/g, '');
                if (userElement !== expected) {
                    return {
                        isValid: false,
                        message: `El elemento en la posición ${i} debe ser '${expected}'.`
                    };
                }
            }
        } else {
            for (const element of expectedElements) {
                const escapedElement = String(element).replace(/['"]/g, '');
                if (!userElements.some(e => e.replace(/['"]/g, '') === escapedElement)) {
                    return {
                        isValid: false,
                        message: `La lista debe contener el elemento '${element}'.`
                    };
                }
            }
        }
    }

    return { isValid: true };
}

// Valida acceso a lista (ej. Día 11)
function validateListAccess(pattern, userCode) {
    const varName = pattern.variable || '';
    const index = pattern.index;
    const expectedElement = pattern.expected_element;

    const accessRegex = new RegExp(`${varName}\\s*\\[${index}\\]`);
    if (!accessRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes acceder al elemento en el índice ${index} de la lista '${varName}'.`
        };
    }

    if (expectedElement) {
        const printRegex = new RegExp(`print\\s*\\(${varName}\\[${index}\\]\\)`);
        if (!printRegex.test(userCode)) {
            return {
                isValid: false,
                message: `Debes imprimir el elemento '${expectedElement}' accediendo a ${varName}[${index}].`
            };
        }
    }

    return { isValid: true };
}

// Valida llamada a método de lista (ej. Día 12)
function validateListMethodCall(pattern, userCode) {
    const varName = pattern.variable || '';
    const method = pattern.method || '';
    const argument = pattern.argument;

    const escapedArg = argument ? String(argument).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : '[^)]*';
    const methodRegex = new RegExp(`${varName}\\s*\\.${method}\\s*\\(\\s*${escapedArg}\\s*\\)`);

    if (!methodRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes usar ${varName}.${method}(${argument || ''}).`
        };
    }

    return { isValid: true };
}

// Valida bucle for (ej. Día 13, Día 23)
function validateForLoop(pattern, userCode, userOutput) {
    const iteratesOver = pattern.iterates_over || '';
    const loopType = pattern.loop_type || 'generic';
    const unpackedVars = pattern.unpacked_vars || 1;

    const escapedIteratesOver = iteratesOver.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    let loopRegex, message;

    if (loopType === 'keys') {
        loopRegex = new RegExp(`for\\s+\\w+\\s+in\\s+${escapedIteratesOver}(?:\\.keys\\(\\))?\\s*:`, 's');
        message = `Debes usar un bucle for para iterar sobre las claves del diccionario '${iteratesOver}' (ejemplo: 'for clave in ${iteratesOver}:' o 'for clave in ${iteratesOver}.keys():').`;
    } else if (loopType === 'values') {
        loopRegex = new RegExp(`for\\s+\\w+\\s+in\\s+${escapedIteratesOver}\\.values\\(\\)\\s*:`, 's');
        message = `Debes usar un bucle for para iterar sobre los valores del diccionario usando '${iteratesOver}.values()' (ejemplo: 'for valor in ${iteratesOver}.values():').`;
    } else if (loopType === 'items') {
        loopRegex = new RegExp(`for\\s+\\w+\\s*,\\s*\\w+\\s+in\\s+${escapedIteratesOver}\\.items\\(\\)\\s*:`, 's');
        message = `Debes usar un bucle for para iterar sobre los pares clave-valor del diccionario usando '${iteratesOver}.items()' con dos variables (ejemplo: 'for clave, valor in ${iteratesOver}.items():').`;
    } else {
        loopRegex = new RegExp(`for\\s+\\w+\\s+in\\s+${escapedIteratesOver}\\s*:`, 's');
        message = `Debes usar un bucle for para iterar sobre '${iteratesOver}' (ejemplo: 'for elemento in ${iteratesOver}:').`;
    }

    if (!loopRegex.test(userCode)) {
        return { isValid: false, message };
    }

    if (unpackedVars > 1) {
        const match = userCode.match(loopRegex);
        if (match) {
            const loopLine = match[0];
            const variables = loopLine.match(/for\s+((?:\w+\s*,?\s*)+)\s+in/)?.[1];
            if (variables) {
                const varCount = variables.split(',').map(v => v.trim()).filter(v => v).length;
                if (varCount !== unpackedVars) {
                    return {
                        isValid: false,
                        message: `El bucle for con '${iteratesOver}' debe desempaquetar exactamente ${unpackedVars} variables (ejemplo: 'for ${'var,'.repeat(unpackedVars-1)}var in ${iteratesOver}.items():').`
                    };
                }
            }
        }
    }

    return { isValid: true };
}

// Valida bucle for con condición (ej. Día 15)
function validateForLoopWithCondition(pattern, userCode, userOutput) {
    const iteratesOver = pattern.iterable || '';
    const condition = pattern.condition || '';
    const appendTo = pattern.append_to || '';

    const escapedIteratesOver = iteratesOver.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const escapedCondition = condition.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const loopRegex = new RegExp(`for\\s+\\w+\\s+in\\s+${escapedIteratesOver}\\s*:[\\s\\n]*\\s*if\\s+\\w+\\s*${escapedCondition}\\s*:[\\s\\n]*\\s*${appendTo}\\.append\\(`, 's');

    if (!loopRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes usar un bucle for con '${iteratesOver}' que contenga una condición 'if ${condition}' y añada elementos a '${appendTo}' usando append().`
        };
    }

    return { isValid: true };
}

// Valida salida esperada (ej. Día 3, Día 15)
function validateExpectedOutput(pattern, userOutput, expectedOutput) {
    const caseSensitive = pattern.case_sensitive !== false;

    let userText = userOutput;
    let expectedText = expectedOutput;

    if (!caseSensitive) {
        userText = userText.toLowerCase();
        expectedText = expectedText.toLowerCase();
    }

    if (userText !== expectedText) {
        return {
            isValid: false,
            message: `La salida no coincide. Se esperaba: "${expectedOutput}", pero se obtuvo: "${userOutput}".`
        };
    }

    return { isValid: true };
}

// Valida acceso a diccionario (ej. Día 21)
function validateDictionaryAccess(pattern, userCode) {
    const varName = pattern.variable || '';
    const key = pattern.key || '';

    const escapedKey = key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const accessRegex = new RegExp(`${varName}\\s*\\[\\s*['"]?${escapedKey}['"]?\\s*\\]`);

    if (!accessRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes acceder a la clave '${key}' del diccionario '${varName}' usando ${varName}['${key}'].`
        };
    }

    return { isValid: true };
}

// Valida modificación de diccionario (ej. Día 22)
function validateDictionaryModification(pattern, userCode) {
    const varName = pattern.variable || '';
    const addKey = pattern.add_key;
    const addValue = pattern.add_value;
    const modifyKey = pattern.modify_key;
    const newValue = pattern.new_value;

    if (addKey && addValue !== undefined) {
        const escapedKey = addKey.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const escapedValue = String(addValue).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const addRegex = new RegExp(`${varName}\\s*\\[\\s*['"]?${escapedKey}['"]?\\s*\\]\\s*=\\s*${escapedValue}`);

        if (!addRegex.test(userCode)) {
            return {
                isValid: false,
                message: `Debes añadir la clave '${addKey}' con valor ${addValue} al diccionario '${varName}'.`
            };
        }
    }

    if (modifyKey && newValue !== undefined) {
        const escapedKey = modifyKey.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const escapedValue = String(newValue).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const modifyRegex = new RegExp(`${varName}\\s*\\[\\s*['"]?${escapedKey}['"]?\\s*\\]\\s*=\\s*${escapedValue}`);

        if (!modifyRegex.test(userCode)) {
            return {
                isValid: false,
                message: `Debes modificar la clave '${modifyKey}' del diccionario '${varName}' con el valor ${newValue}.`
            };
        }
    }

    return { isValid: true };
}

// Valida creación de diccionario (ej. Día 21)
function validateDictionaryCreation(pattern, userCode) {
    const varName = pattern.variable || '';
    const expectedKeys = Array.isArray(pattern.contains_keys) ? pattern.contains_keys : [];

    const dictRegex = new RegExp(`^${varName}\\s*=\\s*(?:\\{|dict\\([^)]*\\))`, 'm');
    if (!dictRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes crear un diccionario llamado '${varName}' usando {} o dict().`
        };
    }

    if (expectedKeys.length > 0) {
        for (const key of expectedKeys) {
            const escapedKey = key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
            if (!userCode.match(new RegExp(`['"]${escapedKey}['"]\\s*:`))) {
                return {
                    isValid: false,
                    message: `El diccionario '${varName}' debe contener la clave '${key}'.`
                };
            }
        }
    }

    return { isValid: true };
}

// Valida salida que contiene texto (ej. Día 4, Día 20)
function validateOutputContains(pattern, userOutput) {
    const text = pattern.text || '';
    const caseSensitive = pattern.case_sensitive !== false;

    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    const textToCheck = caseSensitive ? text : text.toLowerCase();

    if (!outputToCheck.includes(textToCheck)) {
        return {
            isValid: false,
            message: `La salida debe contener: "${text}".`
        };
    }

    return { isValid: true };
}

// Valida definición de función (ej. Día 26, Día 27, Día 28, Día 30)
function validateFunctionDefinition(pattern, userCode) {
    const funcName = pattern.function_name || '';
    const parameters = Array.isArray(pattern.parameters) ? pattern.parameters : [];
    const hasReturn = pattern.has_return || false;
    const containsPrint = pattern.contains_print || false;

    const paramsRegex = parameters.length > 0 ? `\\(${parameters.join('\\s*,\\s*')}\\)` : '\\(\\)';
    const funcRegex = new RegExp(`def\\s+${funcName}\\s*${paramsRegex}\\s*:\\s*`, 's');

    if (!funcRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes definir una función llamada '${funcName}' con ${parameters.length} parámetro(s): ${parameters.join(', ')}.`
        };
    }

    if (hasReturn && !userCode.match(/\breturn\b/)) {
        return {
            isValid: false,
            message: `La función '${funcName}' debe incluir una instrucción return.`
        };
    }

    if (containsPrint && !userCode.match(/\bprint\s*\(/)) {
        return {
            isValid: false,
            message: `La función '${funcName}' debe incluir una instrucción print().`
        };
    }

    return { isValid: true };
}

// Valida llamada a función (ej. Día 27, Día 28, Día 30)
function validateFunctionCall(pattern, userCode, userOutput) {
    const funcName = pattern.function_name || '';
    const arguments = Array.isArray(pattern.arguments) ? pattern.arguments : [];
    const expectedOutput = pattern.expected_output;

    const argsRegex = arguments.length > 0 ? `\\(${arguments.join('\\s*,\\s*')}\\)` : '\\(\\)';
    const callRegex = new RegExp(`${funcName}\\s*${argsRegex}`);

    if (!callRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes llamar a la función '${funcName}' con los argumentos: ${arguments.join(', ')}.`
        };
    }

    if (expectedOutput) {
        const caseSensitive = pattern.case_sensitive !== false;
        const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
        const expectedToCheck = caseSensitive ? expectedOutput : expectedOutput.toLowerCase();
        if (!outputToCheck.includes(expectedToCheck)) {
            return {
                isValid: false,
                message: `La salida de la función '${funcName}' debe contener: "${expectedOutput}".`
            };
        }
    }

    return { isValid: true };
}

// Valida llamada a método (ej. Día 17, Día 18)
function validateMethodCall(pattern, userCode) {
    const varName = pattern.on_variable || '';
    const method = pattern.method || '';
    const argument = pattern.argument;

    const escapedArg = argument ? String(argument).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : '[^)]*';
    const methodRegex = new RegExp(`${varName}\\s*\\.${method}\\s*\\(\\s*${escapedArg}\\s*\\)`);

    if (!methodRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes llamar al método '${method}' en la variable '${varName}'${argument ? ` con el argumento '${argument}'` : ''}.`
        };
    }

    return { isValid: true };
}

// Valida bloque try-except (ej. Día 29, Día 30)
function validateTryExceptBlock(pattern, userCode, userOutput) {
    const exceptionType = pattern.exception_type || '';
    const expectedOutput = pattern.expected_output || '';
    const caseSensitive = pattern.case_sensitive !== false;

    if (!userCode.match(/try\s*:[^\n]*[\s\S]*except\s+[^\n]*:/)) {
        return {
            isValid: false,
            message: 'Debes usar una estructura try-except completa.'
        };
    }

    if (exceptionType) {
        const exceptRegex = new RegExp(`except\\s+${exceptionType}\\s*:`);
        if (!exceptRegex.test(userCode)) {
            return {
                isValid: false,
                message: `Debes capturar específicamente el error '${exceptionType}' en el bloque except.`
            };
        }
    }

    if (expectedOutput) {
        const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
        const expectedToCheck = caseSensitive ? expectedOutput : expectedOutput.toLowerCase();
        if (!outputToCheck.includes(expectedToCheck)) {
            return {
                isValid: false,
                message: `La salida debe contener: "${expectedOutput}".`
            };
        }
    }

    return { isValid: true };
}

// Valida clasificación de notas (ej. Día 10)
function validateGradeClassification(pattern, userCode, userOutput) {
    const ranges = Array.isArray(pattern.ranges) ? pattern.ranges : [];
    const caseSensitive = pattern.case_sensitive !== false;

    if (!userCode.match(/if\s+.*:[\s\S]*elif\s+.*:/)) {
        return {
            isValid: false,
            message: 'Debes usar una estructura if-elif para clasificar las notas.'
        };
    }

    const outputToCheck = caseSensitive ? userOutput : userOutput.toLowerCase();
    const validGrades = ranges.map(r => caseSensitive ? r.grade : r.grade.toLowerCase());
    if (!validGrades.some(grade => outputToCheck.includes(grade))) {
        return {
            isValid: false,
            message: `La salida debe mostrar una calificación válida: ${validGrades.join(', ')}.`
        };
    }

    return { isValid: true };
}

// Valida comentario explicativo (ej. Día 14)
function validateCommentExplanation(pattern, userCode) {
    const requiredKeywords = Array.isArray(pattern.required_keywords) ? pattern.required_keywords : [];

    for (const keyword of requiredKeywords) {
        const commentRegex = new RegExp(`#.*${keyword}.*`, 'i');
        if (!commentRegex.test(userCode)) {
            return {
                isValid: false,
                message: `Debes incluir un comentario que contenga la palabra "${keyword}".`
            };
        }
    }

    return { isValid: true };
}

// Valida creación de lista vacía (ej. Día 15)
function validateEmptyListCreation(pattern, userCode) {
    const varName = pattern.variable || '';

    const listRegex = new RegExp(`^${varName}\\s*=\\s*\\[]`, 'm');
    if (!listRegex.test(userCode)) {
        return {
            isValid: false,
            message: `Debes crear una lista vacía llamada '${varName}' usando [].`
        };
    }

    return { isValid: true };
}

// Valida salida de diccionario (ej. Día 25)
function validateDictionaryOutput(rules, userOutput) {
    const expectedKeys = Array.isArray(rules.expected_keys) ? rules.expected_keys : [];
    const expectedValues = rules.expected_values || {};
    const caseSensitive = rules.case_sensitive !== false;

    try {
        let dictString = userOutput.trim();
        const dictMatch = dictString.match(/\{[^}]+\}/);
        if (!dictMatch) {
            return {
                isCorrect: false,
                message: `No se encontró un diccionario válido en la salida.`
            };
        }

        let jsonString = dictMatch[0]
            .replace(/'/g, '"')
            .replace(/True/g, 'true')
            .replace(/False/g, 'false')
            .replace(/None/g, 'null');

        const userDict = JSON.parse(jsonString);

        for (const key of expectedKeys) {
            const keyToCheck = caseSensitive ? key : key.toLowerCase();
            if (!(keyToCheck in userDict)) {
                return {
                    isCorrect: false,
                    message: `Falta la clave '${key}' en el diccionario.`
                };
            }
        }

        for (const [key, value] of Object.entries(expectedValues)) {
            const keyToCheck = caseSensitive ? key : key.toLowerCase();
            if (userDict[keyToCheck] !== value) {
                return {
                    isCorrect: false,
                    message: `La clave '${key}' debe tener el valor ${value}, pero se obtuvo ${userDict[keyToCheck]}.`
                };
            }
        }

        return { isCorrect: true };
    } catch (error) {
        return {
            isCorrect: false,
            message: `Error al analizar la salida. Asegúrate de imprimir un diccionario válido: ${error.message}.`
        };
    }
}

// Valida múltiples salidas (ej. Día 19)
function validateMultipleOutputs(rules, userOutput) {
    const expectedOutputs = Array.isArray(rules.expected_outputs) ? rules.expected_outputs : [];
    const caseSensitive = rules.case_sensitive !== false;

    const userLines = userOutput.split('\n').filter(line => line.trim() !== '');
    if (userLines.length !== expectedOutputs.length) {
        return {
            isCorrect: false,
            message: `Se esperaban ${expectedOutputs.length} líneas, pero se obtuvieron ${userLines.length}.`
        };
    }

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
                message: `Línea ${i + 1} incorrecta. Se esperaba: "${expected}", pero se obtuvo: "${userLine}".`
            };
        }
    }

    return { isCorrect: true };
}

// Obtiene el código del usuario
function getUserCode() {
    return document.getElementById('code-editor')?.value || '';
}