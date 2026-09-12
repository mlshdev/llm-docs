> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsupplementaryitem/init(layoutsize:elementkind:containeranchor:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutsupplementaryitem/init(layoutsize:elementkind:containeranchor:))

# init(layoutSize:elementKind:containerAnchor:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor)
```

## See Also

### Creating a supplementary item

- [init(layoutSize:elementKind:containerAnchor:itemAnchor:)](init%28layoutsize_elementkind_containeranchor_itemanchor_%29.md): Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.

# supplementaryItemWithLayoutSize:elementKind:containerAnchor: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.

## Declaration

```objectivec
+ (instancetype) supplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind containerAnchor:(NSCollectionLayoutAnchor *) containerAnchor;
```

## See Also

### Creating a supplementary item

- [supplementaryItemWithLayoutSize:elementKind:containerAnchor:itemAnchor:](init%28layoutsize_elementkind_containeranchor_itemanchor_%29.md): Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.
