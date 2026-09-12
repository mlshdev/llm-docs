> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception](https://developer.apple.com/documentation/foundation/nsexception)

# NSException (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a special condition that interrupts the normal flow of program execution.

## Declaration

```swift
class NSException
```

<a id="overview"></a>

## Overview

Use [NSException](nsexception.md) to implement exception handling. An exception is a special condition that interrupts the normal flow of program execution. Each application can interrupt the program for different reasons. For example, one application might interpret saving a file in a directory that is write-protected as an exception. In this sense, the exception is equivalent to an error. Another application might interpret the user’s key-press (for example, Control-C) as an exception: an indication that a long-running process should abort.

## Topics

### Creating and Raising an NSException Object

- [raise(\_:format:arguments:)](nsexception/raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [init(name:reason:userInfo:)](nsexception/init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise()](nsexception/raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.

### Querying an NSException Object

- [name](nsexception/name-swift.property.md): A string used to uniquely identify the receiver.
- [reason](nsexception/reason-swift.property.md): A string containing a “human-readable” reason for the receiver.
- [userInfo](nsexception/userinfo-swift.property.md): A dictionary containing application-specific data pertaining to the receiver.

### Getting Exception Stack Frames

- [callStackReturnAddresses](nsexception/callstackreturnaddresses.md): The call return addresses related to a raised exception.
- [callStackSymbols](nsexception/callstacksymbols.md): An array containing the current call stack symbols.

### Related Types

- [NSUncaughtExceptionHandler](nsuncaughtexceptionhandler.md): The type for uncaught exception handler functions.
- [NSExceptionName](nsexceptionname.md)

### Functions

- [NSGetUncaughtExceptionHandler()](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.
- [NSSetUncaughtExceptionHandler(\_:)](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.

### Initializers

- [init(coder:)](nsexception/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSException (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a special condition that interrupts the normal flow of program execution.

## Declaration

```objectivec
@interface NSException : NSObject
```

<a id="overview"></a>

## Overview

Use [NSException](nsexception.md) to implement exception handling. An exception is a special condition that interrupts the normal flow of program execution. Each application can interrupt the program for different reasons. For example, one application might interpret saving a file in a directory that is write-protected as an exception. In this sense, the exception is equivalent to an error. Another application might interpret the user’s key-press (for example, Control-C) as an exception: an indication that a long-running process should abort.

## Topics

### Creating and Raising an NSException Object

- [exceptionWithName:reason:userInfo:](nsexception/exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .
- [raise:format:](nsexception/raise_format_.md): A convenience method that creates and raises an exception.
- [raise:format:arguments:](nsexception/raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [initWithName:reason:userInfo:](nsexception/init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise](nsexception/raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.

### Querying an NSException Object

- [name](nsexception/name-swift.property.md): A string used to uniquely identify the receiver.
- [reason](nsexception/reason-swift.property.md): A string containing a “human-readable” reason for the receiver.
- [userInfo](nsexception/userinfo-swift.property.md): A dictionary containing application-specific data pertaining to the receiver.

### Getting Exception Stack Frames

- [callStackReturnAddresses](nsexception/callstackreturnaddresses.md): The call return addresses related to a raised exception.
- [callStackSymbols](nsexception/callstacksymbols.md): An array containing the current call stack symbols.

### Related Types

- [NSUncaughtExceptionHandler](nsuncaughtexceptionhandler.md): The type for uncaught exception handler functions.
- [NSExceptionName](nsexceptionname.md)

### Functions

- [NSGetUncaughtExceptionHandler](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.
- [NSSetUncaughtExceptionHandler](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.

### Legacy Macros

- [NS_DURING](ns_during.md): Marks the start of the exception-handling domain.
- [NS_ENDHANDLER](ns_endhandler.md): Marks the end of the local event handler.
- [NS_HANDLER](ns_handler.md): Marks the end of the exception-handling domain and the start of the local exception handler.
- [NS_VALUERETURN](ns_valuereturn.md): Permits program control to exit from an exception-handling domain with a value of a specified type.
- [NS_VOIDRETURN](ns_voidreturn.md): Permits program control to exit from an exception-handling domain.

### Instance Variables

- [name](nsexception/name-c.ivar.md)
- [reason](nsexception/reason-c.ivar.md)
- [reserved](nsexception/reserved.md)
- [userInfo](nsexception/userinfo-c.ivar.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)
