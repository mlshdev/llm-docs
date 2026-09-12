> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/raise(_:format:arguments:)](https://developer.apple.com/documentation/foundation/nsexception/raise(_:format:arguments:))

# raise(\_:format:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and raises an exception with the specified name, reason, and arguments.

## Declaration

```swift
class func raise(_ name: NSExceptionName, format: String, arguments argList: CVaListPointer)
```

## Parameters

- `name`: The name of the exception.
- `format`: A human-readable message string (that is, the exception reason) with conversion specifications for the variable arguments in `argList`.
- `argList`: Variable information to be inserted into the formatted exception reason (in the manner of `vprintf`).

<a id="Discussion"></a>

## Discussion

The user-defined dictionary of the generated object is `nil`.

## See Also

### Creating and Raising an NSException Object

- [init(name:reason:userInfo:)](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise()](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.

# raise:format:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and raises an exception with the specified name, reason, and arguments.

## Declaration

```objectivec
+ (void) raise:(NSExceptionName) name format:(NSString *) format arguments:(va_list) argList;
```

## Parameters

- `name`: The name of the exception.
- `format`: A human-readable message string (that is, the exception reason) with conversion specifications for the variable arguments in `argList`.
- `argList`: Variable information to be inserted into the formatted exception reason (in the manner of `vprintf`).

<a id="Discussion"></a>

## Discussion

The user-defined dictionary of the generated object is `nil`.

## See Also

### Related Documentation

- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.

### Creating and Raising an NSException Object

- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .
- [raise:format:](raise_format_.md): A convenience method that creates and raises an exception.
- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [raise](raise%28%29.md): Raises the receiver, causing program flow to jump to the local exception handler.
