> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject](https://developer.apple.com/documentation/webkit/webscriptobject)

# WebScriptObject (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

A `WebScriptObject` object is an Objective-C wrapper for a scripting object passed to your application from the scripting environment.

## Declaration

```swift
class WebScriptObject
```

<a id="overview"></a>

## Overview

You can not create a `WebScriptObject` object directly. You get a window `WebScriptObject` object by sending [windowScriptObject](webview-swift.class/windowscriptobject.md) to your `WebView` object.

You can use key-value coding methods—for example, `setValue:forKey:` and `valueForKey:`—to get and set properties of a `WebScriptObject` object. You can also access properties by index using the [setWebScriptValueAt(\_:value:)](webscriptobject/setwebscriptvalueat%28__value_%29.md) and [webScriptValue(at:)](webscriptobject/webscriptvalue%28at_%29.md) methods. Use the [removeWebScriptKey(\_:)](webscriptobject/removewebscriptkey%28__%29.md) method to remove a scripting object property.

Not all properties and methods of a class are exported. Use the [setValue(\_:forUndefinedKey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvalue%28_:forundefinedkey:%29) and [value(forUndefinedKey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value%28forundefinedkey:%29) methods to intercept access to properties that are not exported. Similarly, use the [invokeUndefinedMethod(fromWebScript:withArguments:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/invokeundefinedmethod%28fromwebscript:witharguments:%29) method to intercept method invocations that are not exported.

If you want access to properties and methods defined in your own classes, use the methods in the WebScripting informal protocol to specify the properties and methods the class should export to WebKit’s JavaScript environment.

Use the [callWebScriptMethod(\_:withArguments:)](webscriptobject/callwebscriptmethod%28__witharguments_%29.md) and [evaluateWebScript(\_:)](webscriptobject/evaluatewebscript%28__%29.md) methods to execute scripts in the scripting environment.

## Topics

### Getting and setting properties

- [jsObject()](webscriptobject/jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey(\_:)](webscriptobject/removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValue(at:)](webscriptobject/webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.
- [setWebScriptValueAt(\_:value:)](webscriptobject/setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.

### Executing scripts

- [callWebScriptMethod(\_:withArguments:)](webscriptobject/callwebscriptmethod%28__witharguments_%29.md): Deprecated. Returns the result of executing a method in the scripting environment.
- [evaluateWebScript(\_:)](webscriptobject/evaluatewebscript%28__%29.md): Deprecated. Returns the result of evaluating a script in the scripting environment.

### Raising exceptions

- [throwException(\_:)](webscriptobject/throwexception%28__%29.md): Deprecated. Raises an exception in the current script execution context.
- [setException(\_:)](webscriptobject/setexception%28__%29.md): Deprecated. Raises a scripting environment exception in the context of the current object.

### Getting a string representation

- [stringRepresentation()](webscriptobject/stringrepresentation%28%29.md): Deprecated. Returns a string representation of the receiver.

### Instance Methods

- [jsValue()](webscriptobject/jsvalue%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [DOMObject](domobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit DOM Programming Topics](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/index.html#//apple_ref/doc/uid/TP40001483)
- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Incorporating Scripts (Legacy)

- [WebScripting](https://developer.apple.com/documentation/objectivec/webscripting): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.
- [WebUndefined](webundefined.md): Deprecated. `WebUndefined` objects are simply used to represent the JavaScript “undefined” value in methods when bridging between JavaScript and Objective-C. For example, if you invoke a JavaScript function that returns the JavaScript “undefined” value, then a `WebUndefined` object is returned to the Objective-C calling context.

# WebScriptObject (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

A `WebScriptObject` object is an Objective-C wrapper for a scripting object passed to your application from the scripting environment.

## Declaration

```objectivec
@interface WebScriptObject : NSObject
```

<a id="overview"></a>

## Overview

You can not create a `WebScriptObject` object directly. You get a window `WebScriptObject` object by sending [windowScriptObject](webview-swift.class/windowscriptobject.md) to your `WebView` object.

You can use key-value coding methods—for example, `setValue:forKey:` and `valueForKey:`—to get and set properties of a `WebScriptObject` object. You can also access properties by index using the [setWebScriptValueAtIndex:value:](webscriptobject/setwebscriptvalueat%28__value_%29.md) and [webScriptValueAtIndex:](webscriptobject/webscriptvalue%28at_%29.md) methods. Use the [removeWebScriptKey:](webscriptobject/removewebscriptkey%28__%29.md) method to remove a scripting object property.

Not all properties and methods of a class are exported. Use the [setValue:forUndefinedKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvalue%28_:forundefinedkey:%29) and [valueForUndefinedKey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value%28forundefinedkey:%29) methods to intercept access to properties that are not exported. Similarly, use the [invokeUndefinedMethodFromWebScript:withArguments:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/invokeundefinedmethod%28fromwebscript:witharguments:%29) method to intercept method invocations that are not exported.

If you want access to properties and methods defined in your own classes, use the methods in the WebScripting informal protocol to specify the properties and methods the class should export to WebKit’s JavaScript environment.

Use the [callWebScriptMethod:withArguments:](webscriptobject/callwebscriptmethod%28__witharguments_%29.md) and [evaluateWebScript:](webscriptobject/evaluatewebscript%28__%29.md) methods to execute scripts in the scripting environment.

## Topics

### Getting and setting properties

- [JSObject](webscriptobject/jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey:](webscriptobject/removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValueAtIndex:](webscriptobject/webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.
- [setWebScriptValueAtIndex:value:](webscriptobject/setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.

### Executing scripts

- [callWebScriptMethod:withArguments:](webscriptobject/callwebscriptmethod%28__witharguments_%29.md): Deprecated. Returns the result of executing a method in the scripting environment.
- [evaluateWebScript:](webscriptobject/evaluatewebscript%28__%29.md): Deprecated. Returns the result of evaluating a script in the scripting environment.

### Raising exceptions

- [throwException:](webscriptobject/throwexception%28__%29.md): Deprecated. Raises an exception in the current script execution context.
- [setException:](webscriptobject/setexception%28__%29.md): Deprecated. Raises a scripting environment exception in the context of the current object.

### Getting a string representation

- [stringRepresentation](webscriptobject/stringrepresentation%28%29.md): Deprecated. Returns a string representation of the receiver.

### Instance Methods

- [JSValue](webscriptobject/jsvalue%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [DOMObject](domobject.md)

## See Also

### Related Documentation

- [WebKit DOM Programming Topics](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/index.html#//apple_ref/doc/uid/TP40001483)
- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Incorporating Scripts (Legacy)

- [WebScripting](https://developer.apple.com/documentation/objectivec/webscripting): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.
- [WebUndefined](webundefined.md): Deprecated. `WebUndefined` objects are simply used to represent the JavaScript “undefined” value in methods when bridging between JavaScript and Objective-C. For example, if you invoke a JavaScript function that returns the JavaScript “undefined” value, then a `WebUndefined` object is returned to the Objective-C calling context.
