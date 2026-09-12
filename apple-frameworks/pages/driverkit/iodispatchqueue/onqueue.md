> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/onqueue](https://developer.apple.com/documentation/driverkit/iodispatchqueue/onqueue)

# OnQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a Boolean value that indicates whether the current thread matches the dispatch queue’s thread.

## Declaration

```objectivec
bool OnQueue();
```

<a id="return-value"></a>

## Return Value

`true` if the current thread is the same thread that the dispatch queue is using to execute its task.

<a id="Discussion"></a>

## Discussion

Use this method to determine if your code is running on the same thread as the current dispatch queue.

## See Also

### Getting Queue Information

- [GetName](getname.md): Returns the name of the queue as a C string.
- [IODispatchQueueName](../iodispatchqueuename.md): A buffer for specifying the name of a dispatch queue.
