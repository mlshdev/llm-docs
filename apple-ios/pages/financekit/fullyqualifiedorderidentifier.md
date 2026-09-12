> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/fullyqualifiedorderidentifier](https://developer.apple.com/documentation/financekit/fullyqualifiedorderidentifier)

# FullyQualifiedOrderIdentifier

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A structure that specifies the characteristics of an order.

## Declaration

```swift
struct FullyQualifiedOrderIdentifier
```

## Topics

### Initializers

- [init(orderTypeIdentifier:orderIdentifier:)](fullyqualifiedorderidentifier/init%28ordertypeidentifier_orderidentifier_%29.md): Initializes the object with values that uniquely identify an order within an order type.

### Instance Properties

- [orderIdentifier](fullyqualifiedorderidentifier/orderidentifier.md): A string the merchant uses to identify a specific customer order.
- [orderTypeIdentifier](fullyqualifiedorderidentifier/ordertypeidentifier.md): A string that describes the order type.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Orders

- [saveOrder(signedArchive:)](financestore/saveorder%28signedarchive_%29.md): Adds an order to the store or updates an existing order.
