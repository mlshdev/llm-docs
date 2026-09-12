> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup/horizontal(layoutsize:subitem:count:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup/horizontal(layoutsize:subitem:count:))

# horizontal(layoutSize:subitem:count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.

## Declaration

```swift
class func horizontal(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: Int) -> Self
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Creating a horizontal group

- [horizontal(layoutSize:subitems:)](horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.

# horizontalGroupWithLayoutSize:subitem:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.

## Declaration

```objectivec
+ (instancetype) horizontalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize subitem:(NSCollectionLayoutItem *) subitem count:(NSInteger) count;
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Creating a horizontal group

- [horizontalGroupWithLayoutSize:subitems:](horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
