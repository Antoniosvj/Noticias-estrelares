class Cardnews extends HTMLElement{
    constructor (){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
                
    }
    build(){
        //construir estrutura
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_rigth");

        const newsImage = document.createElement("img");
        newsImage.alt = "Foto da Noticia"
        cardRight.appendChild(newsImage);
        
        newsImage.src =this.getAttribute("photo") || "assents/foto-defoult.jpg";

   /*<div class="container">
        <div class="card">
            <div class="card_left">
                <span>By Antonio Sérgio</span>
                <a href="#">Darth Vader Contrata Devs</a><!-- titulo clicavel-->
                <p>Darth Vader procura desenvolvedores que sabem trabalhar com componentes</p>
            </div>
            <div class="card_right">
                <img src="assents/transferir.jpg" alt="srcset">
            </div>
        </div>
    </div> */

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }
    styles(){
        //aplicar os estilos
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;/*tamanho*/
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);;/*sombra em volta da caixa - cssgenerator.org*/
                display: flex;
                flex-direction: row;/*um do lado do outro*/
                justify-content: space-between; /*espaço entre noticia e a foto*/
            }
            
            .card_left{
                display:flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;/*espaçando os elementos*/
            }
            .card_left > span {
                font-weight: 400;/*fonte diferenciando*/
            }
            
            .card_left > a { /*acessando o h1 dentro do card*/
                margin-top: 15px;/*colocando espaço entre o nome do autor e o titulo*/
                font-size: 25px; /*auterando tamanho da fonte*/
                color: black;
                text-decoration: none;
                font-size: bold;
                font-weight: bolder;
            }
            
            .card_left > p{ /*acessando p*/
                color: rgb(70,70,70);/*auterando a cor da letra*/
            }
        
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);