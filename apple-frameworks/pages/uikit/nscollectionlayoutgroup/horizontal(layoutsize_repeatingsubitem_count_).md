> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/horizontal(layoutsize:repeatingsubitem:count:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/horizontal(layoutsize:repeatingsubitem:count:))

# horizontal(layoutSize:repeatingSubitem:count:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.

## Declaration

```swift
class func horizontal(layoutSize: NSCollectionLayoutSize, repeatingSubitem subitem: NSCollectionLayoutItem, count: Int) -> Self
```

## Parameters

- `layoutSize`: The group’s size.
- `subitem`: The subitem to repeat. It’s your responsibility to ensure that the group’s `layoutSize` can fit `count` repetitions of this item.
- `count`: The number of times to repeat the subitem.

## See Also

### Creating a horizontal group

- [horizontal(layoutSize:subitems:)](horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.

# horizontalGroupWithLayoutSize:repeatingSubitem:count: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.

## Declaration

```objectivec
+ (instancetype) horizontalGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize repeatingSubitem:(NSCollectionLayoutItem *) subitem count:(NSInteger) count;
```

## Parameters

- `layoutSize`: The group’s size.
- `subitem`: The subitem to repeat. It’s your responsibility to ensure that the group’s `layoutSize` can fit `count` repetitions of this item.
- `count`: The number of times to repeat the subitem.

## See Also

### Creating a horizontal group

- [horizontalGroupWithLayoutSize:subitems:](horizontal%28layoutsize_subitems_%29.md): Creates a group of the specified size, containing an array of items arranged in a horizontal line.
