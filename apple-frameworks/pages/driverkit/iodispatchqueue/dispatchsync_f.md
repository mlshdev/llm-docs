> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/dispatchsync_f](https://developer.apple.com/documentation/driverkit/iodispatchqueue/dispatchsync_f)

# DispatchSync_f

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Schedule a C-style function for synchronous execution on the current queue.

## Declaration

```objectivec
void DispatchSync_f(void *context, IODispatchFunction function);
```

## Parameters

- `context`: A pointer to contextual data that you want to pass to the function.
- `function`: The function to execute on the queue.

<a id="Discussion"></a>

## Discussion

This method schedules the function for execution on the queue and waits for it to complete before returning. The system retains the queue until the function completes.

## See Also

### Executing a Task Synchronously

- [DispatchSync](dispatchsync.md): Schedule a block for synchronous execution on the current queue.
