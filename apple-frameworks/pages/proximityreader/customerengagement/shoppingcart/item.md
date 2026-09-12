> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/shoppingcart/item](https://developer.apple.com/documentation/proximityreader/customerengagement/shoppingcart/item)

# CustomerEngagement.ShoppingCart.Item

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An item in a shopping cart, including details like price and quantity.

## Declaration

```swift
struct Item
```

## Topics

### Initializers

- [init(id:name:quantity:totalPrice:totalAdjustedPrice:descriptions:details:)](item/init%28id_name_quantity_totalprice_totaladjustedprice_descriptions_details_%29.md)

### Instance Properties

- [descriptions](item/descriptions.md): An array of description lines for this shopping cart item.
- [details](item/details.md): An array of detail lines for this shopping cart item.
- [id](item/id.md): A unique identifier of the shopping cart item.
- [name](item/name.md): The name of the shopping cart item.
- [quantity](item/quantity.md): The total number of units that make up the line item.
- [totalAdjustedPrice](item/totaladjustedprice.md): A total adjusted price associated with the line item, typically used to indicate a price change.
- [totalPrice](item/totalprice.md): A value indicating the total price of the item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
