> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/reportexception(_:)](https://developer.apple.com/documentation/appkit/nsapplication/reportexception(_:))

# reportException(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Logs a given exception by calling `NSLog()`.

## Declaration

```swift
func reportException(_ exception: NSException)
```

## Parameters

- `exception`: The exception whose contents you want to write to the log file.

<a id="Discussion"></a>

## Discussion

This method doesn’t raise `anException`. Use it inside of an exception handler to record that the exception occurred.

## See Also

### Related Documentation

- [NSSetUncaughtExceptionHandler(\_:)](https://developer.apple.com/documentation/foundation/nssetuncaughtexceptionhandler%28_:%29): Changes the top-level error handler.

# reportException: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Logs a given exception by calling `NSLog()`.

## Declaration

```objectivec
- (void) reportException:(NSException *) exception;
```

## Parameters

- `exception`: The exception whose contents you want to write to the log file.

<a id="Discussion"></a>

## Discussion

This method doesn’t raise `anException`. Use it inside of an exception handler to record that the exception occurred.

## See Also

### Related Documentation

- [NSSetUncaughtExceptionHandler](https://developer.apple.com/documentation/foundation/nssetuncaughtexceptionhandler%28_:%29): Changes the top-level error handler.
