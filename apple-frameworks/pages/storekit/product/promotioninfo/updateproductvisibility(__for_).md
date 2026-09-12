> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/updateproductvisibility(_:for:)](https://developer.apple.com/documentation/storekit/product/promotioninfo/updateproductvisibility(_:for:))

# updateProductVisibility(\_:for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Updates a value that indicates whether a promoted in-app purchase appears in the App Store on the user’s device.

## Declaration

```swift
static func updateProductVisibility(_ visibility: Product.PromotionInfo.Visibility, for productID: Product.ID) async throws
```

## Parameters

- `visibility`: A visibility value of [Product.PromotionInfo.Visibility](visibility-swift.enum.md) that determines whether a promoted in-app purchase appears in the App Store on the user’s device.
- `productID`: The product identifier of the promoted in-app purchase.

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method to change the visibility setting for a promoted in-app purchase. Changes take effect after you call this method.

The following code example updates a promoted product’s visibility after the user purchases it. The purchased product is hidden to avoid showing it again on the device.

```swift
// Update visibility to hide a promoted product after the user purchases it.
let purchasedProductIdentifier = "com.example.ExampleApp.product1"

do {
  try await Product.PromotionInfo.updateProductVisibility(.hidden, for: purchasedProductIdentifier)
}
catch {
  <#Handle Error#>
}
```

## See Also

### Managing promotion visibility

- [visibility](visibility-swift.property.md): A value that indicates whether the promoted in-app purchase is visible or hidden on the user’s device.
- [Product.PromotionInfo.Visibility](visibility-swift.enum.md): The visibility states for product promotion information.
