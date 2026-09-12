> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/setdataservicedhandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataservicedhandler)

# SetDataServicedHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Installs the handler block to execute when data is removed from the queue.

## Declaration

```objectivec
virtual kern_return_t SetDataServicedHandler(OSAction *action);
```

## Parameters

- `action`: The [OSAction](../osaction.md) object that contains the callback method to execute. The data queue retains your action object until you install a new handler or cancel the dispatch source. The system executes your callback on the dispatch queue you designated in your [OSAction](../osaction.md) object.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

If your code produces data for the queue, use this method to install a handler so you can add more data to the queue. When space becomes available in the queue, the system executes your handler.

## See Also

### Adding Work to the Queue

- [DataServiced](dataserviced.md): Responds to the removal of data from the queue.
- [Enqueue](enqueue.md): Adds a single entry to the shared data queue.
- [EnqueueWithCoalesce](enqueuewithcoalesce.md): Adds an entry to the queue, but doesn’t automatically send a data-available notification.
- [SendDataAvailable](senddataavailable.md): Sends a notification to observers that indicates more data is available for processing.
- [IODataQueueClientEnqueueEntryBlock](../iodataqueueclientenqueueentryblock.md): The handler block you use to add data to a queue.
