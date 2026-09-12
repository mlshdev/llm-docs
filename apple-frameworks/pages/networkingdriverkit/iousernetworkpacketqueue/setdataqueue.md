> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/setdataqueue](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/setdataqueue)

# SetDataQueue

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Assigns the specified dispatch source to this object.

## Declaration

```objectivec
kern_return_t SetDataQueue(IODataQueueDispatchSource *dataQueue);
```

## Parameters

- `dataQueue`: The new data queue to use when executing tasks.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Use this method to change the dispatch queue that this object uses to perform tasks. This method releases the previous dispatch queue, if any, and retains the new object in the `dataQueue` parameter.

## See Also

### Managing the Data Queue

- [CopyDataQueue](copydataqueue.md): Returns the dispatch queue that this object uses to execute tasks.
