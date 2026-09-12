> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productviewstyleconfiguration](https://developer.apple.com/documentation/storekit/productviewstyleconfiguration)

# ProductViewStyleConfiguration

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The properties of an In-App Purchase product for use by custom product view styles.

## Declaration

```swift
struct ProductViewStyleConfiguration
```

<a id="overview"></a>

## Overview

Use the `ProductViewStyleConfiguration` to create a custom [ProductViewStyle](productviewstyle.md).

## Topics

### Getting a product’s information

- [product](productviewstyleconfiguration/product.md): The in-app purchase product to merchandise.
- [state](productviewstyleconfiguration/state.md): The product task state that indicates the product’s loading phase.
- [hasCurrentEntitlement](productviewstyleconfiguration/hascurrententitlement.md): A Boolean value that indicates whether an in-app purchase transaction exists for the product.

### Getting a product view’s icon

- [icon](productviewstyleconfiguration/icon-swift.property.md): A decorative view for merchandising the product.
- [ProductViewStyleConfiguration.Icon](productviewstyleconfiguration/icon-swift.struct.md): A type-erased icon of an in-app purchase product.

### Getting a product’s description visibility

- [descriptionVisibility](productviewstyleconfiguration/descriptionvisibility.md): The visibility of product descriptions.

### Initiating a purchase

- [purchase()](productviewstyleconfiguration/purchase%28%29.md): Initiates a purchase action for the product.

## See Also

### Styling product views

- [productViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/productviewstyle%28_:%29): Sets the style for In-App Purchase product views within a view.
- [productIconBorder()](https://developer.apple.com/documentation/swiftui/view/producticonborder%28%29): Adds a standard border to an in-app purchase product’s icon .
- [ProductViewStyle](productviewstyle.md): A type that specifies the appearance and interaction of In-App Purchase products within the view hierarchy.
