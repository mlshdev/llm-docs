> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkframeinfo/securityorigin](https://developer.apple.com/documentation/webkit/wkframeinfo/securityorigin)

# securityOrigin (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The frame’s security origin.

## Declaration

```swift
var securityOrigin: WKSecurityOrigin { get }
```

<a id="Discussion"></a>

## Discussion

The [WKSecurityOrigin](../wksecurityorigin.md) object consists of a host name, a protocol, and a port number.

## See Also

### Inspecting frame information

- [isMainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](request.md): The frame’s current request.
- [webView](webview.md): The web view that contains this frame and the containing webpage.

# securityOrigin (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The frame’s security origin.

## Declaration

```objectivec
@property (nonatomic, readonly) WKSecurityOrigin * securityOrigin;
```

<a id="Discussion"></a>

## Discussion

The [WKSecurityOrigin](../wksecurityorigin.md) object consists of a host name, a protocol, and a port number.

## See Also

### Inspecting frame information

- [mainFrame](ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](request.md): The frame’s current request.
- [webView](webview.md): The web view that contains this frame and the containing webpage.
