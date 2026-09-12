> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(id:icon:placeholdericon:)](https://developer.apple.com/documentation/storekit/productview/init(id:icon:placeholdericon:))

# init(id:icon:placeholderIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load an individual product from the App Store, and merchandise it using its promotional image and a custom placeholder icon.

## Declaration

```swift
nonisolated init(id productID: Product.ID, @ViewBuilder icon: @escaping (ProductIconPhase) -> Icon, @ViewBuilder placeholderIcon: () -> PlaceholderIcon)
```

## Parameters

- `productID`: The product identifier to load from the App Store.
- `icon`: A closure that receives a [ProductIconPhase](../producticonphase.md) as an input, which indicates the state of the loading operation of the product’s promotional image, and returns the view to display for the specified phase.
- `placeholderIcon`: A closure that returns an icon to display until the system finishes loading the product from the App Store.

<a id="Discussion"></a>

## Discussion

The product view shows the `placeholderIcon` until the system finishes loading the product. After the product finishes loading, the view asynchronously loads and displays the product’s promotional image. Use the [ProductIconPhase](../producticonphase.md) to monitor the current loading state of the product’s promotional image.

If the product is unavailable, the view displays the `placeholderIcon` as a fallback.

The [ProductIconPhase](../producticonphase.md) value indicates whether the promotional image is loading, unavailable, or whether it succeeded or failed to load. Use the phase to decide what to draw. While the image’s loading operation is in the [ProductIconPhase.loading](../producticonphase/loading.md) phase, consider displaying the same view that you provide in the `placeholderIcon` closure. For more information, see [ProductIconPhase](../producticonphase.md).

## See Also

### Creating product views that load products

- [init(id:prefersPromotionalIcon:)](init%28id_preferspromotionalicon_%29.md): Creates a view to load and merchandise an individual product from the App Store.
- [init(id:prefersPromotionalIcon:icon:)](init%28id_preferspromotionalicon_icon_%29.md): Creates a view to load an individual product from the App Store and merchandise it using a custom icon.
- [init(id:prefersPromotionalIcon:icon:placeholderIcon:)](init%28id_preferspromotionalicon_icon_placeholdericon_%29.md): Creates a view to load an individual product from the App Store and merchandise it using an image and a custom placeholder icon.
