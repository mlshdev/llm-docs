> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/dispatchasync](https://developer.apple.com/documentation/driverkit/iodispatchqueue/dispatchasync)

# DispatchAsync

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Schedule a block for asynchronous execution on the current queue.

## Declaration

```objectivec
void DispatchAsync(IODispatchBlock block);
```

## Parameters

- `block`: The block to execute on the queue.

<a id="Discussion"></a>

## Discussion

This method schedules the block for execution on the queue and returns immediately, without waiting for execution of the block to begin. The system retains the queue until the block completes.

## See Also

### Executing a Task Asynchronously

- [DispatchAsync_f](dispatchasync_f.md): Schedule a C-style function for asynchrous execution on the current queue.
- [IODispatchBlock](../iodispatchblock.md): A block to execute on a dispatch queue.
- [IODispatchFunction](../iodispatchfunction.md): A C-style function to execute on a dispatch queue.
