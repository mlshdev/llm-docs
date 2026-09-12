> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshippingmethod](https://developer.apple.com/documentation/passkit/pkshippingmethod)

# PKShippingMethod (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that defines a shipping method for delivering physical goods.

## Declaration

```swift
class PKShippingMethod
```

## Topics

### Working with shipping methods

- [detail](pkshippingmethod/detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [identifier](pkshippingmethod/identifier.md): A unique identifier for the shipping method, used by the app.
- [PKDateComponentsRange](pkdatecomponentsrange.md): An object that specifies the start and end dates for a range of time.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.

# PKShippingMethod (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that defines a shipping method for delivering physical goods.

## Declaration

```objectivec
@interface PKShippingMethod : PKPaymentSummaryItem
```

## Topics

### Working with shipping methods

- [detail](pkshippingmethod/detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [identifier](pkshippingmethod/identifier.md): A unique identifier for the shipping method, used by the app.
- [PKDateComponentsRange](pkdatecomponentsrange.md): An object that specifies the start and end dates for a range of time.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

## See Also

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
