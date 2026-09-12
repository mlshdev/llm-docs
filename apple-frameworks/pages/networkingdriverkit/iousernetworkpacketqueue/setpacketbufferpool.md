> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/setpacketbufferpool](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/setpacketbufferpool)

# SetPacketBufferPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Assigns the specified buffer pool with this queue.

## Declaration

```objectivec
virtual kern_return_t SetPacketBufferPool(IOUserNetworkPacketBufferPool *pool);
```

## Parameters

- `pool`: The new buffer pool to associate with the queue.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Use this method to change the buffer pool that provides network packets to the queue. This method releases the previous pool, if any, and retains the new object in the `pool` parameter.

## See Also

### Configuring the Queue Attributes

- [SetPacketDirection](setpacketdirection.md): Specifies whether packets flow into or out of the queue.
