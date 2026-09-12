> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(products:icon:)](https://developer.apple.com/documentation/storekit/storeview/init(products:icon:))

# init(products:icon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to merchandise a collection of products with promotional images.

## Declaration

```swift
nonisolated init(products: some Collection<Product>, @ViewBuilder icon: @escaping (Product, ProductIconPhase) -> Icon) where PlaceholderIcon == EmptyView
```

## Parameters

- `products`: The products to merchandise.
- `icon`: A closure that receives a [Product](../product.md) and a [ProductIconPhase](../producticonphase.md) as input. The [ProductIconPhase](../producticonphase.md) indicates the state of the loading operation of the product’s promotional image. The closure returns the view to display for the given product and phase value.

<a id="Discussion"></a>

## Discussion

The store view asynchronously loads and displays each product’s promotional image. Use the [ProductIconPhase](../producticonphase.md) to monitor the current loading phase of the product’s promotional image, and provide an image for each phase. For more information about the loading phases, see [ProductIconPhase](../producticonphase.md).

## See Also

### Creating store views with preloaded products

- [init(products:prefersPromotionalIcon:)](init%28products_preferspromotionalicon_%29.md): Creates a view to load and merchandise a collection of products from the App Store.
- [init(products:prefersPromotionalIcon:icon:)](init%28products_preferspromotionalicon_icon_%29.md): Creates a view to merchandise a collection of products using a custom icon.
