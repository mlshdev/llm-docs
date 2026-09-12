> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iointerruptdispatchsource/setenablewithcompletion](https://developer.apple.com/documentation/driverkit/iointerruptdispatchsource/setenablewithcompletion)

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Enables or disables the delivery of interrupts.

## Declaration

```objectivec
virtual kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler);
```

## Parameters

- `enable`: A Boolean value that indicates whether to enable the dispatch source. Specify `true` to enable the dispatch source, or `false` to disable it.
- `handler`: An optional block to execute when disabling the dispatch source. The dispatch source executes it after all pending interrupts finish executing.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Starting and Stopping the Interrupt Source

- [Cancel](cancel.md): Cancels all callbacks from the event source.
- [IODispatchSourceCancelHandler](../iodispatchsourcecancelhandler.md): A block to execute when a canceled dispatch source stops executing tasks.
