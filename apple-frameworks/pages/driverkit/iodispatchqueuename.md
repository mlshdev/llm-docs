> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchqueuename

# IODispatchQueueName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A buffer for specifying the name of a dispatch queue.

## Declaration

```objectivec
typedef char[256] IODispatchQueueName;
```

## See Also

### Getting Queue Information

- [GetName](iodispatchqueue/getname.md): Returns the name of the queue as a C string.
- [OnQueue](iodispatchqueue/onqueue.md): Returns a Boolean value that indicates whether the current thread matches the dispatch queue’s thread.
