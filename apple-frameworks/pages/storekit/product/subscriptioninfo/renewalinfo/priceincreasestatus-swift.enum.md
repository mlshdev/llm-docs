> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum)

# Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Status values that indicate whether an auto-renewable subscription is subject to a price increase.

## Declaration

```swift
@frozen enum PriceIncreaseStatus
```

<a id="overview"></a>

## Overview

For more information, see [Managing Price Increases for Auto-Renewable Subscriptions](../../../managing-price-increases-for-auto-renewable-subscriptions.md).

## Topics

### Getting Price Increase Status

- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.noIncreasePending](priceincreasestatus-swift.enum/noincreasepending.md): There’s no pending price increase for the auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.agreed](priceincreasestatus-swift.enum/agreed.md): The auto-renewable subscription is subject to a price increase.
- [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.pending](priceincreasestatus-swift.enum/pending.md): The customer hasn’t yet responded to an auto-renewable subscription price increase that requires customer consent.

### Getting a Localized Description

- [localizedDescription](priceincreasestatus-swift.enum/localizeddescription.md): A string containing the localized description of the price increase status.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the price increase status

- [Managing Price Increases for Auto-Renewable Subscriptions](../../../managing-price-increases-for-auto-renewable-subscriptions.md): Identify the price increase status for auto-renewable subscriptions in your app and on your server.
- [priceIncreaseStatus](priceincreasestatus-swift.property.md): The status that indicates whether the auto-renewable subscription is subject to a price increase.
