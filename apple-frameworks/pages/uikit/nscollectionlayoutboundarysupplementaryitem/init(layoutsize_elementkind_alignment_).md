> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:))

# init(layoutSize:elementKind:alignment:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment)
```

## See Also

### Creating a boundary supplementary item

- [init(layoutSize:elementKind:alignment:absoluteOffset:)](init%28layoutsize_elementkind_alignment_absoluteoffset_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.

# boundarySupplementaryItemWithLayoutSize:elementKind:alignment: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.

## Declaration

```objectivec
+ (instancetype) boundarySupplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind alignment:(NSRectAlignment) alignment;
```

## See Also

### Creating a boundary supplementary item

- [boundarySupplementaryItemWithLayoutSize:elementKind:alignment:absoluteOffset:](init%28layoutsize_elementkind_alignment_absoluteoffset_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.
