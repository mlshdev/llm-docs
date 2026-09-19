> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptionoffer/offertype

# Product.SubscriptionOffer.OfferType

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The types of offers for auto-renewable subscriptions.

## Declaration

```swift
struct OfferType
```

## Topics

### Getting offer types

- [introductory](offertype/introductory.md): An introductory offer for an auto-renewable subscription.
- [promotional](offertype/promotional.md): A promotional offer for an auto-renewable subscription.
- [winBack](offertype/winback.md): A win-back offer for an auto-renewable subscription.

### Getting a localized description

- [localizedDescription](offertype/localizeddescription.md): A string that contains the localized description of the offer type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Offers

- [Supporting offer codes in your app](../../supporting-offer-codes-in-your-app.md): Enable customers to redeem offer codes through the App Store or within your app.
- [Supporting win-back offers in your app](../../supporting-win-back-offers-in-your-app.md): Re-engage previous subscribers with a free or discounted offer for an auto-renewable subscription, for a specific duration.
- [Merchandising win-back offers in your app](../../merchandising-win-back-offers-in-your-app.md): Present win-back offers to eligible customers in your app with the win-back offer sheet or by implementing custom merchandising.
- [Product.SubscriptionOffer](../subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.
