> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkframeinfo](https://developer.apple.com/documentation/webkit/wkframeinfo)

# WKFrameInfo (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains information about a frame on a webpage.

## Declaration

```swift
@MainActor class WKFrameInfo
```

<a id="overview"></a>

## Overview

An instance of this class is a transient, data-only object; it does not uniquely identify a frame across multiple delegate method calls.

## Topics

### Inspecting frame information

- [isMainFrame](wkframeinfo/ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](wkframeinfo/request.md): The frame’s current request.
- [securityOrigin](wkframeinfo/securityorigin.md): The frame’s security origin.
- [webView](wkframeinfo/webview.md): The web view that contains this frame and the containing webpage.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKFrameInfo (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains information about a frame on a webpage.

## Declaration

```objectivec
@interface WKFrameInfo : NSObject
```

<a id="overview"></a>

## Overview

An instance of this class is a transient, data-only object; it does not uniquely identify a frame across multiple delegate method calls.

## Topics

### Inspecting frame information

- [mainFrame](wkframeinfo/ismainframe.md): A Boolean value indicating whether the frame is the web site’s main frame or a subframe.
- [request](wkframeinfo/request.md): The frame’s current request.
- [securityOrigin](wkframeinfo/securityorigin.md): The frame’s security origin.
- [webView](wkframeinfo/webview.md): The web view that contains this frame and the containing webpage.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
