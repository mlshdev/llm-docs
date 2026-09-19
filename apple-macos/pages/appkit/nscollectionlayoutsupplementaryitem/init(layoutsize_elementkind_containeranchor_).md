> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscollectionlayoutsupplementaryitem/init(layoutsize:elementkind:containeranchor:)

# init(layoutSize:elementKind:containerAnchor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, containerAnchor: NSCollectionLayoutAnchor)
```

## See Also

### Creating a supplementary item

- [init(layoutSize:elementKind:containerAnchor:itemAnchor:)](init%28layoutsize_elementkind_containeranchor_itemanchor_%29.md): Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.

# supplementaryItemWithLayoutSize:elementKind:containerAnchor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a supplementary item of the specified size and element kind, with an anchor relative to a container.

## Declaration

```objectivec
+ (instancetype) supplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind containerAnchor:(NSCollectionLayoutAnchor *) containerAnchor;
```

## See Also

### Creating a supplementary item

- [supplementaryItemWithLayoutSize:elementKind:containerAnchor:itemAnchor:](init%28layoutsize_elementkind_containeranchor_itemanchor_%29.md): Creates a supplementary item of the specified size and element kind, an anchor relative to a container, and an anchor relative to an item.
