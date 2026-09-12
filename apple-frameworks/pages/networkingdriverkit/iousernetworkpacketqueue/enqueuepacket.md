> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/enqueuepacket](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/enqueuepacket)

# EnqueuePacket

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Adds a single network packet to the queue for processing.

## Declaration

```objectivec
virtual kern_return_t EnqueuePacket(IOUserNetworkPacket *packet);
```

## Parameters

- `packet`: The packet to add to the queue.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Call this method when you are ready to submit a single packet to a completion queue for processing. After the system processes the enqueued network packet, it recycles it and makes it available on the corresponding submission queue.

## See Also

### Queueing and Dequeueing Packets

- [EnqueuePackets](enqueuepackets-qzx.md): Adds multiple network packets to the queue for processing.
- [DequeuePacket](dequeuepacket.md): Retrieves a single network packet from the queue.
- [DequeuePackets](dequeuepackets.md): Retrieves multiple network packets from the queue.
