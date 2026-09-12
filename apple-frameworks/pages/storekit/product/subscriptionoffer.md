> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer](https://developer.apple.com/documentation/storekit/product/subscriptionoffer)

# Product.SubscriptionOffer

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about a subscription offer that you configure in App Store Connect.

## Declaration

```swift
struct SubscriptionOffer
```

## Mentioned In

- [Merchandising win-back offers in your app](../merchandising-win-back-offers-in-your-app.md)

<a id="overview"></a>

## Overview

You set up subscription offers, such as introductory offers and win-back offers, in App Store Connect.

For more information about subscription offers, see [Providing subscription offers](https://developer.apple.com/app-store/subscriptions/#providing-subscription-offers). For information about configuring the various types of subscription offers in App Store Connect, see:

- [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes/)
- [Set up introductory offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions)
- [Set up promotional offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-promotional-offers-for-auto-renewable-subscriptions)
- [Set up win-back offers](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-win-back-offers)

## Topics

### Getting the subscription offer identifier

- [id](subscriptionoffer/id.md): The offer identifier.

### Getting the subscription offer type

- [type](subscriptionoffer/type.md): The type of subscription offer, which can be introductory, promotional, or win-back.
- [Product.SubscriptionOffer.OfferType](subscriptionoffer/offertype.md): The types of offers for auto-renewable subscriptions.

### Getting price information

- [displayPrice](subscriptionoffer/displayprice.md): The localized string representation of the discounted price of the subscription offer.
- [price](subscriptionoffer/price.md): The decimal representation of the discounted price of the subscription offer.
- [paymentMode](subscriptionoffer/paymentmode-swift.property.md): The offer’s payment mode.
- [Product.SubscriptionOffer.PaymentMode](subscriptionoffer/paymentmode-swift.struct.md): The payment modes for subscription offers that apply to a transaction.

### Getting the subscription duration

- [period](subscriptionoffer/period.md): The subscription period for the subscription offer.
- [periodCount](subscriptionoffer/periodcount.md): The number of periods that the subscription offer renews for.

### Creating a subscription offer signature

- [Product.SubscriptionOffer.Signature](subscriptionoffer/signature.md): Deprecated. A cryptographic signature for a promotional offer.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Offers

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md): Enable customers to redeem offer codes through the App Store or within your app.
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md): Re-engage previous subscribers with a free or discounted offer for an auto-renewable subscription, for a specific duration.
- [Merchandising win-back offers in your app](../merchandising-win-back-offers-in-your-app.md): Present win-back offers to eligible customers in your app with the win-back offer sheet or by implementing custom merchandising.
- [Product.SubscriptionOffer.OfferType](subscriptionoffer/offertype.md): The types of offers for auto-renewable subscriptions.
