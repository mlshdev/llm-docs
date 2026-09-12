> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/getname](https://developer.apple.com/documentation/driverkit/iodispatchqueue/getname)

# GetName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the name of the queue as a C string.

## Declaration

```objectivec
const char * GetName();
```

<a id="return-value"></a>

## Return Value

A C-string pointer to the queue’s internal storage.

<a id="Discussion"></a>

## Discussion

Returns a pointer to the queue’s name. This string is valid only while the queue is retained.

## See Also

### Getting Queue Information

- [OnQueue](onqueue.md): Returns a Boolean value that indicates whether the current thread matches the dispatch queue’s thread.
- [IODispatchQueueName](../iodispatchqueuename.md): A buffer for specifying the name of a dispatch queue.
