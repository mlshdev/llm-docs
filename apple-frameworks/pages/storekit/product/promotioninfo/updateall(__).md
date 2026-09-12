> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/updateall(_:)](https://developer.apple.com/documentation/storekit/product/promotioninfo/updateall(_:))

# updateAll(\_:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Sets the order and visibility of all the promoted products and saves your changes.

## Declaration

```swift
static func updateAll(_ promotions: some Collection<Product.PromotionInfo>) async throws
```

## Parameters

- `promotions`: A collection of [Product.PromotionInfo](../promotioninfo.md) objects that you list in the order they are to appear in the App Store on the user’s device. Use an empty collection to cancel previous changes.

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this static method to set the order of promoted in-app purchases for the user. Calling this method overrides any previous order and visibility that you set for this user.

To remove a promoted in-app purchase so it doesn’t display for a user, there are two options:

- Don’t include it in the `promotions` collection.
- Change its [visibility](visibility-swift.property.md) value to [Product.PromotionInfo.Visibility.hidden](visibility-swift.enum/hidden.md).

To set the order of promoted in-app purchases using product identifiers instead of [Product.PromotionInfo](../promotioninfo.md) objects, see [updateProductOrder(byID:)](updateproductorder%28byid_%29.md).

<a id="Cancel-overrides"></a>

### Cancel overrides

To cancel the order and visibility changes you make, send an empty collection in `promotions`. All in-app purchases then display in the default order.

## See Also

### Updating order and visibility

- [update()](update%28%29.md): Saves your changes to the promoted product’s visibility.
