> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webviewinsertaction](https://developer.apple.com/documentation/webkit/webviewinsertaction)

# WebViewInsertAction (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The type of user action that initiated a delegate message.

## Declaration

```swift
enum WebViewInsertAction
```

## Topics

### Constants

- [WebViewInsertAction.typed](webviewinsertaction/typed.md): Deprecated. Indicates the user inserted content by typing.
- [WebViewInsertAction.pasted](webviewinsertaction/pasted.md): Deprecated. Indicates the user inserted content by pasting.
- [WebViewInsertAction.dropped](webviewinsertaction/dropped.md): Deprecated. Indicates the user inserted content by dropping.

### Initializers

- [init(rawValue:)](webviewinsertaction/init%28rawvalue_%29.md): Deprecated.

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
- [WebNavigationType](webnavigationtype.md): Deprecated. Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.

# WebViewInsertAction (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The type of user action that initiated a delegate message.

## Declaration

```objectivec
enum WebViewInsertAction : NSInteger;
```

## Topics

### Constants

- [WebViewInsertActionTyped](webviewinsertaction/typed.md): Deprecated. Indicates the user inserted content by typing.
- [WebViewInsertActionPasted](webviewinsertaction/pasted.md): Deprecated. Indicates the user inserted content by pasting.
- [WebViewInsertActionDropped](webviewinsertaction/dropped.md): Deprecated. Indicates the user inserted content by dropping.

## See Also

### Content

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebNavigationType](webnavigationtype.md): Deprecated. Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.
