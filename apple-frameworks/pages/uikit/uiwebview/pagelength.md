> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/pagelength](https://developer.apple.com/documentation/uikit/uiwebview/pagelength)

# pageLength (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0)

The size of each page, in points, in the direction that the pages flow.

## Declaration

```swift
var pageLength: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When [paginationMode](paginationmode-swift.property.md) is right to left or left to right, this property represents the width of each page. When [paginationMode](paginationmode-swift.property.md) is top to bottom or bottom to top, this property represents the height of each page.

The default value is `0`, which means the layout uses the size of the viewport to determine the dimensions of the page. Adjusting the value of this property causes a relayout.

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [paginationBreakingMode](paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.
- [paginationMode](paginationmode-swift.property.md): Deprecated. The layout of content in the web view.

# pageLength (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0)

The size of each page, in points, in the direction that the pages flow.

## Declaration

```objectivec
@property (nonatomic) CGFloat pageLength;
```

<a id="Discussion"></a>

## Discussion

When [paginationMode](paginationmode-swift.property.md) is right to left or left to right, this property represents the width of each page. When [paginationMode](paginationmode-swift.property.md) is top to bottom or bottom to top, this property represents the height of each page.

The default value is `0`, which means the layout uses the size of the viewport to determine the dimensions of the page. Adjusting the value of this property causes a relayout.

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [paginationBreakingMode](paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.
- [paginationMode](paginationmode-swift.property.md): Deprecated. The layout of content in the web view.
