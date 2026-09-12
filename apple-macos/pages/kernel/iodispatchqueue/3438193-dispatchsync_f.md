> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchqueue/3438193-dispatchsync_f](https://developer.apple.com/documentation/kernel/iodispatchqueue/3438193-dispatchsync_f)

# DispatchSync_f

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Schedule a C-style function for synchronous execution on the current queue.

## Declaration

```objectivec
void DispatchSync_f(void *context, IODispatchFunction function);
```

## Parameters

- `context`: A pointer to contextual data that you want to pass to the function.
- `function`: The function to execute on the queue.

<a id="discussion"></a>

## Discussion

This method schedules the function for execution on the queue and waits for it to complete before returning. The system retains the queue until the function completes.

## See Also

### Executing a Task Synchronously

- [DispatchSync](3438192-dispatchsync.md): Schedule a block for synchronous execution on the current queue.
