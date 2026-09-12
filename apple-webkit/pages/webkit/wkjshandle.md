> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkjshandle](https://developer.apple.com/documentation/webkit/wkjshandle)

# WKJSHandle (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A WKJSHandle object contains a reference to a JavaScript object.

## Declaration

```swift
@MainActor class WKJSHandle
```

<a id="overview"></a>

## Overview

There are various ways that JavaScript executing inside web content results in some return value being passed up to the WebKit application. Examples include calls to `[WKWebView evaluateJavaScript:...]`, `[WKWebView callAsyncJavaScript:...]`, and the body of a `WKScriptMessage`.

Usually these result objects are a foundational type, such as a number, string, array, dictionary, etc. In some environments the result object can be a `WKJSHandle` or be a container that contains one or more `WKJSHandle` objects. These environments are:

- The JavaScript in question executed in a `WKContentWorld` that has `allowJSHandleCreation` set to `YES`
- The most recent navigation in the `WKWebView` had `WKWebpagePreferences.allowsJSHandleCreationInPageWorld` set to `YES`

JavaScript running in those environments can make a `WKJSHandle` instead of following normal serialization rules by calling `window.webkit.createJSHandle(...)` with the target value as an argument.

Whatever JavaScript object the `WKJSHandle` represents, it will be protected from garbage collection for the lifetime of the `WKJSHandle` The `WKJSHandle` can also be used as an argument to future JavaScript run via `[WKWebView callAsyncJavaScript:...]`

## Topics

### Instance Properties

- [contentWorld](wkjshandle/contentworld.md)
- [sourceFrame](wkjshandle/sourceframe.md)

### Instance Methods

- [getWindowProxyFrame(completionHandler:)](wkjshandle/getwindowproxyframe%28completionhandler_%29.md)

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
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)

# WKJSHandle (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A WKJSHandle object contains a reference to a JavaScript object.

## Declaration

```objectivec
@interface WKJSHandle : NSObject
```

<a id="overview"></a>

## Overview

There are various ways that JavaScript executing inside web content results in some return value being passed up to the WebKit application. Examples include calls to `[WKWebView evaluateJavaScript:...]`, `[WKWebView callAsyncJavaScript:...]`, and the body of a `WKScriptMessage`.

Usually these result objects are a foundational type, such as a number, string, array, dictionary, etc. In some environments the result object can be a `WKJSHandle` or be a container that contains one or more `WKJSHandle` objects. These environments are:

- The JavaScript in question executed in a `WKContentWorld` that has `allowJSHandleCreation` set to `YES`
- The most recent navigation in the `WKWebView` had `WKWebpagePreferences.allowsJSHandleCreationInPageWorld` set to `YES`

JavaScript running in those environments can make a `WKJSHandle` instead of following normal serialization rules by calling `window.webkit.createJSHandle(...)` with the target value as an argument.

Whatever JavaScript object the `WKJSHandle` represents, it will be protected from garbage collection for the lifetime of the `WKJSHandle` The `WKJSHandle` can also be used as an argument to future JavaScript run via `[WKWebView callAsyncJavaScript:...]`

## Topics

### Instance Properties

- [contentWorld](wkjshandle/contentworld.md)
- [sourceFrame](wkjshandle/sourceframe.md)

### Instance Methods

- [getWindowProxyFrameWithCompletionHandler:](wkjshandle/getwindowproxyframe%28completionhandler_%29.md)

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
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
