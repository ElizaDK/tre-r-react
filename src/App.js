//COMPONENTE - CRIANDO E USANDO
/*
- import React (import React from 'react')
- funcao que retorna JSX (function App(){)
    - funcao sempre com mesmo nome do arquivo
    - sempre tem que ter um elemento pai dentro de uma "div" 
    - react fragment ou <></>
- exportar funcao
- para usar o componente
    - por convencao primeira letra maiuscula
    - importar
    - usar como tag, exemplo: <App/> "no arquvo de index.js"
    - componentes podem receber propriedades, exemplo: <Header titulo="olá mundo!" />
    -pode usar o componente quantas x quiser
    -pode passar inumeras propriedades
*/
import React from 'react'
import Header from './Header'
import Content from './Content'

import Card from './Card'
import Cards from './Cards'

import img1 from './imagens/ima-1.png'
import img2 from './imagens/ima-2.png'
import img3 from './imagens/ima-3.png'


function App(){
    return (
        <>
        <Header titulo="olá mundo!" subtitulo="olá mundo!" />

            <Content titulo="Why do we use it?">
                
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <Cards>
                <Card
                    imagem={img1}
                    titulo="titulo 1"
                    texto="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <Card
                    imagem={img2}
                    titulo="titulo 2"
                    texto="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <Card
                    imagem={img3}
                    titulo="titulo 3"
                    texto="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                </Cards>
            </Content>
        </>
    )
} 

export default App


