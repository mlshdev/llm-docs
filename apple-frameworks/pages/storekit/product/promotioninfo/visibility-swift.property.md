> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/visibility-swift.property](https://developer.apple.com/documentation/storekit/product/promotioninfo/visibility-swift.property)

# visibility

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A value that indicates whether the promoted in-app purchase is visible or hidden on the user’s device.

## Declaration

```swift
var visibility: Product.PromotionInfo.Visibility
```

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

To override the visibility of a promoted in-app purchase, set the [visibility](visibility-swift.property.md) value and then call [update()](update%28%29.md) to save the change. You can also call [updateProductVisibility(\_:for:)](updateproductvisibility%28__for_%29.md) to set the visibility.

The default value is [Product.PromotionInfo.Visibility.appStoreConnectDefault](visibility-swift.enum/appstoreconnectdefault.md).

## See Also

### Managing promotion visibility

- [Product.PromotionInfo.Visibility](visibility-swift.enum.md): The visibility states for product promotion information.
- [updateProductVisibility(\_:for:)](updateproductvisibility%28__for_%29.md): Updates a value that indicates whether a promoted in-app purchase appears in the App Store on the user’s device.
