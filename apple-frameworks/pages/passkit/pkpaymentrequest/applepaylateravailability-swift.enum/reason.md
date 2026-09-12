> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/applepaylateravailability-swift.enum/reason](https://developer.apple.com/documentation/passkit/pkpaymentrequest/applepaylateravailability-swift.enum/reason)

# PKPaymentRequest.ApplePayLaterAvailability.Reason

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS

Values you use to enable or disable Apple Pay Later for a specific transaction.

> Apple Pay Later is deprecated.

## Declaration

```swift
enum Reason
```

## Topics

### Reasons

- [PKPaymentRequest.ApplePayLaterAvailability.Reason.itemIneligible](reason/itemineligible.md): Deprecated. Apple Pay Later is unavailable because one or more ineligible or prohibited items are in the shopping cart, such as gift cards.
- [PKPaymentRequest.ApplePayLaterAvailability.Reason.recurringTransaction](reason/recurringtransaction.md): Deprecated. Apple Pay Later is unavailable because there’s a recurring payment or subscription in the shopping cart.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
