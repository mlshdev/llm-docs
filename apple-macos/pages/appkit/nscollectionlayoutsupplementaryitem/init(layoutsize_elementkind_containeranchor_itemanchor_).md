> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsupplementaryitem/init(layoutsize:elementkind:containeranchor:itemanchor:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutsupplementaryitem/init(layoutsize:elementkind:containeranchor:itemanchor:))

# init(layoutSize:elementKind:containerAnchor:itemAnchor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor)
```

## See Also

### Creating a supplementary item

- [init(layoutSize:elementKind:containerAnchor:)](init%28layoutsize_elementkind_containeranchor_%29.md): Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.

# supplementaryItemWithLayoutSize:elementKind:containerAnchor:itemAnchor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.

## Declaration

```objectivec
+ (instancetype) supplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind containerAnchor:(NSCollectionLayoutAnchor *) containerAnchor itemAnchor:(NSCollectionLayoutAnchor *) itemAnchor;
```

## See Also

### Creating a supplementary item

- [supplementaryItemWithLayoutSize:elementKind:containerAnchor:](init%28layoutsize_elementkind_containeranchor_%29.md): Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.
