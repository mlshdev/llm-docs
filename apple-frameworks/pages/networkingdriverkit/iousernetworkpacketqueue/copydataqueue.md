> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/copydataqueue

# CopyDataQueue

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Returns the dispatch queue that this object uses to execute tasks.

## Declaration

```objectivec
virtual kern_return_t CopyDataQueue(IODataQueueDispatchSource **dataQueue);
```

## Parameters

- `dataQueue`: On return, a pointer to the dispatch source that this object uses to generate tasks.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Managing the Data Queue

- [SetDataQueue](setdataqueue.md): Assigns the specified dispatch source to this object.
