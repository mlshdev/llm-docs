> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchfunction](https://developer.apple.com/documentation/driverkit/iodispatchfunction)

# IODispatchFunction

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A C-style function to execute on a dispatch queue.

## Declaration

```objectivec
typedef void (*)(void *) IODispatchFunction;
```

## Parameters

- `context`: A pointer to contextual data that you need to perform any tasks. You specify the pointer to this data when scheduling the function for execution.

## See Also

### Executing a Task Asynchronously

- [DispatchAsync](iodispatchqueue/dispatchasync.md): Schedule a block for asynchronous execution on the current queue.
- [DispatchAsync_f](iodispatchqueue/dispatchasync_f.md): Schedule a C-style function for asynchrous execution on the current queue.
- [IODispatchBlock](iodispatchblock.md): A block to execute on a dispatch queue.
