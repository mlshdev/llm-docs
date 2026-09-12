> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseerror](https://developer.apple.com/documentation/storekit/product/purchaseerror)

# Product.PurchaseError

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Error information for product purchase errors.

## Declaration

```swift
enum PurchaseError
```

<a id="overview"></a>

## Overview

The [purchase(options:)](purchase%28options_%29.md) function may throw a purchase error.

## Topics

### Getting Purchase Error Codes

- [Product.PurchaseError.invalidOfferIdentifier](purchaseerror/invalidofferidentifier.md): The promotional offer identifier provided in the purchase options is invalid.
- [Product.PurchaseError.productUnavailable](purchaseerror/productunavailable.md): The product isn’t available.
- [Product.PurchaseError.purchaseNotAllowed](purchaseerror/purchasenotallowed.md): The user isn’t allowed to make purchases.
- [Product.PurchaseError.ineligibleForOffer](purchaseerror/ineligibleforoffer.md): The user isn’t eligible for the offer.
- [Product.PurchaseError.invalidOfferPrice](purchaseerror/invalidofferprice.md): The price of the offer isn’t valid.
- [Product.PurchaseError.invalidOfferSignature](purchaseerror/invalidoffersignature.md): The offer signature isn’t valid.
- [Product.PurchaseError.invalidQuantity](purchaseerror/invalidquantity.md): The quantity to purchase is invalid.
- [Product.PurchaseError.missingOfferParameters](purchaseerror/missingofferparameters.md): The offer parameters are missing.

### Enumeration Cases

- [Product.PurchaseError.paymentMethodBindingConfigurationRequired](purchaseerror/paymentmethodbindingconfigurationrequired.md): The customer needs to add a payment method to their Apple Account before making a purchase; use [PaymentMethodBinding](../paymentmethodbinding.md) to prompt the customer and bind the payment method.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchasing a product

- [purchase(options:)](purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-3bivf.md): Processes a purchase for the product.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-8eai6.md): Processes a purchase for the product.
- [Product.PurchaseOption](purchaseoption.md): Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](purchaseresult.md): The result of a purchase.
