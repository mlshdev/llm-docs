> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/raise()](https://developer.apple.com/documentation/foundation/nsexception/raise())

# raise() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises the receiver, causing program flow to jump to the local exception handler.

## Declaration

```swift
func raise()
```

<a id="Discussion"></a>

## Discussion

When there are no exception handlers in the exception handler stack, unless the exception is raised during the posting of a notification, this method calls the uncaught exception handler, in which last-minute logging can be performed. The program then terminates, regardless of the actions taken by the uncaught exception handler.

## See Also

### Creating and Raising an NSException Object

- [raise(\_:format:arguments:)](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [init(name:reason:userInfo:)](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.

# raise (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises the receiver, causing program flow to jump to the local exception handler.

## Declaration

```objectivec
- (void) raise;
```

<a id="Discussion"></a>

## Discussion

When there are no exception handlers in the exception handler stack, unless the exception is raised during the posting of a notification, this method calls the uncaught exception handler, in which last-minute logging can be performed. The program then terminates, regardless of the actions taken by the uncaught exception handler.

## See Also

### Related Documentation

- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.

### Creating and Raising an NSException Object

- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .
- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.
- [raise:format:arguments:](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
