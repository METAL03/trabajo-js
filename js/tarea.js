let figura = prompt("Que area de figura deseas calcular:\n 1)Triangulo\n 2)Paralelogramo\n 3)Rectangulo\n 4)Cuadrado,\n 5)Rombo\n 6)Cometa\n 7)Trapecio\n 8)Circulo\n");

let base;
let altura;
let radio;
let dMenor;
let DMayor;
let baseMayor;

switch(figura){
    case "1":
        base = prompt("¿Cuanto tiene de base? ")
        altura = prompt("¿Cuanto tienes de altura? ")
        document.write(`El area del triangulo es ${base*altura/2} cm^2`)
    break

    case "2":
        base = prompt("¿Cuanto tiene de base? ")
        altura = prompt("¿Cuanto tienes de altura? ")
        document.write(`El area del Paralelogramo es ${base*altura} cm^2`)
    break

    case "3":
        base = prompt("Cuanto tienes de base? ")
        altura = prompt("¿cuanto tienes de altura? ")
        document.write(`Tu area del rectangulo es ${base*altura} cm^2`)
    break

    case "4":
        base = prompt("Cuanto tienes de base? ")
        altura = prompt("¿cuanto tienes de altura? ")
        document.write(`Tu area del cuadrado es ${base*altura} cm^2`)
    break

    case "5":
        DMayor = prompt("Cuanto tiene el diagonal mayor? ")
        dMenor= prompt("¿cuanto tiene el diagonal menor? ")
        document.write(`Tu area del rombo es ${DMayor*dMenor/2} cm^2`)
    break

    case "6":
        DMayor = prompt("Cuanto tiene el diagonal mayor? ")
        dMenor= prompt("¿cuanto tiene el diagonal menor? ")
        document.write(`Tu area del cometa es ${DMayor*dMenor/2} cm^2`)
    break

    case "7":
        baseMayor = prompt("Cuanto tiene la base mayor ? ")
        base= prompt("¿cuanto tiene la base menor? ")
        altura = prompt("¿cuanto tienes de altura? ")

        var area = ((parseInt(baseMayor) + parseInt(base)) /2) * parseInt(altura);

        document.write(`Tu area del trapecio es: ${+ area} cm^2`)
    break

    case "8":
        radio = prompt("¿Cuanto tiene el radio? ")
        //math
        document.write(`El area del circulo es ${Math.PI*Math.pow(radio,2)} cm^2`)
    break;   

    default:
        document.write("Esta opcion no es valida")
    break;
}