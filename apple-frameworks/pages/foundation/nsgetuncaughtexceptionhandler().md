> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgetuncaughtexceptionhandler()](https://developer.apple.com/documentation/foundation/nsgetuncaughtexceptionhandler())

# NSGetUncaughtExceptionHandler() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the top-level error handler.

## Declaration

```swift
func NSGetUncaughtExceptionHandler() -> ((NSException) -> Void)?
```

<a id="return-value"></a>

## Return Value

A pointer to the top-level error-handling function where you can perform last-minute logging before the program terminates.

## See Also

### Related Documentation

- [NSSetUncaughtExceptionHandler(\_:)](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.

### Functions

- [NSSetUncaughtExceptionHandler(\_:)](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.

# NSGetUncaughtExceptionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the top-level error handler.

## Declaration

```objectivec
extern void (*)(NSException *)NSGetUncaughtExceptionHandler();
```

<a id="return-value"></a>

## Return Value

A pointer to the top-level error-handling function where you can perform last-minute logging before the program terminates.

## See Also

### Related Documentation

- [NSSetUncaughtExceptionHandler](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.

### Functions

- [NSSetUncaughtExceptionHandler](nssetuncaughtexceptionhandler%28__%29.md): Changes the top-level error handler.
