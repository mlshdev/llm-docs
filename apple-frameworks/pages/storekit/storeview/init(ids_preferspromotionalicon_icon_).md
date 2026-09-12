> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:)](https://developer.apple.com/documentation/storekit/storeview/init(ids:preferspromotionalicon:icon:))

# init(ids:prefersPromotionalIcon:icon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using a custom image.

## Declaration

```swift
nonisolated init(ids productIDs: some Collection<String>, prefersPromotionalIcon: Bool = false, @ViewBuilder icon: @escaping (Product) -> Icon) where PlaceholderIcon == AutomaticProductPlaceholderIcon
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use promotional images from the App Store, if they’re available. If this parameter is `false`, the system ignores promotional images.
- `icon`: A closure that returns the image the view displays when the products finish loading from the App Store.

<a id="Discussion"></a>

## Discussion

The store view shows a placeholder icon until all products finish loading. Then, the view uses the image that you provide in `icon`, by default. If you set `prefersPromotionalIcon` to `true`, the view uses the promotional image instead of the `icon` for any products that have promotional images available.

## See Also

### Creating store views that load products

- [init(ids:prefersPromotionalIcon:)](init%28ids_preferspromotionalicon_%29.md): Creates a view to load and merchandise a collection of products from the App Store using product identifiers.
- [init(ids:prefersPromotionalIcon:icon:placeholderIcon:)](init%28ids_preferspromotionalicon_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using an image and a custom placeholder icon.
- [init(ids:icon:placeholderIcon:)](init%28ids_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using their promotional images and a custom placeholder icon.
