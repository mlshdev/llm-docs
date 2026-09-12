> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:))

# init(layoutSize:elementKind:alignment:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment)
```

## See Also

### Creating a boundary supplementary item

- [init(layoutSize:elementKind:alignment:absoluteOffset:)](init%28layoutsize_elementkind_alignment_absoluteoffset_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.

# boundarySupplementaryItemWithLayoutSize:elementKind:alignment: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.

## Declaration

```objectivec
+ (instancetype) boundarySupplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind alignment:(NSRectAlignment) alignment;
```

## See Also

### Creating a boundary supplementary item

- [boundarySupplementaryItemWithLayoutSize:elementKind:alignment:absoluteOffset:](init%28layoutsize_elementkind_alignment_absoluteoffset_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.
