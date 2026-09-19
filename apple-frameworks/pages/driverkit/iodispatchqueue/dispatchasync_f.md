> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchqueue/dispatchasync_f

# DispatchAsync_f

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Schedule a C-style function for asynchrous execution on the current queue.

## Declaration

```objectivec
void DispatchAsync_f(void *context, IODispatchFunction function);
```

## Parameters

- `context`: A pointer to contextual data that you want to pass to the function.
- `function`: The function to execute on the queue.

<a id="Discussion"></a>

## Discussion

This method schedules the function for execution on the queue and returns immediately, without waiting for execution of the function to begin. The system retains the queue until the function completes.

## See Also

### Executing a Task Asynchronously

- [DispatchAsync](dispatchasync.md): Schedule a block for asynchronous execution on the current queue.
- [IODispatchBlock](../iodispatchblock.md): A block to execute on a dispatch queue.
- [IODispatchFunction](../iodispatchfunction.md): A C-style function to execute on a dispatch queue.
