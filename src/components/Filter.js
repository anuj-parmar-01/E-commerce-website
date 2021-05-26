import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-contents">
                <div className="products-count">{this.props.count} Products</div>

                <div className="order-list">
                {`Order `}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="Latest">Latest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                    </select>
                </div>

                <div className="filter-list">
                {`Filter  `}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">ALL</option>   
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    </select>

                </div>
                
            </div>
        )
    }
}
