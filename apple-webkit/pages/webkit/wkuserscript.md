> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript](https://developer.apple.com/documentation/webkit/wkuserscript)

# WKUserScript (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A script that the web view injects into a webpage.

## Declaration

```swift
@MainActor class WKUserScript
```

<a id="overview"></a>

## Overview

Create a [WKUserScript](wkuserscript.md) object when you want to inject custom script code into the pages of your web view. Use this object to specify the JavaScript code to inject, and parameters relating to when and how to inject that code. Before you create the web view, add this object to the [WKUserContentController](wkusercontentcontroller.md) object associated with your web view’s configuration.

## Topics

### Creating a User Script Object

- [init(source:injectionTime:forMainFrameOnly:)](wkuserscript/init%28source_injectiontime_formainframeonly_%29.md): Creates a user script object that contains the specified source code and attributes.
- [init(source:injectionTime:forMainFrameOnly:in:)](wkuserscript/init%28source_injectiontime_formainframeonly_in_%29.md): Creates a user script object that is scoped to a particular content world.

### Inspecting Script Information

- [source](wkuserscript/source.md): The script’s source code.
- [injectionTime](wkuserscript/injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [isForMainFrameOnly](wkuserscript/isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.

### Initializers

- [init(source:injectionTime:forMainFrameOnly:inContentWorld:)](wkuserscript/init%28source_injectiontime_formainframeonly_incontentworld_%29.md)

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
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKUserScript (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A script that the web view injects into a webpage.

## Declaration

```objectivec
@interface WKUserScript : NSObject
```

<a id="overview"></a>

## Overview

Create a [WKUserScript](wkuserscript.md) object when you want to inject custom script code into the pages of your web view. Use this object to specify the JavaScript code to inject, and parameters relating to when and how to inject that code. Before you create the web view, add this object to the [WKUserContentController](wkusercontentcontroller.md) object associated with your web view’s configuration.

## Topics

### Creating a User Script Object

- [initWithSource:injectionTime:forMainFrameOnly:](wkuserscript/init%28source_injectiontime_formainframeonly_%29.md): Creates a user script object that contains the specified source code and attributes.
- [initWithSource:injectionTime:forMainFrameOnly:inContentWorld:](wkuserscript/init%28source_injectiontime_formainframeonly_in_%29.md): Creates a user script object that is scoped to a particular content world.

### Inspecting Script Information

- [source](wkuserscript/source.md): The script’s source code.
- [injectionTime](wkuserscript/injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [forMainFrameOnly](wkuserscript/isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.

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
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
