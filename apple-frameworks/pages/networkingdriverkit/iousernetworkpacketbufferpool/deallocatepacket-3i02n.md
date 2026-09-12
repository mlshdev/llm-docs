> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketbufferpool/deallocatepacket-3i02n](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/deallocatepacket-3i02n)

# DeallocatePacket

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Disposes of any resources associated with the packet and makes the packet available for reuse.

## Declaration

```objectivec
virtual kern_return_t DeallocatePacket(IOUserNetworkPacket *packet);
```

## Parameters

- `packet`: The packet to deallocate. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

After you move a packet to the appropriate completion queue, call this method to recycle the packet. Recycling the packet makes it available for use with a new incoming or outgoing packet.

## See Also

### Deallocating Packets

- [DeallocatePackets](deallocatepackets-186ya.md): Deprecated. Disposes of any resources associated with the specified packets and makes them available for reuse.
