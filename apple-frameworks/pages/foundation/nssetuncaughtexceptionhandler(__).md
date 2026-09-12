> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssetuncaughtexceptionhandler(_:)](https://developer.apple.com/documentation/foundation/nssetuncaughtexceptionhandler(_:))

# NSSetUncaughtExceptionHandler(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the top-level error handler.

## Declaration

```swift
func NSSetUncaughtExceptionHandler(_: ((NSException) -> Void)?)
```

<a id="Discussion"></a>

## Discussion

Sets the top-level error-handling function where you can perform last-minute logging before the program terminates.

## See Also

### Related Documentation

- [NSGetUncaughtExceptionHandler()](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.
- [reportException(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/reportexception%28_:%29): Logs a given exception by calling `NSLog()`.

### Functions

- [NSGetUncaughtExceptionHandler()](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.

# NSSetUncaughtExceptionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the top-level error handler.

## Declaration

```objectivec
extern void NSSetUncaughtExceptionHandler(void (*)(NSException *));
```

<a id="Discussion"></a>

## Discussion

Sets the top-level error-handling function where you can perform last-minute logging before the program terminates.

## See Also

### Related Documentation

- [NSGetUncaughtExceptionHandler](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.
- [reportException:](https://developer.apple.com/documentation/appkit/nsapplication/reportexception%28_:%29): Logs a given exception by calling `NSLog()`.

### Functions

- [NSGetUncaughtExceptionHandler](nsgetuncaughtexceptionhandler%28%29.md): Returns the top-level error handler.
