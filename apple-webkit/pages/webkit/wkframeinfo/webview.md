> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkframeinfo/webview](https://developer.apple.com/documentation/webkit/wkframeinfo/webview)

# webView (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The web view that contains this frame and the containing webpage.

## Declaration

```swift
weak var webView: WKWebView? { get }
```

## See Also

### Inspecting frame information

- [isMainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](request.md): The frame’s current request.
- [securityOrigin](securityorigin.md): The frame’s security origin.

# webView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The web view that contains this frame and the containing webpage.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) WKWebView * webView;
```

## See Also

### Inspecting frame information

- [mainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](request.md): The frame’s current request.
- [securityOrigin](securityorigin.md): The frame’s security origin.
