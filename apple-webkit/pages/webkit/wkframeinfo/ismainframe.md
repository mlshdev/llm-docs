> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkframeinfo/ismainframe](https://developer.apple.com/documentation/webkit/wkframeinfo/ismainframe)

# isMainFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value indicating whether the frame is the web site’s main frame or a subframe.

## Declaration

```swift
var isMainFrame: Bool { get }
```

## See Also

### Inspecting frame information

- [request](request.md): The frame’s current request.
- [securityOrigin](securityorigin.md): The frame’s security origin.
- [webView](webview.md): The web view that contains this frame and the containing webpage.

# mainFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value indicating whether the frame is the web site’s main frame or a subframe.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMainFrame) BOOL mainFrame;
```

## See Also

### Inspecting frame information

- [request](request.md): The frame’s current request.
- [securityOrigin](securityorigin.md): The frame’s security origin.
- [webView](webview.md): The web view that contains this frame and the containing webpage.
