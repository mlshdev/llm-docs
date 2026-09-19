> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchblock

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
