> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcoercionhandler](https://developer.apple.com/documentation/foundation/nsscriptcoercionhandler)

# NSScriptCoercionHandler (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A mechanism for converting one kind of scripting data to another.

## Declaration

```swift
class NSScriptCoercionHandler
```

<a id="overview"></a>

## Overview

A shared instance of this class coerces (converts) object values to objects of another class using information supplied by classes that register with it. Coercions frequently are required during key-value coding.

## Topics

### Accessing the application’s handler

- [shared()](nsscriptcoercionhandler/shared%28%29.md): Returns the shared `NSScriptCoercionHandler` for the application.

### Working with handlers

- [coerceValue(\_:to:)](nsscriptcoercionhandler/coercevalue%28__to_%29.md): Returns an object of a given class representing a given value.
- [registerCoercer(\_:selector:toConvertFrom:to:)](nsscriptcoercionhandler/registercoercer%28__selector_toconvertfrom_to_%29.md): Registers a given object (typically a class) to handle coercions (conversions) from one given class to another.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### NSObject Script Support

- [NSComparisonMethods](nscomparisonmethods.md): A collection of default comparison methods useful for performing specifier tests.
- [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.
- [NSScriptKeyValueCoding](../objectivec/nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptObjectSpecifiers](nsscriptobjectspecifiers.md): A collection of methods providing additional object specifier functionality.
- [NSScriptExecutionContext](nsscriptexecutioncontext.md): The context in which the current script command is executed.

# NSScriptCoercionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A mechanism for converting one kind of scripting data to another.

## Declaration

```objectivec
@interface NSScriptCoercionHandler : NSObject
```

<a id="overview"></a>

## Overview

A shared instance of this class coerces (converts) object values to objects of another class using information supplied by classes that register with it. Coercions frequently are required during key-value coding.

## Topics

### Accessing the application’s handler

- [sharedCoercionHandler](nsscriptcoercionhandler/shared%28%29.md): Returns the shared `NSScriptCoercionHandler` for the application.

### Working with handlers

- [coerceValue:toClass:](nsscriptcoercionhandler/coercevalue%28__to_%29.md): Returns an object of a given class representing a given value.
- [registerCoercer:selector:toConvertFromClass:toClass:](nsscriptcoercionhandler/registercoercer%28__selector_toconvertfrom_to_%29.md): Registers a given object (typically a class) to handle coercions (conversions) from one given class to another.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### NSObject Script Support

- [NSComparisonMethods](nscomparisonmethods.md): A collection of default comparison methods useful for performing specifier tests.
- [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md): A collection of methods useful for comparing script objects.
- [NSScriptKeyValueCoding](../objectivec/nsscriptkeyvaluecoding.md): A collection of methods that provide additional capabilities for working with key-value coding.
- [NSScriptObjectSpecifiers](nsscriptobjectspecifiers.md): A collection of methods providing additional object specifier functionality.
- [NSScriptExecutionContext](nsscriptexecutioncontext.md): The context in which the current script command is executed.
