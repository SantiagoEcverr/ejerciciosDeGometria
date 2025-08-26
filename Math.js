//la formula para saber el area de un circulo es: A=pi:r**2

function calcularAreaCirculo(radio) {
  if (radio <= 0 || isNaN(radio)) { //isNan verifica que el valor sea un numero
    return "El radio debe ser un número positivo.";
  }

  const area = Math.PI * Math.pow(radio, 2);
  return `El área del círculo con radio ${radio} es ${area.toFixed(2)} unidades cuadradas.`; //toFixed redondea los numeros decimales
}

console.log(calcularAreaCirculo(7)); //se puede cambiar el valor 

//la formula para saber el cateto opuesto de un trianfulo rsctangulo es: cateto opuesto 2**1/2 hipotenusa**2+cateto adyacente**2

function calcularHipotenusa(catetoA, catetoB) {
  if (catetoA <= 0 || catetoB <= 0 || isNaN(catetoA) || isNaN(catetoB)) {
    return "Los catetos deben ser números positivos.";
  }

  const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
  return `La hipotenusa es ${hipotenusa.toFixed(2)} unidades.`;
}

console.log(calcularHipotenusa(8, 7)); //se puede cambiar el valor 



//la formula para comberir  grados en radianes es: radianes=grados*pi/180

function convertirGradosARadianes(grados) {
  if (isNaN(grados)) {
    return "Debes ingresar un número válido en grados.";
  }

  const radianes = grados * (Math.PI / 180);
  return `${grados} grados equivalen a ${radianes.toFixed(4)} radianes.`;
}

// Ejemplo de uso:
console.log(convertirGradosARadianes(300)); 


//para hallar el sen y cos tenemos que tener en cuenta que tendremos que trabajar con darianes ya que la libreria trabaja con estos datos
//sen(θ)= sen(θ*180/pi) cos(θ)=cos(θ*180/pi)

function calcularTrigonometría(grados) {
  const radianes = grados * (Math.PI / 180);
  const seno = Math.sin(radianes);
  const coseno = Math.cos(radianes);

  return {
    grados,
    radianes: radianes.toFixed(4),
    seno: seno.toFixed(4),
    coseno: coseno.toFixed(4)
  };
}

console.log(calcularTrigonometría(45));

//la forma de saber la distacia que recorre un objeto en caida libre es: distacia=1/2*constgravitacional*tiempo**2

function calcularDistanciaCaidaLibre(tiempoSegundos) {
  const g = 9.81; // aceleración gravitacional en m/s²
  const distancia = 0.5 * g * Math.pow(tiempoSegundos, 2);

  return `En ${tiempoSegundos} segundos, el objeto recorre ${distancia.toFixed(2)} metros.`;
}

console.log(calcularDistanciaCaidaLibre(8)); 

//la formula para saber el volumen de una esfera es: Volunme=3/4*pi(x)**3

function calcularVolumenEsfera(radio) {
  if (radio <= 0 || isNaN(radio)) {
    return "El radio debe ser un número positivo.";
  }

  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  return `El volumen de la esfera con radio ${radio} es ${volumen.toFixed(2)} unidades cúbicas.`;
}

console.log(calcularVolumenEsfera(8)); 

//la formula para saber la diatacia entre dos puentos en un plano es:
//d=2**1/2 (x2-x1)**2+(y2-y1)**2

function calcularDistancia(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return `La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es ${distancia.toFixed(2)} unidades.`;
}

console.log(calcularDistancia(8, 2, 9, 3));


//la forma de saber la energia cinetica de un objeto es:
//Ec=1/2*masa*velocidad**2

function calcularEnergiaCinetica(masa, velocidad) {
  if (masa <= 0 || velocidad < 0 || isNaN(masa) || isNaN(velocidad)) {
    return "La masa debe ser positiva y la velocidad no negativa.";
  }

  const energia = 0.5 * masa * Math.pow(velocidad, 2);
  return `La energía cinética del objeto es ${energia.toFixed(2)} joules.`;
}

console.log(calcularEnergiaCinetica(75, 15)); 

//la forma para comonocer el area de un rectangulo sabiando su diagonal y un lado es:
//area=laado*2**1/2 diagola**2-lado**2

function calcularAreaRectangulo(diagonal, ladoConocido) {
  if (diagonal <= 0 || ladoConocido <= 0 || diagonal <= ladoConocido) {
    return "Verifica que la diagonal sea mayor que el lado y que ambos sean positivos.";
  }

  const ladoFaltante = Math.sqrt(Math.pow(diagonal, 2) - Math.pow(ladoConocido, 2));
  const area = ladoConocido * ladoFaltante;

  return `El área del rectángulo es ${area.toFixed(2)} unidades cuadradas.`;
}

console.log(calcularAreaRectangulo(15, 6)); 

//la forma de conocer el area de un triangulo conociando sus lados segun heron es:
//calcular primero el perimetro: s=a+b+c/2 para saber el area: a=2**1/2 s(s-a)(s-b)(s-c)

    function calcularAreaTriangulo(a, b, c) {
  if (
    a <= 0 || b <= 0 || c <= 0 ||
    isNaN(a) || isNaN(b) || isNaN(c) ||
    a + b <= c || a + c <= b || b + c <= a
  ) {
    return "Los lados deben ser positivos y cumplir con la desigualdad triangular.";
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return `El área del triángulo es ${area.toFixed(2)} unidades cuadradas.`;
}

console.log(calcularAreaTriangulo(7, 8, 9)); 