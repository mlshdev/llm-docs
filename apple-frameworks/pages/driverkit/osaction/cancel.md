> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osaction/cancel](https://developer.apple.com/documentation/driverkit/osaction/cancel)

# Cancel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Cancels the execution of the action’s callbacks.

## Declaration

```objectivec
kern_return_t Cancel(OSActionCancelHandler handler);
```

## Parameters

- `handler`: A handler block for the system to call after any in-flight callbacks finish executing.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

After cancellation, you can only free the action object. You cannot reactivate it.

## See Also

### Ending the Action Early

- [Aborted](aborted.md): Calls the abort handler of the action object.
- [OSActionAbortedHandler](../osactionabortedhandler.md): The block to call before aborting an action object.
- [OSActionCancelHandler](../osactioncancelhandler.md): The block to call after the successful cancellation of the action.
