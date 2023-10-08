import { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component{
    
    state = {
        itemlist:[
            {id: 1, value: 0, itemname:"iPhone" , price:150 },
            {id: 2, value: 0, itemname:"iPad", price:200 },
            {id: 3, value: 0, itemname:"iMac", price:300 },
            {id: 4, value: 0, itemname:"iBook", price:500 },
        ]
    };

    
    render () {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                    <div className="d-inline-flex align-items-center mx-2">
                        <li className="list-group-item"> ราคารวมทั้งหมด : {this.getTotalPrice()}</li>

                        <button
                        onClick={this.resetButton}
                        className="btn btn-sm btn-warning d-inline"
                        > Reset </button>
                        </div> 
                            
                        {this.state.itemlist.map((item) => (
                            <li className="list-group-item" key={item.id}>
                                <Counter
                                    key={item.id}
                                    item={item}
                                    onIncrement={this.Increment}
                                    ondecrement={this.decrement}/>
                                </li>
                            ))
                        }
                </ul>
            </div>
        );
    }
    


    Increment = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value++;
        this.setState({ itemlist : _itemList });
    }
    


    getTotalPrice() {
        const totalPrice = this.state.itemlist
          .filter((item) => item.id >= 1 && item.id <= 4)
          .reduce((sum, item) => sum + item.price * item.value, 0);
    
        return totalPrice;
    }


    decrement = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        if (_itemList[indexItem].value > 0) {
            _itemList[indexItem].value--;
            this.setState({ itemlist: _itemList });
        }
    };

    resetButton = () => {
        var resetItem = this.state.itemlist.map((item) => { 
            item.value = 0; 
            return item;
        });
        this.setState({ resetItem });
    }
}
export default CounterList;