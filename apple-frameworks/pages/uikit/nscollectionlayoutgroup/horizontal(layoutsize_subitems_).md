> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/horizontal(layoutsize:subitems:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/horizontal(layoutsize:subitems:))

# horizontal(layoutSize:subitems:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [horizontal(layoutSize:repeatingSubitem:count:)](horizontal%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.

# horizontalGroupWithLayoutSize:subitems: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

- [horizontalGroupWithLayoutSize:repeatingSubitem:count:](horizontal%28layoutsize_repeatingsubitem_count_%29.md): Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.
