> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/verticalgroup(with:repeatingsubitem:count:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/verticalgroup(with:repeatingsubitem:count:))

# verticalGroup(with:repeatingSubitem:count:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 16.0) · iPadOS 16.0+ (deprecated in 16.0) · Mac Catalyst 16.0+ (deprecated in 16.0) · tvOS · visionOS

Creates a group that repeats the specified subitem a certain number of times along the vertical axis.

> Use [vertical(layoutSize:repeatingSubitem:count:)](vertical%28layoutsize_repeatingsubitem_count_%29.md) instead.

## Declaration

```swift
@MainActor @preconcurrency class func verticalGroup(with size: NSCollectionLayoutSize, repeatingSubitem subitem: NSCollectionLayoutItem, count: Int) -> NSCollectionLayoutGroup
```

## See Also

### Deprecated

- [horizontal(layoutSize:subitem:count:)](horizontal%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a horizontal line up to the number specified by count.
- [horizontalGroup(with:repeatingSubitem:count:)](horizontalgroup%28with_repeatingsubitem_count_%29.md): Deprecated. Creates a group that repeats the specified subitem a certain number of times along the horizontal axis.
- [vertical(layoutSize:subitem:count:)](vertical%28layoutsize_subitem_count_%29.md): Deprecated. Creates a group of the specified size, containing an array of equally sized items arranged in a vertical line up to the number specified by count.
