> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsexceptionhandler](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler)

# NSExceptionHandler (Swift)

**Framework:** Exception Handling  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The `NSExceptionHandler` class provides facilities for monitoring and debugging exceptional conditions in Objective-C programs. It works by installing a special uncaught exception handler function. Consequently, to use the services of `NSExceptionHandler`, you must not install your own custom uncaught exception handler.

## Declaration

```swift
class NSExceptionHandler
```

<a id="Overview"></a>

## Overview

To use these services, you set a bit mask in the singleton `NSExceptionHandler` instance and, optionally, a delegate. The constants comprising the bit mask indicate the type of exception to be monitored and the behavior of the `NSExceptionHandler` object (or, simply, the exception handler). The delegate is asked to approve the logging and handling of each monitored [NSException](https://developer.apple.com/documentation/foundation/nsexception) object using the NSExceptionHandlerDelegate protocol.

The constants for configuring exception handler behavior can be categorized in several ways:

- Uncaught exceptions versus caught exceptions—or, more accurately, exceptions that would be caught (for example, by the top-level handler)
- Exception type or cause: system exceptions (such as invalid memory accesses), Objective-C runtime errors (such as messages sent to freed objects), and other exceptions
- Exception handler behavior: logging the exception (including a stack trace) to the console, handling the exception, and suspending program execution so the debugger can be attached

The way the exception handler handles an exception depends on the type of exception; the exception handler converts system exceptions and runtime errors into [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects with a stack trace embedded in their `userInfo` dictionary; for all other uncaught exceptions, it terminates the thread on which they occur . The constants used to configure an `NSExceptionHandler` object are described in [Logging and Handling Constants](logging-and-handling-constants.md) and [System Hang Constants](system-hang-constants.md).

The `defaults` command-line system also allows you to set values corresponding to the `enum` constants used to configure the exception handler; see [Controlling a Program’s Response to Exceptions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Tasks/ControllingAppResponse.html#//apple_ref/doc/uid/20000473) for details.

`NSExceptionHandler` installs its uncaught exception handler using the [NSSetUncaughtExceptionHandler(\_:)](https://developer.apple.com/documentation/foundation/nssetuncaughtexceptionhandler%28_:%29) function.

## Topics

### Getting the default exception handler

- [default()](nsexceptionhandler/default%28%29.md): Returns the singleton `NSExceptionHandler` instance.

### Getting and setting exception masks

- [exceptionHandlingMask()](nsexceptionhandler/exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [exceptionHangingMask()](nsexceptionhandler/exceptionhangingmask%28%29.md): Returns a bit mask representing the types of exceptions that will halt execution for debugging.
- [setExceptionHandlingMask(\_:)](nsexceptionhandler/setexceptionhandlingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHangingMask(\_:)](nsexceptionhandler/setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.

### Getting and setting the delegate

- [delegate()](nsexceptionhandler/delegate%28%29.md): Returns the delegate of the `NSExceptionHandler` object.
- [setDelegate(\_:)](nsexceptionhandler/setdelegate%28__%29.md): Sets the delegate of the `NSExceptionHandler` object.

### Constants

- [Logging and Handling Constants](logging-and-handling-constants.md): Use one or more of the following constants in the parameter of [setExceptionHandlingMask(\_:)](nsexceptionhandler/setexceptionhandlingmask%28__%29.md) to specify the types of exceptions that the exception handler should monitor and whether it should handle or log them.
- [System Hang Constants](system-hang-constants.md): Use one or more of the following constants in the parameter of [setExceptionHangingMask(\_:)](nsexceptionhandler/setexceptionhangingmask%28__%29.md) to specify the types of exceptions that cause the exception to halt execution so a debugger can be attached.
- [Exception Global String Constants](exception-global-string-constants.md): Two of the following global string constants identify exceptions generated by the framework for Objective-C runtime errors and system exceptions such as invalid memory accesses. The other constant is used as a key to access the stack trace in the [userInfo](https://developer.apple.com/documentation/foundation/nsexception/userinfo-swift.property) dictionary of an [NSException](https://developer.apple.com/documentation/foundation/nsexception) object, when requested.

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

# NSExceptionHandler (Objective-C)

**Framework:** Exception Handling  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The `NSExceptionHandler` class provides facilities for monitoring and debugging exceptional conditions in Objective-C programs. It works by installing a special uncaught exception handler function. Consequently, to use the services of `NSExceptionHandler`, you must not install your own custom uncaught exception handler.

## Declaration

```objectivec
@interface NSExceptionHandler : NSObject
```

<a id="Overview"></a>

## Overview

To use these services, you set a bit mask in the singleton `NSExceptionHandler` instance and, optionally, a delegate. The constants comprising the bit mask indicate the type of exception to be monitored and the behavior of the `NSExceptionHandler` object (or, simply, the exception handler). The delegate is asked to approve the logging and handling of each monitored [NSException](https://developer.apple.com/documentation/foundation/nsexception) object using the NSExceptionHandlerDelegate protocol.

The constants for configuring exception handler behavior can be categorized in several ways:

- Uncaught exceptions versus caught exceptions—or, more accurately, exceptions that would be caught (for example, by the top-level handler)
- Exception type or cause: system exceptions (such as invalid memory accesses), Objective-C runtime errors (such as messages sent to freed objects), and other exceptions
- Exception handler behavior: logging the exception (including a stack trace) to the console, handling the exception, and suspending program execution so the debugger can be attached

The way the exception handler handles an exception depends on the type of exception; the exception handler converts system exceptions and runtime errors into [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects with a stack trace embedded in their `userInfo` dictionary; for all other uncaught exceptions, it terminates the thread on which they occur . The constants used to configure an `NSExceptionHandler` object are described in [Logging and Handling Constants](logging-and-handling-constants.md) and [System Hang Constants](system-hang-constants.md).

The `defaults` command-line system also allows you to set values corresponding to the `enum` constants used to configure the exception handler; see [Controlling a Program’s Response to Exceptions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Tasks/ControllingAppResponse.html#//apple_ref/doc/uid/20000473) for details.

`NSExceptionHandler` installs its uncaught exception handler using the [NSSetUncaughtExceptionHandler](https://developer.apple.com/documentation/foundation/nssetuncaughtexceptionhandler%28_:%29) function.

## Topics

### Getting the default exception handler

- [defaultExceptionHandler](nsexceptionhandler/default%28%29.md): Returns the singleton `NSExceptionHandler` instance.

### Getting and setting exception masks

- [exceptionHandlingMask](nsexceptionhandler/exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [exceptionHangingMask](nsexceptionhandler/exceptionhangingmask%28%29.md): Returns a bit mask representing the types of exceptions that will halt execution for debugging.
- [setExceptionHandlingMask:](nsexceptionhandler/setexceptionhandlingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHangingMask:](nsexceptionhandler/setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.

### Getting and setting the delegate

- [delegate](nsexceptionhandler/delegate%28%29.md): Returns the delegate of the `NSExceptionHandler` object.
- [setDelegate:](nsexceptionhandler/setdelegate%28__%29.md): Sets the delegate of the `NSExceptionHandler` object.

### Constants

- [Logging and Handling Constants](logging-and-handling-constants.md): Use one or more of the following constants in the parameter of [setExceptionHandlingMask:](nsexceptionhandler/setexceptionhandlingmask%28__%29.md) to specify the types of exceptions that the exception handler should monitor and whether it should handle or log them.
- [System Hang Constants](system-hang-constants.md): Use one or more of the following constants in the parameter of [setExceptionHangingMask:](nsexceptionhandler/setexceptionhangingmask%28__%29.md) to specify the types of exceptions that cause the exception to halt execution so a debugger can be attached.
- [Mask Definitions](mask-definitions.md): The following `#define` constants are conveniences for specifying complete sets of exception-handling `enum` constants.
- [Exception Global String Constants](exception-global-string-constants.md): Two of the following global string constants identify exceptions generated by the framework for Objective-C runtime errors and system exceptions such as invalid memory accesses. The other constant is used as a key to access the stack trace in the [userInfo](https://developer.apple.com/documentation/foundation/nsexception/userinfo-swift.property) dictionary of an [NSException](https://developer.apple.com/documentation/foundation/nsexception) object, when requested.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
