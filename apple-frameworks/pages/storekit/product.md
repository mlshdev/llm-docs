> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product](https://developer.apple.com/documentation/storekit/product)

# Product

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about a product that you configure in App Store Connect.

## Declaration

```swift
struct Product
```

## Mentioned In

- [Supporting monthly subscriptions with a 12-month commitment](supporting-monthly-subscriptions-with-a-12-month-commitment.md)
- [Supporting Family Sharing in your app](supporting-family-sharing-in-your-app.md)
- [Supporting promoted In-App Purchases in your app](supporting-promoted-in-app-purchases-in-your-app.md)

<a id="overview"></a>

## Overview

The `Product` type represents the in-app purchases that you configure in App Store Connect and make available for purchase within your app. Use `Product` to perform all product-related tasks in your app, from displaying in-app purchases and offers to making a purchase and getting transaction and subscription status information.

To get a `Product` instance, call [products(for:)](product/products%28for_%29.md) and provide one or more in-app purchase product identifiers. Use a `Product` instance to display in-app purchases and subscription offers in your store, as follows:

- Show the localized name, description, and pricing information using [displayName](product/displayname.md), [description](product/description.md), and [displayPrice](product/displayprice.md), respectively.
- Determine whether a user is eligible for an introductory offer for the product using [isEligibleForIntroOffer](product/subscriptioninfo/iseligibleforintrooffer.md).
- Display your subscription offers using the subscription information in [subscription](product/subscription.md).

When users initiate a purchase, call [purchase(options:)](product/purchase%28options_%29.md) or [purchase(confirmIn:options:)](product/purchase%28confirmin_options_%29-3bivf.md) on the product instance. If your app uses SwiftUI, you can also use [PurchaseAction](purchaseaction.md). Set purchase options ([Product.PurchaseOption](product/purchaseoption.md)) to define an optional app account token, apply a promotional offer, or set a product quantity. Purchase options can also simulate an Ask to Buy scenario when you’re testing your app in the sandbox environment.

Use a `Product` instance to learn whether a user is entitled to a product by checking [currentEntitlement](product/currententitlement.md), which holds the transaction that entitles the user to the product. This transaction information, as well as the transaction in [latestTransaction](product/latesttransaction.md), are cryptographically signed by the App Store in JSON Web Signature (JWS) format.

If the product is an auto-renewable subscription, use the [status](product/subscriptioninfo/status-swift.property.md) and [renewalInfo](product/subscriptioninfo/status-swift.struct/renewalinfo.md) in the [subscription](product/subscription.md) information to help manage subscriptions and inform business decisions, such as presenting subscription offers.

For information about configuring In-App Purchases in App Store Connect, see [Overview for configuring In-App Purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/overview-for-configuring-in-app-purchases).

## Topics

### Requesting products from the App Store

- [products(for:)](product/products%28for_%29.md): Requests product data from the App Store.

### Displaying a product description and price

- [displayName](product/displayname.md): The localized display name of the product, if it exists.
- [description](product/description.md): The localized description of the product.
- [displayPrice](product/displayprice.md): The localized string representation of the product price, suitable for display.
- [price](product/price.md): The decimal representation of the cost of the product, in local currency.
- [priceFormatStyle](product/priceformatstyle.md): The format style for the numbers in the price of the product.
- [subscriptionPeriodFormatStyle](product/subscriptionperiodformatstyle.md): The format style for the date components related to a subscription’s duration.
- [subscriptionPeriodUnitFormatStyle](product/subscriptionperiodunitformatstyle.md): The format style for subscription period units, such as week, month, or year.

### Purchasing a product

- [purchase(options:)](product/purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](product/purchase%28confirmin_options_%29-6dj6y.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](product/purchase%28confirmin_options_%29-3bivf.md): Processes a purchase for the product.
- [purchase(confirmIn:options:)](product/purchase%28confirmin_options_%29-8eai6.md): Processes a purchase for the product.
- [Product.PurchaseOption](product/purchaseoption.md): Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](product/purchaseresult.md): The result of a purchase.
- [Product.PurchaseError](product/purchaseerror.md): Error information for product purchase errors.

### Receiving current entitlement information

- [currentEntitlements](product/currententitlements.md)

### Getting the latest transaction

- [latestTransaction](product/latesttransaction.md): The most recent transaction for the product.

### Getting subscription information

- [subscription](product/subscription.md): The subscription information for an auto-renewable subscripton.
- [Product.SubscriptionInfo](product/subscriptioninfo.md): Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
- [Product.SubscriptionPeriod](product/subscriptionperiod.md): Values that represent the duration of time between subscription renewals.
- [Product.SubscriptionOffer](product/subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.
- [Product.SubscriptionInfo.Status](product/subscriptioninfo/status-swift.struct.md): The renewal status information for an auto-renewable subscription.

### Getting product identifiers and type

- [id](product/id.md): The unique product identifier.
- [type](product/type.md): The in-app purchase product type.
- [Product.ProductType](product/producttype.md): The types of in-app purchases.

### Getting Family Sharing status

- [isFamilyShareable](product/isfamilyshareable.md): A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.

### Managing promoted in-app purchases

- [Product.PromotionInfo](product/promotioninfo.md): Information about a promoted In-App Purchase that customizes its order and visibility on the device.

### Loading products

- [Product.CollectionTaskState](product/collectiontaskstate.md): The state of a task that loads a collection of products in the background.
- [Product.TaskState](product/taskstate.md): The state of a task that loads a product in the background.

### Getting product info in JSON format

- [jsonRepresentation](product/jsonrepresentation.md): The JSON representation of the product information.

### Getting subscription relationship

- [Product.SubscriptionRelationship](product/subscriptionrelationship.md)

### Deprecated

- [currentEntitlement](product/currententitlement.md): Deprecated. The transaction that entitles the user to the product.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Product and subscription information

- [Implementing a store in your app using the StoreKit API](implementing-a-store-in-your-app-using-the-storekit-api.md): Offer In-App Purchases and manage entitlements using signed transactions and status information.
- [Supporting monthly subscriptions with a 12-month commitment](supporting-monthly-subscriptions-with-a-12-month-commitment.md): Configure, merchandise, and grant access to a monthly subscription with a 12-month commitment.
- [Managing the life cycle of monthly subscriptions with a 12-month commitment](managing-lifecycle-of-monthly-subscriptions-with-a-12-month-commitment-.md): Handle renewals, cancellations, billing issues, refund requests, and price changes, and test subscriptions with a commitment plan.
- [Product.SubscriptionInfo](product/subscriptioninfo.md): Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
- [SubscriptionInfo](subscriptioninfo.md): Information about an auto-renewable subscription.
- [SubscriptionStatus](subscriptionstatus.md): Represents the renewal status information for an auto-renewable subscription.
