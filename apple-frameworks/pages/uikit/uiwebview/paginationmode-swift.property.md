> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/paginationmode-swift.property](https://developer.apple.com/documentation/uikit/uiwebview/paginationmode-swift.property)

# paginationMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0)

The layout of content in the web view.

## Declaration

```swift
var paginationMode: UIWebView.PaginationMode { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether content in the web view is broken up into pages that fill the view one screen at a time, or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of [pageLength](pagelength.md) and [gapBetweenPages](gapbetweenpages.md) to relayout its content.

See [UIWebView.PaginationMode](paginationmode-swift.enum.md) for possible values. The default value is [UIWebView.PaginationMode.unpaginated](paginationmode-swift.enum/unpaginated.md).

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationBreakingMode](paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.

# paginationMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0)

The layout of content in the web view.

## Declaration

```objectivec
@property (nonatomic) UIWebPaginationMode paginationMode;
```

<a id="Discussion"></a>

## Discussion

This property determines whether content in the web view is broken up into pages that fill the view one screen at a time, or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of [pageLength](pagelength.md) and [gapBetweenPages](gapbetweenpages.md) to relayout its content.

See [UIWebPaginationMode](paginationmode-swift.enum.md) for possible values. The default value is [UIWebPaginationModeUnpaginated](paginationmode-swift.enum/unpaginated.md).

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationBreakingMode](paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.
