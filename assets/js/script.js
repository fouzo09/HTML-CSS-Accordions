document.addEventListener("DOMContentLoaded", function(){
    const items = document.querySelectorAll(".item");
    items.forEach((element) => {
        element.addEventListener("click", function(){

            const number = this.querySelector(".number");
            const title = this.querySelector(".title");
            const content = this.querySelector(".content");
            const icon = this.querySelector(".icon");
            const icon_close = this.querySelector(".icon-close");
            const icon_open = this.querySelector(".icon-open");

            if(number.classList.contains("number-open")){

                number.classList.remove("number-open");
                title.classList.remove("title-open");
                content.classList.remove("content-open");
                this.classList.remove("item-open");

                icon_open.style.display = "block";
                icon_close.style.display = "none";
            }else{
                number.classList.add("number-open");
                title.classList.add("title-open");
                content.classList.add("content-open");
                this.classList.add("item-open");

                icon_open.style.display = "none";
                icon_close.style.display = "block";
            }
        });
    });


});