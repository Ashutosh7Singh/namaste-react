import React from "react";
import ReactDOM from "react-dom/client";
import data from "./App1";

/**
 * Header
 *   -logo
 *     -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 * -RestaurantCard
 *    -Img
 *    -Name of res,Star rating,cuisine,delevry time
 * Footer
 * -copyright
 * -Links
 * _Address
 * -Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
      
const RestaurantCard = (props)=>{
  const{resData}=props;
  
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img 
    className="res-logo"
    alt="res-logo"
     src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sh1q5i1uxt273nmprv6h"></img>
    <h3>{resData.data.name}</h3>
    <h4>{resData.data.cuisine}</h4>
    <h4>{resData.data.avgRating}</h4>
    <h4>{resData.data.costForTwo /100}</h4>
    <h4>{resData.data.deliveryTime}minutes</h4>
    </div>
  );
};

const resObj=
  {
    "statusCode": 0,
    "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
    "nextOffset": "COVCELQ4KIDol6z29sjBWjCnEzgD",
    "widgetOffset": {
    "NewListingView_Topical_Fullbleed": "",
    "NewListingView_Topical_Version2": "",
    "NewListingView_category_bar_chicletranking_TwoRows": "",
    "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
    "Restaurant_Group_WebView_SEO_PB_Theme": "",
    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
    "inlineFacetFilter": "",
    "restaurantCountWidget": ""
    }
    },
    "cards": [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "header": {
    "headerStyling": {
    "padding": {
    "left": 16,
    "top": 14,
    "bottom": 2
    }
    }
    },
    "layout": {
    "rows": 1,
    "columns": 5,
    "horizontalScrollEnabled": true,
    "shouldSnap": true,
    "itemSpacing": 10,
    "widgetPadding": {},
    "containerStyle": {
    "containerPadding": {
    "left": 16,
    "top": 12,
    "right": 16,
    "bottom": 12
    }
    },
    "scrollBar": {
    "scrollThumbColor": "#E46D47",
    "scrollTrackColor": "#E4E4E4",
    "width": 54,
    "height": 4,
    "scrollStyling": {
    "padding": {
    "top": 6,
    "bottom": 12
    }
    }
    },
    "autoScrollConfig": {
    "isScrollEnabled": true,
    "autoScrollDuration": 4,
    "autoScrollResetDuration": 4
    },
    "dotScrollBar": {
    "activeColor": "#36393E",
    "inactiveColor": "#66686E",
    "activeSize": 16,
    "inactiveMediumSize": 7,
    "inactiveSmallSize": 4,
    "dotSpacing": 8,
    "windowSize": 5,
    "showCount": true,
    "textColor": "#FFFFFF",
    "scrollStyling": {
    "padding": {
    "top": 6,
    "bottom": 12
    }
    }
    }
    },
    "imageGridCards": {
    "info": [
    {
    "id": "1308337",
    "imageId": "rng/md/carousel/production/ea4857fd3ad8869418dfa14a92e7a4fd",
    "action": {
    "link": "https://www.swiggy.com/collections/96722?collection_id=96722&tags=layout_ux4&type=rcv2",
    "text": "Holi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Get 60% off to welcome you back",
    "altTextCta": "Order Now"
    },
    "entityId": "96722",
    "frequencyCapping": {}
    },
    {
    "id": "1508745",
    "imageId": "rng/md/carousel/production/646c307a6fc463ce3559b5e46aee9c2d",
    "action": {
    "link": "https://www.swiggy.com/collections/99528?collection_id=99528&tags=layout_ux4&type=rcv2",
    "text": "Holi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Flat deals",
    "altTextCta": "order now"
    },
    "entityId": "99528",
    "frequencyCapping": {}
    },
    {
    "id": "1510270",
    "imageId": "rng/md/carousel/production/a5f7072704352ee69165de4b59324035",
    "action": {
    "link": "https://www.swiggy.com/menu/148719",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Brands with Offers",
    "altTextCta": "open"
    },
    "entityId": "148719",
    "frequencyCapping": {},
    "isManualAds": true
    },
    {
    "id": "1311394",
    "imageId": "rng/md/carousel/production/2b9401fca1d171746b89dffcd392df3c",
    "action": {
    "link": "swiggy://fusion-landing?id=Birthday_Bash&show_location=true",
    "text": "Pepsi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Pepsi",
    "altTextCta": "Order Now"
    },
    "entityId": "swiggy://fusion-landing?id=Birthday_Bash&show_location=true",
    "frequencyCapping": {},
    "isManualAds": true
    },
    {
    "id": "1510256",
    "imageId": "rng/md/carousel/production/c66b6a0193411958bec77338865826ac",
    "action": {
    "link": "https://www.swiggy.com/menu/253784",
    "text": "MCD",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "40",
    "altTextCta": "Order Now"
    },
    "entityId": "253784",
    "frequencyCapping": {},
    "isManualAds": true
    }
    ],
    "style": {
    "width": {
    "type": "TYPE_RELATIVE",
    "value": 0.95238,
    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
    },
    "height": {
    "type": "TYPE_RELATIVE",
    "value": 0.59685,
    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
    }
    }
    },
    "id": "topical_banner",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
    "info": [
    {
    "id": "1308337",
    "imageId": "rng/md/carousel/production/ea4857fd3ad8869418dfa14a92e7a4fd",
    "action": {
    "link": "https://www.swiggy.com/collections/96722?collection_id=96722&tags=layout_ux4&type=rcv2",
    "text": "Holi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Get 60% off to welcome you back",
    "altTextCta": "Order Now"
    },
    "entityId": "96722",
    "frequencyCapping": {}
    },
    {
    "id": "1508745",
    "imageId": "rng/md/carousel/production/646c307a6fc463ce3559b5e46aee9c2d",
    "action": {
    "link": "https://www.swiggy.com/collections/99528?collection_id=99528&tags=layout_ux4&type=rcv2",
    "text": "Holi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Flat deals",
    "altTextCta": "order now"
    },
    "entityId": "99528",
    "frequencyCapping": {}
    },
    {
    "id": "1510270",
    "imageId": "rng/md/carousel/production/a5f7072704352ee69165de4b59324035",
    "action": {
    "link": "https://www.swiggy.com/menu/148719",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Brands with Offers",
    "altTextCta": "open"
    },
    "entityId": "148719",
    "frequencyCapping": {},
    "isManualAds": true
    },
    {
    "id": "1311394",
    "imageId": "rng/md/carousel/production/2b9401fca1d171746b89dffcd392df3c",
    "action": {
    "link": "swiggy://fusion-landing?id=Birthday_Bash&show_location=true",
    "text": "Pepsi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "Pepsi",
    "altTextCta": "Order Now"
    },
    "entityId": "swiggy://fusion-landing?id=Birthday_Bash&show_location=true",
    "frequencyCapping": {},
    "isManualAds": true
    },
    {
    "id": "1510256",
    "imageId": "rng/md/carousel/production/c66b6a0193411958bec77338865826ac",
    "action": {
    "link": "https://www.swiggy.com/menu/253784",
    "text": "MCD",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "40",
    "altTextCta": "Order Now"
    },
    "entityId": "253784",
    "frequencyCapping": {},
    "isManualAds": true
    }
    ],
    "style": {
    "width": {
    "type": "TYPE_RELATIVE",
    "value": 0.95238,
    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
    },
    "height": {
    "type": "TYPE_RELATIVE",
    "value": 0.59685,
    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
    }
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "header": {
    "title": "Ashutosh, what's on your mind?",
    "headerStyling": {
    "padding": {
    "left": 16,
    "top": 16,
    "bottom": 4
    }
    }
    },
    "layout": {
    "rows": 1,
    "columns": 10,
    "horizontalScrollEnabled": true,
    "itemSpacing": 24,
    "widgetPadding": {},
    "containerStyle": {
    "containerPadding": {
    "left": 8,
    "top": 8,
    "right": 12,
    "bottom": 4
    }
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "imageGridCards": {
    "info": [
    {
    "id": "762797",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
    "text": "Burgers",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for burger",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
    "frequencyCapping": {}
    },
    {
    "id": "750580",
    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
    "text": "pizzas",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for pizza",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
    "frequencyCapping": {}
    },
    {
    "id": "749774",
    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
    "text": "Noodles",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for noodles",
    "altTextCta": "open"
    },
    "entityId": "80464",
    "frequencyCapping": {}
    },
    {
    "id": "750588",
    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
    "text": "Chinese",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chinese",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
    "frequencyCapping": {}
    },
    {
    "id": "750223",
    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
    "text": "Rolls",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for roll",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
    "frequencyCapping": {}
    },
    {
    "id": "750132",
    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
    "text": "Dosa",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for dosa",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    "frequencyCapping": {}
    },
    {
    "id": "750592",
    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
    "text": "Biryani",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for biryani",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
    "frequencyCapping": {}
    },
    {
    "id": "750217",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
    "text": "Pav Bhaji",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for pav bhaji",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    "frequencyCapping": {}
    },
    {
    "id": "750123",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
    "text": "Dhokla",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for dhokla",
    "altTextCta": "open"
    },
    "entityId": "80423",
    "frequencyCapping": {}
    },
    {
    "id": "750226",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
    "text": "Salad",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for salad",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
    "frequencyCapping": {}
    },
    {
    "id": "749769",
    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
    "text": "Momos",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for momos",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
    "frequencyCapping": {}
    },
    {
    "id": "750230",
    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
    "text": "Samosa",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for samosa",
    "altTextCta": "open"
    },
    "entityId": "80397",
    "frequencyCapping": {}
    },
    {
    "id": "749874",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
    "text": "Cakes",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for cakes",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    "frequencyCapping": {}
    },
    {
    "id": "749879",
    "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
    "text": "Chole Bhature",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chhole bhatoore",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
    "frequencyCapping": {}
    },
    {
    "id": "750209",
    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
    "text": "Pastry",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for Pastry",
    "altTextCta": "open"
    },
    "entityId": "80358",
    "frequencyCapping": {}
    },
    {
    "id": "750235",
    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
    "text": "Sandwich",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for sandwich",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
    "frequencyCapping": {}
    },
    {
    "id": "750207",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
    "text": "Pasta",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for pasta",
    "altTextCta": "open"
    },
    "entityId": "80480",
    "frequencyCapping": {}
    },
    {
    "id": "750249",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
    "text": "Shawarma",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for shawarma",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
    "frequencyCapping": {}
    },
    {
    "id": "750644",
    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80441?collection_id=80441&tags=layout_CCS_Idli&type=rcv2",
    "text": "Idli",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for idly",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli",
    "frequencyCapping": {}
    },
    {
    "id": "750640",
    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
    "text": "Kachori",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for kachori",
    "altTextCta": "open"
    },
    "entityId": "80450",
    "frequencyCapping": {}
    }
    ],
    "style": {
    "width": {
    "type": "TYPE_RELATIVE",
    "value": 0.2941,
    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
    },
    "height": {
    "type": "TYPE_RELATIVE",
    "value": 1.2444,
    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
    }
    }
    },
    "id": "whats_on_your_mind",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
    "info": [
    {
    "id": "762797",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
    "text": "Burgers",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for burger",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
    "frequencyCapping": {}
    },
    {
    "id": "750580",
    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
    "text": "pizzas",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for pizza",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
    "frequencyCapping": {}
    },
    {
    "id": "749774",
    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
    "text": "Noodles",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for noodles",
    "altTextCta": "open"
    },
    "entityId": "80464",
    "frequencyCapping": {}
    },
    {
    "id": "750588",
    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
    "text": "Chinese",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chinese",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
    "frequencyCapping": {}
    },
    {
    "id": "750223",
    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
    "text": "Rolls",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for roll",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
    "frequencyCapping": {}
    },
    {
    "id": "750132",
    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
    "text": "Dosa",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for dosa",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    "frequencyCapping": {}
    },
    {
    "id": "750592",
    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
    "text": "Biryani",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for biryani",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
    "frequencyCapping": {}
    },
    {
    "id": "750217",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
    "text": "Pav Bhaji",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for pav bhaji",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    "frequencyCapping": {}
    },
    {
    "id": "750123",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
    "text": "Dhokla",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for dhokla",
    "altTextCta": "open"
    },
    "entityId": "80423",
    "frequencyCapping": {}
    },
    {
    "id": "750226",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
    "text": "Salad",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for salad",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
    "frequencyCapping": {}
    },
    {
    "id": "749769",
    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
    "text": "Momos",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for momos",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
    "frequencyCapping": {}
    },
    {
    "id": "750230",
    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
    "text": "Samosa",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for samosa",
    "altTextCta": "open"
    },
    "entityId": "80397",
    "frequencyCapping": {}
    },
    {
    "id": "749874",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
    "text": "Cakes",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for cakes",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    "frequencyCapping": {}
    },
    {
    "id": "749879",
    "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
    "text": "Chole Bhature",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chhole bhatoore",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
    "frequencyCapping": {}
    },
    {
    "id": "750209",
    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
    "text": "Pastry",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for Pastry",
    "altTextCta": "open"
    },
    "entityId": "80358",
    "frequencyCapping": {}
    },
    {
    "id": "750235",
    "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
    "text": "Sandwich",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for sandwich",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
    "frequencyCapping": {}
    },
    {
    "id": "750207",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
    "text": "Pasta",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for pasta",
    "altTextCta": "open"
    },
    "entityId": "80480",
    "frequencyCapping": {}
    },
    {
    "id": "750249",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
    "text": "Shawarma",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for shawarma",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
    "frequencyCapping": {}
    },
    {
    "id": "750644",
    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80441?collection_id=80441&tags=layout_CCS_Idli&type=rcv2",
    "text": "Idli",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for idly",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli",
    "frequencyCapping": {}
    },
    {
    "id": "750640",
    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
    "text": "Kachori",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for kachori",
    "altTextCta": "open"
    },
    "entityId": "80450",
    "frequencyCapping": {}
    }
    ],
    "style": {
    "width": {
    "type": "TYPE_RELATIVE",
    "value": 0.2941,
    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
    },
    "height": {
    "type": "TYPE_RELATIVE",
    "value": 1.2444,
    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
    }
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "header": {
    "title": "Top restaurant chains in Delhi",
    "action": {},
    "headerStyling": {
    "padding": {
    "left": 16,
    "top": 28,
    "bottom": 18
    }
    }
    },
    "layout": {
    "rows": 1,
    "columns": 20,
    "horizontalScrollEnabled": true,
    "itemSpacing": 32,
    "widgetPadding": {},
    "containerStyle": {
    "containerPadding": {
    "left": 16,
    "right": 12,
    "bottom": 12
    }
    },
    "scrollBar": {
    "scrollThumbColor": "#E46D47",
    "scrollTrackColor": "#02060C",
    "width": 54,
    "height": 4,
    "scrollStyling": {
    "padding": {
    "top": 6,
    "bottom": 24
    }
    }
    },
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "top_brands_for_you",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
    "restaurants": [
    {
    "info": {
    "id": "240669",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Indira Nagar",
    "areaName": "Adarsh Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "240669",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-indira-nagar-adarsh-nagar-delhi-240669",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "13106",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "2nd Phase",
    "areaName": "Model Town 2",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "13106",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "2",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 04:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-2nd-phase-model-town-2-delhi-13106",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "337622",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "B Block",
    "areaName": "Gujranwala Town",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "337622",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6800
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6800
    },
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 6.7,
    "serviceability": "SERVICEABLE",
    "slaString": "39 mins",
    "lastMileTravelString": "6.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-b-block-gujranwala-town-delhi-337622",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "253784",
    "name": "McDonald's",
    "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
    "locality": "Shalimar Bagh",
    "areaName": "Ashok vihar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "253784",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 37,
    "lastMileTravel": 7,
    "serviceability": "SERVICEABLE",
    "slaString": "37 mins",
    "lastMileTravelString": "7.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-shalimar-bagh-ashok-vihar-delhi-253784",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "24181",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "dftifuiev5dsvklbc72n",
    "locality": "GTB Nagar",
    "areaName": "GTB Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "24181",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "2456",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 40,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "40 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-gtb-nagar-delhi-24181",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "62988",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "jkkziqik2wscgsnhm3h2",
    "locality": "Bhai Parmanand Colony",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "62988",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "4925",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "39 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bhai-parmanand-colony-mukherjee-nagar-delhi-62988",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "110332",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
    "locality": "Delhi University",
    "areaName": "GTB Nagar",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "110332",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "6249",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹149"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-university-gtb-nagar-delhi-110332",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "128116",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
    "locality": "Kamla Nagar",
    "areaName": "Kamla Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "128116",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "4961",
    "avgRatingString": "3.9",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 49,
    "lastMileTravel": 7.6,
    "serviceability": "SERVICEABLE",
    "slaString": "49 mins",
    "lastMileTravelString": "7.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 03:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "349818",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Spark Mall",
    "areaName": "Kamla Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "349818",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 48,
    "lastMileTravel": 7.5,
    "serviceability": "SERVICEABLE",
    "slaString": "48 mins",
    "lastMileTravelString": "7.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-spark-mall-kamla-nagar-delhi-349818",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "148719",
    "name": "Bikkgane Biryani",
    "cloudinaryImageId": "56646c3f698b3c5ae53639c49a4725af",
    "locality": "Vishal Market",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "Mughlai",
    "North Indian"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "148719",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "5070",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bikkgane-biryani-vishal-market-mukherjee-nagar-delhi-148719",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "74717",
    "name": "Bikanervala",
    "cloudinaryImageId": "h6x0qtakvdbfveqgneoj",
    "locality": "Gujranwala Town",
    "areaName": "Ashok vihar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "South Indian",
    "Italian",
    "Continental",
    "North Indian",
    "Chinese",
    "Sweets"
    ],
    "avgRating": 4.1,
    "veg": true,
    "feeDetails": {
    "restaurantId": "74717",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "45936",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 38,
    "lastMileTravel": 7.1,
    "serviceability": "SERVICEABLE",
    "slaString": "38 mins",
    "lastMileTravelString": "7.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bikanervala-gujranwala-town-ashok-vihar-delhi-74717",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "42935",
    "name": "Sweet Truth - Cake and Desserts",
    "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
    "locality": "Bhai Parmanand Colony",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Snacks",
    "Bakery",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "42935",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "4444",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-bhai-parmanand-colony-mukherjee-nagar-delhi-42935",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "156084",
    "name": "The Good Bowl",
    "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
    "locality": "Bhai Parmand Colony",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Pastas",
    "Punjabi",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "156084",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "7918",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-good-bowl-bhai-parmand-colony-mukherjee-nagar-delhi-156084",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "220833",
    "name": "Wow! Momo",
    "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
    "locality": "Inderlok Metro Station",
    "areaName": "Ashok vihar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Tibetan",
    "Healthy Food",
    "Asian",
    "Chinese",
    "Snacks",
    "Continental",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "220833",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "1776",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 43,
    "lastMileTravel": 7.7,
    "serviceability": "SERVICEABLE",
    "slaString": "43 mins",
    "lastMileTravelString": "7.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/wow-momo-inderlok-metro-station-ashok-vihar-delhi-220833",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "411287",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
    "locality": "F Block",
    "areaName": "Hudson Lane",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "411287",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "2233",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 40,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "40 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-f-block-hudson-lane-delhi-411287",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "42956",
    "name": "Faasos - Wraps & Rolls",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Bhai Parmanand Colony",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "North Indian",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "42956",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "21809",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 37,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "37 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-bhai-parmanand-colony-mukherjee-nagar-delhi-42956",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "388372",
    "name": "Chaayos Chai+Snacks=Relax",
    "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
    "locality": "GT Karnal Road",
    "areaName": "Model Town 3",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Beverages",
    "Chaat",
    "Desserts",
    "Fast Food",
    "Home Food",
    "Italian",
    "Maharashtrian",
    "Snacks",
    "Street Food",
    "Sweets"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "388372",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6100
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6100
    },
    "parentId": "281782",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 6.8,
    "serviceability": "SERVICEABLE",
    "slaString": "39 mins",
    "lastMileTravelString": "6.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 00:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-gt-karnal-road-model-town-3-delhi-388372",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "424898",
    "name": "Starbucks Coffee",
    "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
    "locality": "Prof ND Kapoor Marg",
    "areaName": "Jawahar Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Beverages",
    "Cafe",
    "Snacks",
    "Desserts",
    "Bakery",
    "Ice Cream"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "424898",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6700
    },
    "parentId": "195515",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 41,
    "lastMileTravel": 7.6,
    "serviceability": "SERVICEABLE",
    "slaString": "41 mins",
    "lastMileTravelString": "7.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-prof-nd-kapoor-marg-jawahar-nagar-delhi-424898",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "514036",
    "name": "Short Crust: Cakes & More",
    "cloudinaryImageId": "o7ttpq9l0zilrsuqmlfg",
    "locality": "Tagore Park Road",
    "areaName": "Model Town 1",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "514036",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "14108",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/short-crust-cakes-and-more-tagore-park-road-model-town-1-delhi-514036",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "396100",
    "name": "NOTO - Ice Creams & Desserts",
    "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
    "locality": "Tagore Park",
    "areaName": "Model Town 1",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Ice Cream"
    ],
    "avgRating": 4.4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "396100",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "468478",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "4.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-tagore-park-model-town-1-delhi-396100",
    "type": "WEBLINK"
    }
    }
    ],
    "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
    "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
    "style": {
    "width": {
    "type": "TYPE_RELATIVE",
    "value": 0.41111112,
    "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
    },
    "height": {
    "type": "TYPE_RELATIVE",
    "value": 0.7027027,
    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
    },
    "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
    },
    "collectionId": "84124"
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
    "title": "Restaurants with online food delivery in Delhi",
    "id": "popular_restaurants_title"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance (Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "Delivery Time"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost: Low to High"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost: High to Low"
    }
    ],
    "restaurantCount": 1609,
    "facetList": [
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Fast Delivery",
    "id": "deliveryTimefacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filter by"
    },
    {
    "label": "Cuisines",
    "id": "catalog_cuisines",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Afghani",
    "id": "query_afghani",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "American",
    "id": "query_american",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Andhra",
    "id": "query_andhra",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Arabian",
    "id": "query_arabian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Asian",
    "id": "query_asian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Awadhi",
    "id": "query_awadhi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Bakery",
    "id": "query_bakery",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Barbecue",
    "id": "query_barbecue",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Bengali",
    "id": "query_bengali",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Beverages",
    "id": "query_beverages",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Bihari",
    "id": "query_bihari",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Biryani",
    "id": "query_biryani",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "British",
    "id": "query_british",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Burgers",
    "id": "query_burgers",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Burmese",
    "id": "query_burmese",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Cafe",
    "id": "query_cafe",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Cakes and Pastries",
    "id": "query_cakes_and_pastries",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Chaat",
    "id": "query_chaat",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Chettinad",
    "id": "query_chettinad",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Chinese",
    "id": "query_chinese",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Combo",
    "id": "query_combo",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Continental",
    "id": "query_continental",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Desserts",
    "id": "query_desserts",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "European",
    "id": "query_european",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Fast",
    "id": "query_fast",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Fast Food",
    "id": "query_fast_food",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "French",
    "id": "query_french",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greek",
    "id": "query_greek",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Grill",
    "id": "query_grill",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Gujarati",
    "id": "query_gujarati",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Healthy Food",
    "id": "query_healthy_food",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Home Food",
    "id": "query_home_food",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Hyderabadi",
    "id": "query_hyderabadi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ice Cream",
    "id": "query_ice_cream",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ice Cream Cakes",
    "id": "query_ice_cream_cakes",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Indian",
    "id": "query_indian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ital",
    "id": "query_ital",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Italian",
    "id": "query_italian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Italian-American",
    "id": "query_italian-american",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Japanese",
    "id": "query_japanese",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Juices",
    "id": "query_juices",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Kashmiri",
    "id": "query_kashmiri",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Kebabs",
    "id": "query_kebabs",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Kerala",
    "id": "query_kerala",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Keto",
    "id": "query_keto",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Korean",
    "id": "query_korean",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Lebanese",
    "id": "query_lebanese",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Limited Stocks",
    "id": "query_limited_stocks",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Lucknowi",
    "id": "query_lucknowi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Maharashtrian",
    "id": "query_maharashtrian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Malaysian",
    "id": "query_malaysian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Meat",
    "id": "query_meat",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Mediterranean",
    "id": "query_mediterranean",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Mexican",
    "id": "query_mexican",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Middle Eastern",
    "id": "query_middle_eastern",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Mughlai",
    "id": "query_mughlai",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Naga",
    "id": "query_naga",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Navratri Special",
    "id": "query_navratri_special",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Nepalese",
    "id": "query_nepalese",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "North Eastern",
    "id": "query_north_eastern",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "North Indian",
    "id": "query_north_indian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Oriental",
    "id": "query_oriental",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "P",
    "id": "query_p",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Paan",
    "id": "query_paan",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pan-Asian",
    "id": "query_pan-asian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pastas",
    "id": "query_pastas",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pizzas",
    "id": "query_pizzas",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Punjabi",
    "id": "query_punjabi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Rajasthani",
    "id": "query_rajasthani",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Rolls & Wraps",
    "id": "query_rolls_&_wraps",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Salads",
    "id": "query_salads",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Seafood",
    "id": "query_seafood",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Sindhi",
    "id": "query_sindhi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Snacks",
    "id": "query_snacks",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "South American",
    "id": "query_south_american",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "South Indian",
    "id": "query_south_indian",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Street Food",
    "id": "query_street_food",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Sushi",
    "id": "query_sushi",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Sweets",
    "id": "query_sweets",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Tandoor",
    "id": "query_tandoor",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Thai",
    "id": "query_thai",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Thalis",
    "id": "query_thalis",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Tibetan",
    "id": "query_tibetan",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Turkish",
    "id": "query_turkish",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Waffle",
    "id": "query_waffle",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "canSearch": true,
    "subLabel": "Filter by cuisine",
    "openFilter": true
    },
    {
    "label": "Explore",
    "id": "explore",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "New on Swiggy",
    "id": "newfacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD"
    },
    {
    "label": "Ratings",
    "id": "rating",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Ratings 4.5+",
    "id": "ratingfacetquery3",
    "analytics": {}
    },
    {
    "label": "Ratings 4.0+",
    "id": "ratingfacetquery4",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 3.5+",
    "id": "ratingfacetquery5",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filter by"
    },
    {
    "label": "Veg/Non-Veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Pure Veg",
    "id": "isVegfacetquery2",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Non Veg",
    "id": "isVegfacetquery3",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filter by"
    },
    {
    "label": "Offers",
    "id": "restaurantOfferMultiTd",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Offers",
    "id": "restaurantOfferMultiTdfacetquery3",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Restaurants with"
    },
    {
    "label": "Cost for two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Rs. 300-Rs. 600",
    "id": "costForTwofacetquery3",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery4",
    "analytics": {}
    },
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery5",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filter by"
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "columns": 4
    },
    "id": "restaurant_grid_listing",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
    "restaurants": [
    {
    "info": {
    "id": "726481",
    "name": "KFC",
    "cloudinaryImageId": "d1d49a5694149063c00d38f9b17c923c",
    "locality": "Model Town",
    "areaName": "GTB nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "726481",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6200
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6200
    },
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-model-town-gtb-nagar-delhi-726481",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "772028",
    "name": "McDonald's",
    "cloudinaryImageId": "9c55be896aa0f38361486d4bf782892e",
    "locality": "Hudson Lane",
    "areaName": "Vijay Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American",
    "Fast Food"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "772028",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "630",
    "avgRatingString": "3.9",
    "totalRatingsString": "20+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-hudson-lane-vijay-nagar-delhi-772028",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "240669",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Indira Nagar",
    "areaName": "Adarsh Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "240669",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-indira-nagar-adarsh-nagar-delhi-240669",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "345551",
    "name": "Theobroma",
    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
    "locality": "1St Phase",
    "areaName": "Model Town 1",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.5,
    "feeDetails": {
    "restaurantId": "345551",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6200
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6200
    },
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 5.7,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "5.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "ABOVE ₹159",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-1st-phase-model-town-1-delhi-345551",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "634123",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Kingsway Camp",
    "areaName": "GTB Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "634123",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "2",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 03:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-kingsway-camp-gtb-nagar-delhi-634123",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "24181",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "dftifuiev5dsvklbc72n",
    "locality": "GTB Nagar",
    "areaName": "GTB Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "24181",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "2456",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 40,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "40 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-19 02:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-gtb-nagar-delhi-24181",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "62988",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "jkkziqik2wscgsnhm3h2",
    "locality": "Bhai Parmanand Colony",
    "areaName": "Mukherjee Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "62988",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "4925",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "39 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bhai-parmanand-colony-mukherjee-nagar-delhi-62988",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "110332",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
    "locality": "Delhi University",
    "areaName": "GTB Nagar",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "110332",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5500
    },
    "parentId": "6249",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹149"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-university-gtb-nagar-delhi-110332",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "736069",
    "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
    "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
    "locality": "sangam vihar",
    "areaName": "Vidhan sabha",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Desserts",
    "Ice Cream",
    "Ice Cream Cakes"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "736069",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3700
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3700
    },
    "parentId": "582",
    "avgRatingString": "4.0",
    "totalRatingsString": "10+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-11-18 22:15:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sangam-vihar-vidhan-sabha-delhi-736069",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ],
    "theme": "SeoRestaurantListingGridWidget"
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
    "message": "Show More",
    "id": "show_more_button"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
    "title": "Best Places to Eat Across Cities",
    "brands": [
    {
    "text": "Best Restaurants in Bangalore",
    "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
    },
    {
    "text": "Best Restaurants in Pune",
    "link": "https://www.swiggy.com/city/pune/best-restaurants"
    },
    {
    "text": "Best Restaurants in Mumbai",
    "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
    },
    {
    "text": "Best Restaurants in Delhi",
    "link": "https://www.swiggy.com/city/delhi/best-restaurants"
    },
    {
    "text": "Best Restaurants in Hyderabad",
    "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
    },
    {
    "text": "Best Restaurants in Kolkata",
    "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
    },
    {
    "text": "Best Restaurants in Chennai",
    "link": "https://www.swiggy.com/city/chennai/best-restaurants"
    },
    {
    "text": "Best Restaurants in Chandigarh",
    "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
    },
    {
    "text": "Best Restaurants in Ahmedabad",
    "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
    },
    {
    "text": "Best Restaurants in Jaipur",
    "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
    },
    {
    "text": "Best Restaurants in Nagpur",
    "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
    },
    {
    "text": "Best Restaurants in Bhubaneswar",
    "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
    },
    {
    "text": "Best Restaurants in Kochi",
    "link": "https://www.swiggy.com/city/kochi/best-restaurants"
    },
    {
    "text": "Best Restaurants in Surat",
    "link": "https://www.swiggy.com/city/surat/best-restaurants"
    },
    {
    "text": "Best Restaurants in Dehradun",
    "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
    },
    {
    "text": "Best Restaurants in Ludhiana",
    "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
    },
    {
    "text": "Best Restaurants in Patna",
    "link": "https://www.swiggy.com/city/patna/best-restaurants"
    },
    {
    "text": "Best Restaurants in Mangaluru",
    "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
    },
    {
    "text": "Best Restaurants in Bhopal",
    "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
    },
    {
    "text": "Best Restaurants in Gurgaon",
    "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
    },
    {
    "text": "Best Restaurants in Coimbatore",
    "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
    },
    {
    "text": "Best Restaurants in Agra",
    "link": "https://www.swiggy.com/city/agra/best-restaurants"
    },
    {
    "text": "Best Restaurants in Noida",
    "link": "https://www.swiggy.com/city/noida/best-restaurants"
    },
    {
    "text": "Best Restaurants in Vijayawada",
    "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
    },
    {
    "text": "Best Restaurants in Guwahati",
    "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
    },
    {
    "text": "Best Restaurants in Mysore",
    "link": "https://www.swiggy.com/city/mysore/best-restaurants"
    },
    {
    "text": "Best Restaurants in Pondicherry",
    "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
    },
    {
    "text": "Best Restaurants in Thiruvananthapuram",
    "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
    },
    {
    "text": "Best Restaurants in Ranchi",
    "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
    },
    {
    "text": "Best Restaurants in Vizag",
    "link": "https://www.swiggy.com/city/vizag/best-restaurants"
    },
    {
    "text": "Best Restaurants in Udaipur",
    "link": "https://www.swiggy.com/city/udaipur/best-restaurants"
    },
    {
    "text": "Best Restaurants in Vadodara",
    "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
    }
    ],
    "id": "restaurant_near_me_links"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
    "title": "Best Cuisines Near Me",
    "brands": [
    {
    "text": "Chinese Restaurant Near Me",
    "link": "https://www.swiggy.com/chinese-restaurants-near-me"
    },
    {
    "text": "South Indian Restaurant Near Me",
    "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
    },
    {
    "text": "Indian Restaurant Near Me",
    "link": "https://www.swiggy.com/indian-restaurants-near-me"
    },
    {
    "text": "Kerala Restaurant Near Me",
    "link": "https://www.swiggy.com/kerala-restaurants-near-me"
    },
    {
    "text": "Korean Restaurant Near Me",
    "link": "https://www.swiggy.com/korean-restaurants-near-me"
    },
    {
    "text": "North Indian Restaurant Near Me",
    "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
    },
    {
    "text": "Seafood Restaurant Near Me",
    "link": "https://www.swiggy.com/seafood-restaurants-near-me"
    },
    {
    "text": "Bengali Restaurant Near Me",
    "link": "https://www.swiggy.com/bengali-restaurants-near-me"
    },
    {
    "text": "Punjabi Restaurant Near Me",
    "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
    },
    {
    "text": "Italian Restaurant Near Me",
    "link": "https://www.swiggy.com/italian-restaurants-near-me"
    },
    {
    "text": "Andhra Restaurant Near Me",
    "link": "https://www.swiggy.com/andhra-restaurants-near-me"
    },
    {
    "text": "Biryani Restaurant Near Me",
    "link": "https://www.swiggy.com/biryani-restaurants-near-me"
    },
    {
    "text": "Japanese Restaurant Near Me",
    "link": "https://www.swiggy.com/japanese-restaurants-near-me"
    },
    {
    "text": "Arabian Restaurant Near Me",
    "link": "https://www.swiggy.com/arabian-restaurants-near-me"
    },
    {
    "text": "Fast Food Restaurant Near Me",
    "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
    },
    {
    "text": "Jain Restaurant Near Me",
    "link": "https://www.swiggy.com/jain-restaurants-near-me"
    },
    {
    "text": "Gujarati Restaurant Near Me",
    "link": "https://www.swiggy.com/gujarati-restaurants-near-me"
    },
    {
    "text": "Thai Restaurant Near Me",
    "link": "https://www.swiggy.com/thai-restaurants-near-me"
    },
    {
    "text": "Pizzas Restaurant Near Me",
    "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
    },
    {
    "text": "Asian Restaurant Near Me",
    "link": "https://www.swiggy.com/asian-restaurants-near-me"
    },
    {
    "text": "Cafe Restaurant Near Me",
    "link": "https://www.swiggy.com/cafe-restaurants-near-me"
    },
    {
    "text": "Continental Restaurant Near Me",
    "link": "https://www.swiggy.com/continental-restaurants-near-me"
    },
    {
    "text": "Mexican Restaurant Near Me",
    "link": "https://www.swiggy.com/mexican-restaurants-near-me"
    },
    {
    "text": "Mughlai Restaurant Near Me",
    "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
    },
    {
    "text": "Sushi Restaurant Near Me",
    "link": "https://www.swiggy.com/sushi-restaurants-near-me"
    },
    {
    "text": "Mangalorean Restaurant Near Me",
    "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
    },
    {
    "text": "Tibetan Restaurant Near Me",
    "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
    },
    {
    "text": "Barbecue Restaurant Near Me",
    "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
    },
    {
    "text": "Maharashtrian Restaurant Near Me",
    "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
    },
    {
    "text": "Nepalese Restaurant Near Me",
    "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
    },
    {
    "text": "Rajasthani Restaurant Near Me",
    "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
    },
    {
    "text": "Turkish Restaurant Near Me",
    "link": "https://www.swiggy.com/turkish-restaurants-near-me"
    }
    ],
    "id": "restaurant_near_me_links"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
    "title": "Explore Every Restaurants Near Me",
    "brands": [
    {
    "text": "Explore Restaurants Near Me",
    "link": "https://www.swiggy.com/restaurants-near-me"
    },
    {
    "text": "Explore Top Rated Restaurants Near Me",
    "link": "https://www.swiggy.com/best-restaurants-near-me"
    }
    ],
    "id": "restaurant_near_me_links"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
    "title": "For better experience,download the Swiggy app now",
    "androidAppImage": "portal/m/play_store.png",
    "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
    "iosAppImage": "portal/m/app_store.png",
    "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
    "id": "app_install_links"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
    "cities": [
    {
    "text": "Bangalore",
    "link": "https://www.swiggy.com/city/bangalore"
    },
    {
    "text": "Gurgaon",
    "link": "https://www.swiggy.com/city/gurgaon"
    },
    {
    "text": "Hyderabad",
    "link": "https://www.swiggy.com/city/hyderabad"
    },
    {
    "text": "Delhi",
    "link": "https://www.swiggy.com/city/delhi"
    },
    {
    "text": "Mumbai",
    "link": "https://www.swiggy.com/city/mumbai"
    },
    {
    "text": "Pune",
    "link": "https://www.swiggy.com/city/pune"
    },
    {
    "text": "Kolkata",
    "link": "https://www.swiggy.com/city/kolkata"
    },
    {
    "text": "Chennai",
    "link": "https://www.swiggy.com/city/chennai"
    },
    {
    "text": "Ahmedabad",
    "link": "https://www.swiggy.com/city/ahmedabad"
    },
    {
    "text": "Chandigarh",
    "link": "https://www.swiggy.com/city/chandigarh"
    },
    {
    "text": "Jaipur",
    "link": "https://www.swiggy.com/city/jaipur"
    },
    {
    "text": "Kochi",
    "link": "https://www.swiggy.com/city/kochi"
    },
    {
    "text": "Coimbatore",
    "link": "https://www.swiggy.com/city/coimbatore"
    },
    {
    "text": "Lucknow",
    "link": "https://www.swiggy.com/city/lucknow"
    },
    {
    "text": "Nagpur",
    "link": "https://www.swiggy.com/city/nagpur"
    },
    {
    "text": "Vadodara",
    "link": "https://www.swiggy.com/city/vadodara"
    },
    {
    "text": "Indore",
    "link": "https://www.swiggy.com/city/indore"
    },
    {
    "text": "Guwahati",
    "link": "https://www.swiggy.com/city/guwahati"
    },
    {
    "text": "Vizag",
    "link": "https://www.swiggy.com/city/vizag"
    },
    {
    "text": "Surat",
    "link": "https://www.swiggy.com/city/surat"
    },
    {
    "text": "Dehradun",
    "link": "https://www.swiggy.com/city/dehradun"
    },
    {
    "text": "Noida",
    "link": "https://www.swiggy.com/city/noida"
    },
    {
    "text": "Ludhiana",
    "link": "https://www.swiggy.com/city/ludhiana"
    },
    {
    "text": "Trichy",
    "link": "https://www.swiggy.com/city/trichy"
    },
    {
    "text": "Vijayawada",
    "link": "https://www.swiggy.com/city/vijayawada"
    },
    {
    "text": "Kanpur",
    "link": "https://www.swiggy.com/city/kanpur"
    },
    {
    "text": "Mysore",
    "link": "https://www.swiggy.com/city/mysore"
    },
    {
    "text": "Nashik",
    "link": "https://www.swiggy.com/city/nashik"
    },
    {
    "text": "Udaipur",
    "link": "https://www.swiggy.com/city/udaipur"
    },
    {
    "text": "Pondicherry",
    "link": "https://www.swiggy.com/city/pondicherry"
    },
    {
    "text": "Agra",
    "link": "https://www.swiggy.com/city/agra"
    },
    {
    "text": "Aurangabad",
    "link": "https://www.swiggy.com/city/aurangabad"
    },
    {
    "text": "Jalandhar",
    "link": "https://www.swiggy.com/city/jalandhar"
    },
    {
    "text": "Kota",
    "link": "https://www.swiggy.com/city/kota"
    },
    {
    "text": "Madurai",
    "link": "https://www.swiggy.com/city/madurai"
    },
    {
    "text": "Allahabad",
    "link": "https://www.swiggy.com/city/allahabad"
    },
    {
    "text": "Manipal",
    "link": "https://www.swiggy.com/city/manipal"
    },
    {
    "text": "Amritsar",
    "link": "https://www.swiggy.com/city/amritsar"
    },
    {
    "text": "Bareilly",
    "link": "https://www.swiggy.com/city/bareilly"
    },
    {
    "text": "Meerut",
    "link": "https://www.swiggy.com/city/meerut"
    },
    {
    "text": "Bhopal",
    "link": "https://www.swiggy.com/city/bhopal"
    },
    {
    "text": "Ooty",
    "link": "https://www.swiggy.com/city/ooty"
    },
    {
    "text": "Bhubaneswar",
    "link": "https://www.swiggy.com/city/bhubaneswar"
    },
    {
    "text": "Raipur",
    "link": "https://www.swiggy.com/city/raipur"
    },
    {
    "text": "Bikaner",
    "link": "https://www.swiggy.com/city/bikaner"
    },
    {
    "text": "Rajkot",
    "link": "https://www.swiggy.com/city/rajkot"
    },
    {
    "text": "Kozhikode",
    "link": "https://www.swiggy.com/city/kozhikode"
    },
    {
    "text": "Central Goa",
    "link": "https://www.swiggy.com/city/central-goa"
    },
    {
    "text": "Sirsa",
    "link": "https://www.swiggy.com/city/sirsa"
    },
    {
    "text": "Gwalior",
    "link": "https://www.swiggy.com/city/gwalior"
    },
    {
    "text": "Thrissur",
    "link": "https://www.swiggy.com/city/thrissur"
    },
    {
    "text": "Kharagpur",
    "link": "https://www.swiggy.com/city/kharagpur"
    },
    {
    "text": "Tirupati",
    "link": "https://www.swiggy.com/city/tirupati"
    },
    {
    "text": "Tirupur",
    "link": "https://www.swiggy.com/city/tirupur"
    },
    {
    "text": "Vellore",
    "link": "https://www.swiggy.com/city/vellore"
    },
    {
    "text": "Thiruvananthapuram",
    "link": "https://www.swiggy.com/city/thiruvananthapuram"
    },
    {
    "text": "Warangal",
    "link": "https://www.swiggy.com/city/warangal"
    },
    {
    "text": "Varanasi",
    "link": "https://www.swiggy.com/city/varanasi"
    },
    {
    "text": "Mangaluru",
    "link": "https://www.swiggy.com/city/mangaluru"
    },
    {
    "text": "Patna",
    "link": "https://www.swiggy.com/city/patna"
    },
    {
    "text": "Ranchi",
    "link": "https://www.swiggy.com/city/ranchi"
    },
    {
    "text": "Faridabad",
    "link": "https://www.swiggy.com/city/faridabad"
    },
    {
    "text": "Guntur",
    "link": "https://www.swiggy.com/city/guntur"
    },
    {
    "text": "Ujjain",
    "link": "https://www.swiggy.com/city/ujjain"
    },
    {
    "text": "Patiala",
    "link": "https://www.swiggy.com/city/patiala"
    },
    {
    "text": "Karnal",
    "link": "https://www.swiggy.com/city/karnal"
    },
    {
    "text": "Kakinada",
    "link": "https://www.swiggy.com/city/kakinada"
    },
    {
    "text": "Rajahmundry",
    "link": "https://www.swiggy.com/city/rajahmundry"
    },
    {
    "text": "Bilaspur",
    "link": "https://www.swiggy.com/city/bilaspur"
    },
    {
    "text": "Bhilai",
    "link": "https://www.swiggy.com/city/bhilai"
    },
    {
    "text": "Anand",
    "link": "https://www.swiggy.com/city/anand"
    },
    {
    "text": "Bhavnagar",
    "link": "https://www.swiggy.com/city/bhavnagar"
    },
    {
    "text": "Jammu",
    "link": "https://www.swiggy.com/city/jammu"
    },
    {
    "text": "Muktsar",
    "link": "https://www.swiggy.com/city/muktsar"
    },
    {
    "text": "Panipat",
    "link": "https://www.swiggy.com/city/panipat"
    },
    {
    "text": "Dhanbad",
    "link": "https://www.swiggy.com/city/dhanbad"
    },
    {
    "text": "Hubli",
    "link": "https://www.swiggy.com/city/hubli"
    },
    {
    "text": "Belgaum",
    "link": "https://www.swiggy.com/city/belgaum"
    },
    {
    "text": "Jabalpur",
    "link": "https://www.swiggy.com/city/jabalpur"
    },
    {
    "text": "Kolhapur",
    "link": "https://www.swiggy.com/city/kolhapur"
    },
    {
    "text": "Solapur",
    "link": "https://www.swiggy.com/city/solapur"
    },
    {
    "text": "Shillong",
    "link": "https://www.swiggy.com/city/shillong"
    },
    {
    "text": "Cuttack",
    "link": "https://www.swiggy.com/city/cuttack"
    },
    {
    "text": "Aligarh",
    "link": "https://www.swiggy.com/city/aligarh"
    },
    {
    "text": "Salem",
    "link": "https://www.swiggy.com/city/salem"
    },
    {
    "text": "Jodhpur",
    "link": "https://www.swiggy.com/city/jodhpur"
    },
    {
    "text": "Ajmer",
    "link": "https://www.swiggy.com/city/ajmer"
    },
    {
    "text": "Jhansi",
    "link": "https://www.swiggy.com/city/jhansi"
    },
    {
    "text": "Gorakhpur",
    "link": "https://www.swiggy.com/city/gorakhpur"
    },
    {
    "text": "Thanjavur",
    "link": "https://www.swiggy.com/city/thanjavur"
    },
    {
    "text": "Erode",
    "link": "https://www.swiggy.com/city/erode"
    },
    {
    "text": "Nellore",
    "link": "https://www.swiggy.com/city/nellore"
    },
    {
    "text": "Rourkela",
    "link": "https://www.swiggy.com/city/rourkela"
    },
    {
    "text": "Anantapur",
    "link": "https://www.swiggy.com/city/anantapur"
    },
    {
    "text": "Kurnool",
    "link": "https://www.swiggy.com/city/kurnool"
    },
    {
    "text": "Ahmednagar",
    "link": "https://www.swiggy.com/city/ahmednagar"
    },
    {
    "text": "Phagwara",
    "link": "https://www.swiggy.com/city/phagwara"
    },
    {
    "text": "Ambala",
    "link": "https://www.swiggy.com/city/ambala"
    },
    {
    "text": "Ballari",
    "link": "https://www.swiggy.com/city/ballari"
    },
    {
    "text": "Saharanpur",
    "link": "https://www.swiggy.com/city/saharanpur"
    },
    {
    "text": "Tirunelveli",
    "link": "https://www.swiggy.com/city/tirunelveli"
    },
    {
    "text": "Bathinda",
    "link": "https://www.swiggy.com/city/bathinda"
    },
    {
    "text": "Mathura",
    "link": "https://www.swiggy.com/city/mathura"
    },
    {
    "text": "Haridwar",
    "link": "https://www.swiggy.com/city/haridwar"
    },
    {
    "text": "Ratnagiri",
    "link": "https://www.swiggy.com/city/ratnagiri"
    },
    {
    "text": "Sangli",
    "link": "https://www.swiggy.com/city/sangli"
    },
    {
    "text": "Amravati",
    "link": "https://www.swiggy.com/city/amravati"
    },
    {
    "text": "Rishikesh",
    "link": "https://www.swiggy.com/city/rishikesh"
    },
    {
    "text": "Nagercoil",
    "link": "https://www.swiggy.com/city/nagercoil"
    },
    {
    "text": "KanyaKumari",
    "link": "https://www.swiggy.com/city/kanyakumari"
    },
    {
    "text": "Kadapa",
    "link": "https://www.swiggy.com/city/kadapa"
    },
    {
    "text": "Nizamabad",
    "link": "https://www.swiggy.com/city/nizamabad"
    },
    {
    "text": "Shivamogga",
    "link": "https://www.swiggy.com/city/shivamogga"
    },
    {
    "text": "Davanagere",
    "link": "https://www.swiggy.com/city/davanagere"
    },
    {
    "text": "Roorkee",
    "link": "https://www.swiggy.com/city/roorkee"
    },
    {
    "text": "Nanded",
    "link": "https://www.swiggy.com/city/nanded"
    },
    {
    "text": "Rewa",
    "link": "https://www.swiggy.com/city/rewa"
    },
    {
    "text": "Satna",
    "link": "https://www.swiggy.com/city/satna"
    },
    {
    "text": "Muzaffarpur",
    "link": "https://www.swiggy.com/city/muzaffarpur"
    },
    {
    "text": "Valsad",
    "link": "https://www.swiggy.com/city/valsad"
    },
    {
    "text": "Vapi",
    "link": "https://www.swiggy.com/city/vapi"
    },
    {
    "text": "Chhapra",
    "link": "https://www.swiggy.com/city/chhapra"
    },
    {
    "text": "Dharamshala",
    "link": "https://www.swiggy.com/city/dharamshala"
    },
    {
    "text": "Kollam",
    "link": "https://www.swiggy.com/city/kollam"
    },
    {
    "text": "Silchar",
    "link": "https://www.swiggy.com/city/silchar"
    },
    {
    "text": "Alappuzha",
    "link": "https://www.swiggy.com/city/alappuzha"
    },
    {
    "text": "Sonipat",
    "link": "https://www.swiggy.com/city/sonipat"
    },
    {
    "text": "Rohtak",
    "link": "https://www.swiggy.com/city/rohtak"
    },
    {
    "text": "Mehsana",
    "link": "https://www.swiggy.com/city/mehsana"
    },
    {
    "text": "Kullu",
    "link": "https://www.swiggy.com/city/kullu"
    },
    {
    "text": "Dhule",
    "link": "https://www.swiggy.com/city/dhule"
    },
    {
    "text": "Dharwad",
    "link": "https://www.swiggy.com/city/dharwad"
    },
    {
    "text": "Latur",
    "link": "https://www.swiggy.com/city/latur"
    },
    {
    "text": "Vizianagaram",
    "link": "https://www.swiggy.com/city/vizianagaram"
    },
    {
    "text": "Khammam",
    "link": "https://www.swiggy.com/city/khammam"
    },
    {
    "text": "Hampi",
    "link": "https://www.swiggy.com/city/hampi"
    },
    {
    "text": "Nainital",
    "link": "https://www.swiggy.com/city/nainital"
    },
    {
    "text": "Akola",
    "link": "https://www.swiggy.com/city/akola"
    },
    {
    "text": "Kalaburagi",
    "link": "https://www.swiggy.com/city/kalaburagi"
    },
    {
    "text": "Gaya",
    "link": "https://www.swiggy.com/city/gaya"
    },
    {
    "text": "Muzaffarnagar",
    "link": "https://www.swiggy.com/city/muzaffarnagar"
    },
    {
    "text": "Dewas",
    "link": "https://www.swiggy.com/city/dewas"
    },
    {
    "text": "Korba",
    "link": "https://www.swiggy.com/city/korba"
    },
    {
    "text": "Mussoorie",
    "link": "https://www.swiggy.com/city/mussoorie"
    },
    {
    "text": "Jalgaon",
    "link": "https://www.swiggy.com/city/jalgaon"
    },
    {
    "text": "Yamuna Nagar",
    "link": "https://www.swiggy.com/city/yamuna-nagar"
    },
    {
    "text": "Bhagalpur",
    "link": "https://www.swiggy.com/city/bhagalpur"
    },
    {
    "text": "Hapur",
    "link": "https://www.swiggy.com/city/hapur"
    },
    {
    "text": "Morena",
    "link": "https://www.swiggy.com/city/morena"
    },
    {
    "text": "Hassan",
    "link": "https://www.swiggy.com/city/hassan"
    },
    {
    "text": "Hisar",
    "link": "https://www.swiggy.com/city/hisar"
    },
    {
    "text": "Godhra",
    "link": "https://www.swiggy.com/city/godhra"
    },
    {
    "text": "Kolar ",
    "link": "https://www.swiggy.com/city/kolar"
    },
    {
    "text": "Rampur",
    "link": "https://www.swiggy.com/city/rampur"
    },
    {
    "text": "Sitapur",
    "link": "https://www.swiggy.com/city/sitapur"
    },
    {
    "text": "Etawah",
    "link": "https://www.swiggy.com/city/etawah"
    },
    {
    "text": "Porbandar",
    "link": "https://www.swiggy.com/city/porbandar"
    },
    {
    "text": "Nadiad",
    "link": "https://www.swiggy.com/city/nadiad"
    },
    {
    "text": "Sagar",
    "link": "https://www.swiggy.com/city/sagar"
    },
    {
    "text": "Morbi",
    "link": "https://www.swiggy.com/city/morbi"
    },
    {
    "text": "Chhindwara",
    "link": "https://www.swiggy.com/city/chhindwara"
    },
    {
    "text": "Tumakuru",
    "link": "https://www.swiggy.com/city/tumakuru"
    },
    {
    "text": "Singrauli",
    "link": "https://www.swiggy.com/city/singrauli"
    },
    {
    "text": "Thoothukudi",
    "link": "https://www.swiggy.com/city/thoothukudi"
    },
    {
    "text": "Katni",
    "link": "https://www.swiggy.com/city/katni"
    },
    {
    "text": "Khandwa",
    "link": "https://www.swiggy.com/city/khandwa"
    },
    {
    "text": "Eluru",
    "link": "https://www.swiggy.com/city/eluru"
    },
    {
    "text": "Malappuram",
    "link": "https://www.swiggy.com/city/malappuram"
    },
    {
    "text": "Dibrugarh",
    "link": "https://www.swiggy.com/city/dibrugarh"
    },
    {
    "text": "Deoghar",
    "link": "https://www.swiggy.com/city/deoghar"
    },
    {
    "text": "Khanna",
    "link": "https://www.swiggy.com/city/khanna"
    },
    {
    "text": "Bidar",
    "link": "https://www.swiggy.com/city/bidar"
    },
    {
    "text": "Madikeri",
    "link": "https://www.swiggy.com/city/madikeri"
    },
    {
    "text": "Haldwani",
    "link": "https://www.swiggy.com/city/haldwani"
    },
    {
    "text": "Farrukhabad",
    "link": "https://www.swiggy.com/city/farrukhabad"
    },
    {
    "text": "Malegaon",
    "link": "https://www.swiggy.com/city/malegaon"
    },
    {
    "text": "Dindigul",
    "link": "https://www.swiggy.com/city/dindigul"
    },
    {
    "text": "Shahjahanpur",
    "link": "https://www.swiggy.com/city/shahjahanpur"
    },
    {
    "text": "Beed",
    "link": "https://www.swiggy.com/city/beed"
    },
    {
    "text": "Junagadh",
    "link": "https://www.swiggy.com/city/junagadh"
    },
    {
    "text": "Asansol",
    "link": "https://www.swiggy.com/city/asansol"
    },
    {
    "text": "Beawar",
    "link": "https://www.swiggy.com/city/beawar"
    },
    {
    "text": "Kishangarh",
    "link": "https://www.swiggy.com/city/kishangarh"
    },
    {
    "text": "Parbhani",
    "link": "https://www.swiggy.com/city/parbhani"
    },
    {
    "text": "Gondia",
    "link": "https://www.swiggy.com/city/gondia"
    },
    {
    "text": "Ichalkaranji",
    "link": "https://www.swiggy.com/city/ichalkaranji"
    },
    {
    "text": "Jalna",
    "link": "https://www.swiggy.com/city/jalna"
    },
    {
    "text": "Yavatmal",
    "link": "https://www.swiggy.com/city/yavatmal"
    },
    {
    "text": "Shivpuri",
    "link": "https://www.swiggy.com/city/shivpuri"
    },
    {
    "text": "Moga",
    "link": "https://www.swiggy.com/city/moga"
    },
    {
    "text": "Abohar",
    "link": "https://www.swiggy.com/city/abohar"
    },
    {
    "text": "Adoni",
    "link": "https://www.swiggy.com/city/adoni"
    },
    {
    "text": "Madanapalle",
    "link": "https://www.swiggy.com/city/madanapalle"
    },
    {
    "text": "Tiruvannamalai",
    "link": "https://www.swiggy.com/city/tiruvannamalai"
    },
    {
    "text": "Satara",
    "link": "https://www.swiggy.com/city/satara"
    },
    {
    "text": "Ambur",
    "link": "https://www.swiggy.com/city/ambur"
    },
    {
    "text": "Karimnagar",
    "link": "https://www.swiggy.com/city/karimnagar"
    },
    {
    "text": "Ratlam",
    "link": "https://www.swiggy.com/city/ratlam"
    },
    {
    "text": "Moradabad",
    "link": "https://www.swiggy.com/city/moradabad"
    },
    {
    "text": "Machilipatnam",
    "link": "https://www.swiggy.com/city/machilipatnam"
    },
    {
    "text": "Ongole",
    "link": "https://www.swiggy.com/city/ongole"
    },
    {
    "text": "Kottayam",
    "link": "https://www.swiggy.com/city/kottayam"
    },
    {
    "text": "Darbhanga",
    "link": "https://www.swiggy.com/city/darbhanga"
    },
    {
    "text": "Kurukshetra",
    "link": "https://www.swiggy.com/city/kurukshetra"
    },
    {
    "text": "Unnao",
    "link": "https://www.swiggy.com/city/unnao"
    },
    {
    "text": "Bulandshahr",
    "link": "https://www.swiggy.com/city/bulandshahr"
    },
    {
    "text": "Durgapur",
    "link": "https://www.swiggy.com/city/durgapur"
    },
    {
    "text": "Siliguri",
    "link": "https://www.swiggy.com/city/siliguri"
    },
    {
    "text": "Pali",
    "link": "https://www.swiggy.com/city/pali"
    },
    {
    "text": "Tadepalligudem",
    "link": "https://www.swiggy.com/city/tadepalligudem"
    },
    {
    "text": "Ramagundam",
    "link": "https://www.swiggy.com/city/ramagundam"
    },
    {
    "text": "Mahbubnagar",
    "link": "https://www.swiggy.com/city/mahbubnagar"
    },
    {
    "text": "Bhiwani",
    "link": "https://www.swiggy.com/city/bhiwani"
    },
    {
    "text": "Cuddalore",
    "link": "https://www.swiggy.com/city/cuddalore"
    },
    {
    "text": "Kaithal",
    "link": "https://www.swiggy.com/city/kaithal"
    },
    {
    "text": "Jagtial",
    "link": "https://www.swiggy.com/city/jagtial"
    },
    {
    "text": "Palakkad",
    "link": "https://www.swiggy.com/city/palakkad"
    },
    {
    "text": "Guna",
    "link": "https://www.swiggy.com/city/guna"
    },
    {
    "text": "Kumbakonam",
    "link": "https://www.swiggy.com/city/kumbakonam"
    },
    {
    "text": "Maunath Bhanjan",
    "link": "https://www.swiggy.com/city/maunath-bhanjan"
    },
    {
    "text": "Baripada",
    "link": "https://www.swiggy.com/city/baripada"
    },
    {
    "text": "Orai",
    "link": "https://www.swiggy.com/city/orai"
    },
    {
    "text": "Bhadrak",
    "link": "https://www.swiggy.com/city/bhadrak"
    },
    {
    "text": "Batala",
    "link": "https://www.swiggy.com/city/batala"
    },
    {
    "text": "Firozpur",
    "link": "https://www.swiggy.com/city/firozpur"
    },
    {
    "text": "Barnala",
    "link": "https://www.swiggy.com/city/barnala"
    },
    {
    "text": "Raigarh",
    "link": "https://www.swiggy.com/city/raigarh"
    },
    {
    "text": "Nagaon",
    "link": "https://www.swiggy.com/city/nagaon"
    },
    {
    "text": "Mainpuri",
    "link": "https://www.swiggy.com/city/mainpuri"
    },
    {
    "text": "Balurghat",
    "link": "https://www.swiggy.com/city/balurghat"
    },
    {
    "text": "Giridih",
    "link": "https://www.swiggy.com/city/giridih"
    },
    {
    "text": "Ghazipur",
    "link": "https://www.swiggy.com/city/ghazipur"
    },
    {
    "text": "Jagdalpur",
    "link": "https://www.swiggy.com/city/jagdalpur"
    },
    {
    "text": "Vidisha",
    "link": "https://www.swiggy.com/city/vidisha"
    },
    {
    "text": "Dimapur",
    "link": "https://www.swiggy.com/city/dimapur"
    },
    {
    "text": "Shikohabad",
    "link": "https://www.swiggy.com/city/shikohabad"
    },
    {
    "text": "Imphal",
    "link": "https://www.swiggy.com/city/imphal"
    },
    {
    "text": "Lakhimpur",
    "link": "https://www.swiggy.com/city/lakhimpur"
    },
    {
    "text": "Rudrapur",
    "link": "https://www.swiggy.com/city/rudrapur"
    },
    {
    "text": "Ambikapur",
    "link": "https://www.swiggy.com/city/ambikapur"
    },
    {
    "text": "Rae Bareli",
    "link": "https://www.swiggy.com/city/rae-bareli"
    },
    {
    "text": "Tinsukia",
    "link": "https://www.swiggy.com/city/tinsukia"
    },
    {
    "text": "Rajapalayam",
    "link": "https://www.swiggy.com/city/rajapalayam"
    },
    {
    "text": "Rajnandgaon",
    "link": "https://www.swiggy.com/city/rajnandgaon"
    },
    {
    "text": "Kashipur",
    "link": "https://www.swiggy.com/city/kashipur"
    },
    {
    "text": "Ranibennur",
    "link": "https://www.swiggy.com/city/ranibennur"
    },
    {
    "text": "Burhanpur",
    "link": "https://www.swiggy.com/city/burhanpur"
    },
    {
    "text": "Bhadravati",
    "link": "https://www.swiggy.com/city/bhadravati"
    },
    {
    "text": "Chittoor",
    "link": "https://www.swiggy.com/city/chittoor"
    },
    {
    "text": "Pudukkottai",
    "link": "https://www.swiggy.com/city/pudukkottai"
    },
    {
    "text": "Hardoi",
    "link": "https://www.swiggy.com/city/hardoi"
    },
    {
    "text": "Basti",
    "link": "https://www.swiggy.com/city/basti"
    },
    {
    "text": "Karaikkudi",
    "link": "https://www.swiggy.com/city/karaikkudi"
    },
    {
    "text": "Lalitpur",
    "link": "https://www.swiggy.com/city/lalitpur"
    },
    {
    "text": "Hospet",
    "link": "https://www.swiggy.com/city/hospet"
    },
    {
    "text": "Budaun",
    "link": "https://www.swiggy.com/city/budaun"
    },
    {
    "text": "Neemuch",
    "link": "https://www.swiggy.com/city/neemuch"
    },
    {
    "text": "Pilibhit",
    "link": "https://www.swiggy.com/city/pilibhit"
    },
    {
    "text": "Barshi",
    "link": "https://www.swiggy.com/city/barshi"
    },
    {
    "text": "Sri Ganganagar",
    "link": "https://www.swiggy.com/city/sri-ganganagar"
    },
    {
    "text": "Wardha",
    "link": "https://www.swiggy.com/city/wardha"
    },
    {
    "text": "Sehore",
    "link": "https://www.swiggy.com/city/sehore"
    },
    {
    "text": "Bhimavaram",
    "link": "https://www.swiggy.com/city/bhimavaram"
    },
    {
    "text": "Hanumangarh",
    "link": "https://www.swiggy.com/city/hanumangarh"
    },
    {
    "text": "Pathankot",
    "link": "https://www.swiggy.com/city/pathankot"
    },
    {
    "text": "Puri",
    "link": "https://www.swiggy.com/city/puri"
    },
    {
    "text": "Fatehpur",
    "link": "https://www.swiggy.com/city/fatehpur"
    },
    {
    "text": "Surendranagar Dudhrej",
    "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
    },
    {
    "text": "Jamnagar",
    "link": "https://www.swiggy.com/city/jamnagar"
    },
    {
    "text": "Bhuj",
    "link": "https://www.swiggy.com/city/bhuj"
    },
    {
    "text": "Gandhidham",
    "link": "https://www.swiggy.com/city/gandhidham"
    },
    {
    "text": "Bharuch",
    "link": "https://www.swiggy.com/city/bharuch"
    },
    {
    "text": "Navsari",
    "link": "https://www.swiggy.com/city/navsari"
    },
    {
    "text": "Amreli",
    "link": "https://www.swiggy.com/city/amreli"
    },
    {
    "text": "Palanpur",
    "link": "https://www.swiggy.com/city/palanpur"
    },
    {
    "text": "Bhilwara",
    "link": "https://www.swiggy.com/city/bhilwara"
    },
    {
    "text": "Suratgarh",
    "link": "https://www.swiggy.com/city/suratgarh"
    },
    {
    "text": "Sikar",
    "link": "https://www.swiggy.com/city/sikar"
    },
    {
    "text": "Churu",
    "link": "https://www.swiggy.com/city/churu"
    },
    {
    "text": "Alwar",
    "link": "https://www.swiggy.com/city/alwar"
    },
    {
    "text": "Bhiwadi",
    "link": "https://www.swiggy.com/city/bhiwadi"
    },
    {
    "text": "Bharatpur",
    "link": "https://www.swiggy.com/city/bharatpur"
    },
    {
    "text": "Mount Abu",
    "link": "https://www.swiggy.com/city/mount-abu"
    },
    {
    "text": "Bundi",
    "link": "https://www.swiggy.com/city/bundi"
    },
    {
    "text": "Sawai Madhopur",
    "link": "https://www.swiggy.com/city/sawai-madhopur"
    },
    {
    "text": "Purulia",
    "link": "https://www.swiggy.com/city/purulia"
    },
    {
    "text": "Bardhaman",
    "link": "https://www.swiggy.com/city/bardhaman"
    },
    {
    "text": "Raniganj",
    "link": "https://www.swiggy.com/city/raniganj"
    },
    {
    "text": "Darjeeling",
    "link": "https://www.swiggy.com/city/darjeeling"
    },
    {
    "text": "Jalpaiguri",
    "link": "https://www.swiggy.com/city/jalpaiguri"
    },
    {
    "text": "Chittorgarh",
    "link": "https://www.swiggy.com/city/chittorgarh"
    },
    {
    "text": "Dholpur",
    "link": "https://www.swiggy.com/city/dholpur"
    },
    {
    "text": "Uluberia",
    "link": "https://www.swiggy.com/city/uluberia"
    },
    {
    "text": "Nabadwip",
    "link": "https://www.swiggy.com/city/nabadwip"
    },
    {
    "text": "Bongaon",
    "link": "https://www.swiggy.com/city/bongaon"
    },
    {
    "text": "Kanchrapara",
    "link": "https://www.swiggy.com/city/kanchrapara"
    },
    {
    "text": "Habra",
    "link": "https://www.swiggy.com/city/habra"
    },
    {
    "text": "Firozabad",
    "link": "https://www.swiggy.com/city/firozabad"
    },
    {
    "text": "Nalgonda",
    "link": "https://www.swiggy.com/city/nalgonda"
    },
    {
    "text": "Chandrapur",
    "link": "https://www.swiggy.com/city/chandrapur"
    },
    {
    "text": "Bijapur",
    "link": "https://www.swiggy.com/city/bijapur"
    },
    {
    "text": "Bhusawal",
    "link": "https://www.swiggy.com/city/bhusawal"
    },
    {
    "text": "Raichur",
    "link": "https://www.swiggy.com/city/raichur"
    },
    {
    "text": "Bahraich",
    "link": "https://www.swiggy.com/city/bahraich"
    },
    {
    "text": "Azamgarh",
    "link": "https://www.swiggy.com/city/azamgarh"
    },
    {
    "text": "Bahadurgarh",
    "link": "https://www.swiggy.com/city/bahadurgarh"
    },
    {
    "text": "Jind",
    "link": "https://www.swiggy.com/city/jind"
    },
    {
    "text": "Rewari",
    "link": "https://www.swiggy.com/city/rewari"
    },
    {
    "text": "Palwal",
    "link": "https://www.swiggy.com/city/palwal"
    },
    {
    "text": "Hathras",
    "link": "https://www.swiggy.com/city/hathras"
    },
    {
    "text": "Sambalpur",
    "link": "https://www.swiggy.com/city/sambalpur"
    },
    {
    "text": "Banda",
    "link": "https://www.swiggy.com/city/banda"
    },
    {
    "text": "Hoshiarpur",
    "link": "https://www.swiggy.com/city/hoshiarpur"
    },
    {
    "text": "Faridkot",
    "link": "https://www.swiggy.com/city/faridkot"
    },
    {
    "text": "Mandsaur",
    "link": "https://www.swiggy.com/city/mandsaur"
    },
    {
    "text": "Suryapet",
    "link": "https://www.swiggy.com/city/suryapet"
    },
    {
    "text": "Adilabad",
    "link": "https://www.swiggy.com/city/adilabad"
    },
    {
    "text": "Narasaraopet",
    "link": "https://www.swiggy.com/city/narasaraopet"
    },
    {
    "text": "Faizabad",
    "link": "https://www.swiggy.com/city/faizabad"
    },
    {
    "text": "Tadpatri",
    "link": "https://www.swiggy.com/city/tadpatri"
    },
    {
    "text": "Gonda",
    "link": "https://www.swiggy.com/city/gonda"
    },
    {
    "text": "Mughalsarai",
    "link": "https://www.swiggy.com/city/mughalsarai"
    },
    {
    "text": "Medinipur",
    "link": "https://www.swiggy.com/city/medinipur"
    },
    {
    "text": "Nagda",
    "link": "https://www.swiggy.com/city/nagda"
    },
    {
    "text": "Raiganj",
    "link": "https://www.swiggy.com/city/raiganj"
    },
    {
    "text": "Deoria City",
    "link": "https://www.swiggy.com/city/deoria-city"
    },
    {
    "text": "Sultanpur",
    "link": "https://www.swiggy.com/city/sultanpur"
    },
    {
    "text": "Shamli",
    "link": "https://www.swiggy.com/city/shamli"
    },
    {
    "text": "Krishnanagar",
    "link": "https://www.swiggy.com/city/krishnanagar"
    },
    {
    "text": "Ballia",
    "link": "https://www.swiggy.com/city/ballia"
    },
    {
    "text": "Guntakal",
    "link": "https://www.swiggy.com/city/guntakal"
    },
    {
    "text": "Miryalaguda",
    "link": "https://www.swiggy.com/city/miryalaguda"
    },
    {
    "text": "Etah",
    "link": "https://www.swiggy.com/city/etah"
    },
    {
    "text": "Berhampore",
    "link": "https://www.swiggy.com/city/berhampore"
    },
    {
    "text": "Gudivada",
    "link": "https://www.swiggy.com/city/gudivada"
    },
    {
    "text": "Haldia",
    "link": "https://www.swiggy.com/city/haldia"
    },
    {
    "text": "Santipur",
    "link": "https://www.swiggy.com/city/santipur"
    },
    {
    "text": "Basirhat",
    "link": "https://www.swiggy.com/city/basirhat"
    },
    {
    "text": "Udgir",
    "link": "https://www.swiggy.com/city/udgir"
    },
    {
    "text": "Proddatur",
    "link": "https://www.swiggy.com/city/proddatur"
    },
    {
    "text": "Nagapattinam",
    "link": "https://www.swiggy.com/city/nagapattinam"
    },
    {
    "text": "Chikmagalur",
    "link": "https://www.swiggy.com/city/chikmagalur"
    },
    {
    "text": "Chandausi",
    "link": "https://www.swiggy.com/city/chandausi"
    },
    {
    "text": "Bhind",
    "link": "https://www.swiggy.com/city/bhind"
    },
    {
    "text": "Mandya",
    "link": "https://www.swiggy.com/city/mandya"
    },
    {
    "text": "Bagalkot",
    "link": "https://www.swiggy.com/city/bagalkot"
    },
    {
    "text": "Nandurbar",
    "link": "https://www.swiggy.com/city/nandurbar"
    },
    {
    "text": "Chitradurga",
    "link": "https://www.swiggy.com/city/chitradurga"
    },
    {
    "text": "Osmanabad",
    "link": "https://www.swiggy.com/city/osmanabad"
    },
    {
    "text": "Modinagar",
    "link": "https://www.swiggy.com/city/modinagar"
    },
    {
    "text": "Gadag-Betigeri",
    "link": "https://www.swiggy.com/city/gadag-betigeri"
    },
    {
    "text": "Hoshangabad",
    "link": "https://www.swiggy.com/city/hoshangabad"
    },
    {
    "text": "Jaunpur",
    "link": "https://www.swiggy.com/city/jaunpur"
    },
    {
    "text": "Port Blair",
    "link": "https://www.swiggy.com/city/port-blair"
    },
    {
    "text": "Jorhat",
    "link": "https://www.swiggy.com/city/jorhat"
    },
    {
    "text": "Nandyal",
    "link": "https://www.swiggy.com/city/nandyal"
    },
    {
    "text": "Biharsharif",
    "link": "https://www.swiggy.com/city/biharsharif"
    },
    {
    "text": "Buxar",
    "link": "https://www.swiggy.com/city/buxar"
    },
    {
    "text": "Siwan",
    "link": "https://www.swiggy.com/city/siwan"
    },
    {
    "text": "Dehri",
    "link": "https://www.swiggy.com/city/dehri"
    },
    {
    "text": "Bettiah",
    "link": "https://www.swiggy.com/city/bettiah"
    },
    {
    "text": "Kishanganj",
    "link": "https://www.swiggy.com/city/kishanganj"
    },
    {
    "text": "Saharsa",
    "link": "https://www.swiggy.com/city/saharsa"
    },
    {
    "text": "Hajipur",
    "link": "https://www.swiggy.com/city/hajipur"
    },
    {
    "text": "Motihari",
    "link": "https://www.swiggy.com/city/motihari"
    },
    {
    "text": "Sasaram",
    "link": "https://www.swiggy.com/city/sasaram"
    },
    {
    "text": "Munger",
    "link": "https://www.swiggy.com/city/munger"
    },
    {
    "text": "Katihar",
    "link": "https://www.swiggy.com/city/katihar"
    },
    {
    "text": "Arrah",
    "link": "https://www.swiggy.com/city/arrah"
    },
    {
    "text": "Srikakulam",
    "link": "https://www.swiggy.com/city/srikakulam"
    },
    {
    "text": "Begusarai",
    "link": "https://www.swiggy.com/city/begusarai"
    },
    {
    "text": "Neyveli",
    "link": "https://www.swiggy.com/city/neyveli"
    },
    {
    "text": "Waidhan",
    "link": "https://www.swiggy.com/city/waidhan"
    },
    {
    "text": "Markapur",
    "link": "https://www.swiggy.com/city/markapur"
    },
    {
    "text": "Chikkaballapur",
    "link": "https://www.swiggy.com/city/chikkaballapur"
    },
    {
    "text": "Bhatkal",
    "link": "https://www.swiggy.com/city/bhatkal"
    },
    {
    "text": "Gokak",
    "link": "https://www.swiggy.com/city/gokak"
    },
    {
    "text": "Itarsi",
    "link": "https://www.swiggy.com/city/itarsi"
    },
    {
    "text": "Dhar",
    "link": "https://www.swiggy.com/city/dhar"
    },
    {
    "text": "Chalisgaon",
    "link": "https://www.swiggy.com/city/chalisgaon"
    },
    {
    "text": "Thiruvallur",
    "link": "https://www.swiggy.com/city/thiruvallur"
    },
    {
    "text": "Namakkal",
    "link": "https://www.swiggy.com/city/namakkal"
    },
    {
    "text": "Dharmapuri",
    "link": "https://www.swiggy.com/city/dharmapuri"
    },
    {
    "text": "Bhandara",
    "link": "https://www.swiggy.com/city/bhandara"
    },
    {
    "text": "Virudhunagar",
    "link": "https://www.swiggy.com/city/virudhunagar"
    },
    {
    "text": "Siddipet",
    "link": "https://www.swiggy.com/city/siddipet"
    },
    {
    "text": "Gadwal",
    "link": "https://www.swiggy.com/city/gadwal"
    },
    {
    "text": "Bodhan-Rural",
    "link": "https://www.swiggy.com/city/bodhan-rural"
    },
    {
    "text": "Kamareddy",
    "link": "https://www.swiggy.com/city/kamareddy"
    },
    {
    "text": "Jhunjhunu",
    "link": "https://www.swiggy.com/city/jhunjhunu"
    },
    {
    "text": "Kapurthala",
    "link": "https://www.swiggy.com/city/kapurthala"
    },
    {
    "text": "Sangrur",
    "link": "https://www.swiggy.com/city/sangrur"
    },
    {
    "text": "Gurdaspur",
    "link": "https://www.swiggy.com/city/gurdaspur"
    },
    {
    "text": "Ramgarh",
    "link": "https://www.swiggy.com/city/ramgarh"
    },
    {
    "text": "Bantwal",
    "link": "https://www.swiggy.com/city/bantwal"
    },
    {
    "text": "Doddaballapura",
    "link": "https://www.swiggy.com/city/doddaballapura"
    },
    {
    "text": "Buldana",
    "link": "https://www.swiggy.com/city/buldana"
    },
    {
    "text": "Karad",
    "link": "https://www.swiggy.com/city/karad"
    },
    {
    "text": "Krishnagiri",
    "link": "https://www.swiggy.com/city/krishnagiri"
    },
    {
    "text": "Tiptur",
    "link": "https://www.swiggy.com/city/tiptur"
    },
    {
    "text": "Bhadrachalam",
    "link": "https://www.swiggy.com/city/bhadrachalam"
    },
    {
    "text": "Mancherial",
    "link": "https://www.swiggy.com/city/mancherial"
    },
    {
    "text": "Balrampur",
    "link": "https://www.swiggy.com/city/balrampur"
    },
    {
    "text": "Bharabanki",
    "link": "https://www.swiggy.com/city/bharabanki"
    },
    {
    "text": "Malout",
    "link": "https://www.swiggy.com/city/malout"
    },
    {
    "text": "Fatehgarh Sahib",
    "link": "https://www.swiggy.com/city/fatehgarh-sahib"
    },
    {
    "text": "Ropar",
    "link": "https://www.swiggy.com/city/ropar"
    },
    {
    "text": "Nangal",
    "link": "https://www.swiggy.com/city/nangal"
    },
    {
    "text": "Narnaul",
    "link": "https://www.swiggy.com/city/narnaul"
    },
    {
    "text": "Naraingarh",
    "link": "https://www.swiggy.com/city/naraingarh"
    },
    {
    "text": "Himmatnagar",
    "link": "https://www.swiggy.com/city/himmatnagar"
    },
    {
    "text": "Dausa",
    "link": "https://www.swiggy.com/city/dausa"
    },
    {
    "text": "Jahanabad",
    "link": "https://www.swiggy.com/city/jahanabad"
    },
    {
    "text": "Samastipur",
    "link": "https://www.swiggy.com/city/samastipur"
    },
    {
    "text": "Purnea",
    "link": "https://www.swiggy.com/city/purnea"
    },
    {
    "text": "Berhampur",
    "link": "https://www.swiggy.com/city/berhampur"
    },
    {
    "text": "Malda",
    "link": "https://www.swiggy.com/city/malda"
    },
    {
    "text": "Tuni",
    "link": "https://www.swiggy.com/city/tuni"
    },
    {
    "text": "Puttur",
    "link": "https://www.swiggy.com/city/puttur"
    },
    {
    "text": "Rayachoty",
    "link": "https://www.swiggy.com/city/rayachoty"
    },
    {
    "text": "Nirmal",
    "link": "https://www.swiggy.com/city/nirmal"
    },
    {
    "text": "Mirzapur",
    "link": "https://www.swiggy.com/city/mirzapur"
    },
    {
    "text": "Tanuku",
    "link": "https://www.swiggy.com/city/tanuku"
    },
    {
    "text": "Dahod",
    "link": "https://www.swiggy.com/city/dahod"
    },
    {
    "text": "Barmer",
    "link": "https://www.swiggy.com/city/barmer"
    },
    {
    "text": "Gangapur City",
    "link": "https://www.swiggy.com/city/gangapur-city"
    },
    {
    "text": "Mandi Gobindgarh",
    "link": "https://www.swiggy.com/city/mandi-gobindgarh"
    },
    {
    "text": "Tarn Taran Sahib",
    "link": "https://www.swiggy.com/city/tarn-taran-sahib"
    },
    {
    "text": "Nakodar",
    "link": "https://www.swiggy.com/city/nakodar"
    },
    {
    "text": "Ankleshwar",
    "link": "https://www.swiggy.com/city/ankleshwar"
    },
    {
    "text": "Vyara",
    "link": "https://www.swiggy.com/city/vyara"
    },
    {
    "text": "Bardoli",
    "link": "https://www.swiggy.com/city/bardoli"
    },
    {
    "text": "Halol",
    "link": "https://www.swiggy.com/city/halol"
    },
    {
    "text": "Bijnor",
    "link": "https://www.swiggy.com/city/bijnor"
    },
    {
    "text": "Sangamner",
    "link": "https://www.swiggy.com/city/sangamner"
    },
    {
    "text": "Baramati",
    "link": "https://www.swiggy.com/city/baramati"
    },
    {
    "text": "Betul",
    "link": "https://www.swiggy.com/city/betul"
    },
    {
    "text": "Chhatarpur",
    "link": "https://www.swiggy.com/city/chhatarpur"
    },
    {
    "text": "Balaghat",
    "link": "https://www.swiggy.com/city/balaghat"
    },
    {
    "text": "Sivakasi",
    "link": "https://www.swiggy.com/city/sivakasi"
    },
    {
    "text": "Viluppuram",
    "link": "https://www.swiggy.com/city/viluppuram"
    },
    {
    "text": "Ramanathapuram",
    "link": "https://www.swiggy.com/city/ramanathapuram"
    },
    {
    "text": "Sirsi",
    "link": "https://www.swiggy.com/city/sirsi"
    },
    {
    "text": "Theni",
    "link": "https://www.swiggy.com/city/theni"
    },
    {
    "text": "Karur",
    "link": "https://www.swiggy.com/city/karur"
    },
    {
    "text": "Karwar",
    "link": "https://www.swiggy.com/city/karwar"
    },
    {
    "text": "Sindhanur",
    "link": "https://www.swiggy.com/city/sindhanur"
    },
    {
    "text": "Kannur",
    "link": "https://www.swiggy.com/city/kannur"
    },
    {
    "text": "Noida 1",
    "link": "https://www.swiggy.com/city/noida-1"
    },
    {
    "text": "Thiruvalla",
    "link": "https://www.swiggy.com/city/thiruvalla"
    },
    {
    "text": "Thodupuzha",
    "link": "https://www.swiggy.com/city/thodupuzha"
    },
    {
    "text": "Kadiri",
    "link": "https://www.swiggy.com/city/kadiri"
    },
    {
    "text": "Kavali",
    "link": "https://www.swiggy.com/city/kavali"
    },
    {
    "text": "Tezpur",
    "link": "https://www.swiggy.com/city/tezpur"
    },
    {
    "text": "Kayamkulam",
    "link": "https://www.swiggy.com/city/kayamkulam"
    },
    {
    "text": "Kottarakkara",
    "link": "https://www.swiggy.com/city/kottarakkara"
    },
    {
    "text": "Mandi Dabwali",
    "link": "https://www.swiggy.com/city/mandi-dabwali"
    },
    {
    "text": "Fatehabad",
    "link": "https://www.swiggy.com/city/fatehabad"
    },
    {
    "text": "Jagraon",
    "link": "https://www.swiggy.com/city/jagraon"
    },
    {
    "text": "Mansa",
    "link": "https://www.swiggy.com/city/mansa"
    },
    {
    "text": "Pinjore City",
    "link": "https://www.swiggy.com/city/pinjore-city"
    },
    {
    "text": "Fazilka",
    "link": "https://www.swiggy.com/city/fazilka"
    },
    {
    "text": "Baddi",
    "link": "https://www.swiggy.com/city/baddi"
    },
    {
    "text": "Solan",
    "link": "https://www.swiggy.com/city/solan"
    },
    {
    "text": "Daltonganj",
    "link": "https://www.swiggy.com/city/daltonganj"
    },
    {
    "text": "Balangir",
    "link": "https://www.swiggy.com/city/balangir"
    },
    {
    "text": "Kothagudem",
    "link": "https://www.swiggy.com/city/kothagudem"
    },
    {
    "text": "Hansi",
    "link": "https://www.swiggy.com/city/hansi"
    },
    {
    "text": "Aurangabad_Bihar",
    "link": "https://www.swiggy.com/city/aurangabadbihar"
    },
    {
    "text": "Gopalganj",
    "link": "https://www.swiggy.com/city/gopalganj"
    },
    {
    "text": "Jharsuguda",
    "link": "https://www.swiggy.com/city/jharsuguda"
    },
    {
    "text": "Tohana",
    "link": "https://www.swiggy.com/city/tohana"
    },
    {
    "text": "Jhalawar",
    "link": "https://www.swiggy.com/city/jhalawar"
    },
    {
    "text": "Sivasagar",
    "link": "https://www.swiggy.com/city/sivasagar"
    },
    {
    "text": "Bagdogra",
    "link": "https://www.swiggy.com/city/bagdogra"
    },
    {
    "text": "Kendrapada",
    "link": "https://www.swiggy.com/city/kendrapada"
    },
    {
    "text": "Mallapuram (Do not Use)",
    "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
    },
    {
    "text": "Veraval",
    "link": "https://www.swiggy.com/city/veraval"
    },
    {
    "text": "Daman",
    "link": "https://www.swiggy.com/city/daman"
    },
    {
    "text": "Chiplun",
    "link": "https://www.swiggy.com/city/chiplun"
    },
    {
    "text": "Silvassa",
    "link": "https://www.swiggy.com/city/silvassa"
    },
    {
    "text": "Lonavla",
    "link": "https://www.swiggy.com/city/lonavla"
    },
    {
    "text": "Bongaigaon",
    "link": "https://www.swiggy.com/city/bongaigaon"
    },
    {
    "text": "Golaghat",
    "link": "https://www.swiggy.com/city/golaghat"
    },
    {
    "text": "Duliajan",
    "link": "https://www.swiggy.com/city/duliajan"
    },
    {
    "text": "Bolpur",
    "link": "https://www.swiggy.com/city/bolpur"
    },
    {
    "text": "Madhubani",
    "link": "https://www.swiggy.com/city/madhubani"
    },
    {
    "text": "Balasore",
    "link": "https://www.swiggy.com/city/balasore"
    },
    {
    "text": "Palampur",
    "link": "https://www.swiggy.com/city/palampur"
    },
    {
    "text": "Kotdwar",
    "link": "https://www.swiggy.com/city/kotdwar"
    },
    {
    "text": "Koppal",
    "link": "https://www.swiggy.com/city/koppal"
    },
    {
    "text": "Chikhli",
    "link": "https://www.swiggy.com/city/chikhli"
    },
    {
    "text": "Dahanu",
    "link": "https://www.swiggy.com/city/dahanu"
    },
    {
    "text": "Itanagar",
    "link": "https://www.swiggy.com/city/itanagar"
    },
    {
    "text": "Rangpo",
    "link": "https://www.swiggy.com/city/rangpo"
    },
    {
    "text": "Aizawl",
    "link": "https://www.swiggy.com/city/aizawl"
    },
    {
    "text": "Gangtok",
    "link": "https://www.swiggy.com/city/gangtok"
    },
    {
    "text": "Mayiladuthurai",
    "link": "https://www.swiggy.com/city/mayiladuthurai"
    },
    {
    "text": "Kannauj",
    "link": "https://www.swiggy.com/city/kannauj"
    },
    {
    "text": "Cooch Behar",
    "link": "https://www.swiggy.com/city/cooch-behar"
    },
    {
    "text": "Palani",
    "link": "https://www.swiggy.com/city/palani"
    },
    {
    "text": "Bilimora",
    "link": "https://www.swiggy.com/city/bilimora"
    },
    {
    "text": "Boisar",
    "link": "https://www.swiggy.com/city/boisar"
    },
    {
    "text": "Kohima",
    "link": "https://www.swiggy.com/city/kohima"
    },
    {
    "text": "Naharlagun",
    "link": "https://www.swiggy.com/city/naharlagun"
    },
    {
    "text": "Dumka",
    "link": "https://www.swiggy.com/city/dumka"
    },
    {
    "text": "Rajsamand",
    "link": "https://www.swiggy.com/city/rajsamand"
    },
    {
    "text": "Gauriganj",
    "link": "https://www.swiggy.com/city/gauriganj"
    },
    {
    "text": "Bodinayakanur",
    "link": "https://www.swiggy.com/city/bodinayakanur"
    },
    {
    "text": "Bhawanipatna",
    "link": "https://www.swiggy.com/city/bhawanipatna"
    },
    {
    "text": "Baran",
    "link": "https://www.swiggy.com/city/baran"
    },
    {
    "text": "Narsinghpur",
    "link": "https://www.swiggy.com/city/narsinghpur"
    },
    {
    "text": "Kovilpatti",
    "link": "https://www.swiggy.com/city/kovilpatti"
    },
    {
    "text": "Pusad",
    "link": "https://www.swiggy.com/city/pusad"
    },
    {
    "text": "Kendujhar",
    "link": "https://www.swiggy.com/city/kendujhar"
    },
    {
    "text": "Manali",
    "link": "https://www.swiggy.com/city/manali"
    },
    {
    "text": "Diu",
    "link": "https://www.swiggy.com/city/diu"
    },
    {
    "text": "Khamgaon",
    "link": "https://www.swiggy.com/city/khamgaon"
    },
    {
    "text": "Ramanagara",
    "link": "https://www.swiggy.com/city/ramanagara"
    },
    {
    "text": "Alipurduar",
    "link": "https://www.swiggy.com/city/alipurduar"
    },
    {
    "text": "Almora",
    "link": "https://www.swiggy.com/city/almora"
    },
    {
    "text": "Jhargram",
    "link": "https://www.swiggy.com/city/jhargram"
    },
    {
    "text": "Arambagh",
    "link": "https://www.swiggy.com/city/arambagh"
    },
    {
    "text": "Bhadohi",
    "link": "https://www.swiggy.com/city/bhadohi"
    },
    {
    "text": "Tenkasi",
    "link": "https://www.swiggy.com/city/tenkasi"
    },
    {
    "text": "Srivilliputhur",
    "link": "https://www.swiggy.com/city/srivilliputhur"
    },
    {
    "text": "Chidambaram",
    "link": "https://www.swiggy.com/city/chidambaram"
    },
    {
    "text": "Rajgarh",
    "link": "https://www.swiggy.com/city/rajgarh"
    },
    {
    "text": "Pratapgarh",
    "link": "https://www.swiggy.com/city/pratapgarh"
    },
    {
    "text": "Washim",
    "link": "https://www.swiggy.com/city/washim"
    },
    {
    "text": "Raghunathpur",
    "link": "https://www.swiggy.com/city/raghunathpur"
    },
    {
    "text": "Suri",
    "link": "https://www.swiggy.com/city/suri"
    },
    {
    "text": "Kadayanallur",
    "link": "https://www.swiggy.com/city/kadayanallur"
    },
    {
    "text": "Thiruvarur",
    "link": "https://www.swiggy.com/city/thiruvarur"
    },
    {
    "text": "Ranaghat-WB",
    "link": "https://www.swiggy.com/city/ranaghat-wb"
    },
    {
    "text": "Wayanad",
    "link": "https://www.swiggy.com/city/wayanad"
    },
    {
    "text": "Perambalur",
    "link": "https://www.swiggy.com/city/perambalur"
    },
    {
    "text": "Paramakudi",
    "link": "https://www.swiggy.com/city/paramakudi"
    },
    {
    "text": "Bela Pratapgarh",
    "link": "https://www.swiggy.com/city/bela-pratapgarh"
    },
    {
    "text": "Mahoba",
    "link": "https://www.swiggy.com/city/mahoba"
    },
    {
    "text": "Sitamarhi",
    "link": "https://www.swiggy.com/city/sitamarhi"
    },
    {
    "text": "Chakdaha",
    "link": "https://www.swiggy.com/city/chakdaha"
    },
    {
    "text": "Khalilabad",
    "link": "https://www.swiggy.com/city/khalilabad"
    },
    {
    "text": "Pattukkottai",
    "link": "https://www.swiggy.com/city/pattukkottai"
    },
    {
    "text": "Tindivanam",
    "link": "https://www.swiggy.com/city/tindivanam"
    },
    {
    "text": "Tiruttani",
    "link": "https://www.swiggy.com/city/tiruttani"
    },
    {
    "text": "Gangarampur",
    "link": "https://www.swiggy.com/city/gangarampur"
    },
    {
    "text": "Dharapuram",
    "link": "https://www.swiggy.com/city/dharapuram"
    },
    {
    "text": "Arakkonam",
    "link": "https://www.swiggy.com/city/arakkonam"
    },
    {
    "text": "Sirkali",
    "link": "https://www.swiggy.com/city/sirkali"
    },
    {
    "text": "Mettupalayam",
    "link": "https://www.swiggy.com/city/mettupalayam"
    },
    {
    "text": "Digboi",
    "link": "https://www.swiggy.com/city/digboi"
    },
    {
    "text": "Biswanath Chariali",
    "link": "https://www.swiggy.com/city/biswanath-chariali"
    },
    {
    "text": "Nalbari",
    "link": "https://www.swiggy.com/city/nalbari"
    },
    {
    "text": "Shirdi city",
    "link": "https://www.swiggy.com/city/shirdi-city"
    },
    {
    "text": "Mukerian",
    "link": "https://www.swiggy.com/city/mukerian"
    },
    {
    "text": "Hosur",
    "link": "https://www.swiggy.com/city/hosur"
    },
    {
    "text": "Palakollu",
    "link": "https://www.swiggy.com/city/palakollu"
    },
    {
    "text": "Ravulapalem",
    "link": "https://www.swiggy.com/city/ravulapalem"
    },
    {
    "text": "Barh",
    "link": "https://www.swiggy.com/city/barh"
    },
    {
    "text": "Palghar",
    "link": "https://www.swiggy.com/city/palghar"
    },
    {
    "text": "Kushalnagar",
    "link": "https://www.swiggy.com/city/kushalnagar"
    },
    {
    "text": "Dungarpur",
    "link": "https://www.swiggy.com/city/dungarpur"
    },
    {
    "text": "Chaibasa",
    "link": "https://www.swiggy.com/city/chaibasa"
    },
    {
    "text": "Haveri",
    "link": "https://www.swiggy.com/city/haveri"
    },
    {
    "text": "Karaikal",
    "link": "https://www.swiggy.com/city/karaikal"
    },
    {
    "text": "Jjajjar",
    "link": "https://www.swiggy.com/city/jjajjar"
    },
    {
    "text": "Kokrajhar",
    "link": "https://www.swiggy.com/city/kokrajhar"
    },
    {
    "text": "Rangia",
    "link": "https://www.swiggy.com/city/rangia"
    },
    {
    "text": "Hamirpur",
    "link": "https://www.swiggy.com/city/hamirpur"
    },
    {
    "text": "Una",
    "link": "https://www.swiggy.com/city/una"
    },
    {
    "text": "Sulthan Bathery",
    "link": "https://www.swiggy.com/city/sulthan-bathery"
    },
    {
    "text": "Rayagada",
    "link": "https://www.swiggy.com/city/rayagada"
    },
    {
    "text": "Paradeep",
    "link": "https://www.swiggy.com/city/paradeep"
    },
    {
    "text": "Mandapeta",
    "link": "https://www.swiggy.com/city/mandapeta"
    },
    {
    "text": "Jamui",
    "link": "https://www.swiggy.com/city/jamui"
    },
    {
    "text": "Pilkhuwa",
    "link": "https://www.swiggy.com/city/pilkhuwa"
    },
    {
    "text": "Parvathipuram",
    "link": "https://www.swiggy.com/city/parvathipuram"
    },
    {
    "text": "Ambajogai",
    "link": "https://www.swiggy.com/city/ambajogai"
    },
    {
    "text": "Araria",
    "link": "https://www.swiggy.com/city/araria"
    },
    {
    "text": "North Lakhimpur",
    "link": "https://www.swiggy.com/city/north-lakhimpur"
    },
    {
    "text": "Rajampet",
    "link": "https://www.swiggy.com/city/rajampet"
    },
    {
    "text": "Udumalaipettai",
    "link": "https://www.swiggy.com/city/udumalaipettai"
    },
    {
    "text": "Tirupattur",
    "link": "https://www.swiggy.com/city/tirupattur"
    },
    {
    "text": "Hojai",
    "link": "https://www.swiggy.com/city/hojai"
    },
    {
    "text": "Khagaria",
    "link": "https://www.swiggy.com/city/khagaria"
    },
    {
    "text": "Dasuya",
    "link": "https://www.swiggy.com/city/dasuya"
    },
    {
    "text": "Gudur",
    "link": "https://www.swiggy.com/city/gudur"
    },
    {
    "text": "Sullurpeta",
    "link": "https://www.swiggy.com/city/sullurpeta"
    },
    {
    "text": "Piler",
    "link": "https://www.swiggy.com/city/piler"
    },
    {
    "text": "SankaranKoil",
    "link": "https://www.swiggy.com/city/sankarankoil"
    },
    {
    "text": "Nabha",
    "link": "https://www.swiggy.com/city/nabha"
    },
    {
    "text": "LPU - Phagwara",
    "link": "https://www.swiggy.com/city/lpu-phagwara"
    },
    {
    "text": "Jangipur",
    "link": "https://www.swiggy.com/city/jangipur"
    },
    {
    "text": "Roha",
    "link": "https://www.swiggy.com/city/roha"
    }
    ],
    "id": "footer_content"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
    "citySlug": "delhi",
    "lat": "28.74045",
    "lng": "77.197605",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-0413f5dd-24ce-4b72-9182-74f054bc6acf\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\"}}",
    "id": "meta_data",
    "metaInfo": {
    "pageType": "FOOD_HOME_PAGE",
    "pageTitle": "Food home delivery | Swiggy"
    },
    "screenType": "filteredCollection",
    "seoParams": {
    "apiName": "FoodHomePage",
    "seoUrl": "www.swiggy.com",
    "pageType": "FOOD_HOME_PAGE"
    }
    }
    }
    }
    ],
    "firstOffsetRequest": true,
    "cacheExpiryTime": 240,
    "nextFetch": 1
    },
    "tid": "9032ebc0-e0d0-4fd2-a88b-51363841e1e3",
    "sid": "aj6a6d4a-15c9-4be9-977c-3bd0c56e8b0c",
    "deviceId": "ab747925-a837-12c2-8937-7ce24c8ed974",
    "csrfToken": "LXsQ6aJNinHf-6FQsYzWKWcQq34ax7KFgC226lLI"
    }
                  
 const Body= () =>{
 return(
  <div className="body">
  <div className="search">Search</div>
  <div className="res-container">
  <RestaurantCard 
  resData={resObj}
   />
  </div>
</div>
 );
  }

const AppLayout = () => {
  return (
   <div className="app">
  <Header />
  <Body />
  </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
