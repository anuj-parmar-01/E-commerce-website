const data={
    "products": [
      {
        "_id": "dress1",
        "image": "/images/dress1.jpg",
        "title": "Midi sundress with shirring detail",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["X", "L", "XL", "XXL"],
        "price": 700
      },
      {
        "_id": "dress2",
        "image": "/images/dress2.jpg",
        "title": "Midi sundress with ruched front",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["X", "M", "L"],
        "price": 800
      },
      {
        "_id": "dress3",
        "image": "/images/dress3.jpg",
        "title": "Midi dress in pink ditsy floral",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["X", "M", "L"],
        "price": 1100
      },
      {
        "_id": "dress4",
        "image": "/images/dress4.jpg",
        "title": "cami maxi dress in polka dot",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["XL"],
        "price": 1200
      },
      {
        "_id": "dress5",
        "image": "/images/dress5.jpg",
        "title": "Frill mini dress in yellow polka dot",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["X", "L", "XL"],
        "price": 1300
      },
      {
        "_id": "dress6",
        "image": "/images/dress6.jpg",
        "title": "Midi tea dress in blue and red spot",
        "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
        "availableSizes": ["XL", "XXL"],
        "price": 2000
      }
    ]
  }

const product=data.products

const Create=(product)=>{
    if( product.availableSizes.includes("X")===true){
        console.log(product.title)
    }
    else{
        console.log("no match found")
    }
    


};
product.filter(Create)
