> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkapplepaylateravailability](https://developer.apple.com/documentation/passkit/pkapplepaylateravailability)

# PKApplePayLaterAvailability (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Values you use to enable or disable Apple Pay Later for a specific transaction.

> Apple Pay Later is deprecated.

## Declaration

```swift
enum PKApplePayLaterAvailability
```

## Topics

### Availability values

- [PKApplePayLaterAvailability.available](pkapplepaylateravailability/available.md): Deprecated. Apple Pay Later is available.
- [PKApplePayLaterAvailability.unavailableItemIneligible](pkapplepaylateravailability/unavailableitemineligible.md): Deprecated. Apple Pay Later is unavailable because one or more ineligible or prohibited items are in the shopping cart, such as gift cards.
- [PKApplePayLaterAvailability.unavailableRecurringTransaction](pkapplepaylateravailability/unavailablerecurringtransaction.md): Deprecated. Apple Pay Later is unavailable because there’s a recurring payment or subscription in the shopping cart.

### Initializers

- [init(rawValue:)](pkapplepaylateravailability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKPaymentRequest.ApplePayLaterAvailability](pkpaymentrequest/applepaylateravailability-swift.enum.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.

# PKApplePayLaterAvailability (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Values you use to enable or disable Apple Pay Later for a specific transaction.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
enum PKApplePayLaterAvailability : NSInteger;
```

## Topics

### Availability values

- [PKApplePayLaterAvailable](pkapplepaylateravailability/available.md): Deprecated. Apple Pay Later is available.
- [PKApplePayLaterUnavailableItemIneligible](pkapplepaylateravailability/unavailableitemineligible.md): Deprecated. Apple Pay Later is unavailable because one or more ineligible or prohibited items are in the shopping cart, such as gift cards.
- [PKApplePayLaterUnavailableRecurringTransaction](pkapplepaylateravailability/unavailablerecurringtransaction.md): Deprecated. Apple Pay Later is unavailable because there’s a recurring payment or subscription in the shopping cart.

## See Also

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-inpf.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.
