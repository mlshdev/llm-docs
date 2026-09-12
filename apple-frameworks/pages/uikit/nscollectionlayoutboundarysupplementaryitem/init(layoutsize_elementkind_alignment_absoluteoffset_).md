> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:absoluteoffset:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutboundarysupplementaryitem/init(layoutsize:elementkind:alignment:absoluteoffset:))

# init(layoutSize:elementKind:alignment:absoluteOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.

## Declaration

```swift
convenience init(layoutSize: NSCollectionLayoutSize, elementKind: String, alignment: NSRectAlignment, absoluteOffset: CGPoint)
```

## See Also

### Creating a boundary supplementary item

- [init(layoutSize:elementKind:alignment:)](init%28layoutsize_elementkind_alignment_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.

# boundarySupplementaryItemWithLayoutSize:elementKind:alignment:absoluteOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout at an absolute offset.

## Declaration

```objectivec
+ (instancetype) boundarySupplementaryItemWithLayoutSize:(NSCollectionLayoutSize *) layoutSize elementKind:(NSString *) elementKind alignment:(NSRectAlignment) alignment absoluteOffset:(CGPoint) absoluteOffset;
```

## See Also

### Creating a boundary supplementary item

- [boundarySupplementaryItemWithLayoutSize:elementKind:alignment:](init%28layoutsize_elementkind_alignment_%29.md): Creates a boundary supplementary item of the specified size and element kind, with an alignment relative to a section or layout.
