> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/vertical(layoutsize:subitem:count:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/vertical(layoutsize:subitem:count:))

# vertical(layoutSize:subitem:count:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

> Use [vertical(layoutSize:repeatingSubitem:count:)](vertical%28layoutsize_repeatingsubitem_count_%29.md) instead.

## Declaration

```swift
class func vertical(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: Int) -> Self
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Deprecated

- [horizontal(layoutSize:subitem:count:)](horizontal%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
- [horizontalGroup(with:repeatingSubitem:count:)](horizontalgroup%28with_repeatingsubitem_count_%29.md): Deprecated. Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.
- [verticalGroup(with:repeatingSubitem:count:)](verticalgroup%28with_repeatingsubitem_count_%29.md): Deprecated. Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

# verticalGroupWithLayoutSize:subitem:count: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.

> Use [verticalGroupWithLayoutSize:repeatingSubitem:count:](vertical%28layoutsize_repeatingsubitem_count_%29.md) instead.

## Declaration

```objectivec
+ (instancetype) verticalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize subitem:(NSCollectionLayoutItem *) subitem count:(NSInteger) count;
```

<a id="Discussion"></a>

## Discussion

When you set a value for the [interItemSpacing](interitemspacing.md) property after using this initializer, the group keeps the same number of items and automatically resizes them to add the extra specified spacing between them.

## See Also

### Deprecated

- [horizontalGroupWithLayoutSize:subitem:count:](horizontal%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
