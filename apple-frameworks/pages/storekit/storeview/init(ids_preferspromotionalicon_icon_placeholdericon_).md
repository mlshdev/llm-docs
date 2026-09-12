> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:placeholdericon:)](https://developer.apple.com/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:placeholdericon:))

# init(ids:prefersPromotionalIcon:icon:placeholderIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using an image and a custom placeholder icon.

## Declaration

```swift
nonisolated init(ids productIDs: some Collection<String>, prefersPromotionalIcon: Bool = false, @ViewBuilder icon: @escaping (Product) -> Icon, @ViewBuilder placeholderIcon: () -> PlaceholderIcon)
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use a promotional image from the App Store, if it’s available. If this parameter is `false`, the system ignores promotional images.
- `icon`: A closure that returns the image the view displays when the products finish loading from the App Store.
- `placeholderIcon`: A closure that returns the image that the view uses while the products are loading. The view uses the same placeholder image for all the products.

<a id="Discussion"></a>

## Discussion

The store view shows the custom placeholder icon until all products finish loading. After the view finishes loading the products, it uses the image you provide, by default. If you set `prefersPromotionalIcon` to `true`, any products that have an available promotional image use the promotional image instead.

The following example shows how to create a store view using an icon and a custom placeholder icon:

```swift
StoreView(ids: [
    "com.example.product1",
    "com.example.product2"
]) { product in
     Image(systemName: "star.fill")
         .foregroundStyle(.yellow)
 } placeholderIcon: {
      Image(systemName: "star.fill")
         .foregroundStyle(.gray)
 }
```

## See Also

### Creating store views that load products

- [init(ids:prefersPromotionalIcon:)](init%28ids_preferspromotionalicon_%29.md): Creates a view to load and merchandise a collection of products from the App Store using product identifiers.
- [init(ids:prefersPromotionalIcon:icon:)](init%28ids_preferspromotionalicon_icon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using a custom image.
- [init(ids:icon:placeholderIcon:)](init%28ids_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using their promotional images and a custom placeholder icon.
