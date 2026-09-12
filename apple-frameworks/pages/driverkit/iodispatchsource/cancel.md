> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchsource/cancel](https://developer.apple.com/documentation/driverkit/iodispatchsource/cancel)

# Cancel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Cancel all callbacks from the dispatch source.

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

Subclasses must provide an implementation of this method. After cancellation, the dispatch source can only be freed. It cannot be reactivated.

## See Also

### Configuring the Dispatch Source

- [init](init.md): Handles the basic initialization of the dispatch source.
- [free](free.md): Performs any final cleanup for the dispatch source.
