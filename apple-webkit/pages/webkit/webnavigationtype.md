> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webnavigationtype](https://developer.apple.com/documentation/webkit/webnavigationtype)

# WebNavigationType (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.

## Declaration

```swift
enum WebNavigationType
```

## Topics

### Constants

- [WebNavigationType.linkClicked](webnavigationtype/linkclicked.md): Deprecated. A link (an `href`) was clicked.
- [WebNavigationType.formSubmitted](webnavigationtype/formsubmitted.md): Deprecated. A form was submitted.
- [WebNavigationType.backForward](webnavigationtype/backforward.md): Deprecated. The user clicked back or forward button.
- [WebNavigationType.reload](webnavigationtype/reload.md): Deprecated. The user hit the reload button.
- [WebNavigationType.formResubmitted](webnavigationtype/formresubmitted.md): Deprecated. A form was resubmitted (through a back, forward or reload action).
- [WebNavigationType.other](webnavigationtype/other.md): Deprecated. Navigation is taking place for some other reason.

### Initializers

- [init(rawValue:)](webnavigationtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [load(\_:)](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebViewInsertAction](webviewinsertaction.md): Deprecated. The type of user action that initiated a delegate message.

# WebNavigationType (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.

## Declaration

```objectivec
enum WebNavigationType : NSInteger;
```

## Topics

### Constants

- [WebNavigationTypeLinkClicked](webnavigationtype/linkclicked.md): Deprecated. A link (an `href`) was clicked.
- [WebNavigationTypeFormSubmitted](webnavigationtype/formsubmitted.md): Deprecated. A form was submitted.
- [WebNavigationTypeBackForward](webnavigationtype/backforward.md): Deprecated. The user clicked back or forward button.
- [WebNavigationTypeReload](webnavigationtype/reload.md): Deprecated. The user hit the reload button.
- [WebNavigationTypeFormResubmitted](webnavigationtype/formresubmitted.md): Deprecated. A form was resubmitted (through a back, forward or reload action).
- [WebNavigationTypeOther](webnavigationtype/other.md): Deprecated. Navigation is taking place for some other reason.

## See Also

### Content

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebViewInsertAction](webviewinsertaction.md): Deprecated. The type of user action that initiated a delegate message.
