> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(_:preferspromotionalicon:)](https://developer.apple.com/documentation/storekit/productview/init(_:preferspromotionalicon:))

# init(\_:prefersPromotionalIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to merchandise an individual product.

## Declaration

```swift
nonisolated init(_ product: Product, prefersPromotionalIcon: Bool = true) where Icon == EmptyView, PlaceholderIcon == EmptyView
```

## Parameters

- `product`: The product to merchandise.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use the promotional image from the App Store, if it’s available. If this value is `true` and a promotional image for the product is available, the view displays it.

<a id="Discussion"></a>

## Discussion

If the product has a promotional image available, the view displays it. Otherwise, the view doesn’t show an image.

If you set the `prefersPromotionalIcon` parameter to `false`, the view doesn’t show an image even if the product has a promotional image available.

> **Tip**

>  To gain more control over the image that decorates this view, use the [init(\_:icon:)](init%28__icon_%29.md) initializer. It receives a [ProductIconPhase](../producticonphase.md), which enables you to supply an image for each phase of the image-loading process.

## See Also

### Creating product views with preloaded products

- [init(\_:prefersPromotionalIcon:icon:)](init%28__preferspromotionalicon_icon_%29.md): Creates a view to merchandise an individual product using a custom icon.
- [init(\_:icon:)](init%28__icon_%29.md): Creates a view to display a product that the system already loaded from the App Store, and merchandise it using its promotional image.
