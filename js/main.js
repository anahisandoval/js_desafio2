/*Representacion de turnos de una sala de ensayo
Los turnos son sabados y domingos desde las 14hs hasta las 18 hs. Cada turno es de 2 horas
0 significa libre, 1 es ocupado*/

//Array que representa los turnos de los dias sábado y domingo
//Se agregó una nueva funcionalidad en el menú para seleccionar el horario o que la aplicacion de el primer horario dispobible
//

const dias=[0,0,0,0,0,0];
const horario=["Sábado 14 hs","Sábado 16 hs","Sábado 18 hs","Domingo 14 hs","Domingo 16 hs","Domingo 18 hs"];

let nombre;
let banda;
let genero;
let integrantes;


function solicitarDatos(){
    nombre=prompt("Nombre y apellido");
    banda=prompt("Nombre de la banda");
    genero=prompt("Género que tocan");
    integrantes=prompt("Cantidad de integrantes");
}

function mostrarDatos(banda,genero,integrantes){
    alert("Se confirma la reserva con los siguientes datos: \n Banda: "+banda+ "\n Género musical: "+genero+"\n Cantidad de integrantes: "+integrantes);

}

function buscarPrimerDiaLibre(d){
    let i =0;
    while(i < d.length && d[i]!=0){
            i++;
        }
    return i;        
}

let mje = prompt("Bienvenido a Salas de Ensayo OVERDRIVE. ¿Que desea hacer? \n 1 = Elegir un horario \n 2 = Buscar el primer horario disponible \n 3 = Salir");
while(mje != 3)
{
        switch(mje)
        {
            case "1":
                let entrada= prompt("Seleccione el horario en el que desea ocupar la sala de ensayo. \n 1 = Sábado 14 a 16 hs \n 2 = Sábado 16 a 18 hs \n 3 = Sábado 18 a 20 hs \n 4 = Domingo 14 a 16 hs \n 5 = Domingo 16 a 18 hs \n 6 = Domingo 18 a 20 hs");
                switch (entrada)
                {
                    case "1":
                        alert("Seleccionaste el horario Sábado de 14 a 16 hs \n Ahora chequearemos si está disponible");
                        if(dias[0]==0)
                        {
                            alert("El horario está disponible");
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos();
                                dias[0]=1;
                                mostrarDatos(banda,genero,integrantes);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                    case "2":
                        alert("Seleccionaste el horario Sábado de 16 a 18 hs \n Ahora chequearemos si está disponible");
                        if(dias[1]==0)
                        {
                            alert("El horario está disponible")
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos();
                                dias[1]=1;
                                mostrarDatos(banda,genero,integrantes);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                        case "3":
                            alert("Seleccionaste el horario Sábado de 18 a 20 hs \n Ahora chequearemos si está disponible");
                            if(dias[2]==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos();
                                    dias[2]=1;
                                    mostrarDatos(banda,genero,integrantes);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }   
                            break;
                        case "4":
                            alert("Seleccionaste el horario Domingo de 14 a 16 hs \n Ahora chequearemos si está disponible");
                            if(dias[3]==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos();
                                    dias[3]=1;
                                    mostrarDatos(banda,genero,integrantes);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "5":
                            alert("Seleccionaste el horario Domingo de 16 a 18 hs \n Ahora chequearemos si está disponible");
                            if(dias[4]==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos();
                                    dias[4]=1;
                                    mostrarDatos(banda,genero,integrantes);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "6":
                            alert("Seleccionaste el horario Domingo de 18 a 20 hs \n Ahora chequearemos si está disponible");
                            if(dias[5]==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos();
                                    dias[5]=1;
                                    mostrarDatos(banda,genero,integrantes);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        default:
                            alert("La opción ingresada no es válida");
                            break;
                    }
                    break;
                case "2":
                    let libre = buscarPrimerDiaLibre(dias);
                    if (libre<dias.length)
                    {
                        alert("El primer horario libre es: "+horario[libre]);
                        let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                        if (resp.toUpperCase()=="S")
                        {
                            solicitarDatos();
                            dias[libre]=1;
                            mostrarDatos(banda,genero,integrantes);
                        }
                    }else{
                        alert("No hay ningún horario libre");
                    }
                    
                    break;
                case "3":
                    alert("Adios");
                    break;
                default:
                    alert("La opción ingresada no es válida");
                    break;

        }
    mje = prompt("Bienvenido a Salas de Ensayo OVERDRIVE. ¿Que desea hacer? \n 1 = Elegir un horario \n 2 = Buscar el primer horario disponible \n 3 = Salir");
        
}
