> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentsummaryitem](https://developer.apple.com/documentation/passkit/pkdeferredpaymentsummaryitem)

# PKDeferredPaymentSummaryItem (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

## Declaration

```swift
class PKDeferredPaymentSummaryItem
```

## Topics

### Setting the payment date

- [deferredDate](pkdeferredpaymentsummaryitem/deferreddate.md): The date, in the future, of the payment.

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

### Setting payment summary items

- [deferredBilling](pkdeferredpaymentrequest/deferredbilling.md): An object that contains details about the deferred payment.

# PKDeferredPaymentSummaryItem (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

## Declaration

```objectivec
@interface PKDeferredPaymentSummaryItem : PKPaymentSummaryItem
```

## Topics

### Setting the payment date

- [deferredDate](pkdeferredpaymentsummaryitem/deferreddate.md): The date, in the future, of the payment.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

## See Also

### Setting payment summary items

- [deferredBilling](pkdeferredpaymentrequest/deferredbilling.md): An object that contains details about the deferred payment.
