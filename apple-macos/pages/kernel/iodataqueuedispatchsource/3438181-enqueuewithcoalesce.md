> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3438181-enqueuewithcoalesce](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3438181-enqueuewithcoalesce)

# EnqueueWithCoalesce

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Adds an entry to the queue, but doesn't automatically send a data-available notification.

## Declaration

```objectivec
kern_return_t EnqueueWithCoalesce(uint32_t dataSize, bool *sendDataAvailable, IODataQueueClientEnqueueEntryBlock callback);
```

## Parameters

- `dataSize`: The size of the data to enqueue.
- `sendDataAvailable`: A Boolean value that indicates that this method would have sent a notification. Initialize the value to `false`, and then make one or more calls to this method. If the value is `true` after all of those calls, call the [SendDataAvailable](3438184-senddataavailable.md) method yourself to deliver the notification.
- `callback`: The callback to execute when there is enough space to enqueue the data.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, [kIOReturnOverrun](https://developer.apple.com/documentation/driverkit/kioreturnoverrun) if the queue was full, or [kIOReturnError](https://developer.apple.com/documentation/driverkit/kioreturnerror) if the queue is corrupt. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

## See Also

### Adding Work to the Queue

- [SetDataServicedHandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataservicedhandler): Installs the handler block to execute when data is removed from the queue.
- [DataServiced](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataserviced): Responds to the removal of data from the queue.
- [Enqueue](3438180-enqueue.md): Adds a single entry to the shared data queue.
- [SendDataAvailable](3438184-senddataavailable.md): Sends a notification to observers that indicates more data is available for processing.
- [IODataQueueClientEnqueueEntryBlock](https://developer.apple.com/documentation/driverkit/iodataqueueclientenqueueentryblock): The handler block you use to add data to a queue.
