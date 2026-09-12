> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessage/webview](https://developer.apple.com/documentation/webkit/wkscriptmessage/webview)

# webView (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The web view that sent the message.

## Declaration

```swift
weak var webView: WKWebView? { get }
```

## See Also

### Getting Message-Related Information

- [frameInfo](frameinfo.md): The frame that sent the message.
- [world](world.md): The namespace in which the JavaScript code executes.

# webView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The web view that sent the message.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) WKWebView * webView;
```

## See Also

### Getting Message-Related Information

- [frameInfo](frameinfo.md): The frame that sent the message.
- [world](world.md): The namespace in which the JavaScript code executes.
