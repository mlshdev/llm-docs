> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/paginationmode-swift.enum](https://developer.apple.com/documentation/uikit/uiwebview/paginationmode-swift.enum)

# UIWebView.PaginationMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The layout of content in the web view, which determines the direction that the pages flow.

## Declaration

```swift
enum PaginationMode
```

## Topics

### Constants

- [UIWebView.PaginationMode.unpaginated](paginationmode-swift.enum/unpaginated.md): Content appears as one long scrolling view with no distinct pages.
- [UIWebView.PaginationMode.leftToRight](paginationmode-swift.enum/lefttoright.md): Content is broken up into pages that flow from left to right.
- [UIWebView.PaginationMode.topToBottom](paginationmode-swift.enum/toptobottom.md): Content is broken up into pages that flow from top to bottom.
- [UIWebView.PaginationMode.bottomToTop](paginationmode-swift.enum/bottomtotop.md): Content is broken up into pages that flow from bottom to top.
- [UIWebView.PaginationMode.rightToLeft](paginationmode-swift.enum/righttoleft.md): Content is broken up into pages that flow from right to left.

### Initializers

- [init(rawValue:)](paginationmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIWebView.NavigationType](navigationtype.md): Constant indicating the user’s action.
- [UIWebView.PaginationBreakingMode](paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.

# UIWebPaginationMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The layout of content in the web view, which determines the direction that the pages flow.

## Declaration

```objectivec
enum UIWebPaginationMode : NSInteger;
```

## Topics

### Constants

- [UIWebPaginationModeUnpaginated](paginationmode-swift.enum/unpaginated.md): Content appears as one long scrolling view with no distinct pages.
- [UIWebPaginationModeLeftToRight](paginationmode-swift.enum/lefttoright.md): Content is broken up into pages that flow from left to right.
- [UIWebPaginationModeTopToBottom](paginationmode-swift.enum/toptobottom.md): Content is broken up into pages that flow from top to bottom.
- [UIWebPaginationModeBottomToTop](paginationmode-swift.enum/bottomtotop.md): Content is broken up into pages that flow from bottom to top.
- [UIWebPaginationModeRightToLeft](paginationmode-swift.enum/righttoleft.md): Content is broken up into pages that flow from right to left.

## See Also

### Constants

- [UIWebViewNavigationType](navigationtype.md): Constant indicating the user’s action.
- [UIWebPaginationBreakingMode](paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.
