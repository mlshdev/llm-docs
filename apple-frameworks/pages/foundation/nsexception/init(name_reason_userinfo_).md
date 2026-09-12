> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/init(name:reason:userinfo:)](https://developer.apple.com/documentation/foundation/nsexception/init(name:reason:userinfo:))

# init(name:reason:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a newly allocated exception object.

## Declaration

```swift
init(name aName: NSExceptionName, reason aReason: String?, userInfo aUserInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `aName`: The name of the exception.
- `aReason`: A human-readable message string summarizing the reason for the exception.
- `aUserInfo`: A dictionary containing user-defined information relating to the exception

<a id="return-value"></a>

## Return Value

The created `NSException` object or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating and Raising an NSException Object

- [raise(\_:format:arguments:)](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [raise()](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.

# initWithName:reason:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a newly allocated exception object.

## Declaration

```objectivec
- (instancetype) initWithName:(NSExceptionName) aName reason:(NSString *) aReason userInfo:(NSDictionary *) aUserInfo;
```

## Parameters

- `aName`: The name of the exception.
- `aReason`: A human-readable message string summarizing the reason for the exception.
- `aUserInfo`: A dictionary containing user-defined information relating to the exception

<a id="return-value"></a>

## Return Value

The created `NSException` object or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Related Documentation

- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .

### Creating and Raising an NSException Object

- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .
- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.
- [raise:format:arguments:](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [raise](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.
