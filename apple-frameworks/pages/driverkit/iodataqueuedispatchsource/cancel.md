> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/cancel](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/cancel)

# Cancel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Cancels all callbacks from the dispatch source.

## Declaration

```objectivec
virtual kern_return_t Cancel(IODispatchSourceCancelHandler handler);
```

## Parameters

- `handler`: The handler block to call after any in-flight callbacks finish executing.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

After cancelling a dispatch source, you cannot reactivate it.

## See Also

### Starting and Stopping the Dispatch Source

- [SetEnableWithCompletion](setenablewithcompletion.md): Controls the enable state of the interrupt source.
