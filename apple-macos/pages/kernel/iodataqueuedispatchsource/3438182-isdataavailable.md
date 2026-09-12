> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3438182-isdataavailable](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3438182-isdataavailable)

# IsDataAvailable

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Checks whether the data queue contains data to process.

## Declaration

```objectivec
bool IsDataAvailable(void);
```

<a id="return_value"></a>

## Return Value

`true` if the queue contains data to process, or `false` if it is empty.

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataavailablehandler): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataavailable): Responds to the addition of new data to the queue.
- [Peek](3438183-peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](3438178-dequeue.md): Removes the next entry from the queue.
- [DequeueWithCoalesce](3438179-dequeuewithcoalesce.md): Removes the next queue entry, but doesn't automatically send notifications.
- [SendDataServiced](3438185-senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](https://developer.apple.com/documentation/driverkit/iodataqueueclientdequeueentryblock): The handler block you use to remove data from a queue.
