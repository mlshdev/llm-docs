> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/paginationbreakingmode-swift.property](https://developer.apple.com/documentation/uikit/uiwebview/paginationbreakingmode-swift.property)

# paginationBreakingMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0)

The manner in which column- or page-breaking occurs.

## Declaration

```swift
var paginationBreakingMode: UIWebView.PaginationBreakingMode { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to [UIWebView.PaginationBreakingMode.column](paginationbreakingmode-swift.enum/column.md), the content respects the CSS properties related to column-breaking in place of page-breaking.

See [UIWebView.PaginationBreakingMode](paginationbreakingmode-swift.enum.md) for possible values. The default value is [UIWebView.PaginationBreakingMode.page](paginationbreakingmode-swift.enum/page.md).

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationMode](paginationmode-swift.property.md): Deprecated. The layout of content in the web view.

# paginationBreakingMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0)

The manner in which column- or page-breaking occurs.

## Declaration

```objectivec
@property (nonatomic) UIWebPaginationBreakingMode paginationBreakingMode;
```

<a id="Discussion"></a>

## Discussion

This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to [UIWebPaginationBreakingModeColumn](paginationbreakingmode-swift.enum/column.md), the content respects the CSS properties related to column-breaking in place of page-breaking.

See [UIWebPaginationBreakingMode](paginationbreakingmode-swift.enum.md) for possible values. The default value is [UIWebPaginationBreakingModePage](paginationbreakingmode-swift.enum/page.md).

## See Also

### Managing pages

- [gapBetweenPages](gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationMode](paginationmode-swift.property.md): Deprecated. The layout of content in the web view.
