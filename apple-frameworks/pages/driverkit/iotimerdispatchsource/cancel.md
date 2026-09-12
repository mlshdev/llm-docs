> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/cancel](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/cancel)

# Cancel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Cancels all callbacks from the event source.

## Declaration

```objectivec
virtual kern_return_t Cancel(IODispatchSourceCancelHandler handler);
```

## Parameters

- `handler`: The handler block to execute after the dispatch source finishes any in-flight callbacks.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

After cancellation, the source can only be freed. It cannot be reactivated.

## See Also

### Starting and Stopping the Timer Source

- [SetEnableWithCompletion](setenablewithcompletion.md): Enables or disables the timer.
