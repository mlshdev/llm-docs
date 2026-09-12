> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storeview/init(ids:preferspromotionalicon:)](https://developer.apple.com/documentation/storekit/storeview/init(ids:preferspromotionalicon:))

# init(ids:prefersPromotionalIcon:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view to load and merchandise a collection of products from the App Store using product identifiers.

## Declaration

```swift
nonisolated init(ids productIDs: some Collection<String>, prefersPromotionalIcon: Bool = false) where Icon == EmptyView, PlaceholderIcon == EmptyView
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.
- `prefersPromotionalIcon`: A Boolean value that indicates whether to use promotional images from the App Store, if they’re available. If this parameter is `false`, the system ignores promotional images.

## See Also

### Creating store views that load products

- [init(ids:prefersPromotionalIcon:icon:)](init%28ids_preferspromotionalicon_icon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using a custom image.
- [init(ids:prefersPromotionalIcon:icon:placeholderIcon:)](init%28ids_preferspromotionalicon_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using an image and a custom placeholder icon.
- [init(ids:icon:placeholderIcon:)](init%28ids_icon_placeholdericon_%29.md): Creates a view to load a collection of products from the App Store using product identifiers, and merchandise them using their promotional images and a custom placeholder icon.
