> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueuecancelhandler](https://developer.apple.com/documentation/driverkit/iodispatchqueuecancelhandler)

# IODispatchQueueCancelHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A block to execute when a canceled dispatch queue stops executing tasks.

## Declaration

```objectivec
typedef void (^)(void) IODispatchQueueCancelHandler;
```

## See Also

### Stopping the Queue

- [Cancel](iodispatchqueue/cancel.md): Stops the queue from dequeueing any further tasks, and notifies the specified handler when all in-flight tasks finish.
