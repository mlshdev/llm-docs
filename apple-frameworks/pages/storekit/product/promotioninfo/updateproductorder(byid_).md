> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/updateproductorder(byid:)](https://developer.apple.com/documentation/storekit/product/promotioninfo/updateproductorder(byid:))

# updateProductOrder(byID:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Sets the display order of promoted in-app purchases in the App Store, using product identifiers.

## Declaration

```swift
static func updateProductOrder(byID order: some Collection<String>) async throws
```

## Parameters

- `order`: A collection of product identifiers ([id](../id.md)) in the order that you want the promoted in-app purchases to appear, from first to last. Use an empty list to cancel previous changes.

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this static method to override the default order of promoted in-app purchases on the current device. You provide the product identifiers of the promoted in-app purchases to set their order.

To hide a promoted in-app purchase so it doesn’t display in the App Store for the user, don’t include its product identifier when calling this method. You may want to do this, for example, if the user has already purchased the product, or if it isn’t relevant to them for some other reason.

To set the order using [Product.PromotionInfo](../promotioninfo.md) objects instead of product identifiers, see [updateAll(\_:)](updateall%28__%29.md).

<a id="Cancel-overrides"></a>

### Cancel overrides

To cancel the order and visibility changes you make, send an empty collection in the `order` parameter. All in-app purchases then display in the default order.

```swift
// Cancel overrides by using an empty collection.
do {
    try await Product.PromotionInfo.updateProductOrder(byID: [])
}
catch {
    <#Handle error.#>
}
```
