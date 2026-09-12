> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(_:icon:)](https://developer.apple.com/documentation/storekit/productview/init(_:icon:))

# init(\_:icon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to display a product that the system already loaded from the App Store, and merchandise it using its promotional image.

## Declaration

```swift
nonisolated init(_ product: Product, @ViewBuilder icon: @escaping (ProductIconPhase) -> Icon) where PlaceholderIcon == EmptyView
```

## Parameters

- `product`: The product to merchandise.
- `icon`: A closure that receives a [ProductIconPhase](../producticonphase.md) as an input, which indicates the state of the loading operation of the product’s promoted image, and returns the view to display for the specified phase.

<a id="Discussion"></a>

## Discussion

The product view asynchronously loads and displays the product’s promotional image.

The [ProductIconPhase](../producticonphase.md) value indicates whether the promotional image is loading, unavailable, or whether it succeeded or failed to load. Use the [ProductIconPhase](../producticonphase.md) to monitor current loading phase, and to decide the image to return in the `icon` closure.

## See Also

### Creating product views with preloaded products

- [init(\_:prefersPromotionalIcon:icon:)](init%28__preferspromotionalicon_icon_%29.md): Creates a view to merchandise an individual product using a custom icon.
- [init(\_:prefersPromotionalIcon:)](init%28__preferspromotionalicon_%29.md): Creates a view to merchandise an individual product.
