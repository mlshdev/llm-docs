> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsexceptionhandler/setexceptionhandlingmask(_:)](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/setexceptionhandlingmask(_:))

# setExceptionHandlingMask(\_:) (Swift)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.

## Declaration

```swift
func setExceptionHandlingMask(_ aMask: Int)
```

## Parameters

- `aMask`: A bit mask composed of one or more constants specifying the types of exceptions monitored and whether they are handled or logged (or both). You specify multiple constants by performing a bitwise-OR operation. See [Logging and Handling Constants](../logging-and-handling-constants.md) for information about the constants.

## See Also

### Getting and setting exception masks

- [exceptionHandlingMask()](exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [exceptionHangingMask()](exceptionhangingmask%28%29.md): Returns a bit mask representing the types of exceptions that will halt execution for debugging.
- [setExceptionHangingMask(\_:)](setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.

# setExceptionHandlingMask: (Objective-C)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.

## Declaration

```objectivec
- (void) setExceptionHandlingMask:(NSUInteger) aMask;
```

## Parameters

- `aMask`: A bit mask composed of one or more constants specifying the types of exceptions monitored and whether they are handled or logged (or both). You specify multiple constants by performing a bitwise-OR operation. See [Logging and Handling Constants](../logging-and-handling-constants.md) for information about the constants.

## See Also

### Getting and setting exception masks

- [exceptionHandlingMask](exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [exceptionHangingMask](exceptionhangingmask%28%29.md): Returns a bit mask representing the types of exceptions that will halt execution for debugging.
- [setExceptionHangingMask:](setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.
