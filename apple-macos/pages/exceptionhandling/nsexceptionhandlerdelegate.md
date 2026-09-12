> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsexceptionhandlerdelegate](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandlerdelegate)

# NSExceptionHandlerDelegate (Swift)

**Framework:** Exception Handling

The `NSExceptionHandlerDelegate` informal protocol describes methods that [NSExceptionHandler](nsexceptionhandler.md) objects call on their delegates when exceptions occur. An [NSExceptionHandler](nsexceptionhandler.md) object does not need to have a delegate. When one does, these delegate methods are asked to approve exception handling and logging for each monitored [NSExceptionHandler](nsexceptionhandler.md) object.

## Topics

### Logging and handling exceptions

- [exceptionHandler(\_:shouldHandle:mask:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exceptionhandler%28_:shouldhandle:mask:%29): Implemented by the delegate to evaluate whether the delegating exception handler should handle a given exception.
- [exceptionHandler(\_:shouldLogException:mask:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exceptionhandler%28_:shouldlogexception:mask:%29): Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.

# NSExceptionHandlerDelegate (Objective-C)

**Framework:** Exception Handling

The `NSExceptionHandlerDelegate` informal protocol describes methods that [NSExceptionHandler](nsexceptionhandler.md) objects call on their delegates when exceptions occur. An [NSExceptionHandler](nsexceptionhandler.md) object does not need to have a delegate. When one does, these delegate methods are asked to approve exception handling and logging for each monitored [NSExceptionHandler](nsexceptionhandler.md) object.

## Topics

### Logging and handling exceptions

- [exceptionHandler:shouldHandleException:mask:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exceptionhandler%28_:shouldhandle:mask:%29): Implemented by the delegate to evaluate whether the delegating exception handler should handle a given exception.
- [exceptionHandler:shouldLogException:mask:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/exceptionhandler%28_:shouldlogexception:mask:%29): Implemented by the delegate to evaluate whether the delegating exception hangler should log a given exception.
