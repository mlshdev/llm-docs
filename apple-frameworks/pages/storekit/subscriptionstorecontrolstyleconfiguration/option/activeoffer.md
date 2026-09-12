> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/activeoffer](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/activeoffer)

# activeOffer

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The subscription offer the customer is eligible for, and that applies to the subscription option.

## Declaration

```swift
var activeOffer: Product.SubscriptionOffer? { get }
```

<a id="Discussion"></a>

## Discussion

Always display the terms of this subscription offer along with your control because it represents the offer that StoreKit automatically applies when you call the [subscribe()](subscribe%28%29.md) method. If the [activeOffer](activeoffer.md) property is `nil`, there’s no subscription offer.

> **Important**

>  Don’t display offers from properties of [subscription](subscription.md), such as [introductoryOffer](../../product/subscriptioninfo/introductoryoffer.md).

The [preferredSubscriptionOffer(\_:)](https://developer.apple.com/documentation/swiftui/view/preferredsubscriptionoffer%28_:%29) and [subscriptionPromotionalOffer(offer:signature:)](https://developer.apple.com/documentation/swiftui/view/subscriptionpromotionaloffer%28offer:signature:%29) view modifiers influence the [offer](../../purchaseintent/offer.md) property.

## See Also

### Getting the subscription product and offer

- [subscription](subscription.md): The auto-renewable subscription to merchandise.
- [id](id.md): The product ID of the auto-renewable subscription.
