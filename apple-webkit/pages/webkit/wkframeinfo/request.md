> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkframeinfo/request](https://developer.apple.com/documentation/webkit/wkframeinfo/request)

# request (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame’s current request.

## Declaration

```swift
var request: URLRequest { get }
```

## See Also

### Inspecting frame information

- [isMainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [securityOrigin](securityorigin.md): The frame’s security origin.
- [webView](webview.md): The web view that contains this frame and the containing webpage.

# request (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The frame’s current request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURLRequest * request;
```

## See Also

### Inspecting frame information

- [mainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [securityOrigin](securityorigin.md): The frame’s security origin.
- [webView](webview.md): The web view that contains this frame and the containing webpage.
