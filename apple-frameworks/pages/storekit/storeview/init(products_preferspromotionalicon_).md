> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(products:preferspromotionalicon:)](https://developer.apple.com/documentation/storekit/storeview/init(products:preferspromotionalicon:))

# init(products:prefersPromotionalIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load and merchandise a collection of products from the App Store.

## Declaration

```swift
nonisolated init(products: some Collection<Product>, prefersPromotionalIcon: Bool = false) where Icon == EmptyView, PlaceholderIcon == EmptyView
```

## Parameters

- `products`: The products to merchandise.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use promotional images from the App Store, if they’re available. If this parameter is `false`, the system ignores promotional images.

<a id="Discussion"></a>

## Discussion

By default, the store view doesn’t show promotional images. If you set `prefersPromotionalIcon` to `true`, the store view uses each product’s promotional image as its icon.

## See Also

### Creating store views with preloaded products

- [init(products:prefersPromotionalIcon:icon:)](init%28products_preferspromotionalicon_icon_%29.md): Creates a view to merchandise a collection of products using a custom icon.
- [init(products:icon:)](init%28products_icon_%29.md): Creates a view to merchandise a collection of products with promotional images.
