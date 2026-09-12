> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webundefined](https://developer.apple.com/documentation/webkit/webundefined)

# WebUndefined (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

`WebUndefined` objects are simply used to represent the JavaScript “undefined” value in methods when bridging between JavaScript and Objective-C. For example, if you invoke a JavaScript function that returns the JavaScript “undefined” value, then a `WebUndefined` object is returned to the Objective-C calling context.

## Declaration

```swift
class WebUndefined
```

## Topics

### Initializers

- [init(coder:)](webundefined/init%28coder_%29.md): Deprecated.

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

## See Also

### Incorporating Scripts (Legacy)

- [WebScriptObject](webscriptobject.md): Deprecated. A `WebScriptObject` object is an Objective-C wrapper for a scripting object passed to your application from the scripting environment.
- [WebScripting](https://developer.apple.com/documentation/objectivec/webscripting): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.

# WebUndefined (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.14)

`WebUndefined` objects are simply used to represent the JavaScript “undefined” value in methods when bridging between JavaScript and Objective-C. For example, if you invoke a JavaScript function that returns the JavaScript “undefined” value, then a `WebUndefined` object is returned to the Objective-C calling context.

## Declaration

```objectivec
@interface WebUndefined : NSObject
```

## Topics

### Getting the shared instance

- [undefined](webundefined/undefined.md): Deprecated. Returns the shared `WebUndefined` instance.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Incorporating Scripts (Legacy)

- [WebScriptObject](webscriptobject.md): Deprecated. A `WebScriptObject` object is an Objective-C wrapper for a scripting object passed to your application from the scripting environment.
- [WebScripting](https://developer.apple.com/documentation/objectivec/webscripting): `WebScripting` is an informal protocol that defines methods that classes can implement to export their interfaces to a WebScript environment such as JavaScript.
