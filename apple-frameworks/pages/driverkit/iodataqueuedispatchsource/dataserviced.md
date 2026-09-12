> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/dataserviced](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataserviced)

# DataServiced

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Responds to the removal of data from the queue.

## Declaration

```objectivec
virtual void DataServiced(OSAction *action);
```

## Parameters

- `action`: The action object being executed.

<a id="Discussion"></a>

## Discussion

Use this method as a prototype for declaring your own custom data-queue handler. When declaring your method, use the [TYPE](../type.md) macro to indicate that your method has the same parameters and return value as this method.

Use the implementation of your method to add more data to the queue or perform other relevant tasks.

## See Also

### Adding Work to the Queue

- [SetDataServicedHandler](setdataservicedhandler.md): Installs the handler block to execute when data is removed from the queue.
- [Enqueue](enqueue.md): Adds a single entry to the shared data queue.
- [EnqueueWithCoalesce](enqueuewithcoalesce.md): Adds an entry to the queue, but doesn’t automatically send a data-available notification.
- [SendDataAvailable](senddataavailable.md): Sends a notification to observers that indicates more data is available for processing.
- [IODataQueueClientEnqueueEntryBlock](../iodataqueueclientenqueueentryblock.md): The handler block you use to add data to a queue.
