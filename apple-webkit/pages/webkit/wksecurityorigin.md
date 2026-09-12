> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksecurityorigin](https://developer.apple.com/documentation/webkit/wksecurityorigin)

# WKSecurityOrigin (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that identifies the origin of a particular resource.

## Declaration

```swift
@MainActor class WKSecurityOrigin
```

<a id="overview"></a>

## Overview

A [WKSecurityOrigin](wksecurityorigin.md) object is a transient, data-only object that identifies the host name, protocol, and port number associated with a particular resource. You don’t create [WKSecurityOrigin](wksecurityorigin.md) objects directly. Instead, WebKit creates them for the resources it loads. A *first-party* load is any load URL has the same security origin as the requesting web site. First-party webpages can access each other’s resources, such as scripts and databases.

Because a [WKSecurityOrigin](wksecurityorigin.md) object is transient, it doesn’t uniquely identify a security origin across multiple delegate method calls.

## Topics

### Getting the Host Information

- [host](wksecurityorigin/host.md): The security origin’s host.
- [port](wksecurityorigin/port.md): The security origin’s port.

### Getting the Host Protocol

- [protocol](wksecurityorigin/protocol.md): The security origin’s protocol.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKSecurityOrigin (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that identifies the origin of a particular resource.

## Declaration

```objectivec
@interface WKSecurityOrigin : NSObject
```

<a id="overview"></a>

## Overview

A [WKSecurityOrigin](wksecurityorigin.md) object is a transient, data-only object that identifies the host name, protocol, and port number associated with a particular resource. You don’t create [WKSecurityOrigin](wksecurityorigin.md) objects directly. Instead, WebKit creates them for the resources it loads. A *first-party* load is any load URL has the same security origin as the requesting web site. First-party webpages can access each other’s resources, such as scripts and databases.

Because a [WKSecurityOrigin](wksecurityorigin.md) object is transient, it doesn’t uniquely identify a security origin across multiple delegate method calls.

## Topics

### Getting the Host Information

- [host](wksecurityorigin/host.md): The security origin’s host.
- [port](wksecurityorigin/port.md): The security origin’s port.

### Getting the Host Protocol

- [protocol](wksecurityorigin/protocol.md): The security origin’s protocol.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
