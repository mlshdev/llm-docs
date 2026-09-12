> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsexceptionhandler/exceptionhangingmask()](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/exceptionhangingmask())

# exceptionHangingMask() (Swift)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a bit mask representing the types of exceptions that will halt execution for debugging.

## Declaration

```swift
func exceptionHangingMask() -> Int
```

<a id="return-value"></a>

## Return Value

A bit mask composed of one or more constants specifying the types of exceptions that will halt execution for debugging. See [System Hang Constants](../system-hang-constants.md) for information about the constants.

## See Also

### Getting and setting exception masks

- [exceptionHandlingMask()](exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHandlingMask(\_:)](setexceptionhandlingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHangingMask(\_:)](setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.

# exceptionHangingMask (Objective-C)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a bit mask representing the types of exceptions that will halt execution for debugging.

## Declaration

```objectivec
- (NSUInteger) exceptionHangingMask;
```

<a id="return-value"></a>

## Return Value

A bit mask composed of one or more constants specifying the types of exceptions that will halt execution for debugging. See [System Hang Constants](../system-hang-constants.md) for information about the constants.

## See Also

### Getting and setting exception masks

- [exceptionHandlingMask](exceptionhandlingmask%28%29.md): Returns a bit mask representing the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHandlingMask:](setexceptionhandlingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions monitored by the receiver and its handling and logging behavior.
- [setExceptionHangingMask:](setexceptionhangingmask%28__%29.md): Sets the bit mask of constants specifying the types of exceptions that will halt execution for debugging.
