> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productview/init(_:preferspromotionalicon:icon:)](https://developer.apple.com/documentation/storekit/productview/init(_:preferspromotionalicon:icon:))

# init(\_:prefersPromotionalIcon:icon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to merchandise an individual product using a custom icon.

## Declaration

```swift
nonisolated init(_ product: Product, prefersPromotionalIcon: Bool = false, @ViewBuilder icon: () -> Icon) where PlaceholderIcon == EmptyView
```

## Parameters

- `product`: The product to merchandise.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use the promotional image from the App Store, if it’s available. If this value is `true` and a promotional image for the product is available, the view displays it instead of the view you provide in the `icon` parameter.
- `icon`: A closure that returns the image to use for decorating the in-app purchase product.

<a id="Discussion"></a>

## Discussion

If `prefersPromotionalIcon` is `true` and the product has a promotional image, the view displays the promotional image instead of the view you provide in `icon`.

The following example shows how to create a product view using a custom icon:

```swift
ProductView(product) {
    Image(systemName: "star.fill")
        .foregroundStyle(.yellow)
}
```

> **Tip**

>  To gain more control over the image that decorates this view, use the [init(\_:icon:)](init%28__icon_%29.md) initializer. It receives a [ProductIconPhase](../producticonphase.md), which enables you to supply an image for each phase of the image-loading process.

## See Also

### Creating product views with preloaded products

- [init(\_:prefersPromotionalIcon:)](init%28__preferspromotionalicon_%29.md): Creates a view to merchandise an individual product.
- [init(\_:icon:)](init%28__icon_%29.md): Creates a view to display a product that the system already loaded from the App Store, and merchandise it using its promotional image.
