> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(ids:icon:placeholdericon:)](https://developer.apple.com/documentation/storekit/storeview/init(ids:icon:placeholdericon:))

# init(ids:icon:placeholderIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using their promotional images and a custom placeholder icon.

## Declaration

```swift
nonisolated init(ids productIDs: some Collection<String>, @ViewBuilder icon: @escaping (Product, ProductIconPhase) -> Icon, @ViewBuilder placeholderIcon: () -> PlaceholderIcon)
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.
- `icon`: A closure that receives a [Product](../product.md) and a [ProductIconPhase](../producticonphase.md) as input. The [ProductIconPhase](../producticonphase.md) indicates the state of the loading operation of the product’s promotional image. The closure returns the view to display for the given product and phase value.
- `placeholderIcon`: A closure that returns the view that the store view uses while the products are loading. The store view uses the same placeholder image for all the products.

<a id="Discussion"></a>

## Discussion

The store view shows the custom `placeholderIcon` until all products finish loading. After the products finish loading, the view asynchronously loads and displays each product’s promotional image.

Use the [ProductIconPhase](../producticonphase.md) to monitor the current loading state of a product’s promotional image, and provide a view for each phase. Consider returning the view provided in the `placeholderIcon` closure for during the [ProductIconPhase.loading](../producticonphase/loading.md) phase. For more information, see [ProductIconPhase](../producticonphase.md).

If a product is unavailable, the store view uses the view that the `placeholderIcon` closure provides as a fallback.

## See Also

### Creating store views that load products

- [init(ids:prefersPromotionalIcon:)](init%28ids_preferspromotionalicon_%29.md): Creates a view to load and merchandise a collection of products from the App Store using product identifiers.
- [init(ids:prefersPromotionalIcon:icon:)](init%28ids_preferspromotionalicon_icon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using a custom image.
- [init(ids:prefersPromotionalIcon:icon:placeholderIcon:)](init%28ids_preferspromotionalicon_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using an image and a custom placeholder icon.
