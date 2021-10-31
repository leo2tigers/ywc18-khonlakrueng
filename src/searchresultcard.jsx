import React from 'react'
import sanitizeHtml from 'sanitize-html'

export default class SearchResultCard extends React.Component {
    constructor(props) {
        super(props)
    }

    getPriceIndicatorText(ind) {
        return (
            ind ? <span style={{color: "rgb(34, 34, 34)"}}>฿</span> : <span style={{color: "rgb(187, 187, 187)"}}>฿</span>
        )
    }

    getPriceLevelIndicator(pricelv) {
        const arr = []
        for (let i = 0; i < pricelv; i++) {
            arr.push(true);
        }
        while (arr.length < 4) {
            arr.push(false);
        }
        return arr.map((val, idx, a) => {
            return this.getPriceIndicatorText(val);
        })
    }

    getRecommendedItems(recommendedItems) {
        if (!recommendedItems) {
            return
        }

        const itemsString = recommendedItems.join(', ')
        return (
            <div>
                <strong>เมนู/สินค้าแนะนำ: </strong>{itemsString}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.value.coverImageId}></img>
                </div>
                <div>
                    <div>
                        {this.props.value.shopNameTH}
                    </div>
                    <div>
                        {this.props.value.categoryName}
                    </div>
                    <div>
                        {this.props.value.subcategoryName} | {this.getPriceLevelIndicator(this.props.value.priceLevel)} | {this.props.value.addressDistrictName} {this.props.value.addressProvinceName}
                    </div>
                    <hr />
                    <div dangerouslySetInnerHTML={{__html : sanitizeHtml(this.props.value.highlightText)}} />
                    <br />
                    {this.getRecommendedItems(this.props.value.recommendedItems)}
                </div>
            </div>
        )
    }
}
