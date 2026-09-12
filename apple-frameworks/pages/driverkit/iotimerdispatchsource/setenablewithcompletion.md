> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/setenablewithcompletion](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/setenablewithcompletion)

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Enables or disables the timer.

## Declaration

```objectivec
virtual kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler);
```

## Parameters

- `enable`: A Boolean value that indicates whether to enable or disable the timer. Specify [true](https://developer.apple.com/documentation/swift/true) to enable the timer or [false](https://developer.apple.com/documentation/swift/false) to disable it.
- `handler`: An optional block to execute after any pending handlers of a newly disabled timer finish executing.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Starting and Stopping the Timer Source

- [Cancel](cancel.md): Cancels all callbacks from the event source.
