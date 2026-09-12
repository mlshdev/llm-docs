> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchqueue/3438192-dispatchsync](https://developer.apple.com/documentation/kernel/iodispatchqueue/3438192-dispatchsync)

# DispatchSync

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Schedule a block for synchronous execution on the current queue.

## Declaration

```objectivec
void DispatchSync(IODispatchBlock block);
```

## Parameters

- `block`: The block to execute on the queue.

<a id="discussion"></a>

## Discussion

This method schedules the block for execution on the queue and waits for it to complete before returning. The system retains the queue until the block completes.

## See Also

### Executing a Task Synchronously

- [DispatchSync_f](3438193-dispatchsync_f.md): Schedule a C-style function for synchronous execution on the current queue.
