> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/dequeuepacket](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/dequeuepacket)

# DequeuePacket

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Retrieves a single network packet from the queue.

## Declaration

```objectivec
virtual kern_return_t DequeuePacket(IOUserNetworkPacket **packet);
```

## Parameters

- `packet`: On return, an array containing one element, which represents the next available packet.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method to retrieve a single packet from a submission queue. This method returns the requested packet, or an error if no more packets are available.

## See Also

### Queueing and Dequeueing Packets

- [EnqueuePacket](enqueuepacket.md): Adds a single network packet to the queue for processing.
- [EnqueuePackets](enqueuepackets-qzx.md): Adds multiple network packets to the queue for processing.
- [DequeuePackets](dequeuepackets.md): Retrieves multiple network packets from the queue.
