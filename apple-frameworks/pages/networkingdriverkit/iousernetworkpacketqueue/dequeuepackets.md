> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/dequeuepackets](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/dequeuepackets)

# DequeuePackets

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Retrieves multiple network packets from the queue.

## Declaration

```objectivec
virtual uint32_t DequeuePackets(IOUserNetworkPacket **packets, uint32_t maxDequeueCount);
```

## Parameters

- `packets`: On return, an array containing the next available packets.
- `maxDequeueCount`: The number of packets you want to dequeue.

<a id="return-value"></a>

## Return Value

The actual number of packets returned in the `packets` parameter.

<a id="Discussion"></a>

## Discussion

Call this method to retrieve multiple packets from the submission queue. This method returns as many packets as are available, up to the maximum number you specify.

## See Also

### Queueing and Dequeueing Packets

- [EnqueuePacket](enqueuepacket.md): Adds a single network packet to the queue for processing.
- [EnqueuePackets](enqueuepackets-qzx.md): Adds multiple network packets to the queue for processing.
- [DequeuePacket](dequeuepacket.md): Retrieves a single network packet from the queue.
