> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsassertionhandler](https://developer.apple.com/documentation/foundation/nsassertionhandler)

# NSAssertionHandler (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that logs an assertion to the console.

## Declaration

```swift
class NSAssertionHandler
```

<a id="overview"></a>

## Overview

`NSAssertionHandler` objects are automatically created to handle false assertions. Assertion macros, such as `NSAssert` and `NSCAssert`, are used to evaluate a condition, and if the condition evaluates to false, the macros pass a string to an `NSAssertionHandler` object describing the failure. Each thread has its own `NSAssertionHandler` object. When invoked, an assertion handler prints an error message that includes the method and class (or function) containing the assertion and raises an `NSInternalInconsistencyException`.

You create assertions only using the assertion macros—you rarely need to invoke `NSAssertionHandler` methods directly. The macros for use inside methods and functions send [handleFailureInMethod:object:file:lineNumber:description:](nsassertionhandler/handlefailureinmethod_object_file_linenumber_description_.md) and [handleFailureInFunction:file:lineNumber:description:](nsassertionhandler/handlefailureinfunction_file_linenumber_description_.md) messages respectively to the current assertion handler. The assertion handler for the current thread is obtained using the [current](nsassertionhandler/current.md) class method. See doc:nsassertionhandlerkey if you need to customize the behavior of [NSAssertionHandler](nsassertionhandler.md).

## Topics

### Handling Assertion Failures

- [current](nsassertionhandler/current.md): Returns the `NSAssertionHandler` object associated with the current thread.

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

# NSAssertionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that logs an assertion to the console.

## Declaration

```objectivec
@interface NSAssertionHandler : NSObject
```

<a id="overview"></a>

## Overview

`NSAssertionHandler` objects are automatically created to handle false assertions. Assertion macros, such as `NSAssert` and `NSCAssert`, are used to evaluate a condition, and if the condition evaluates to false, the macros pass a string to an `NSAssertionHandler` object describing the failure. Each thread has its own `NSAssertionHandler` object. When invoked, an assertion handler prints an error message that includes the method and class (or function) containing the assertion and raises an `NSInternalInconsistencyException`.

You create assertions only using the assertion macros—you rarely need to invoke `NSAssertionHandler` methods directly. The macros for use inside methods and functions send [handleFailureInMethod:object:file:lineNumber:description:](nsassertionhandler/handlefailureinmethod_object_file_linenumber_description_.md) and [handleFailureInFunction:file:lineNumber:description:](nsassertionhandler/handlefailureinfunction_file_linenumber_description_.md) messages respectively to the current assertion handler. The assertion handler for the current thread is obtained using the [currentHandler](nsassertionhandler/current.md) class method. See doc:nsassertionhandlerkey if you need to customize the behavior of [NSAssertionHandler](nsassertionhandler.md).

## Topics

### Handling Assertion Failures

- [currentHandler](nsassertionhandler/current.md): Returns the `NSAssertionHandler` object associated with the current thread.
- [handleFailureInFunction:file:lineNumber:description:](nsassertionhandler/handlefailureinfunction_file_linenumber_description_.md)
- [handleFailureInMethod:object:file:lineNumber:description:](nsassertionhandler/handlefailureinmethod_object_file_linenumber_description_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Assertions

- [NSAssert](nsassert.md): Generates an assertion if a given condition is false.
- [NSAssert1](nsassert1.md): Generates an assertion if a given condition is false.
- [NSAssert2](nsassert2.md): Generates an assertion if a given condition is false.
- [NSAssert3](nsassert3.md): Generates an assertion if a given condition is false.
- [NSAssert4](nsassert4.md): Generates an assertion if a given condition is false.
- [NSAssert5](nsassert5.md): Generates an assertion if a given condition is false.
- [NSCAssert](nscassert.md): Generates an assertion if the given condition is false.
- [NSCAssert1](nscassert1.md): Generates an assertion if a given condition is false.
- [NSCAssert2](nscassert2.md): Generates an assertion if a given condition is false.
- [NSCAssert3](nscassert3.md): Generates an assertion if a given condition is false.
- [NSCAssert4](nscassert4.md): Generates an assertion if a given condition is false.
- [NSCAssert5](nscassert5.md): Generates an assertion if a given condition is false.
- [NSCParameterAssert](nscparameterassert.md): Evaluates the specified parameter.
- [NSParameterAssert](nsparameterassert.md): Validates the specified parameter.
