let allProductData =[];
const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Add a click event to toggle visibility
toggleButton.addEventListener("click", () => {
  console.log("Toggle");
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("nav-links");
});

// -----------Load API Data Start-----------//
const loadProducts = () => {
    const data = [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 100,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category:"men Clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 20,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category:"men Clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: "259",
          },
        },
        {
          id: 3,
          title: "Mens Casual Slim Fit",
          price: 30,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category:"men Clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          rating: {
            rate: 2.1,
            count: 430,
          },
        },
        {
          id: 4,
          title: "Solid Gold Petite Micropave ",
          price: 200,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category:"jewelery",
          image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 3.9,
            count: 70,
          },
        },
        {
          id: 5,
          title: "White Gold Plated Princess",
          price: 10,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 3,
            count: 400,
          },
        },
        {
          id: 6,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          price: 100,
          description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          category:"electronics",
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          rating: {
            rate: 3.3,
            count: 203,
          },
        },
        {
          id: 7,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 200,
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          rating: {
            rate: 2.9,
            count: 470,
          },
        },
        {
          id: 8,
          title:
            "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
          price: 109,
          description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
          category:"electronics",
          image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
          rating: {
            rate: 4.8,
            count: 319,
          },
        },
        {
          id: 9,
          title:
            "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
          price: 200,
          description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          rating: {
            rate: 4.8,
            count: 400,
          },
        },
        {
          id: 10,
          title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
          price: 600,
          description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
          category:"electronics",
          image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
          rating: {
            rate: 2.9,
            count: 250,
          },
        },
        {
          id: 11,
          title:
            "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
          price: 1000,
          description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          category: "electronics",
          image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
          rating: {
            rate: 2.2,
            count: 140,
          },
        },
        {
          id: 12,
          title: "BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats",
          price: 400,
          description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          category:"women clothing",
          image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
          rating: {
            rate: 2.6,
            count: 235,
          },
        },
    
        {
          id: 13,
          title:
            "Food is any substance consumed by an organism for nutritional support5",
          price: 700,
          description:
            "Food is any substance consumed to provide nutritional support and energy to an organism.[2][3] It can be raw, processed, or formulated and is consumed orally by animals for growth, health, or pleasure.",
          category:"Food",
          image: "https://cdn.georgeinstitute.org/sites/default/files/styles/width1920_fallback/public/2020-10/world-food-day-2020.png",
          rating: {
            rate: 4.8,
            count: 319,
          },
        },
      ];
      allProductData = data;
showProducts(allProductData, "All Products");
};

// Modal functions
function openModal(id, title) {
    console.log(id);
    console.log(title);
    const modal = document.getElementById('postModal');
      
        if (modal) {
            document.body.classList.add('modal-open');
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            allProductData.forEach(el =>{

            if(el.id == id){
            document.querySelector("#post_name").textContent = title;
            document.querySelector('#postImage').setAttribute('src', el.image);
            document.querySelector("#post_description").textContent = el.description;
            document.querySelector("#post_price").textContent = `Price: $${el.price}`;
            document.querySelector("#post_rate").textContent = `Rate: ${el.rating.rate}/5`;
            document.querySelector("#post_rating").textContent = `of ${el.rating.count} Ratings`;
             const modalButtons =document.querySelector("#modal_buttons");
             modalButtons.innerHTML = `
                                   <button onclick= "closeModal()" class="px-4 py-2 rounded-xl bg-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
                                      Cancel
                                    </button>
                                    <button onclick="addToCart(${el.id}, '${el.image}', ${el.price},'${el.title}')" class="px-4 py-2 rounded-xl bg-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">  
                                      Add to Cart
                                     </button>
                                     `
            };
        });      
    };
};


function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside
document.getElementById('postModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});
// Show The Product
let showProducts = (products, productCatagory) => {
    const posts_container = document.querySelector("#posts_container");
    document.getElementById("articles_name").textContent = productCatagory.toUpperCase();
    posts_container.innerHTML ="";
            console.log(products);
            products.forEach(el =>{
                const dateString = el.updated_at;

                 // Convert the string to a Date object
                 const date = new Date(dateString);

                 // Format the date
                 const options = { minute: '2-digit', hour:'2-digit', day: '2-digit', month: 'long', year: 'numeric' };
                 const formattedDate = date.toLocaleDateString('en-US', options);

                const showCatagoryProducts = () => {
                posts_container.innerHTML +=
                `<article
                class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                <div class="relative overflow-hidden">
                    <img src=${el.image} alt="Post Title"
                        class="w-60 h-60 rounded-2xl mx-auto transform group-hover:scale-105 transition-transform duration-300">
                    
                </div>
                <div class="p-6">
                    <h3
                        class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                       ${el.title}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-2 text-center text-3xl font-bold">
                         Price: $${el.price}
                    </p>
                    <div class="flex items-center justify-between">
                        <button onclick="addToCart(${el.id}, '${el.image}', ${el.price},'${el.title}' )" class="ext-xl font-bold text-gray-800 hover:text-purple-600 font-medium inline-flex items-center gap-2 transition-colors">  
                            Add to Cart
                        </button>
                        <button onclick="openModal(${el.id}, '${el.title}')"
                            class="ext-xl font-bold text-gray-800 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                            Details  →
                        </button>
                    </div>
                </div>
            </article>`;
                };

                if(productCatagory == "All Products"){
                    showCatagoryProducts();
                  };
                  if(productCatagory == el.category){
                    showCatagoryProducts();
                  };   
            });        
 };
  
loadProducts();

// Create a new buttons
const newButtons = document.querySelector("#buttons_container");
    newButtons.innerHTML = `
    <button onclick = "showProducts(allProductData , 'All Products')" class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
                            All 
    </button>`
   let catagories= [];
  console.log(allProductData);
for(const product of allProductData){
    if(catagories == []){
      catagories.push(product.category);
     };
     let count = 0;
       for(const catagory of catagories){
        if(catagory == product.category){
              count = 1;
             break;
          }};
       if(count==0){
                     catagories.push(product.category);
                     newButtons.innerHTML +=`
                                            <button onclick = "showProducts(allProductData, '${product.category}')"   class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
                                             ${product.category.toUpperCase()}
                                             </button>
                                             `
                     } ;      
 };







 let count = 0;
let cardId =[];
let priceCart =[];
let titleCart = [];
let imageCart =[];
let cartDetail =[];
let cartDetails =[];
let quantity = 0;

const addToCart = (id, image, price, title) => {
  // count = count + 1;
  cardId.push(id);
  imageCart.push(image);
  priceCart.push(price);
  titleCart.push(title);
  cartDetail=[image, title, price, id];
  cartDetails.push(cartDetail);
  count += 1;
  //updatePrice("price", price);
  //updateTaxandCharge();
  document.getElementById("cartTotal").innerText = count;
  alert(`${title} is Added To Cart Successfully!`);

};
let cartDeliveryPrice = 0;
let cartTaxPrice = 0;
let cartTotalPrice = 0;
let cartDiscount =0;
let cartFinalPrice =0;
function openModalCart( ){

    const modalCart = document.getElementById('cart_modal');
    document.getElementById("cart_details").innerHTML = " ";
      let sl=0;
      let price = 0;
        if (modalCart) {
            document.body.classList.add('modal-open');
            modalCart.classList.remove('hidden');
            modalCart.classList.add('flex');
            cartDetails.forEach(el =>{
                let itemTotalPrice = parseFloat(el[2])*parseFloat(1)
                price = price + itemTotalPrice;
               sl +=1;
            document.getElementById("cart_details").innerHTML +=`
            <tr class= "table table-row">
                <td> ${sl} </td>
                <td> <img src="${el[0]}" style= "width:100px; height:80px"> </td>
                <td> <h2 style= "width:130px;">${el[1]}</h2> </td>
                <td> <h2 style= "width:90px;"> 1
                
                </h2> </td>
                <td> <h2 style= "width:110px;">${el[2]}</h2> </td>
                <td> <h2 style= "width:120px;"> ${itemTotalPrice} </h2>  </td>
                <td> <button onclick ="deleteFromCart('${el}')" class= "btn btn-primary">  Delete </button> </td>
            </tr>
                 
`
cartDeliveryPrice = price*.1;
cartTaxPrice = price*.15;
cartTotalPrice = price + cartDeliveryPrice + cartTaxPrice;
cartFinalPrice = cartTotalPrice - cartDiscount;

            });   
            document.getElementById("cartSubtotalPrice").textContent = price.toFixed(2);  
            document.getElementById("cartDeliveryPrice").textContent = cartDeliveryPrice.toFixed(2);
            document.getElementById("cartTaxPrice").textContent = cartTaxPrice.toFixed(2);
            document.getElementById("cartTotalPrice").textContent = cartTotalPrice.toFixed(2);
            document.getElementById("cartDiscount").textContent = cartDiscount.toFixed(2);
            document.getElementById("cartFinalPrice").textContent = cartFinalPrice.toFixed(2);    


    };
};


function closeModalCart() {
    const modalCart = document.getElementById('cart_modal');
    if (modalCart) {
        modalCart.classList.remove('flex');
        modalCart.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside
document.getElementById('cart_modal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModalCart();
    }
});

function deleteFromCart(item) {
    console.log(item);
    // count = count + 1;
    cartDetails.forEach((el, index) =>{
    if(el==item){
    cartDetails.splice(index, 1);
    count -= 1;
    //updatePriceAfterDelete("price", price);
    //updateTaxandCharge();
    document.getElementById("cartTotal").innerText = count;
    openModalCart();
    alert(`${el[1]} is Deleted From Cart Successfully!`);
    };
});

  };

  function goToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function addPromoCode(){
    const promoCode = document.getElementById("promoCodeInput").value;
    
    if(cartTotalPrice <= 0){
      alert(" Add product to Cart First !!")
    }
    else if(promoCode == ""){
      alert(" Give A Promo Code First!!")
    }
     else if(promoCode == 'ostad10'){
      cartDiscount = cartTotalPrice *.1;
      cartFinalPrice = cartTotalPrice - cartDiscount;
      document.getElementById("cartDiscount").textContent = cartDiscount.toFixed(2);
      document.getElementById("cartFinalPrice").textContent = cartFinalPrice.toFixed(2);
      alert(`${promoCode} is Applied Successfully !!`)
    }
    else if(promoCode == 'ostad5'){
      cartDiscount = cartTotalPrice *.05;
      cartFinalPrice = cartTotalPrice - cartDiscount;
      document.getElementById("cartDiscount").textContent = cartDiscount.toFixed(2);
      document.getElementById("cartFinalPrice").textContent = cartFinalPrice.toFixed(2);
      alert(`${promoCode} is Applied Successfully !!`)
    }
    else{
     alert(`${promoCode} is Not Correct Promo Code !!`)
    }
  }

  function checkout(){
    if(cartTotalPrice <= 0){
      alert(" Add product to Cart First !!")
    }
    else{
      alert(`Checkout Amount $${cartFinalPrice} Paid Successfully and Thank You for Your Shopping !!`);
      count =0;
      cardId =[];
      priceCart =[];
      titleCart = [];
      imageCart =[];
      cartDetail =[];
      cartDetails =[];
      quantity = 0;
      cartDeliveryPrice = 0;
      cartTaxPrice = 0;
      cartTotalPrice = 0;
      cartDiscount =0;
      cartFinalPrice =0;
      document.getElementById("cartTotal").innerText = count;
      closeModalCart();
      
    }
  }