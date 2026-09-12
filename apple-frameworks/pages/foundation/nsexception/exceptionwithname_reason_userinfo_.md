> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/exceptionwithname:reason:userinfo:](https://developer.apple.com/documentation/foundation/nsexception/exceptionwithname:reason:userinfo:)

# exceptionWithName:reason:userInfo:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an exception object .

## Declaration

```objectivec
+ (NSException *) exceptionWithName:(NSExceptionName) name reason:(NSString *) reason userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `name`: The name of the exception.
- `reason`: A human-readable message string summarizing the reason for the exception.
- `userInfo`: A dictionary containing user-defined information relating to the exception

<a id="return-value"></a>

## Return Value

The created `NSException` object or `nil` if the object couldn’t be created.

## See Also

### Related Documentation

- [userInfo](userinfo-swift.property.md): A dictionary containing application-specific data pertaining to the receiver.
- [reason](reason-swift.property.md): A string containing a “human-readable” reason for the receiver.
- [Exception Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Exceptions/Exceptions.html#//apple_ref/doc/uid/10000012i)
- [name](name-swift.property.md): A string used to uniquely identify the receiver.

### Creating and Raising an NSException Object

- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.
- [raise:format:arguments:](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.
