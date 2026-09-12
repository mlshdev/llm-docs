> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart)

# CustomerEngagement.ShoppingCart

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A structure that describes the shopping cart content.

## Declaration

```swift
struct ShoppingCart
```

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

## Topics

### Structures

- [CustomerEngagement.ShoppingCart.Item](shoppingcart/item.md): An item in a shopping cart, including details like price and quantity.
- [CustomerEngagement.ShoppingCart.Summary](shoppingcart/summary-swift.struct.md): A breakdown of totals, line items, and optional footer text for a shopping cart.

### Initializers

- [init(items:summary:)](shoppingcart/init%28items_summary_%29.md): Creates a shopping cart summary.

### Instance Properties

- [items](shoppingcart/items.md): The items in the shopping cart.
- [summary](shoppingcart/summary-swift.property.md): A summary section of the shopping cart.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting customer information

- [CustomerEngagement.Address](address.md): A customer’s address collected during a customer engagement session.
- [CustomerEngagement.CustomerInfo](customerinfo.md): A response structure that describes customer information.
- [CustomerEngagement.SignUp](signup.md): Contact information and marketing consent selections a customer provides during a sign-up request.
