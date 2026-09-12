> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(id:preferspromotionalicon:icon:)](https://developer.apple.com/documentation/storekit/productview/init(id:preferspromotionalicon:icon:))

# init(id:prefersPromotionalIcon:icon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load an individual product from the App Store and merchandise it using a custom icon.

## Declaration

```swift
nonisolated init(id productID: Product.ID, prefersPromotionalIcon: Bool = false, @ViewBuilder icon: () -> Icon) where PlaceholderIcon == AutomaticProductPlaceholderIcon
```

## Parameters

- `productID`: The product identifier to load from the App Store.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use the promotional image from the App Store, if it’s available. If this value is `true` and a promotional image for the product is available, the view displays it instead of the view you provide in the `icon` parameter.
- `icon`: A closure that returns the image the view displays when the system finishes loading the product from the App Store.

<a id="Discussion"></a>

## Discussion

The product view displays a placeholder icon until the system finishes loading the product. After the product loads, the system uses the view you provide in the `icon` parameter, by default. If `prefersPromotionalIcon` is `true` and the product has a promotional image, the view displays the promotional image as its icon instead of the provided view.

> **Tip**

>  To gain more control over the image that decorates this view, use the [init(id:icon:placeholderIcon:)](init%28id_icon_placeholdericon_%29.md) initializer. It receives a [ProductIconPhase](../producticonphase.md), which enables you to supply an image for each phase of the image-loading process.

## See Also

### Creating product views that load products

- [init(id:prefersPromotionalIcon:)](init%28id_preferspromotionalicon_%29.md): Creates a view to load and merchandise an individual product from the App Store.
- [init(id:prefersPromotionalIcon:icon:placeholderIcon:)](init%28id_preferspromotionalicon_icon_placeholdericon_%29.md): Creates a view to load an individual product from the App Store and merchandise it using an image and a custom placeholder icon.
- [init(id:icon:placeholderIcon:)](init%28id_icon_placeholdericon_%29.md): Creates a view to load an individual product from the App Store, and merchandise it using its promotional image and a custom placeholder icon.
