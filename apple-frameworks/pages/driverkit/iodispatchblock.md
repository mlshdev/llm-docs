> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchblock](https://developer.apple.com/documentation/driverkit/iodispatchblock)

# IODispatchBlock

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A block to execute on a dispatch queue.

## Declaration

```objectivec
typedef void (^)(void) IODispatchBlock;
```

## See Also

### Executing a Task Asynchronously

- [DispatchAsync](iodispatchqueue/dispatchasync.md): Schedule a block for asynchronous execution on the current queue.
- [DispatchAsync_f](iodispatchqueue/dispatchasync_f.md): Schedule a C-style function for asynchrous execution on the current queue.
- [IODispatchFunction](iodispatchfunction.md): A C-style function to execute on a dispatch queue.
