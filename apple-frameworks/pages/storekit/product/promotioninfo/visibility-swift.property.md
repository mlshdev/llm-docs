> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/promotioninfo/visibility-swift.property

# visibility

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A value that indicates whether the promoted Apple In-App Purchase is visible or hidden on the user’s device.

## Declaration

```swift
var visibility: Product.PromotionInfo.Visibility
```

## Mentioned In

- [Supporting promoted Apple In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

To override the visibility of a promoted Apple In-App Purchase, set the [visibility](visibility-swift.property.md) value and then call [update()](update%28%29.md) to save the change. You can also call [updateProductVisibility(\_:for:)](updateproductvisibility%28__for_%29.md) to set the visibility.

The default value is [Product.PromotionInfo.Visibility.appStoreConnectDefault](visibility-swift.enum/appstoreconnectdefault.md).

## See Also

### Managing promotion visibility

- [Product.PromotionInfo.Visibility](visibility-swift.enum.md): The visibility states for product promotion information.
- [updateProductVisibility(\_:for:)](updateproductvisibility%28__for_%29.md): Updates a value that indicates whether a promoted Apple In-App Purchase appears in the App Store on the user’s device.
