> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/paymentmode-swift.struct)

# Product.SubscriptionOffer.PaymentMode

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payment modes for subscription offers that apply to a transaction.

## Declaration

```swift
struct PaymentMode
```

## Mentioned In

- [Testing win-back offers in Xcode](../../testing-win-back-offers-in-xcode.md)

<a id="overview"></a>

## Overview

A payment mode describes how a subscription offer charges its discounted price — whether it charges one time, charges multiple times, or charges nothing because it’s a free trial.

## Topics

### Getting the payment modes

- [freeTrial](paymentmode-swift.struct/freetrial.md): A payment mode of a product discount that indicates a free trial offer.
- [payAsYouGo](paymentmode-swift.struct/payasyougo.md): A payment mode of a product discount that applies over a single billing period or multiple billing periods.
- [payUpFront](paymentmode-swift.struct/payupfront.md): A payment mode of a product discount that applies the discount up front.

### Getting a localized description

- [localizedDescription](paymentmode-swift.struct/localizeddescription.md): The localized text that describes the payment mode.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting price information

- [displayPrice](displayprice.md): The localized string representation of the discounted price of the subscription offer.
- [price](price.md): The decimal representation of the discounted price of the subscription offer.
- [paymentMode](paymentmode-swift.property.md): The offer’s payment mode.
