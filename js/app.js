
window.onload = () => {
    let emailModal = document.getElementsByClassName("email-modal")[0];
   
    let closeButton = document.getElementsByClassName("email-modal__close-btn")[0]

     let emailInput = document.getElementsByClassName(
       "email-modal__input"
     )[0];

      let emailName = document.getElementsByClassName("email-modal__name")[0];

       let emailButton = document.getElementsByClassName("email-modal__btn")[0];

    let button1 = document.getElementsByClassName("btn1")[0];

    let button2 = document.getElementsByClassName("btn2")[0];

    let button3 = document.getElementsByClassName("btn3")[0];

    let button4 = document.getElementsByClassName("btn4")[0];
   ;
    
   function emailIsValid (email) {
       return /\S+@\S+\.\S+/.test(email)
   }

   let closeModal = () =>{
       closeModal ();
   }
   
   let removeErrors = () =>{
    document
      .getElementsByClassName("email-modal__input")[0]
      .classList.remove("email-modal__input--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
   }

   let addErrors = () => {
     document
       .getElementsByClassName("email-modal__input")[0]
       .classList.add("email-modal__input--error");
     document
       .getElementsByClassName("email-modal__error-message")[0]
       .classList.add("email-modal__error-message--active");
   };

    button1.addEventListener('click', () => {
         emailModal.classList.add("email-modal--visible");
    }
    )
    
    button2.addEventListener("click", () => {
        emailModal.classList.add("email-modal--visible");
    });
    
    button3.addEventListener("click", () => {
        emailModal.classList.add("email-modal--visible");
    });
    
    button4.addEventListener("click", () => {
        emailModal.classList.add("email-modal--visible");
    });
    
    closeButton.addEventListener("click", () => {
        emailModal.classList.remove("email-modal--visible")
    } );

    

    // emailButton.addEventListener("click", () =>{
    //     if(emailIsValid(emailInput.value)){
    //         console.log(emailInput.value);
    //     } else{
    //    addErrors()
    //     }
        
    // })

    // emailInput.addEventListener("click"),
    //   () => {
    //     removeErrors();
    //   };
    

}