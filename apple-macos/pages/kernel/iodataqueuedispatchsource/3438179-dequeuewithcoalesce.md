> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3438179-dequeuewithcoalesce](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3438179-dequeuewithcoalesce)

# DequeueWithCoalesce

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Removes the next queue entry, but doesn't automatically send notifications.

## Declaration

```objectivec
kern_return_t DequeueWithCoalesce(bool *sendDataServiced, IODataQueueClientDequeueEntryBlock callback);
```

## Parameters

- `sendDataServiced`: A Boolean value that indicates that this method would have sent a notification. Initialize the value to `false`, and then make one or more calls to this method. If the value is `true` after all of those calls, call the [SendDataServiced](3438185-senddataserviced.md) method yourself to deliver the notification.
- `callback`: The callback that you use to process the dequeued data.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, [kIOReturnUnderrun](https://developer.apple.com/documentation/driverkit/kioreturnunderrun) if the queue is empty, or [kIOReturnError](https://developer.apple.com/documentation/driverkit/kioreturnerror) if the queue is corrupt. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataavailablehandler): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataavailable): Responds to the addition of new data to the queue.
- [IsDataAvailable](3438182-isdataavailable.md): Checks whether the data queue contains data to process.
- [Peek](3438183-peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](3438178-dequeue.md): Removes the next entry from the queue.
- [SendDataServiced](3438185-senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](https://developer.apple.com/documentation/driverkit/iodataqueueclientdequeueentryblock): The handler block you use to remove data from a queue.
