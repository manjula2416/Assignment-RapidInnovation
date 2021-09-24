import React from 'react'
import './BuyNow.css'
function BuyNow() {
    return (
        <div>
            <form>
                <div>
                    <label for="input-name">Name</label>
                    <input type="text" id="input-name" name="input-name"/>
                </div>
                <div>
                    <label for="input-email">Email</label>
                    <input type="email" id="input-email" name="input-email"/>
                </div>
                <div>
                    <label for="input-passwd">Password</label>
                    <input type="password" id="input-passwd" name="input-passwd"/>
                </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BuyNow
