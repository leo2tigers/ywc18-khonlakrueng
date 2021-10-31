import SearchResultCard from './searchresultcard'
import React from 'react'

export default class SearchResultPane extends React.Component {
    merchants = [
        {
          "shopNameTH": "Kanysorn Cafe",
          "categoryName": "งานบริการอื่นๆ / เบ็ดเตล็ด",
          "subcategoryName": "สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน",
          "coverImageId": "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          "facilities": ["ที่จอดรถ"],
          "priceLevel": 1,
          "isOpen": "Y",
          "highlightText": "<strong>ร้านทุกอย่าง</strong> โต๊ะ ตู้ เตียง",
          "recommendedItems": ["แจกัน", "จานชาม", "เก้าอี้สามขา"],
          "addressProvinceName": "กรุงเทพมหานคร",
          "addressDistrictName": "เขตธนบุรี"
        },
        {
          "shopNameTH": "Wiput Shop",
          "categoryName": "แฟชั่น",
          "subcategoryName": "ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น",
          "coverImageId": "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
          "facilities": ["ที่จอดรถ", "สามารถนำสัตว์เลี้ยงเข้าได้"],
          "priceLevel": 2,
          "isOpen": "N/A",
          "highlightText": "Custom Keyboard By <strong>Wiput</strong>, จัดจำหน่าย Keychron ทุกรุ่น",
          "recommendedItems": ["Keychron K2", "Keychron K4"],
          "addressProvinceName": "กรุงเทพมหานคร",
          "addressDistrictName": "เขตพระนคร"
        },
        {
          "shopNameTH": "YWC Shop",
          "categoryName": "ร้านอาหาร",
          "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
          "coverImageId": "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "facilities": ["ที่จอดรถ"],
          "priceLevel": 4,
          "isOpen": "N",
          "highlightText": "ร้านนี้ไม่ค่อยมีอะไรขาย เน้นขายขำเป็นหลัก <strong>มีที่จอดรถ</strong>",
          "recommendedItems": ["กาแฟสด", "ขนมปังปิ้ง", "ข้าวไข่เจียวแหนม"],
          "addressProvinceName": "กรุงเทพมหานคร",
          "addressDistrictName": "เขตพระนคร"
        },
        {
          "shopNameTH": "Chayanon Cafe",
          "categoryName": "ร้านอาหาร",
          "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
          "coverImageId": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
          "facilities": ["ที่จอดรถ"],
          "priceLevel": 3,
          "isOpen": "N",
          "highlightText": "<strong>ร้านกาแฟสด</strong> ดริปเองโดยบาริสต้าชื่อดังระดับประเทศ",
          "recommendedItems": ["กาแฟสด", "ขนมปังปิ้ง"],
          "addressProvinceName": "กรุงเทพมหานคร",
          "addressDistrictName": "เขตลาดกระบัง"
        },
        {
          "shopNameTH": "วายดับบลิวซีหมูกระทะ",
          "categoryName": "ร้านอาหาร",
          "subcategoryName": "อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว",
          "coverImageId": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "facilities": ["ที่จอดรถ", "รับจองล่วงหน้า"],
          "priceLevel": 3,
          "isOpen": "Y",
          "highlightText": "สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ",
          "recommendedItems": ["หมูกระทะ", "สุกี้"],
          "addressProvinceName": "กรุงเทพมหานคร",
          "addressDistrictName": "เขตธนบุรี"
        }
      ]

    constructor(props) {
        super(props);
    }

    generateShopData(shopdata) {
        return (
            <SearchResultCard value={shopdata} />
        )
    }

    render() {
        return (
            <div>
                {this.merchants.map((val, idx, arr) => {
                    return this.generateShopData(val);
                })}
            </div>
        )
    }
}
