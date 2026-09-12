> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/navigationtype](https://developer.apple.com/documentation/uikit/uiwebview/navigationtype)

# UIWebView.NavigationType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Constant indicating the user’s action.

## Declaration

```swift
enum NavigationType
```

## Topics

### Constants

- [UIWebView.NavigationType.linkClicked](navigationtype/linkclicked.md): User tapped a link.
- [UIWebView.NavigationType.formSubmitted](navigationtype/formsubmitted.md): User submitted a form.
- [UIWebView.NavigationType.backForward](navigationtype/backforward.md): User tapped the back or forward button.
- [UIWebView.NavigationType.reload](navigationtype/reload.md): User tapped the reload button.
- [UIWebView.NavigationType.formResubmitted](navigationtype/formresubmitted.md): User resubmitted a form.
- [UIWebView.NavigationType.other](navigationtype/other.md): Some other action occurred.

### Initializers

- [init(rawValue:)](navigationtype/init%28rawvalue_%29.md)

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

- [UIWebView.PaginationBreakingMode](paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebView.PaginationMode](paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.
- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.

# UIWebViewNavigationType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constant indicating the user’s action.

## Declaration

```objectivec
enum UIWebViewNavigationType : NSInteger;
```

## Topics

### Constants

- [UIWebViewNavigationTypeLinkClicked](navigationtype/linkclicked.md): User tapped a link.
- [UIWebViewNavigationTypeFormSubmitted](navigationtype/formsubmitted.md): User submitted a form.
- [UIWebViewNavigationTypeBackForward](navigationtype/backforward.md): User tapped the back or forward button.
- [UIWebViewNavigationTypeReload](navigationtype/reload.md): User tapped the reload button.
- [UIWebViewNavigationTypeFormResubmitted](navigationtype/formresubmitted.md): User resubmitted a form.
- [UIWebViewNavigationTypeOther](navigationtype/other.md): Some other action occurred.

## See Also

### Constants

- [UIWebPaginationBreakingMode](paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebPaginationMode](paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.
- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.
