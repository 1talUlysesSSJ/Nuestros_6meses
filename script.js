const anniversaryDate = "2026-04-20T00:00:00"; 
const displayAnniversary = "20 de octubre de 2026"; 

const memories = [
  { month: "MES 01", title: "🌙 Cuando todo comenzó", date: "ABRIL · 2026", text: "Todo comenzó en abril, cuando la vida hizo que nuestros caminos se cruzaran de una forma que ninguno de los dos imaginaba. Nos conocimos por Facebook Parejas, sin saber que aquella conversación sería el comienzo de algo tan bonito para nosotros. En ese momento todavía no sabíamos todo lo que nos esperaba, las risas que compartiríamos, los momentos que guardaríamos ni todo lo que llegaríamos a significar el uno para el otro. Y míranos ahora, Jasmin. Quién diría que de una simple coincidencia llegaríamos a construir nuestra propia historia. Si pudiera volver a abril, volvería a elegir conocerte, volvería a iniciar aquella conversación y volvería a dar ese primer paso que, sin saberlo, me acercaría a ti. Porque abril no fue solamente el mes en el que te conocí; fue el mes en el que comenzó nuestra historia. ❤️" },
  { month: "MES 02", title: "✨ Pequeñas costumbres", date: "MAYO · 2026", text: "A veces pienso que nuestros momentos más bonitos no son solamente las grandes fechas, sino también todas esas pequeñas cosas que hemos vivido juntos y que poco a poco se han vuelto recuerdos especiales para mí. Como cuando vamos al cine y compartimos un rato juntos, cuando me invitas a comer, cuando te quedaste a dormir conmigo y pude disfrutar tenerte cerquita, compramos unas maruchans con unos esquites, tambien me enseñaste a medio bailar y vimos peliculas. También recuerdo con mucho cariño el día en que te di tu anillo de promesa, porque para mí significó mucho poder entregarte algo que representa lo que quiero construir contigo. Me hace feliz recordar cuando estuviste conmigo en mi cumpleaños y me compraste boba tea y tambien mi cajita de cumpleaños con cartitas dibujos, las pulseras y mi sudadera que es una de mis favoritas, cuando me compraste aquellas paletas de figuritas la tuya una de simi y el mio de chuki el cual se me cayo y me tuviste que comprar otra mas jeje, cuando me invitaste a una fiesta con tu familia y cuando me invitaste a ir al gimnasio contigo. Son detalles que tal vez para alguien más sean cosas normales, pero para mí son momentos que guardo con mucho cariño porque los viví contigo. Y es que, Jasmin, no necesito que todos nuestros días sean extraordinarios. Me gusta compartir contigo las cosas sencillas, salir, comer, reírnos, acompañarnos y seguir descubriendo cosas nuevas juntos. Porque al final, son todas esas pequeñas cosas las que hacen que nuestra historia sea nuestra. 💗" },
  { month: "MES 03", title: "💗 Un recuerdo que me hace sonreír", date: "JUNIO · 2026", text: "Si hay algo que me encanta de nosotros, es que tenemos nuestra propia forma de querernos, nuestras bromas que probablemente nadie más entendería y esos pequeños momentos que hacen que estar contigo sea tan diferente. Como cuando dices “¿qué pedo?” y yo te digo el que se saco con el dedo jejeje, cuando nos hacemos calzón chino mutuamente y terminamos con el calzon metido en la raya jsjsjs, o cuando empecé a decirte mamol o maramor, apodos que salieron por parte de robleis con su, pero que ahora forman parte de nosotros. JAJAJA. También están esos momentos en el cerro, cuando vamos simplemente a sentarnos, nos ponemos a platicar de cualquier cosa, nos besamos y nos abrazamos sin que importe cuánto tiempo pase. Esos ratitos en los que puedo tenerte cerquita y olvidarme de todo lo demás. Y bueno, tampoco puedo olvidar nuestras muestras de cariño, nuestros besos que a veces empiezan tranquilos y terminan en algo más, porque contigo hasta la manera de molestarnos o de demostrarnos cariño tiene algo especial. Creo que eso es lo que más me gusta de nosotros: que puedo reírme contigo por las cosas más tontas, hablar de cualquier cosa, abrazarte, besarte y simplemente ser yo mismo a tu lado. Jasmin, tenemos tantas pequeñas locuras que, si alguien nos preguntara por qué nos reímos, seguramente tendríamos que decir: “Tú no entenderías”. Y me encanta que tengamos un mundo que solo nosotros entendemos. ❤️" },
  { month: "MES 04", title: "🫶 Cosas que fui conociendo de ti", date: "JULIO · 2026", text: "Con el tiempo fui descubriendo muchas cosas de ti, Jasmin, cosas que quizá al principio no conocía y que hoy hacen que te quiera todavía más.Descubrí que detrás de esa forma tan tuya de ser hay una niña que también necesita cariño, atención, comprensión y alguien que la haga sentir segura. Conocí tu manera de demostrar amor, tus ocurrencias, tus bromas, tus enojos, tus risas y todas esas pequeñas cosas que te hacen ser tú. También fui conociendo tus sueños, tus metas y esa parte de ti que quiere salir adelante, estudiar y convertirse en una gran criminóloga. Me gusta ver esa parte de ti que se esfuerza por lo que quiere, incluso cuando las cosas no son tan fáciles. Aprendí que te gusta compartir conmigo hasta las cosas más sencillas, que podemos pasar un buen rato haciendo cualquier tontería y que no siempre necesitamos un plan especial para disfrutar de estar juntos. Pero, sobre todo, he ido conociendo a la persona que eres cuando me dejas acercarme a ti, con tus días buenos y tus días difíciles, con tus inseguridades y tus fortalezas. Y quiero seguir conociéndote, porque sé que todavía hay muchas cosas de ti que me faltan por descubrir. No quiero quererte solamente por las cosas bonitas que conozco de ti, sino también aprender a comprenderte, escucharte y acompañarte cuando las cosas no estén tan bien. Porque, Jasmin, enamorarme de ti no significa que ya lo sepa todo sobre ti. Significa que quiero seguir descubriéndote, incluso cuando pasen los años, y encontrar nuevas razones para elegirte cada día. ❤️" },
  { month: "MES 05", title: "❤️‍🩹 Aprender también es querernos", date: "AGOSTO · 2026", text: "Jasmin, si algo he aprendido estando contigo es que amar a alguien no solamente significa darle besos, abrazos, decirle que la amas o compartir momentos bonitos. También significa aprender a cuidar sus sentimientos, escuchar lo que le duele y entender que nuestras acciones pueden hacer feliz a la persona que queremos, pero también pueden lastimarla. Contigo he vivido momentos que guardo con muchísimo cariño, desde nuestras salidas al cine, nuestras bromas tontas, los ratitos en el cerro y jugar videojuegos juntos, hasta esos momentos en los que simplemente nos abrazamos y parece que no necesitamos nada más. Pero también he aprendido que una relación no se construye únicamente con recuerdos bonitos, sino con la manera en que nos tratamos cuando las cosas se complican. Sé que he cometido errores y que hubo momentos en los que no supe cuidar como debía lo que teníamos. Hubo cosas que me pediste porque te hacían sentir insegura y que no tomé con la seriedad que merecían. No quiero justificarme ni hacer como si nada hubiera pasado, porque sé que quererte también significa hacerme responsable de lo que hago y de cómo te afecta. He aprendido que decirte que te amo no es suficiente si mis acciones no te hacen sentir ese amor. Que la confianza no se puede exigir ni recuperar solamente con promesas, sino que se construye poco a poco, siendo sincero, cumpliendo mi palabra y demostrando con hechos que puedo hacerlo mejor. También he aprendido que no quiero que tengas que guardarte lo que sientes por miedo a cómo pueda reaccionar. Quiero aprender a escucharte, incluso cuando lo que tengas que decirme sea difícil para mí. Quiero que podamos hablar de nuestras preocupaciones, de nuestros miedos y de las cosas que necesitamos mejorar, sin olvidar que somos dos personas que todavía están aprendiendo a construir una relación. No te voy a prometer que nunca nos equivocaremos, porque sé que somos humanos y que todavía tenemos mucho por aprender. Pero sí quiero esforzarme por no repetir los mismos errores, por ser más consciente de mis decisiones y por cuidar la confianza que me das. Mi pequeña Jas, quiero que algún día podamos mirar atrás y reconocer no solamente todas las veces que nos reímos, nos besamos y fuimos felices, sino también todo lo que aprendimos para llegar a ser mejores el uno para el otro. Porque quererte también es aprender, reconocer cuando me equivoco y cambiar aquello que puede lastimarte. No quiero que tengas que creer en mis palabras solamente porque te las digo; quiero que, con el tiempo, puedas ver en mis acciones que de verdad estoy aprendiendo. Te amo, y quiero seguir construyendo contigo una relación en la que los dos podamos sentirnos queridos, escuchados y seguros. ❤️" },
  { month: "MES 06", title: "💞 Aquí estamos, en el presente", date: "OCTUBRE · 2026", text: "Mi pequeña Jas, hoy miro todo lo que hemos vivido y me cuesta creer que ya estamos llegando a nuestros seis meses juntos. Parece que fue ayer cuando nos conocimos por Facebook Parejas, sin imaginar todo lo que terminaríamos compartiendo. Y ahora, después de tantas pláticas, salidas al cine, bromas tontas, partidas de videojuegos, momentos bonitos, besos, abrazos y recuerdos que poco a poco se han vuelto nuestros, aquí seguimos, escribiendo nuestra historia. Para mí, llegar a estos seis meses significa mucho más que cumplir otra fecha juntos. Significa haber compartido contigo una parte de nuestras vidas, haber conocido más de ti y permitirte conocer más de mí. Significa tener recuerdos que me sacan una sonrisa cuando los pienso y saber que todavía nos quedan muchísimas cosas por vivir. No voy a decirte que todo ha sido perfecto, porque los dos sabemos que no es así. Hemos tenido momentos bonitos, pero también situaciones que nos han hecho pensar, sentir y aprender. Sé que he cometido errores y que hay cosas que todavía debo mejorar, especialmente en la manera en que cuido tu confianza y tus sentimientos. No quiero que este aniversario sea solamente una fecha bonita o una oportunidad para decirte cosas que suenen bien; quiero que también represente mi intención de hacer las cosas mejor y demostrarte con acciones que lo nuestro me importa. Hoy quiero seguir construyendo contigo una relación en la que podamos reírnos por cualquier tontería, hablar durante horas, jugar videojuegos, salir a conocer lugares, compartir nuestros gustos y disfrutar hasta de los días más normales. Quiero seguir acompañándote en tus metas, verte crecer como persona y estar ahí para celebrar cada logro que consigas en tu camino para convertirte en una gran criminóloga. También quiero que podamos hablar con sinceridad, decirnos lo que sentimos y aprender a resolver las cosas sin hacernos daño. Quiero cuidar lo que tenemos, respetar nuestros acuerdos y entender que la confianza se demuestra todos los días, no solamente cuando tenemos miedo de perder algo. Y sí, Jas, también quiero seguir soñando contigo. Imaginar más cumpleaños juntos, más salidas, más fotografías, más bromas que solamente nosotros entendamos, más tardes de salidas y muchos otros aniversarios. No sé exactamente cómo será cada parte del camino, pero sí sé que quiero esforzarme por construir algo bonito y sano contigo. Gracias por formar parte de mi vida, por cada momento que hemos compartido y por todas esas pequeñas cosas que quizá parecen normales, pero que para mí tienen un significado especial porque las vivo contigo. Hoy no quiero celebrar solamente los seis meses que llevamos juntos; quiero celebrar todo lo que hemos vivido, lo que estamos aprendiendo y la oportunidad de seguir escribiendo nuestra historia. Te amo, mi pequeña Jas. Feliz sexto mes, mi amor. Todavía nos quedan muchos recuerdos por crear, muchos lugares por conocer y muchas versiones de nosotros mismos por descubrir. Y yo quiero seguir conociéndolas a tu lado. ❤️" }
];

const photos = [
  {
    src: "assets/fotos/foto-1.jpeg",
    title: "Mi lugar seguro 🫂❤️",
    caption: "SERE TU LUGAR SEGURO, Recuerdo mucho este momento porque yo estaba muy mal y terminé llorando, pero tú estuviste ahí para mí. Me diste tu pecho para que pudiera acurrucarme, tranquilizarme y sentir que, por un ratito, todo estaría bien. Me diste muchos besitos y me hiciste sentir querido justo cuando más lo necesitaba. 🥹❤️ Gracias por abrazarme, por dejarme llorar contigo y por darme ese cariño que me ayudó a sentirme más tranquilo. A veces no necesito que soluciones mis problemas ni que encuentres las palabras perfectas, mi pequeña Jas; a veces solamente necesito tus abrazos, tus besos y sentirte cerquita de mí. Ese día me recordaste lo bonito que es tener a alguien con quien puedo bajar la guardia y mostrarme tal como soy. Para mí, tú eres uno de esos lugares donde puedo encontrar paz cuando todo se me hace difícil. Te amo, mi pequeña Jas. ❤️‍🩹",
    alt: "Un momento en el que Jasmin me abrazó y me dio consuelo"
  },
  {
    src: "assets/fotos/foto-2.jpeg",
    title: "Nuestra noche juntitos ❤️‍🔥",
    caption: "SOLO TE VEO A TI, ¿Cómo olvidar el día que te quedaste a dormir conmigo? Comimos nuestras Maruchas con esquites, me enseñaste a bailar y vimos un montón de películas, entre ellas Harry Potter y La princesa y el sapo. También tuvimos nuestros momentitos de pareja, con nuestro mañanero, el de la tarde y el de la noche JAJAJA, jijos. 🙈❤️‍🔥 Fue un día lleno de risas, besos, cariño y momentos que solo tú y yo entendemos. De esos días que quisiera volver a vivir contigo, porque no se trata solamente de lo que hicimos, sino de tenerte conmigo y disfrutar cada segundo a tu lado. 💗",
    alt: "Un recuerdo especial de nosotros pasando la noche juntos"
  },
  {
    src: "assets/fotos/foto-3.jpeg",
    title: "Mi Gwen y yo, tu Miles 🕷️💗",
    caption: "COMBINAS MUY BIEN CONMIGO, Uno de esos recuerdos que me sacan una sonrisa cada vez que lo pienso. Cuando combinamos nuestros outfits para ir a ver la película de Spider-Man y fuimos como Miles y Gwen. 🕸️❤️ Me encantó que pudiéramos compartir algo así, vestirnos combinados y sentir que éramos nuestros propios Miles y Gwen. JAJAJA, mi pequeña Gwen, tú no sabes lo bonito que fue para mí vivir ese momento contigo. Porque no solamente fuimos a ver una película que nos gustaba, sino que creamos otro recuerdo de esos que me encanta guardar de nosotros. Y si pudiera repetir ese día, volvería a elegirte como mi Gwen una y mil veces. 🥹💗",
    alt: "Combinando sus outfits como Miles Morales y Gwen Stacy"
  },
  {
    src: "assets/fotos/foto-4.jpeg",
    title: "Mi mundo 👀❤️",
    caption: "TUS OJITOS SON MI VISTA FAV, JAJAJA, nosotros juntando los ojos para sacar la foto del reel que nos gusto y haciendo nuestras caras raras. 😂❤️ Una de esas tonterías que me gusta hacer contigo y que siempre me sacan una sonrisa. 🫶🏻👀",
    alt: "Sus ojito chulos"
  },
  {
    src: "assets/fotos/foto-5.jpeg",
    title: "Un recuerdo XD JAJAJA 🍭",
    caption: "AMO QUE AMES MIS MENSADAS, JAJAJA, cuando compraste tu paleta de simi y mi paleta de Chucky porque no había de Pible y por mi mensada se me terminó cayendo. 😭😂 Y todavía me tuviste que comprar otra, pobrecita de ti JAJAJA. Gracias por aguantar mis tonterías y por esos detallitos que, aunque parezcan pequeños, me gusta recordar porque vienen de ti. ❤️",
    alt: "El recuerdo de la paleta de Chucky que Jasmin me compró"
  },
  {
    src: "assets/fotos/foto-6.jpeg",
    title: "Mi cumpleaños favorito 🎂❤️",
    caption: "HARE ESPECIALES TUS CUMPLEAÑOS, Mi cumpleaños del 14 de mayo, uno de los días más bonitos que he vivido contigo. 🥹💗 Me regalaste una cajita llena de cartas, dibujos, una pulserita para los dos, una sudadera personalizada y un montón de chucherías de mis favoritas. También me llevaste por un boba tea y me hiciste sentir muy especial con cada detallito que preparaste para mí. Y bueno, después también tuvimos nuestros momentitos de pareja en el hotel JAJAJA, tú sabes. 🙈❤️‍🔥 La verdad, ese día fue el mejor cumpleaños de mi vida, no solamente por todos los regalos y lo que hicimos, sino porque pude compartirlo contigo. Gracias por tomarte el tiempo de preparar tantas cosas para mí y por hacer que ese 14 de mayo se quedara guardado en mi corazón. Te amo, mi pequeña Jas. 🫶🏻❤️",
    alt: "Jasmin acompañándome en mi cumpleaños del 14 de mayo"
  },
  {
  src: "assets/fotos/foto-7.jpeg",
  title: "Nuestra promesa 💍❤️",
  caption: "ACEPTO, El día que te di tu anillo de promesa, mi amor. 🥹💗 Lo elegí porque quería darte algo que representara lo que siento por ti y las ganas que tengo de seguir construyendo mi vida a tu lado. Para mí no es solamente un anillo, sino una pequeña forma de decirte que me imagino un futuro contigo, que algún día me gustaría casarme contigo y que quiero seguir eligiéndote mientras construimos nuestra historia. Sé que todavía nos quedan muchas cosas por vivir y aprender, pero me hace mucha ilusión pensar que algún día podamos mirar atrás y recordar este momento antes de dar ese paso tan bonito. Te amo, mi pequeña Jas, y espero que algún día podamos cumplir ese sueño de convertirnos en esposos. 💍🫶🏻❤️",
  alt: "El anillo de promesa que le regalé a Jasmin"
  },
];

const letterChapters = [
  { title: "Jas, feliz medio año, mi niña.", paragraphs: [
    "No sabía muy bien cómo empezar esta carta, porque tengo muchas cosas que quisiera decirte y a veces me cuesta encontrar las palabras correctas. Quería hacerte algo diferente, algo que no fuera solamente un mensaje que lees en unos minutos y después se pierde entre las conversaciones. Quería preparar un lugar que pudieras visitar, mirar nuestras fotos, escuchar música y leer con calma todo lo que quiero decirte.",
    "Hoy cumplimos seis meses de novios. Seis meses desde que empezamos esta historia que, aunque no siempre haya sido fácil, significa mucho para mí. No quiero fingir que todo ha sido perfecto ni escribirte como si no hubiéramos pasado por momentos complicados. Prefiero hablarte con sinceridad, porque tú mereces algo más que palabras bonitas."
  ]},
  { title: "Lo bonito que has traído a mi vida. 💗🫶🏻🌷✨🥹❤️", paragraphs: [
    "Me gusta pensar en todas esas cosas pequeñas que forman parte de nosotros. Las conversaciones que se alargan, las bromas que quizá nadie más entendería, las veces que jugamos juntos, las canciones, las fotos y esos momentos que desde fuera podrían parecer normales, pero que para mí tienen un significado especial porque los compartí contigo.",
    "Me gusta conocerte poco a poco, aprender qué cosas te hacen reír, qué te emociona, qué te preocupa y qué sueños llevas contigo. Me gusta que seas tú, con tu forma de pensar, tus gustos, tus ocurrencias y también con los días en los que no tienes tantas ganas de hablar o de sonreír. No espero que estés bien todo el tiempo ni que tengas que esconder lo que sientes para hacerme sentir cómodo.",
    "Jas, una de las cosas más bonitas de tenerte en mi vida es que me gusta compartir contigo hasta las cosas más simples de mi día. Me gusta saber cómo te fue, escuchar tus historias y hablar de cualquier tontería que se nos ocurra. A veces terminamos diciendo puras mensadas JAJAJA, pero justamente eso me gusta de nosotros: que podemos ser nosotros mismos sin tener que fingir nada.",
    "Me encantan nuestras bromas, cuando me dices ¿qué pedo? y te digo el que te saco con el dedo, o cuando te digo mamol y maramor. JAJAJA, quizá no sean las muestras de amor más románticas, pero son parte de nuestra forma tan peculiar de querernos y son cosas que hacen que nuestra relación se sienta muy nuestra.",
    "También me hace feliz conocer tus gustos, descubrir nuevas cosas de ti y saber qué es lo que te ilusiona. Quiero seguir aprendiendo de ti y acompañarte en tus metas, especialmente en tu camino para convertirte en criminóloga. Me gustaría verte cumplir todo lo que te propones, celebrar tus logros y estar a tu lado cuando las cosas no salgan como esperabas.",
    "Sé que todavía tenemos mucho que aprender como pareja. No todo será perfecto, pero quiero que sepamos escucharnos, respetarnos y construir una relación en la que ambos podamos sentirnos seguros. Quiero demostrarte con mis acciones que puedes contar conmigo y que mi amor por ti también se refleja en cómo te trato cada día.",
    "Me emociona pensar en todo lo que todavía nos falta vivir: nuevas bromas, canciones que nos recuerden a nosotros, partidas de videojuegos y momentos que algún día recordaremos con una sonrisa. Y entre todos esos planes, hay uno que me ilusiona especialmente: seguir construyendo un futuro contigo.",
    "Gracias por compartir estos seis meses conmigo, mi pequeña Jas. Me gusta la persona que eres y me hace feliz tener la oportunidad de conocerte cada día un poquito más. Te amo, y espero que todavía nos queden muchísimas historias por escribir juntos. ❤️"
  ]},
  { title: "Los recuerdos que me quiero llevar conmigo. 🎞️📸💗🫂✨❤️", paragraphs: [
    "Cuando miro hacia atrás, me doy cuenta de que una relación se construye con muchísimas cosas pequeñas. No solo con aniversarios o fechas importantes, sino también con los días tranquilos, las conversaciones sin tema, las partidas en las que nos reímos, las canciones que compartimos y las veces que simplemente queremos tener al otro cerca.",
    "Quiero guardar esos recuerdos sin convertirlos en una obligación de que todo vuelva a ser exactamente como antes. Lo que vivimos es parte de nuestra historia, y lo que hagamos a partir de ahora también será parte de ella. Me gustaría que siguiéramos creando momentos que nos hagan bien, que podamos recordar con una sonrisa y que se sientan seguros para los dos.",
  ]},
  { title: "También quiero reconocer lo que hice mal. ❤️‍🩹🥀😔🤍🫂", paragraphs: [
    "No quiero usar nuestro aniversario para hacer como si las cosas difíciles no hubieran pasado. Sé que he cometido errores y que algunas de mis decisiones te lastimaron y afectaron la confianza que tenías en mí. Tú me expresaste cosas que te hacían sentir insegura y hubo momentos en los que no te escuché ni actué con el cuidado que merecía nuestra relación. No quiero justificarlo ni hacer que parezca que tu dolor fue un problema que tú debías resolver sola.",
    "Entiendo que decir 'perdón' no hace que algo deje de doler automáticamente. Tampoco quiero pedirte que confíes en mí solo porque hoy te escriba una carta bonita. La confianza se construye con tiempo, con honestidad y con decisiones que se mantienen incluso cuando nadie está mirando. Sé que me corresponde demostrarte con hechos que estoy tomando en serio lo que pasó.",
    "No puedo cambiar lo que ya hice, pero sí puedo hacerme responsable de lo que hago de aquí en adelante. Quiero aprender a escuchar antes de ponerme a la defensiva, hablar con sinceridad aunque una conversación sea difícil y respetar los límites que acordemos. También quiero entender que una relación sana necesita que los dos podamos expresar lo que sentimos, hablar sin miedo y llegar a acuerdos que respeten a ambos.",
    "No escribo esto para que te sientas obligada a perdonarme hoy, ni para que tengas que tranquilizarme o decirme que todo está bien. Tus sentimientos tienen su propio tiempo. Si algo sigue doliendo, quiero aprender a escucharlo sin presionarte para que lo superes más rápido de lo que puedes."
  ]},
  { title: "Lo que quiero demostrarte, no solamente prometerte. ❤️‍🩹🫂🔐🤍", paragraphs: [
    "Quiero ser una pareja más consciente de cómo mis decisiones afectan a la persona que tengo a mi lado. Quiero que mis palabras coincidan con lo que hago, que no tengas que estar buscando respuestas a cosas que pude haberte contado con honestidad y que podamos hablar incluso cuando tengamos miedo de que una conversación termine siendo difícil.",
    "Quiero aprender a cuidar tu confianza con acciones constantes: decir la verdad, no esconder cosas importantes, respetar los acuerdos que hagamos y reconocer mis errores sin convertir la conversación en una discusión sobre quién tiene más culpa. Si vuelvo a equivocarme, quiero ser capaz de reconocerlo y corregirlo, no esperar a que el problema crezca.",
    "También quiero que lo nuestro sea un lugar donde los dos podamos crecer. No quiero que tengas que cargar tú sola con mis emociones, ni que yo espere que tú arregles lo que me corresponde trabajar a mí. Quiero aprender a comunicarme mejor y a hacerme responsable de mis decisiones. No voy a pedirte que creas en un cambio solo porque lo diga en esta carta: quiero que puedas observarlo con el tiempo y decidir por ti misma qué sientes.",
    "No te prometo una relación sin desacuerdos, porque eso no sería real. Te prometo que quiero esforzarme por resolverlos con respeto, sin mentiras, sin minimizar lo que sientes y sin tratar el amor como una excusa para dejar de trabajar en mí."
  ]},
  { title: "Lo que deseo para nosotros. ♾️🏡💍✨❤️", paragraphs: [
    "Cuando pienso en el futuro, me ilusiona seguir compartiendo cosas contigo: conocer más de tus sueños, celebrar tus logros, acompañarte en tus días difíciles, reírnos de tonterías y descubrir nuevos lugares, juegos, canciones y recuerdos. Me gusta imaginar todo lo que todavía podríamos vivir, pero también sé que el futuro se construye con lo que hacemos en el presente.",
    "Quiero apoyarte en lo que te importa y verte avanzar hacia tus metas. Quiero que sepas que valoro tu esfuerzo, tu manera de ser y todo lo que te hace única. Deseo que puedas sentirte querida por quien eres, no porque tengas que demostrarme nada ni porque tengas que ser fuerte todos los días.",
    "Me gustaría que siguiéramos eligiéndonos desde el cariño y la libertad, no desde el miedo a perder al otro. Que podamos hablar con honestidad, cuidar nuestra individualidad y hacer acuerdos que nos hagan sentir respetados. Que el amor se note en los detalles, en el respeto y en la forma en que nos tratamos cuando las cosas no salen como esperábamos."
  ]},
  { title: "Gracias por estos seis meses, Jasmin. 💗🫂💍❤️‍🩹♾️", paragraphs: [
    "Gracias por los momentos que hemos compartido, por las cosas que me has enseñado y por todo lo que he podido conocer de ti. Gracias por las veces que me has dado cariño, por las risas, por las canciones y por esos recuerdos que ahora forman parte de mi historia. No doy por sentado lo que haces ni el lugar que has tenido en mi vida.",
    "Quiero que esta página sea un recuerdo bonito de nuestro medio año, pero también un recordatorio para mí: quererte significa hacerme responsable de cómo te trato. No quiero que estas palabras se queden solo en una pantalla. Quiero que, cuando pase el tiempo, puedas mirar hacia atrás y reconocer acciones reales que acompañaron lo que te escribí.",
    "Feliz seis meses, mi Jas. Espero que encuentres aquí un poquito de todo lo que quería decirte. Te quiero muchísimo y deseo que lo que construyamos juntos sea cada vez más sincero, respetuoso y bonito para los dos. Gracias por ser tú y por formar parte de mi vida.",
    "Con cariño, con sinceridad y con ganas de hacerlo mejor,\nUlises."
  ]}
];

const songs = [
    { 
    title: "Nuestra primera canción", 
    artist: "Morat /A Dónde Vamos",
    src: "assets/musica/Morat - A Dónde Vamos (Video Oficial).mp3",
    note: "Esta canción me hace pensar en ti, Jas, y en todas esas aventuras que todavía nos faltan por vivir juntos. No importa si no sabemos exactamente a dónde vamos, mientras pueda descubrirlo a tu lado. ❤️",
    lyrics: [
      { time: 1, text: "♪ (Música) ♪" },
      { time: 4, text: "Recuerdo verte de perfil, perdona si no fui sutil." },
      { time: 10, text: "Era verano y yo moría de sed, cuando te vi solo quise beber,\nbeber de ti, de ti, de ti, y emborracharme así, de ti, y." },
      { time: 23, text: "No hay trago que sepa tan bien como tus labios en Madrid." },
      { time: 29, text: "Y no sé, no sé, no sé, cómo pude convencerte." },
      { time: 36, text: "Y no sé, no sé, no sé, fue el destino o fue la suerte." },
      { time: 42, text: "Que siendo un extraño, te dije te amo,\nte he estado buscando por más de 1.000 años, y tú respondiste, ¿a dónde vamos?" },
      { time: 53, text: "Contra las apuestas aquí nos quedamos,\nviviendo de fiesta después del verano en el que respondiste, ¿a dónde vamos?" },
      { time: 67, text: "♪ (Música) ♪" },
      { time: 68, text: "Y aunque la historia no estaba prevista,\nsomos la prueba de que existe amor a primera vista." },
      { time: 76, text: "No dejo de mirarte ni un segundo,\ncuando tú estás desaparece el mundo." },
      { time: 82, text: "Mejores noches yo no creo que existan,\ny aunque me pida otra cerveza solo me interesa beber de ti, de ti, de ti,\nemborracharme así de ti." },
      { time: 95, text: "Porque no hay trago que sepa tan bien como tus labios en Madrid." },
      { time: 102, text: "Y no sé, no sé, no sé cómo pude convencerte." },
      { time: 108, text: "Y no sé, no sé, no sé, fue el destino o fue la suerte." },
      { time: 114, text: "Que siendo un extraño, te dije te amo,\nte he estado buscando por más de 1.000 años, y tú respondiste, ¿a dónde vamos?" },
      { time: 127, text: "Contra las apuestas aquí nos quedamos,\nviviendo de fiesta después del verano en el que respondiste, ¿a dónde vamos?" },
      { time: 139, text: "♪ (Música) ♪" },
      { time: 140, text: "Y aunque la historia no estaba prevista,\nsomos la prueba de que existe amor a primera vista." },
      { time: 148, text: "♪ (Música) ♪" },
      { time: 150, text: "Hey." },
      { time: 151, text: "♪ (Música) ♪" },
      { time: 153, text: "Hey. ♪ (Música) ♪ Hey. ♪ (Música) ♪" },
      { time: 165, text: "Hoy fuimos la prueba de que dos extraños,\ncon algo de suerte, por más de 1.000 años,\nse siguen diciendo, ¿a dónde vamos?." },
      { time: 179, text: "Contra las apuestas aquí nos quedamos,\nviviendo de fiesta después del verano en el que respondiste, ¿a dónde vamos?" },
      { time: 192, text: "Y aunque la historia no estaba prevista,\ny aunque la gente a veces se resista,\nsomos la prueba de que existe amor a primera vista." }
    ]
  },
  { 
    title: "Una canción que me recuerda a ti", 
    artist: "DUKI, Judeline / Imperio", 
    src: "assets/musica/DUKI, Judeline - Imperio.mp3", 
    note: "Te dedicaría esta canción porque quiero construir algo bonito contigo, Jas, y que algún día podamos mirar atrás y ver todo lo que logramos juntos. ❤️",
     lyrics: [
      { time: 0, text: "♪ (Música) ♪" },
      { time: 7, text: "Lo que te prometo sé bien que lo escucha Dios\nYo estoy construyendo to' este imperio pa' los dos\nY que estés tranquilo," },
      { time: 15, text: "que pasen las horas, así nuestros cuerpos fluyan como hacen las olas uh ah" },
      { time: 23, text: "ey, ey, ey uh, ah ah ah uh, ah" },
      { time: 31, text: "Ey, uh uh, ah ah ah De tanto vuelo que tengo te estoy construyendo un castillo de nubes Peleo con mis ganas" },
      { time: 39, text: "de querer darte lo que yo nunca tuve You know that it's true\nSupe del hechizo que atrapa a los hombres que buscan tu magia igual no me detuve\nPensándote un lunes hasta el otro lunes" },
      { time: 47, text: "Tu cuerpo exhibe más arte que el Louvre Ah, cruzo el planeta te paso a buscar\npapi, yo vuelo si sé que estás mal muerdo tu boca" },
      { time: 55, text: "la siento mi hogar\nYo ya sabía que yo iba a tenerte como al lujo que persigo\nque por delante de esas putas me pone por eso me quedo contigo" },
      { time: 63, text: "Dentro del castillo espero en tu habitación\nhecha de techos altos con flores en el balcón\nPa' cantar con las estrellas" },
      { time: 72, text: "y que no te sientas sola\nLos artistas tenemos el poder" },
      { time: 79, text: "de crear portales y no somos los únicos que viajamos por ellos\ncada persona que se da la libertad de entrar a nuestro mundo puede viajar" },
      { time: 88, text: "infinitos escenarios líneas de tiempo paisajes\nMejor no entres en mi cabeza porque puede que te enredes\nQuieren ser el Hombre Araña" },
      { time: 95, text: "solo viven en las redes donde yo veo cuatro caminos ustedes ven cuatro paredes\nEsto es flow, autogestión es imposible que lo heredes Duko" },
      { time: 103, text: "Autodidacta siempre dando palos swing y nafta\nqué habilidad tan particular got me feeling gangsta\nGive me weed y pasta" },
      { time: 111, text: "solo dame un beat pa' que lo parta y a mí me basta\nLa niña del sur con un diablo del sur saltando en el cielo" },
      { time: 119, text: "clases de parkour voces de mis tierras sonido off the roots\nAmeri y Bodhiria que elijan el tour\nCon el Duko haciendo lujo silencioso" },
      { time: 129, text: "los A&R se nos ponen pegajosos\nVeo mi futuro y se ve maravilloso\ny en los dientes, los brillantes más preciosos" },
      { time: 137, text: "Es el plan de Dios no puedo hacer na'\nYo sé quién me miente y quién me dice la verdad\nCírculo pequeño, entran todos en un salón" },
      { time: 146, text: "Yo sé quién es puro no me falla la intuición\nEy, ey Solo un plan" },
      { time: 156, text: "si este falla no hay ninguno\nto' este imperio con apenas veintiuno\nYey Jude Duko" }
    ]
  },
  { 
    title: "Una canción para lo que viene", 
    artist: "DUKI, Bizarrap / Buscarte Lejos", 
    src: "assets/musica/DUKI, Bizarrap - Buscarte Lejos.mp3",
    note: "Te dedicaría esta canción porque, pase lo que pase, no quiero que la distancia ni los momentos difíciles nos hagan olvidar lo mucho que significamos el uno para el otro. ❤️",
    lyrics: [
      { time: 0, text: "♪ (Música) ♪" },
      { time: 8, text: "Voy a buscarte lejos de cualquier lugar\nVos marcá el sendero yo camino detrás" },
      { time: 16, text: "¿Qué veo cuando miro tu nombre en la ciudad?" },
      { time: 20, text: "Puedo sentirte cerca hasta cuando no estás\nVoy a buscarte lejos en cualquier lugar" },
      { time: 28, text: "Vos marcá el sendero yo camino atrás\n¿Qué veo cuando miro tu nombre en la ciudad?" },
      { time: 36, text: "Puedo sentirte cerca hasta cuando no estás" },
      { time: 42, text: "♪ (Música) ♪" },
      { time: 58, text: "Al principio estábamos bajo perfil\nDesaparecíamos a lo Copperfield\nY yo te imaginaba fumando en mi cama mientras vos cantabas Recovery" },
      { time: 67, text: "Te fui a ver a un show con la excusa de que era por un amigo pero no por mí\nTu mamá me saludó con una sonrisa y me dijo “Muchas gracias por venir”" },
      { time: 75, text: "Maldita manía de amar fue por tu forma de ser\nLo que no pude explicar ella lo pudo entender" },
      { time: 84, text: "El infinito no tiene final lo nuestro no tiene definición\ndemasiado como pa’ ser real la realidad superó la ficción" },
      { time: 92, text: "Voy a buscarte lejos de cualquier lugar\nVos marcá el sendero yo camino atrás" },
      { time: 100, text: "¿Qué veo cuando miro tu nombre en la ciudad?" },
      { time: 105, text: "Puedo sentirte cerca hasta cuando no estás\nHablamos y nos vimos el alma como con rayo infrarrojo" },
      { time: 113, text: "Fue tan rápido lo que pasó tomamo´atajos\nTe hice reír tanto para matar el enojo" },
      { time: 121, text: "Mientras le sacaba foto a tu sonrisa con los ojos\nQuiero ser el aire que respiras casi estoy celoso" },
      { time: 129, text: "El destino nos vio tan pegados se puso envidioso\nMe da paz como caminar entre las calles vacías un día lluvioso" },
      { time: 137, text: "Tu pintalabios me queda perfecto para dibujar mi pasado borroso\nVoy a buscarte lejos de cualquier lugar" },
      { time: 146, text: "Vos marcá el sendero yo camino atrás\n¿Qué veo cuando miro tu nombre en la ciudad?" },
      { time: 154, text: "Puedo sentirte cerca hasta cuando no estás\nVoy a buscarte lejos en cualquier lugar" },
      { time: 163, text: "Vos marcá el sendero yo camino atrás\n¿Qué veo cuando miro tu nombre en la ciudad?" },
      { time: 171, text: "Puedo sentirte cerca hasta cuando no estás\nBizarrap" }
    ]
  }
];

const promises = [
  { icon: "♡", title: "Escucharte de verdad", text: "No minimizar lo que sientes. Escuchar antes de responder y tratar de entender por qué algo te afecta." },
  { icon: "✧", title: "Ser honesto", text: "Hablar con la verdad incluso cuando una conversación sea incómoda, en vez de ocultar cosas por miedo." },
  { icon: "🛡️", title: "Cuidar tu confianza", text: "No hacer cosas que te hagan dudar. Quiero que sepas que puedes confiar en mí, no solo con palabras, sino con hechos." },
  { icon: "🫂", title: "Ser tu lugar seguro", text: "Quiero que sepas que puedes llorar o tener un mal día conmigo. No tienes que ser fuerte todo el tiempo; aquí puedes bajar la guardia." },
  { icon: "🤪", title: "Nunca perder nuestras locuras", text: "Prometo seguir haciéndote caras raras, molestarte con cariño y hacer el ridículo contigo. Que nunca se nos acabe la diversión." },
  { icon: "🌻", title: "Elegirte todos los días", text: "Que el amor no sea solo costumbre. Quiero despertar cada día y elegir estar contigo, no porque toca, sino porque de verdad quiero hacerlo." }
];

const envelopes = [
  { title: "Cuando tengas un día difícil", subtitle: "Para esos días pesados", text: "No tienes que resolver todo hoy ni fingir que estás bien. Ojalá puedas darte un momento para respirar, descansar y tratarte con cariño. Si quieres compañía, podemos hablar; si necesitas espacio, también quiero respetarlo. No tienes que ganarte el cariño siendo fuerte todo el tiempo." },
  { title: "Cuando dudes de ti", subtitle: "Un recordatorio bonito", text: "Quiero que recuerdes que tu valor no depende de compararte con nadie ni de cumplir las expectativas de otras personas. Eres una persona con tus propios sueños, sentimientos y cualidades. Ojalá puedas mirarte con un poco de la ternura con la que yo veo tantas cosas bonitas en ti." },
  { title: "Cuando quieras sonreír", subtitle: "Una pausa para ti", text: "Piensa en una de nuestras bromas, en una partida que salió mal o en una tontería que nos hizo reír. Quiero que sigamos teniendo espacio para jugar, hacer el ridículo y disfrutar de las cosas pequeñas. No todo tiene que ser serio para ser importante." },
  { title: "Cuando quieras recordar", subtitle: "Un pedacito de nosotros", text: "Abre nuestra galería, elige una foto y recuerda qué estaba pasando en ese momento. Me gusta que nuestra historia esté hecha de recuerdos diferentes, algunos grandes y otros pequeñitos. Cada uno tiene su lugar." },
  { title: "Cuando necesites sinceridad", subtitle: "Sin adornos ni excusas", text: "Quiero que mis acciones hablen por mí. Si algo te preocupa, deseo que podamos hablarlo con respeto y claridad. No tienes que ignorar lo que sientes para cuidar mis sentimientos; los dos merecemos ser escuchados." },
  { title: "Cuando pienses en el futuro", subtitle: "Todavía hay capítulos por escribir", text: "No sé todo lo que viene, pero me ilusiona pensar en nuevas experiencias, metas, juegos, canciones y recuerdos que podamos compartir. Quiero construirlos paso a paso, cuidando lo que tenemos hoy y sin dar por hecho lo que todavía debemos trabajar." }
];

const starMessages = [
  "Gracias por las risas y las pequeñas tonterías que se volvieron recuerdos.",
  "Me gusta conocer tus gustos, tus sueños y las cosas que te hacen ser tú.",
  "Quiero que nunca tengas que fingir estar bien para hablar conmigo.",
  "Las palabras bonitas importan; las acciones constantes también.",
  "Me ilusiona crear recuerdos nuevos, sin borrar lo que hemos aprendido.",
  "Esta última estrella guarda un abrazo y un feliz medio año, mi Jas. ♡"
];

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

function renderMemories() {
  $("#timeline").innerHTML = memories.map((m, i) => `
    <article class="timeline-item reveal">
      <div class="timeline-marker">${i + 1}</div>
      <div class="timeline-date">${escapeHTML(m.date)} · ${escapeHTML(m.month)}</div>
      <h3>${escapeHTML(m.title)}</h3><p>${escapeHTML(m.text)}</p>
    </article>`).join("");
}

function renderGallery() {
  $("#gallery").innerHTML = photos.map((p, i) => `
    <button class="photo-card" type="button" data-photo="${i}" aria-label="Abrir recuerdo: ${escapeHTML(p.title)}">
      <div class="photo-frame">
        <img src="${escapeHTML(p.src)}" alt="${escapeHTML(p.alt)}" loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.hidden=false">
        <div class="photo-placeholder" hidden><span style="font-size:2rem">♡</span><br>Añade tu foto<br><small>${escapeHTML(p.src)}</small></div>
      </div>
      <div class="photo-caption"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.caption)}</p></div>
    </button>`).join("");
  $("#gallery").querySelectorAll("[data-photo]").forEach(btn => btn.addEventListener("click", () => {
    const p = photos[Number(btn.dataset.photo)];
    showToast(`${p.title} — ${p.caption}`);
  }));
}

function renderLetter() {
  $("#letterContent").innerHTML = letterChapters.map(ch => `<h3>${escapeHTML(ch.title)}</h3>${ch.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("")}`).join("");
}

function renderPromises() {
  $("#promises").innerHTML = promises.map(p => `<article class="promise-card reveal"><div class="promise-icon">${escapeHTML(p.icon)}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.text)}</p></article>`).join("");
}

let currentSong = 0;
let currentLyricIndex = -1;

function setSong(index) {
  currentSong = (index + songs.length) % songs.length;
  const s = songs[currentSong];
  $("#songTitle").textContent = s.title;
  $("#songNote").textContent = `${s.artist} — ${s.note}`;
  $("#audioPlayer").src = s.src;
  $("#audioPlayer").load();
  
  currentLyricIndex = -1;
  
  if (s.lyrics && s.lyrics.length > 0) {
    $("#songLyrics").innerHTML = s.lyrics.map((line, i) => 
      `<p class="lyrics-line" data-index="${i}">${escapeHTML(line.text)}</p>`
    ).join("");
  } else {
    $("#songLyrics").innerHTML = "<p>Letra no disponible.</p>";
  }

  $("#songLyrics").scrollTop = 0;

  $("#songCounter").textContent = `Canción ${currentSong + 1} de ${songs.length}`;
  $("#songList").innerHTML = songs.map((song, i) => `<button class="song-chip ${i === currentSong ? "active" : ""}" data-song="${i}" type="button"><strong>${escapeHTML(song.title)}</strong><span>${escapeHTML(song.artist)}</span></button>`).join("");
  $("#songList").querySelectorAll("[data-song]").forEach(b => b.addEventListener("click", () => setSong(Number(b.dataset.song))));
}

function syncLyrics() {
  const audio = $("#audioPlayer");
  const time = audio.currentTime;
  const lyrics = songs[currentSong].lyrics;

  if (!lyrics || lyrics.length === 0) return;

  let newIndex = -1;
  for (let i = 0; i < lyrics.length; i++) {
    if (time >= lyrics[i].time) {
      newIndex = i;
    } else {
      break;
    }
  }

  if (newIndex !== -1 && newIndex !== currentLyricIndex) {
    currentLyricIndex = newIndex;
    
    document.querySelectorAll(".lyrics-line").forEach(el => el.classList.remove("active"));
    
    const activeLine = document.querySelector(`.lyrics-line[data-index="${currentLyricIndex}"]`);
    if (activeLine) {
      activeLine.classList.add("active");
      
      const container = $("#songLyrics");
      const scrollTarget = activeLine.offsetTop - (container.clientHeight / 2) + (activeLine.clientHeight / 2);
      
      container.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  }
}

function renderEnvelopes() {
  $("#envelopes").innerHTML = envelopes.map((e, i) => `<button class="envelope-btn" type="button" data-envelope="${i}"><span class="envelope-icon">✉</span><strong>${escapeHTML(e.title)}</strong><small>${escapeHTML(e.subtitle)}</small></button>`).join("");
  $("#envelopes").querySelectorAll("[data-envelope]").forEach(btn => btn.addEventListener("click", () => {
    const e = envelopes[Number(btn.dataset.envelope)];
    $("#envelopeTitle").textContent = e.title;
    $("#envelopeText").textContent = e.text;
    $("#envelopeMessage").hidden = false;
    $("#envelopeMessage").scrollIntoView({ behavior: "smooth", block: "center" });
  }));
}

let foundStars = new Set();
function renderGame() {
  foundStars = new Set();
  const field = $("#starField");
  const positions = [[12,18],[72,13],[43,36],[19,66],[82,61],[53,78]];
  field.innerHTML = positions.map(([x,y], i) => `<button type="button" class="game-star" data-star="${i}" style="left:${x}%;top:${y}%;transform:translate(-50%,-50%)" aria-label="Encontrar estrella ${i+1}">✦</button>`).join("");
  $("#starCount").textContent = "0 / 6 estrellas";
  $("#gameMessage").textContent = "Tu misión comienza cuando estés lista ✧";
  field.querySelectorAll("[data-star]").forEach(btn => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.star);
    if (foundStars.has(i)) return;
    foundStars.add(i); btn.classList.add("found"); btn.textContent = "♡"; btn.disabled = true;
    $("#starCount").textContent = `${foundStars.size} / 6 estrellas`;
    $("#gameMessage").textContent = starMessages[i];
   if (foundStars.size === starMessages.length) {
    $("#gameMessage").textContent = "¡Encontraste las seis estrellas! ✦ Guarda este momento, mi Jas. ♡";
    showToast("Misión completada: seis estrellas encontradas ✦");
  }
  }));
}

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 3600);
}

function createSky() {
  const sky = $("#sky");
  for (let i = 0; i < 95; i++) {
    const star = document.createElement("span"); star.className = "star-dot";
    const size = Math.random() * 2.2 + .7;
    star.style.width = `${size}px`; star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`; star.style.animationDuration = `${2 + Math.random() * 4}s`;
    sky.appendChild(star);
  }
}

function initCounter() {
  const start = new Date(anniversaryDate);
  const now = new Date();
  const days = Math.max(0, Math.floor((now - start) / 86400000));
  document.title = "Jasmin & Ulises — Nuestro pequeño universo";
  const counter = document.createElement("div");
  counter.className = "counter-pill";
  counter.textContent = `Nuestra historia comenzó hace ${days} días`;
  document.querySelector(".hero-content").appendChild(counter);
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal, .timeline-item, .promise-card");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(n => n.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0, rootMargin: "0px 0px -40px 0px" }
  );

  nodes.forEach((n) => {
    const rect = n.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      n.classList.add("visible");
    } else {
      observer.observe(n);
    }
  });

  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((n) => {
      const rect = n.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.2) {
        n.classList.add("visible");
      }
    });
  }, 2000);

  window.addEventListener("scroll", () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((n) => {
        const rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          n.classList.add("visible");
        }
      });
    }, { passive: true }
  );
}

function init() {
  createSky(); renderMemories(); renderGallery(); renderLetter(); renderPromises(); setSong(0); renderEnvelopes(); renderGame(); initCounter();
  $("#voicePlayer").src = "assets/audio/audio-para-mi-niña.mp4";
  $("#enterBtn").addEventListener("click", () => $("#bienvenida").scrollIntoView({ behavior: "smooth" }));
  $("#prevSong").addEventListener("click", () => setSong(currentSong - 1));
  $("#nextSong").addEventListener("click", () => setSong(currentSong + 1));
  $("#resetGame").addEventListener("click", renderGame);
  $("#closeMessage").addEventListener("click", () => $("#envelopeMessage").hidden = true);
  $("#surpriseBtn").addEventListener("click", () => {
    const box = $("#surpriseBox"); box.hidden = !box.hidden;
    if (!box.hidden) {
      box.scrollIntoView({ behavior: "smooth", block: "center" });
      const confetti = $("#confetti");
      confetti.innerHTML = Array.from({ length: 32 }, (_, i) => `<span style="position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;color:${i%2 ? "var(--pink)" : "var(--purple)"};animation:float ${2+Math.random()*3}s infinite ease-in-out">${i%3 ? "✦" : "♡"}</span>`).join("");
    }
  });
  const menu = $("#nav"), toggle = $("#menuToggle");
  toggle.addEventListener("click", () => { const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
  
  $("#audioPlayer").addEventListener("timeupdate", syncLyrics);
  
  initReveal();
}
document.addEventListener("DOMContentLoaded", init);