> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/dispatchsync](https://developer.apple.com/documentation/driverkit/iodispatchqueue/dispatchsync)

# DispatchSync

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Schedule a block for synchronous execution on the current queue.

## Declaration

```objectivec
void DispatchSync(IODispatchBlock block);
```

## Parameters

- `block`: The block to execute on the queue.

<a id="Discussion"></a>

## Discussion

This method schedules the block for execution on the queue and waits for it to complete before returning. The system retains the queue until the block completes.

## See Also

### Executing a Task Synchronously

- [DispatchSync_f](dispatchsync_f.md): Schedule a C-style function for synchronous execution on the current queue.
