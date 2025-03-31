$(document).ready(function(){
    $("#faq_1").click(function(){
        $("#ans_1").toggle();
    });
    $("#faq_2").click(function(){
        $("#ans_2").toggle();
    });
    $("#faq_3").click(function(){
        $("#ans_3").toggle();
    });
    $("#faq_4").click(function(){
        $("#ans_4").toggle();
    });
    $("#faq_5").click(function(){
        $("#ans_5").toggle();
    });

    $("#item_1").click(function(){    
        var category = $("#item_1 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_2").click(function(){    
        var category = $("#item_2 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_3").click(function(){    
        var category = $("#item_3 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_4").click(function(){    
        var category = $("#item_4 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_5").click(function(){    
        var category = $("#item_5 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_6").click(function(){    
        var category = $("#item_6 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_7").click(function(){    
        var category = $("#item_7 > p").text();
        localStorage.setItem('selectedCategory', category);
    });
    $("#item_8").click(function(){    
        var category = $("#item_8 > p").text();
        localStorage.setItem('selectedCategory', category);
    });

    var selectedCategory = localStorage.getItem('selectedCategory');

    localStorage.setItem('selectedCategory', $("#select_test").val());

    if(selectedCategory) {
        $("#select_test").val(selectedCategory);
    }

    $(".product_card").parent("a").click(function() {
        var productCard = $(this).find(".product_card");
        var imageElement = productCard.find(".product_image img");
        var imageSrc = imageElement.attr("src");
        var title = productCard.find(".product_title").text();
        var price = productCard.find(".product_price").text();
        var rating = productCard.find(".product_rating").text();

        localStorage.setItem('selectedImageSrc', imageSrc);
        localStorage.setItem('selectedTitle', title);
        localStorage.setItem('selectedPrice', price);
        localStorage.setItem('selectedRating', rating);
    });

    var selectedImageSrc = localStorage.getItem('selectedImageSrc');
    var selectedTitle = localStorage.getItem('selectedTitle');
    var selectedPrice = localStorage.getItem('selectedPrice');
    var selectedRating = localStorage.getItem('selectedRating');
    
    $(".specific_product_title").text(selectedTitle);
    $(".specific_product_price").text(selectedPrice);
    $(".specific_product_rating").text(selectedRating);
    $(".specifics_section_image img").attr("src", selectedImageSrc);

    var quantityInput = document.querySelector('.quantity_input');
    var decreaseBtn = document.getElementById('decrease');
    var increaseBtn = document.getElementById('increase');
    
    decreaseBtn.addEventListener('click', function() {
        var currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        var currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

});

setInterval(function(){
    var selectedCategory = $("#select_test").val();
    var sold = ["42", "128", "87", "56", "98", "34", "76", "112"]
    var ratings = ["4", "5", "4.5", "5", "3.5", "4", "3", "5"]
    
    if(selectedCategory == "Graphics Card"){
        var itemName = "Graphics Card"
        var img_category = "gpu"
        var img_type = "png"
        var prices = ["₱32,999", "₱33,999", "₱36,995", "₱19,999", "₱33,999", "₱20,999", "₱22,999", "₱23,999"]
        var specific = true
    }
    else if(selectedCategory == "CPU"){
        var itemName = "CPU"
        var img_category = "cpu"
        var img_type = "webp"
        var prices = ["₱12,700", "₱29,900", "₱19,999", "₱4,650", "₱12,300", "₱7,752", "₱7,248", "₱9,950"]
        var specific = true
    }
    else if(selectedCategory == "RAM"){
        var itemName = "RAM"
        var img_category = "ram"
        var img_type = "png"
        var prices = ["₱995", "₱1,100", "₱1,800", "₱1,100", "₱1,799", "₱1,999", "₱1,800", "₱2,800"]
        var specific = true
    }
    else if(selectedCategory == "Power Supply"){
        var itemName = "Power Supply"
        var img_category = "psu"
        var img_type = "webp"
        var prices = ["₱19,950", "₱3,900", "₱7,400", "₱5,888", "₱6,600", "₱3,050", "₱4,450", "₱3,050"]
        var specific = true
    }
    else if(selectedCategory == "Storage"){
        var itemName = "NVME SSD"
        var img_category = "nvme"
        var img_type = "png"
        var prices = ["₱3,100", "₱7,500", "₱2,150", "₱6,900", "₱6,300", "₱12,999", "₱13,999", "₱10,999"]
        var specific = true
    }
    else if(selectedCategory == "Motherboard"){
        var itemName = "Motherboard"
        var img_category = "mobo"
        var img_type = "png"
        var prices = [ "₱4,320", "₱4,569", "₱4,798", "₱5,140", "₱7,499", "₱7,799", "₱6,295", "₱14,380"]
        var specific = true
    }
    else if(selectedCategory == "Cooling"){
        var itemName = "Cooling Fan"
        var img_category = "fan"
        var img_type = "webp"
        var prices = ["₱565", "₱1,295", "₱950", "₱425", "₱1,695", "₱2,050", "₱4,095", "₱4,495"]
        var specific = true
    }
    else if(selectedCategory == "All Categories"){
        var specific = false
    }

    if(specific == true){
        $(".product_card h3").text("Sample " + itemName);

        $("#product_1 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_1 p").text(prices[0]);
        $("#product_1 h6").text("★ " + ratings[0] + " | " + sold[0] + " items sold");
        $("#product_2 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_2 p").text(prices[1]);
        $("#product_2 h6").text("★ " + ratings[1] + " | " + sold[1] + " items sold");
        $("#product_3 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_3 p").text(prices[2]);
        $("#product_3 h6").text("★ " + ratings[2] + " | " + sold[2] + " items sold");
        $("#product_4 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_4 p").text(prices[3]);
        $("#product_4 h6").text("★ " + ratings[3] + " | " + sold[3] + " items sold");
        $("#product_5 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_5 p").text(prices[4]);
        $("#product_5 h6").text("★ " + ratings[4] + " | " + sold[4] + " items sold");
        $("#product_6 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_6 p").text(prices[5]);
        $("#product_6 h6").text("★ " + ratings[5] + " | " + sold[5] + " items sold");
        $("#product_7 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_7 p").text(prices[6]);
        $("#product_7 h6").text("★ " + ratings[6] + " | " + sold[6] + " items sold");
        $("#product_8 img").attr("src","img/" + img_category +"_1."+ img_type);
        $("#product_8 p").text(prices[7]);
        $("#product_8 h6").text("★ " + ratings[7] + " | " + sold[7] + " items sold");
    }
    else{
        $(".product_card h3").text("Sample Products");
        $("#product_1 img").attr("src","img/" + "cpu_1.webp");
        $("#product_1 p").text("₱12,700");
        $("#product_2 img").attr("src","img/" + "gpu_1.png");
        $("#product_2 p").text("₱36,995");
        $("#product_3 img").attr("src","img/" + "ram_1.png");
        $("#product_3 p").text("₱2,800");
        $("#product_4 img").attr("src","img/" + "psu_1.webp");
        $("#product_4 p").text("₱1,100");
        $("#product_5 img").attr("src","img/" + "nvme_1.png");
        $("#product_5 p").text("4,450");
        $("#product_6 img").attr("src","img/" + "mobo_1.png");
        $("#product_6 p").text("₱7,500");
        $("#product_7 img").attr("src","img/" + "fan_1.webp");
        $("#product_7 p").text("₱5,140");
        $("#product_8 img").attr("src","img/" + "headset.webp");
        $("#product_8 p").text("₱3,295");
    }

}, 100)