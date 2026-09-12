> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/setpacketdirection](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/setpacketdirection)

# SetPacketDirection

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Specifies whether packets flow into or out of the queue.

## Declaration

```objectivec
virtual kern_return_t SetPacketDirection(IOUserNetworkPacketDirection direction);
```

## Parameters

- `direction`: The direction for network packets to travel.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Typically, you do not call this method yourself. The concrete subclasses set the direction during initialization.

## See Also

### Configuring the Queue Attributes

- [SetPacketBufferPool](setpacketbufferpool.md): Assigns the specified buffer pool with this queue.
