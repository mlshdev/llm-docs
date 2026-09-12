> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/bundledsubscription](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/bundledsubscription)

# Product.SubscriptionInfo.BundledSubscription

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Properties and functionality specific to auto-renewable subscriptions included in a subscription bundle.

## Declaration

```swift
struct BundledSubscription
```

## Topics

### Instance Properties

- [description](bundledsubscription/description.md): A localized description of the product.
- [displayName](bundledsubscription/displayname.md): A localized display name of the product.
- [displayPrice](bundledsubscription/displayprice.md): A localized string representation of `price`.
- [id](bundledsubscription/id.md): The unique product identifier.
- [isFamilyShareable](bundledsubscription/isfamilyshareable.md): Whether the product is available for family sharing.
- [price](bundledsubscription/price.md): The price of the product in local currency.
- [subscriptionGroupDisplayName](bundledsubscription/subscriptiongroupdisplayname.md): A localized display name of the subscription’s group.
- [subscriptionGroupID](bundledsubscription/subscriptiongroupid.md): The group identifier for this subscription.
- [subscriptionGroupLevel](bundledsubscription/subscriptiongrouplevel.md): The level of this subscription relative to other subscriptions in the same group.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
