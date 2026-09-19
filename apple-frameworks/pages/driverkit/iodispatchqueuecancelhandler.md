> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchqueuecancelhandler

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
