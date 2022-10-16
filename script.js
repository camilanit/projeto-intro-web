// // //Semana 1
// // // Você precisará criar pelo menos:
// // //   * uma característica String;
// // //   * uma característica Number;
// // //   * uma característica Boolean; 
// // // 2. Agora, crie três conjuntos de variáveis utilizando as 
// // // características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// let lugaresTuristicos1={
//  lugar: "São Gonçalo".toUpperCase(),
//  anoFundacao: 1575,
//  guiaDeTurismo: false,
//  arrayLugar:["Fazenda Columbande","Ilhas","Igreja de Sao Goncalo"], 
//  relatorio:""
// }

// let lugaresTuristicos2={
//  lugar: "Niteroi".toUpperCase(),
//  anoFundacao : 1573,
//  guiaDeTurismo : true,
//  arrayLugar:["Museu de arte contemporaneo", "Campo de Sao Bento", "Parque da Cidade"], 
//  relatorio:""
// }// //Semana 2 

// let lugaresTuristicos3={ 
//  lugar: "Rio de Janeiro".toUpperCase(), // método no valor da variável
//  anoFundacao : 1565,
//  guiaDeTurismo : true,
//  arrayLugar:["Teatro Municipal", "Corcovado", "Pao de Acucar"],
// relatorio:""
// } // //Semana 2 



// const media = (lugaresTuristicos1.anoFundacao + lugaresTuristicos2.anoFundacao + lugaresTuristicos3.anoFundacao) / 3 //semana 1 
// console.log("media", media)                                      //etapa 3 Média de valores

// const guiaDeTurismos = lugaresTuristicos1.guiaDeTurismo && lugaresTuristicos2.guiaDeTurismo && lugaresTuristicos3.guiaDeTurismo;
// console.log(guiaDeTurismos);

// // // nesse caso, vai imprimir false, pois guiaDeTurismo1 === false  Etapa 4

// console.log(`Lugar: ${lugaresTuristicos1.lugar}\nAno: ${lugaresTuristicos1.anoFundacao}\nVerificou: ${lugaresTuristicos1.guiaDeTurismo}\nArray de  caracteristicas:${lugaresTuristicos1.arrayLugar} `) // etapa 

// console.log(`Lugar: ${lugaresTuristicos2.lugar}\nAno: ${lugaresTuristicos2.anoFundacao}\nVerificou: ${lugaresTuristicos2.guiaDeTurismo}\nArray de  caracteristicas:${lugaresTuristicos2.arrayLugar} `)

// console.log(`Lugar: ${lugaresTuristicos3.lugar}\nAno: ${lugaresTuristicos3.anoFundacao}\nVerificou: ${lugaresTuristicos3.guiaDeTurismo}\nArray de  caracteristicas:${lugaresTuristicos3.arrayLugar} `) // Place holder - Places holders



// // semana 3 
// let arrayLugaresTuristicos=[]

// //  arrayLugaresTuristicos.push( lugaresTuristicos1,lugaresTuristicos2,lugaresTuristicos3)

// // console.log("array",arrayLugaresTuristicos)

// //semana 4

// lugaresTuristicos1.guiaDeTurismo=== true ? arrayLugaresTuristicos.push(lugaresTuristicos1): alert("O item 1 não foi adicionado")
// lugaresTuristicos2.guiaDeTurismo === true? arrayLugaresTuristicos.push(lugaresTuristicos2): alert("O item 2 não foi adicionado")
// lugaresTuristicos3.guiaDeTurismo === true ? arrayLugaresTuristicos.push(lugaresTuristicos3): alert("O item 3 não foi adicionado")
// console.log("array", arrayLugaresTuristicos)


// //Semana 5
// for(let i= 0; i< arrayLugaresTuristicos.length; i++){
// arrayLugaresTuristicos[i].arrayLugar =arrayLugaresTuristicos[i].arrayLugar.join(', ')
// console.log(arrayLugaresTuristicos[i].arrayLugar)
// }

// for ( let i in arrayLugaresTuristicos){
// arrayLugaresTuristicos[i].relatorio=`
// lugar: ${arrayLugaresTuristicos[i].lugar}
// anoFundacao : ${arrayLugaresTuristicos[i].anoFundacao}
// guiaDeTurismo : ${arrayLugaresTuristicos[i].guiaDeTurismo}
// arrayLugar:${arrayLugaresTuristicos[i].arrayLugar}`
// console.log(arrayLugaresTuristicos[i].relatorio)
// }



// // for (let i in arrayObjeto) {
// //     arrayObjeto[i].relatorio
// //     = }
// //     Nome: ${arrayObjeto[i].carro}
// //     Fabricante: ${arrayObjeto[i].fabricante}
// //     Ano: ${arrayObjeto[i].anoCriacao}
// //     Preço: ${arrayObjeto [i].preço}
// //     Motor: ${arrayObjeto[i].motor}
// // //     Caractristica: ${arrayObjeto[i].caracteristicas}`
// //     console.log(arrayObjeto[i].relatorio)

// // // falta o dois
// // for(let i arrayLugaresTuristicos){

// // }


//   //Semana 06 etapa 01
// const roteiros=(arrayObjetos, String)=>{
//     let guardarObjetos=[]
//     for(let i of arrayObjetos){
//     if(i.lugar===String){
//         guardarObjetos.push(i)
//     }
// }
// if(guardarObjetos.length === 0) {
//     alert("Esse roteiro não foi encontrado")
// } else {
//     return guardarObjetos
// }
// } 
// console.log(roteiros(arrayLugaresTuristicos, "Roteiros Turísticos"))
// // const retornarArray = (String, arrayObjetos)
// // let resposta=[]
// // for (let i in arrayObjeto){
// //    if (arrayObjetos[i].lugar === String.toUpperCase()){
// //         resposta.push( arrayObjetos[i])
// //     }
// // }
// // if (resposta.length > 0){
// //     return resposta
// // }else {
// //     alert(" Item não encontrado ")
// // }
// function relatorio(objeto){
//     console.log(`Nome:${objeto.lugar.toUpperCase()}\n ano de fundação: ${objeto.anoFundacao}\n guia de turismo:${objeto.guiaDeTurismo}\n lugares: ${objeto.arrayLugar}`)
// }



// const retornarArray = (String, ArrayObj) => {
//     let resposta = []
//     for (let i in ArrayObj) {
//       if (ArrayObj[i].carro === String.toUpperCase()) {
//         resposta.push(ArrayObj[i])
//       }

//     }
//     //Semana 06 etapa 02
//     if (resposta.length > 0) {
//       return resposta
//     } else {
//       alert("Item não encontrado")

//     }

//   }
//   console.log(retornarArray("Fusca", arrayObjeto))






//  declaração - nome da variável (pode ser objeto, array) - atribuição- valor de qualquer tipo

const arrayObjetos2 = [
    {
        lugar: "São Gonçalo".toUpperCase(),
        anoFundacao: 1575,
        guiaDeTurismo: false,
        arrayLugar: [" Fazenda Columbande ", " Ilhas ", " Igreja de Sao Goncalo"],
        imagem: "2.png",
        link: "https://www.youtube.com/watch?v=bLOTqd0RY-c",
        relatorio: ""
    },
    {
        lugar: "Niterói".toUpperCase(),
        anoFundacao: 1573,
        guiaDeTurismo: true,
        arrayLugar: ["Museu de arte contemporaneo ", " Campo de Sao Bento ", " Parque da Cidade "],
        imagem: "1.png",
        link: "https://www.youtube.com/watch?v=VMS8nwoaCrM",
        relatorio: ""
    },
    {
        lugar: "Rio de Janeiro".toUpperCase(), // método no valor da variável
        anoFundacao: 1565,
        guiaDeTurismo: true,
        arrayLugar: ["Teatro Municipal ", " Corcovado", " Pao de Acucar"],
        imagem: "3.png",
        link: "https://www.youtube.com/watch?v=dAZaqpA9R-k",
        relatorio: ""
    }
]

function buscarLugar() {
    const input = document.getElementById("search")
    console.log(input.value)
    const lugarEscolhido = lugarFiltrados(input)
    console.log(`${lugarEscolhido}` ? lugarEscolhido : alert("não encontrado"))
    verificar(lugarEscolhido)

}

function lugarFiltrados(input) {
    const lugarEscolhido = arrayObjetos2.filter((item) => { return item.lugar.toLowerCase() === input.value.toLowerCase() })
    console.log(`${lugarEscolhido}` ? lugarEscolhido : alert("não encontrado"))
    if (lugarEscolhido.length >= 1) {
        return lugarEscolhido
    } else {
        return arrayObjetos2
    }

}

function verificar(array) {

    const paragrafo = document.getElementById("item1")
    paragrafo.innerHTML = ""

    for (let i = 0; i < array.length; i++) {

        paragrafo.innerHTML += `
            <ul>
            <img src="${array[i].imagem}"alt="">
              <p> <a href='${array[i].link}' target="_blank" >${array[i].lugar}</a>
                <li> Ano de Fundação:${array[i].anoFundacao}</li>
                <li>Principais Pontos: ${array[i].arrayLugar}</li></p></ul>`

    }
}


verificar(arrayObjetos2) 

