> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/configuration](https://developer.apple.com/documentation/webkit/wkcontentworld/configuration)

# WKContentWorld.Configuration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@MainActor class Configuration
```

<a id="overview"></a>

## Overview

A WKContentWorldConfiguration object allows you to specify custom behavior for a WKContentWorld instance.

WKContentWorldConfiguration allows applications to create WKContentWorld instances which have extra JavaScript capabilities exposed to script in their environment. It does not change any default WebKit behaviors, nor change anything that web page JavaScript can do. Only application JavaScript run in the created `WKContentWorld` will have different capabilities.

For example:

- If your scripts help provide autofill capabilities, you would want to set autofillEnabled to YES.

## Topics

### Initializers

- [init(coder:)](configuration/init%28coder_%29.md)

### Instance Properties

- [allowAccessingClosedShadowRoots](configuration/allowaccessingclosedshadowroots.md)
- [autofillScriptingEnabled](configuration/autofillscriptingenabled.md)
- [elementUserInfoEnabled](configuration/elementuserinfoenabled.md)
- [isInspectable](configuration/isinspectable.md)
- [jsHandleCreationEnabled](configuration/jshandlecreationenabled.md)
- [legacyBuiltinOverridesEnabled](configuration/legacybuiltinoverridesenabled.md)
- [nodeSnapshotCreationEnabled](configuration/nodesnapshotcreationenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Page content

- [WKUserContentController](../wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](../wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](../wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](../wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](../wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](../wkuserscript.md): A script that the web view injects into a webpage.
- [WKJSHandle](../wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKContentWorldConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface WKContentWorldConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A WKContentWorldConfiguration object allows you to specify custom behavior for a WKContentWorld instance.

WKContentWorldConfiguration allows applications to create WKContentWorld instances which have extra JavaScript capabilities exposed to script in their environment. It does not change any default WebKit behaviors, nor change anything that web page JavaScript can do. Only application JavaScript run in the created `WKContentWorld` will have different capabilities.

For example:

- If your scripts help provide autofill capabilities, you would want to set autofillEnabled to YES.

## Topics

### Instance Properties

- [allowAccessingClosedShadowRoots](configuration/allowaccessingclosedshadowroots.md)
- [autofillScriptingEnabled](configuration/autofillscriptingenabled.md)
- [elementUserInfoEnabled](configuration/elementuserinfoenabled.md)
- [inspectable](configuration/isinspectable.md)
- [jsHandleCreationEnabled](configuration/jshandlecreationenabled.md)
- [legacyBuiltinOverridesEnabled](configuration/legacybuiltinoverridesenabled.md)
- [nodeSnapshotCreationEnabled](configuration/nodesnapshotcreationenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Page content

- [WKUserContentController](../wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](../wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](../wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](../wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](../wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](../wkuserscript.md): A script that the web view injects into a webpage.
- [WKJSHandle](../wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
