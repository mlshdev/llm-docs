> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup/vertical(layoutsize:subitems:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup/vertical(layoutsize:subitems:))

# vertical(layoutSize:subitems:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of items arranged in a vertical line.

## Declaration

```swift
class func vertical(layoutSize: NSCollectionLayoutSize, subitems: [NSCollectionLayoutItem]) -> Self
```

## Parameters

- `layoutSize`: The group’s size.
- `subitems`: The subitems to include.

## See Also

### Creating a vertical group

- [vertical(layoutSize:subitem:count:)](vertical%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

# verticalGroupWithLayoutSize:subitems: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of items arranged in a vertical line.

## Declaration

```objectivec
+ (instancetype) verticalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize subitems:(NSArray<NSCollectionLayoutItem *> *) subitems;
```

## Parameters

- `layoutSize`: The group’s size.
- `subitems`: The subitems to include.

## See Also

### Creating a vertical group

- [verticalGroupWithLayoutSize:subitem:count:](vertical%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.
