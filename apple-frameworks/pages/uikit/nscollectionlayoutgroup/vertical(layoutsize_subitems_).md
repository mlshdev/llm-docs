> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/vertical(layoutsize:subitems:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/vertical(layoutsize:subitems:))

# vertical(layoutSize:subitems:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [vertical(layoutSize:repeatingSubitem:count:)](vertical%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

# verticalGroupWithLayoutSize:subitems: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [verticalGroupWithLayoutSize:repeatingSubitem:count:](vertical%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the vertical axis.
