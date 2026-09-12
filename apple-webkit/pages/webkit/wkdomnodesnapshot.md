> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdomnodesnapshot](https://developer.apple.com/documentation/webkit/wkdomnodesnapshot)

# WKDOMNodeSnapshot (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A `WKDOMNodeSnapshot` object contains a snapshot of a DOM node

## Declaration

```swift
class WKDOMNodeSnapshot
```

<a id="overview"></a>

## Overview

There are various ways that JavaScript executing inside web content results in some return value being passed up to the WebKit application. Examples include calls to `[WKWebView evaluateJavaScript:...]`, `[WKWebView callAsyncJavaScript:...]`, and the body of a `WKScriptMessage`.

When application JavaScript returns a JavaScript value, the default behavior is to try to convert it to a foundational type. e.g. a JavaScript Number becomes an NSNumber, or a JavaScript array becomes an NSArray, etc.

If the JavaScript calls `window.webkit.createNodeSnapshot(...)` then WebKit will create a snapshot representation of that node as the return value.

The node is an opaque object as far as the application is concerned, but it can be used as an argument to future JavaScript programs via `[WKWebView callAsyncJavaScript:...]`

Unlike `WKJSHandle` \- which keeps an actual JavaScript object alive in its originating context - a `WKDOMNodeSnapshot` is not attached to a live JavaScript object, and it can be used as an argument to a JavaScript program running in any context. e.g. In a different frame, or after a navigation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# WKDOMNodeSnapshot (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A `WKDOMNodeSnapshot` object contains a snapshot of a DOM node

## Declaration

```objectivec
@interface WKDOMNodeSnapshot : NSObject
```

<a id="overview"></a>

## Overview

There are various ways that JavaScript executing inside web content results in some return value being passed up to the WebKit application. Examples include calls to `[WKWebView evaluateJavaScript:...]`, `[WKWebView callAsyncJavaScript:...]`, and the body of a `WKScriptMessage`.

When application JavaScript returns a JavaScript value, the default behavior is to try to convert it to a foundational type. e.g. a JavaScript Number becomes an NSNumber, or a JavaScript array becomes an NSArray, etc.

If the JavaScript calls `window.webkit.createNodeSnapshot(...)` then WebKit will create a snapshot representation of that node as the return value.

The node is an opaque object as far as the application is concerned, but it can be used as an argument to future JavaScript programs via `[WKWebView callAsyncJavaScript:...]`

Unlike `WKJSHandle` \- which keeps an actual JavaScript object alive in its originating context - a `WKDOMNodeSnapshot` is not attached to a live JavaScript object, and it can be used as an argument to a JavaScript program running in any context. e.g. In a different frame, or after a navigation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
