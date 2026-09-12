> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior](https://developer.apple.com/documentation/storekit/product/purchaseoption/subscriptionrenewalbehavior)

# Product.PurchaseOption.SubscriptionRenewalBehavior

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Renewal options for auto-renewable subscriptions that you purchase in the testing environment.

## Declaration

```swift
enum SubscriptionRenewalBehavior
```

<a id="overview"></a>

## Overview

Use the subscription renewal behavior values when you use the [purchaseDate](https://developer.apple.com/documentation/storekittest/sktesttransaction/purchasedate) option to test your app in Xcode using [StoreKit Test](https://developer.apple.com/documentation/storekittest).

## Topics

### Renewal behaviors in the testing environment

- [Product.PurchaseOption.SubscriptionRenewalBehavior.cancelImmediately](subscriptionrenewalbehavior/cancelimmediately.md): A subscription-renewal behavior in the testing environment that cancels the subscription, resulting in only one subscription period.
- [Product.PurchaseOption.SubscriptionRenewalBehavior.renewUntilNow](subscriptionrenewalbehavior/renewuntilnow.md): A subscription-renewal behavior in the testing environment that allows the subscription to renew continuously, up to the current date.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting options for StoreKit Testing in Xcode

- [purchaseDate(\_:renewalBehavior:)](purchasedate%28__renewalbehavior_%29.md): Sets the purchase date for the transaction in the testing environment, and indicates the renewal behavior for an auto-renewable subscription.
- [codeOffer(referenceName:)](codeoffer%28referencename_%29.md): Sets an offer code for the transaction in the testing environment.
- [promotionalOffer(id:)](promotionaloffer%28id_%29.md): Sets a promotional offer for the transaction in the testing environment.
