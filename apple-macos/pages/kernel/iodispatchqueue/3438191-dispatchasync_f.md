> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchqueue/3438191-dispatchasync_f](https://developer.apple.com/documentation/kernel/iodispatchqueue/3438191-dispatchasync_f)

# DispatchAsync_f

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Schedule a C-style function for asynchrous execution on the current queue.

## Declaration

```objectivec
void DispatchAsync_f(void *context, IODispatchFunction function);
```

## Parameters

- `context`: A pointer to contextual data that you want to pass to the function.
- `function`: The function to execute on the queue.

<a id="discussion"></a>

## Discussion

This method schedules the function for execution on the queue and returns immediately, without waiting for execution of the function to begin. The system retains the queue until the function completes.

## See Also

### Executing a Task Asynchronously

- [DispatchAsync](3438190-dispatchasync.md): Schedule a block for asynchronous execution on the current queue.
- [IODispatchBlock](https://developer.apple.com/documentation/driverkit/iodispatchblock): A block to execute on a dispatch queue.
- [IODispatchFunction](https://developer.apple.com/documentation/driverkit/iodispatchfunction): A C-style function to execute on a dispatch queue.
