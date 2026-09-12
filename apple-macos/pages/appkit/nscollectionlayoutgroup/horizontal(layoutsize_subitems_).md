> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup/horizontal(layoutsize:subitems:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup/horizontal(layoutsize:subitems:))

# horizontal(layoutSize:subitems:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of items arranged in a horizontal line.

## Declaration

```swift
class func horizontal(layoutSize: NSCollectionLayoutSize, subitems: [NSCollectionLayoutItem]) -> Self
```

## Parameters

- `layoutSize`: The group’s size.
- `subitems`: The subitems to include.

## See Also

### Creating a horizontal group

- [horizontal(layoutSize:subitem:count:)](horizontal%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.

# horizontalGroupWithLayoutSize:subitems: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of items arranged in a horizontal line.

## Declaration

```objectivec
+ (instancetype) horizontalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize subitems:(NSArray<NSCollectionLayoutItem *> *) subitems;
```

## Parameters

- `layoutSize`: The group’s size.
- `subitems`: The subitems to include.

## See Also

### Creating a horizontal group

- [horizontalGroupWithLayoutSize:subitem:count:](horizontal%28layoutsize_subitem_count_%29.md): Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
