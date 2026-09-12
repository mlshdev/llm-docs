> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo](https://developer.apple.com/documentation/storekit/product/promotioninfo)

# Product.PromotionInfo

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Information about a promoted In-App Purchase that customizes its order and visibility on the device.

## Declaration

```swift
struct PromotionInfo
```

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="overview"></a>

## Overview

The `Product.PromotionInfo` structure represents promoted in-app purchases available in your app. You set up promoted in-app purchases using App Store Connect, including their default display order and visibility settings. Use this API to override and customize their order and visibility. Overrides are per device. They can take effect after the user launches the app at least once.

You don’t instantiate this structure. To get a list of `Product.PromotionInfo` objects, call the static method [updateProductOrder(byID:)](promotioninfo/updateproductorder%28byid_%29.md) with a list of product identifiers that represent your promoted in-app purchases. Then call [currentOrder](promotioninfo/currentorder.md) to get the list of `Product.PromotionInfo` objects. To change their order, call [updateAll(\_:)](promotioninfo/updateall%28__%29.md) with the promoted in-app purchases listed in the desired order. To change the order using product identifiers, call [updateProductOrder(byID:)](promotioninfo/updateproductorder%28byid_%29.md).

To prevent a promoted in-app purchase from appearing in the App Store on the device, there are two options:

- Hide the product by setting the [visibility](promotioninfo/visibility-swift.property.md) value to [Product.PromotionInfo.Visibility.hidden](promotioninfo/visibility-swift.enum/hidden.md) and calling [update()](promotioninfo/update%28%29.md), or call [updateProductVisibility(\_:for:)](promotioninfo/updateproductvisibility%28__for_%29.md).
- Remove the product from the list by excluding it when you call [updateAll(\_:)](promotioninfo/updateall%28__%29.md) or [updateProductOrder(byID:)](promotioninfo/updateproductorder%28byid_%29.md).

To cancel your overrides and return to the default order and visibility, call [updateAll(\_:)](promotioninfo/updateall%28__%29.md) or [updateProductOrder(byID:)](promotioninfo/updateproductorder%28byid_%29.md) with an empty array.

For more information about promoting in-app purchases, see [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md).

## Topics

### Getting the product ID

- [productID](promotioninfo/productid.md): The product identifier of the promoted in-app purchase.

### Managing promotion order

- [updateProductOrder(byID:)](promotioninfo/updateproductorder%28byid_%29.md): Sets the display order of promoted in-app purchases in the App Store, using product identifiers.

### Getting overridden order

- [currentOrder](promotioninfo/currentorder.md): Gets the customized order of the promotion info objects the represent promoted products.

### Managing promotion visibility

- [visibility](promotioninfo/visibility-swift.property.md): A value that indicates whether the promoted in-app purchase is visible or hidden on the user’s device.
- [Product.PromotionInfo.Visibility](promotioninfo/visibility-swift.enum.md): The visibility states for product promotion information.
- [updateProductVisibility(\_:for:)](promotioninfo/updateproductvisibility%28__for_%29.md): Updates a value that indicates whether a promoted in-app purchase appears in the App Store on the user’s device.

### Updating order and visibility

- [update()](promotioninfo/update%28%29.md): Saves your changes to the promoted product’s visibility.
- [updateAll(\_:)](promotioninfo/updateall%28__%29.md): Sets the order and visibility of all the promoted products and saves your changes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Promoted In-App Purchases

- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md): Display promoted In-App Purchases on your product page and handle purchases that users initiate on the App Store.
- [PurchaseIntent](../purchaseintent.md): An instance that emits purchase intents, which indicate that the customer initiated a purchase outside of your app, for your app to complete.
- [Testing promoted In-App Purchases](../testing-promoted-in-app-purchases.md): Test your In-App Purchases before making your app available in the App Store.
