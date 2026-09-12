> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption](https://developer.apple.com/documentation/storekit/product/purchaseoption)

# Product.PurchaseOption

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.

## Declaration

```swift
struct PurchaseOption
```

<a id="overview"></a>

## Overview

Associate purchase options with an in-app purchase when you call the methods to initiate a purchase, such as [purchase(options:)](purchase%28options_%29.md) or [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md). Use the testing-specific options with [StoreKit Test](https://developer.apple.com/documentation/storekittest) or in the sandbox testing environment.

Purchase options enable you to provide additional information for the purchase, such as an app account token, promotional offer, win back offer, and quantity. You can also use purchase options to indicate how the transaction behaves if the storefront changes, and to indicate whether the transaction is eligible for an introductory offer.

> **Important**

>  Purchases fail if a purchase option is invalid, and can result in the purchase method throwing a [StoreKitError](../storekiterror.md) or [Product.PurchaseError](purchaseerror.md).

<a id="Use-purchase-options-during-testing"></a>

### Use purchase options during testing

In the sandbox testing environment, use [simulatesAskToBuyInSandbox(\_:)](purchaseoption/simulatesasktobuyinsandbox%28__%29.md) to test Ask To Buy scenarios.

In the Xcode testing environment with [StoreKit Test](https://developer.apple.com/documentation/storekittest), use the following testing-specific purchase options when you call [buyProduct(identifier:options:)](https://developer.apple.com/documentation/storekittest/sktestsession/buyproduct%28identifier:options:%29):

- Use [codeOffer(referenceName:)](purchaseoption/codeoffer%28referencename_%29.md) and [promotionalOffer(id:)](purchaseoption/promotionaloffer%28id_%29.md) to simulate customers redeeming the offers.
- Use [purchaseDate(\_:renewalBehavior:)](purchaseoption/purchasedate%28__renewalbehavior_%29.md) to control the transaction date and subscription renewal behavior.

## Topics

### Setting the purchase options

- [appAccountToken(\_:)](purchaseoption/appaccounttoken%28__%29.md): Sets a UUID to associate the purchase with an account in your system.
- [winBackOffer(\_:)](purchaseoption/winbackoffer%28__%29.md): Sets a win-back offer to apply to the purchase.
- [promotionalOffer(offerID:keyID:nonce:signature:timestamp:)](purchaseoption/promotionaloffer%28offerid_keyid_nonce_signature_timestamp_%29.md): Deprecated. Applies a promotional offer for an auto-renewable subscription.
- [promotionalOffer(offerID:signature:)](purchaseoption/promotionaloffer%28offerid_signature_%29.md): Deprecated.
- [quantity(\_:)](purchaseoption/quantity%28__%29.md): Indicates the quantity of items the customer is purchasing.

### Specifying the behavior for storefront changes

- [onStorefrontChange(shouldContinuePurchase:)](purchaseoption/onstorefrontchange%28shouldcontinuepurchase_%29.md): Indicates whether a transaction needs to continue if the App Store storefront changes on the device during the transaction.

### Specifying eligibility for an introductory offer

- [introductoryOfferEligibility(compactJWS:)](purchaseoption/introductoryoffereligibility%28compactjws_%29.md): Set the eligibility of an introductory offer for a purchase.

### Setting options for StoreKit Testing in Xcode

- [purchaseDate(\_:renewalBehavior:)](purchaseoption/purchasedate%28__renewalbehavior_%29.md): Sets the purchase date for the transaction in the testing environment, and indicates the renewal behavior for an auto-renewable subscription.
- [Product.PurchaseOption.SubscriptionRenewalBehavior](purchaseoption/subscriptionrenewalbehavior.md): Renewal options for auto-renewable subscriptions that you purchase in the testing environment.
- [codeOffer(referenceName:)](purchaseoption/codeoffer%28referencename_%29.md): Sets an offer code for the transaction in the testing environment.
- [promotionalOffer(id:)](purchaseoption/promotionaloffer%28id_%29.md): Sets a promotional offer for the transaction in the testing environment.

### Setting options for sandbox testing

- [simulatesAskToBuyInSandbox(\_:)](purchaseoption/simulatesasktobuyinsandbox%28__%29.md): Simulates an Ask to Buy scenario when testing your app in the sandbox environment.

### Setting custom purchase options

- [custom(key:value:)](purchaseoption/custom%28key_value_%29-80cvh.md): Adds data for a custom key to a purchase.
- [custom(key:value:)](purchaseoption/custom%28key_value_%29-3g3nc.md): Adds a string for a custom key to a purchase.
- [custom(key:value:)](purchaseoption/custom%28key_value_%29-8tjim.md): Adds a Boolean value for a custom key to a purchase.
- [custom(key:value:)](purchaseoption/custom%28key_value_%29-7rju9.md): Adds a number for a custom key to a purchase.

### Type Methods

- [promotionalOffer(\_:compactJWS:)](purchaseoption/promotionaloffer%28__compactjws_%29.md): Apply a promotional offer to a purchase.
- [billingPlanType(\_:)](purchaseoption/billingplantype%28__%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchasing a product

- [purchase(options:)](purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-3bivf.md): Processes a purchase for the product.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-8eai6.md): Processes a purchase for the product.
- [Product.PurchaseResult](purchaseresult.md): The result of a purchase.
- [Product.PurchaseError](purchaseerror.md): Error information for product purchase errors.
