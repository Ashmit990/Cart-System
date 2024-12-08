export const products = {
    // Electronics
    101: {
      name: "Smartphone XYZ",
      totalPrice: 50000,
      description: "A powerful smartphone with 8GB RAM and 128GB storage.",
      image: "/Shopping-Cart/assets/Product Photos/smart_phone.jpg",
      category: "Electronics",
    },

    102: {
      name: "Gaming Laptop Pro",
      totalPrice: 110000,
      description: "Gaming laptop with 16GB RAM, RTX 3060, and 1TB SSD.",
      image: "/Shopping-Cart/assets/Product Photos/gaming_laptop.jpg",
      category: "Electronics",
    },
    103: {
      name: "4K Ultra HD TV",
      totalPrice: 70000,
      description: "55-inch Ultra HD TV with crystal-clear picture quality.",
      image: "/Shopping-Cart/assets/Product Photos/4k_tv.png",
      category: "Electronics",
    },
    104: {
      name: "Tablet Pro Max",
      totalPrice: 100000,
      description: "10-inch tablet with 256GB storage and stylus support.",
      image: "/Shopping-Cart/assets/Product Photos/tablet.jpg",
      category: "Electronics",
    },
    105: {
      name: "Bluetooth Speaker Boom",
      totalPrice: 7000,
      description: "Portable Bluetooth speaker with deep bass and 10-hour battery life.",
      image: "/Shopping-Cart/assets/Product Photos/speaker.png",
      category: "Electronics",
    },
  
    // Accessories
    201: {
      name: "Wireless Earbuds",
      totalPrice: 5000,
      description: "Comfortable and high-quality sound wireless earbuds.",
      image: "/Shopping-Cart/assets/Product Photos/earbuds.jpg",
      category: "Accessories",
    },
    202: {
      name: "Leather Wallet",
      totalPrice: 3000,
      description: "Premium leather wallet with multiple compartments.",
      image: "/Shopping-Cart/assets/Product Photos/wallet.jpg",
      category: "Accessories",
    },
    203: {
      name: "Stylish Backpack",
      totalPrice: 4000,
      description: "Durable backpack with multiple pockets and sleek design.",
      image: "/Shopping-Cart/assets/Product Photos/backpack.jpg",
      category: "Accessories",
    },
    204: {
      name: "Sunglasses UV400",
      totalPrice: 3500,
      description: "Polarized sunglasses with 100% UV protection.",
      image: "/Shopping-Cart/assets/Product Photos/sunglasses.jpg",
      category: "Accessories",
    },
    205: {
      name: "Keychain Organizer",
      totalPrice: 2300,
      description: "Compact keychain organizer to keep keys tidy and accessible.",
      image: "/Shopping-Cart/assets/Product Photos/keychain.jpg",
      category: "Accessories",
    },
  
  
    // Wearables
    301: {
      name: "Smart Watch Series 5",
      totalPrice: 7000,
      description: "Smartwatch with fitness tracking and heart rate monitor.",
      image: "/Shopping-Cart/assets/Product Photos/smart_watch.jpg",
      category: "Wearables",
    },
    302: {
      name: "Fitness Tracker Band",
      totalPrice: 2700,
      description: "Lightweight fitness tracker with step and sleep tracking.",
      image: "/Shopping-Cart/assets/Product Photos/fitness_tracker.jpg",
      category: "Wearables",
    },
    303: {
      name: "Luxury Watch",
      totalPrice: 4200,
      description: "Elegant luxury watch with stainless steel design.",
      image: "/Shopping-Cart/assets/Product Photos/watch.jpg",
      category: "Wearables",
    },
    304: {
      name: "VR Headset",
      totalPrice: 3500,
      description: "Immersive virtual reality headset for gaming and entertainment.",
      image: "/Shopping-Cart/assets/Product Photos/headset.jpg",
      category: "Wearables",
    },
    305: {
      name: "Smart Glasses",
      totalPrice: 3800,
      description: "Augmented reality smart glasses with built-in camera.",
      image: "/Shopping-Cart/assets/Product Photos/smart_glass.jpg",
      category: "Wearables",
    },
  
    // Home Appliances
    401: {
      name: "Blender Pro 5000",
      totalPrice: 7200,
      description: "Multi-purpose blender for smoothies, soups, and more.",
      image: "/Shopping-Cart/assets/Product Photos/blender.jpg",
      category: "Home Appliances",
    },
    402: {
      name: "Microwave Oven",
      totalPrice: 5300,
      description: "Compact microwave oven with multiple cooking modes.",
      image: "/Shopping-Cart/assets/Product Photos/oven.jpg",
      category: "Home Appliances",
    },
    403: {
      name: "Air Fryer XL",
      totalPrice: 2800,
      description: "Large-capacity air fryer for healthy cooking.",
      image: "/Shopping-Cart/assets/Product Photos/air.jpg",
      category: "Home Appliances",
    },
    404: {
      name: "Vacuum Cleaner",
      totalPrice: 3400,
      description: "Powerful vacuum cleaner with HEPA filter.",
      image: "/Shopping-Cart/assets/Product Photos/vaccum.jpg",
      category: "Home Appliances",
    },
    405: {
      name: "Coffee Maker Deluxe",
      totalPrice: 2700,
      description: "Programmable coffee maker with brew strength options.",
      image: "/Shopping-Cart/assets/Product Photos/coffee.jpg",
      category: "Home Appliances",
    },
  
    // Fitness
    501: {
      name: "Yoga Mat",
      totalPrice: 1800,
      description: "Non-slip yoga mat for workouts and meditation.",
      image: "/Shopping-Cart/assets/Product Photos/yoga.jpg",
      category: "Fitness",
    },
    502: {
      name: "Dumbbell Set",
      totalPrice: 2700,
      description: "Adjustable dumbbell set for strength training.",
      image: "/Shopping-Cart/assets/Product Photos/dumbell.jpg",
      category: "Fitness",
    },
    503: {
      name: "Resistance Bands",
      totalPrice: 1400,
      description: "Set of resistance bands for full-body workouts.",
      image: "/Shopping-Cart/assets/Product Photos/resistance_band.jpg",
      category: "Fitness",
    },
    504: {
      name: "Treadmill Foldable",
      totalPrice: 4200,
      description: "Compact foldable treadmill for indoor running.",
      image: "/Shopping-Cart/assets/Product Photos/trademill.jpg",
      category: "Fitness",
    },
    505: {
      name: "Kettlebell",
      totalPrice: 2900,
      description: "Durable kettlebell for strength and cardio exercises.",
      image: "/Shopping-Cart/assets/Product Photos/kettle.jpg",
      category: "Fitness",
    },
  };

 localStorage.setItem("this", JSON.stringify(products)); //saves products data into the local storage under the key "this"


  
  