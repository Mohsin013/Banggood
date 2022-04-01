/////connecting for the different section of page and cheching if the  cart items are empty are not
//////////////
var cartData = JSON.parse(localStorage.getItem("cartData"));

if (cartData.length !== 0) {
    document.querySelector('.cart-container-empty').style.display = "none";
    Displaydata(cartData);

} else {
    document.querySelector('.cart-container-empty').style.display = "flex";
    document.querySelector("#progressBar").setAttribute("value", "5");
}

///////applying display DATA  functionality/////////
////////////////////////////////////////
function Displaydata(cartData) {

    document.querySelector(".display-cartItems").textContent = "";

    var div1 = document.createElement("div");
    div1.className = "shopping-cart-container";

    var h2 = document.createElement("h2");
    h2.textContent = `Shopping Cart (${cartData.length})`;
    h2.className = "h2Name";


    var select = document.createElement('div');
    select.className = "selectAll";

    var selectBut = document.createElement("input");
    selectBut.setAttribute("type", "checkbox");

    select.append(selectBut);

    var selectAllStatement = document.createElement("h3");
    selectAllStatement.textContent = "Select all";
    selectAllStatement.className = "selectAllStatement";
    select.append(selectAllStatement);

    div1.append(h2, select);

    ////////////creating free gift wala tag!!
    //////////////////////
    var freeGiftContainer = document.createElement("div");
    freeGiftContainer.className = "freeGiftContainer";

    var freegift = document.createElement("h4");
    freegift.textContent = "Free Gift"
    freegift.className = "freegift";

    var textGIFT = document.createElement("h4");
    textGIFT.className = "textGIFT";
    textGIFT.textContent = "You have a free gift, Please choose it >"

    freeGiftContainer.append(freegift, textGIFT);

    var divOrder = document.createElement("div");
    divOrder.className = "divOrder";

    var h2Order = document.createElement("div");
    h2Order.textContent = "Order Summary"
    h2Order.className = "h2Order";

    /////////////////////
    var subTotl = document.createElement("div");
    subTotl.className = "subTotl";

    var subTOtal = document.createElement("h4");
    subTOtal.className = "subTOtal";
    subTOtal.textContent = "Subtotal";

    var subtotalrs = document.createElement("div");
    subtotalrs.className = "subtotalrs";

    let priceSubTotal = function(cartData) {
        let sum = 0;
        for (let i = 0; i < cartData.length; i++) {
            sum += +cartData[i].price;
        }
        return sum.toLocaleString('en-IN');
    }
    subtotalrs.textContent = `₹${priceSubTotal(cartData)}`

    var hr1 = document.createElement("hr");
    hr1.className = "hr1";

    subTotl.append(subTOtal, subtotalrs);
    //////
    /////////
    //////////////
    //////
    var Totl = document.createElement("div");
    Totl.className = "subTotl";

    var TOtal = document.createElement("h2");
    TOtal.className = "TOtal";
    TOtal.textContent = `Total(${cartData.length})`;

    var totalrs = document.createElement("div");
    totalrs.className = "totalrs";

    totalrs.textContent = `₹${priceSubTotal(cartData)}`

    var hr1 = document.createElement("hr");
    hr1.className = "hr1";

    Totl.append(TOtal, totalrs);


    var acceptcards = document.createElement("div");
    acceptcards.className = "accept-visa";

    var imagecards = document.createElement("img");
    imagecards.className = "imagecards";
    imagecards.setAttribute("src", "sprite2.png");

    acceptcards.append(imagecards)

    /////////////
    //////
    var proceedToCheckOut = document.createElement("div");
    proceedToCheckOut.textContent = "Proceed to Checkout";
    proceedToCheckOut.addEventListener("click", function() {
        // window.location.href = "card_payment.html"



        var sing = localStorage.getItem("flag");
        if (sing == "true") {
            window.location.href = "card_payment.html";
        } else {
            // window.history.go(-2);
            // var previousSite = localStorage.setItem("pre", )
            location.href = "login.html";
        }


    })
    proceedToCheckOut.className = "proceedToCheckOut";

    divOrder.append(h2Order, subTotl, hr1, Totl, proceedToCheckOut, acceptcards);

    document.querySelector(".display-cartItems").append(div1, freeGiftContainer, divOrder);


    /////////////////////
    ////////now mapping over the whole cart Items and shhowing items.
    ////////////////////////////
    cartData.map((ele, index) => {

        var main_cartPage = document.createElement('div');
        main_cartPage.className = "main_cartPage";

        var div_imageContainer = document.createElement("div");
        div_imageContainer.className = "div_imageContainer";

        let imgOfItem = document.createElement("img");
        imgOfItem.className = "imgOfItem"
        imgOfItem.setAttribute("src", ele.image);

        var descripTion = document.createElement("div");
        descripTion.className = "descripTion";

        var ProductName = document.createElement("h3");
        ProductName.className = "ProductName";
        ProductName.textContent = ele.name;

        var colorOfName = document.createElement("h4");
        colorOfName.className = "colorOfName";
        colorOfName.textContent = `Color: ${ele.color}`;

        var PriceOfitem = document.createElement("h4");
        PriceOfitem.className = "PriceOfitem";
        PriceOfitem.textContent = `₹${ele.price}`;

        var deleteIcon = document.createElement('img');
        deleteIcon.className = "deleteIcon"
        deleteIcon.setAttribute("src", "icons8-delete-48.png");
        deleteIcon.addEventListener('click', function(index) {
            deleteCartItem(index);
        })

        // var wishlistIcon = document.createElement("img");
        // wishlistIcon.className = "wishlistIcon"
        // wishlistIcon.setAttribute("src", "icons8-heart-24.png")

        descripTion.append(ProductName, colorOfName, PriceOfitem, deleteIcon);
        div_imageContainer.append(imgOfItem)
        main_cartPage.append(div_imageContainer, descripTion);

        document.querySelector(".display-cartItems").append(main_cartPage);




    })
}


function deleteCartItem(index) {
    cartData.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    Displaydata(cartData);
}


var USERNAME = JSON.parse(localStorage.getItem("USERNAME"));
console.log(USERNAME);
if (USERNAME !== null) {
    document.querySelector(".showUsr").textContent = USERNAME;
    document.querySelector("#Register").textContent = "";
}