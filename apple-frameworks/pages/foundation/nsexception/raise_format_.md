> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/raise:format:](https://developer.apple.com/documentation/foundation/nsexception/raise:format:)

# raise:format:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A convenience method that creates and raises an exception.

## Declaration

```objectivec
+ (void) raise:(NSExceptionName) name format:(NSString *) format;
```

## Parameters

- `name`: The name of the exception.
- `format`: A human-readable message string (that is, the exception reason) with conversion specifications for the variable arguments that follow.

<a id="Discussion"></a>

## Discussion

The user-defined information is `nil` for the generated exception object.

Pass variable information to be inserted into the formatted exception reason (in the manner of `printf`) as variadic arguments.

## See Also

### Creating and Raising an NSException Object

- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .
- [raise:format:arguments:](raise%28__format_arguments_%29.md): Creates and raises an exception with the specified name, reason, and arguments.
- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.
