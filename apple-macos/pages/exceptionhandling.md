> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling](https://developer.apple.com/documentation/exceptionhandling)

# Exception Handling

**Interface languages:** Swift, Objective-C

**Framework:** Exception Handling  
**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Monitor and debug exceptional conditions in code.

<a id="Overview"></a>

## Overview

This collection of documents provides the API reference for the Exception Handling framework. This framework provides facilities for monitoring and debugging exceptional conditions in Objective-C code.

Currently only one class reference is part of this collection: the reference for the [NSExceptionHandler](exceptionhandling/nsexceptionhandler.md) class, which is defined in `NSExceptionHandler.h`.

## Topics

### Classes

- [NSExceptionHandler](exceptionhandling/nsexceptionhandler.md): The `NSExceptionHandler` class provides facilities for monitoring and debugging exceptional conditions in Objective-C programs. It works by installing a special uncaught exception handler function. Consequently, to use the services of `NSExceptionHandler`, you must not install your own custom uncaught exception handler.

### Protocols

- [NSExceptionHandlerDelegate](exceptionhandling/nsexceptionhandlerdelegate.md): The `NSExceptionHandlerDelegate` informal protocol describes methods that [NSExceptionHandler](exceptionhandling/nsexceptionhandler.md) objects call on their delegates when exceptions occur. An [NSExceptionHandler](exceptionhandling/nsexceptionhandler.md) object does not need to have a delegate. When one does, these delegate methods are asked to approve exception handling and logging for each monitored [NSExceptionHandler](exceptionhandling/nsexceptionhandler.md) object.

### Reference

- [ExceptionHandling Enumerations](exceptionhandling/exceptionhandling-enumerations.md)
- [ExceptionHandling Constants](exceptionhandling/exceptionhandling-constants.md)
- [ExceptionHandling Functions](exceptionhandling/exceptionhandling-functions.md)
