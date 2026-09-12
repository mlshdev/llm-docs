> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup/vertical(layoutsize:subitem:count:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup/vertical(layoutsize:subitem:count:))

# vertical(layoutSize:subitem:count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

## Declaration

```swift
class func vertical(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: Int) -> Self
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Creating a vertical group

- [vertical(layoutSize:subitems:)](vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.

# verticalGroupWithLayoutSize:subitem:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

## Declaration

```objectivec
+ (instancetype) verticalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize subitem:(NSCollectionLayoutItem *) subitem count:(NSInteger) count;
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Creating a vertical group

- [verticalGroupWithLayoutSize:subitems:](vertical%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a vertical line.
