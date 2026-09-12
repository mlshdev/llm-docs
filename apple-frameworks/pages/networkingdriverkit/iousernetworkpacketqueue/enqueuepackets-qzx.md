> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/enqueuepackets-qzx](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/enqueuepackets-qzx)

# EnqueuePackets

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Adds multiple network packets to the queue for processing.

## Declaration

```objectivec
virtual uint32_t EnqueuePackets(IOUserNetworkPacket **packets, uint32_t packetCount);
```

## Parameters

- `packets`: An array of network packets you want to add to the queue.
- `packetCount`: The number of network packets in the `packets` parameter.

<a id="return-value"></a>

## Return Value

The number of packets actually added to the queue.

<a id="Discussion"></a>

## Discussion

Call this method when you are ready to submit multiple packets to a completion queue for processing. After the system processes the enqueued network packets, it recycles them and makes them available on the corresponding submission queue.

## See Also

### Queueing and Dequeueing Packets

- [EnqueuePacket](enqueuepacket.md): Adds a single network packet to the queue for processing.
- [DequeuePacket](dequeuepacket.md): Retrieves a single network packet from the queue.
- [DequeuePackets](dequeuepackets.md): Retrieves multiple network packets from the queue.
