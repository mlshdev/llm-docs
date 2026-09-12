> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/visibility-swift.enum](https://developer.apple.com/documentation/storekit/product/promotioninfo/visibility-swift.enum)

# Product.PromotionInfo.Visibility

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The visibility states for product promotion information.

## Declaration

```swift
enum Visibility
```

<a id="overview"></a>

## Overview

Use the visibility states to set the [visibility](visibility-swift.property.md) of a promoted in-app purchase. Call [update()](update%28%29.md) to save your changes.

The visibility states have the following effects on the user’s device:

- [Product.PromotionInfo.Visibility.visible](visibility-swift.enum/visible.md) makes the promoted in-app purchase visible in the App Store.
- [Product.PromotionInfo.Visibility.hidden](visibility-swift.enum/hidden.md) hides the promoted in-app purchase in the App Store.
- [Product.PromotionInfo.Visibility.appStoreConnectDefault](visibility-swift.enum/appstoreconnectdefault.md) let’s you control the visibility using settings in App Store Connect. For more information, see [Promote in-app purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/promote-in-app-purchases).

## Topics

### Getting visibility states

- [Product.PromotionInfo.Visibility.appStoreConnectDefault](visibility-swift.enum/appstoreconnectdefault.md): A visibility value for a promoted in-app purchase that uses the visibility setting from App Store Connect.
- [Product.PromotionInfo.Visibility.hidden](visibility-swift.enum/hidden.md): A visibility value that hides a promoted in-app purchase on the App Store on a user’s device.
- [Product.PromotionInfo.Visibility.visible](visibility-swift.enum/visible.md): A visibility value that makes a promoted in-app purchase visible on the App Store on a user’s device.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Managing promotion visibility

- [visibility](visibility-swift.property.md): A value that indicates whether the promoted in-app purchase is visible or hidden on the user’s device.
- [updateProductVisibility(\_:for:)](updateproductvisibility%28__for_%29.md): Updates a value that indicates whether a promoted in-app purchase appears in the App Store on the user’s device.
