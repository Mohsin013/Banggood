var cartData = JSON.parse(localStorage.getItem("cartData"));

function pay() {
    let selext = document.querySelector("#card_type").value;
    let cardNumber = document.querySelector("#card_number").value;
    let cvv = document.querySelector("#cvv").value;
    let expdate = document.querySelector("#exp_date").value;


    if (selext == "" || cardNumber == "" || cvv == "" || expdate == "") {
        alert("Please Enter valid Card Details!");
        window.location.href = "card_payment.html"
    } else {
        alert("Payment Done!");
        window.location.href = "home.html"

        cartData = [];
        localStorage.setItem(JSON.stringify(cartData));

    }


}

function cardType() {
    let value = document.querySelector("#card_type").value;
    return value;
}