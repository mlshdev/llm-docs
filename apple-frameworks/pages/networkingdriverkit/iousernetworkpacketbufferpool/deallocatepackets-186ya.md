> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketbufferpool/deallocatepackets-186ya](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/deallocatepackets-186ya)

# DeallocatePackets

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Disposes of any resources associated with the specified packets and makes them available for reuse.

## Declaration

```objectivec
virtual kern_return_t DeallocatePackets(IOUserNetworkPacket **packets, uint32_t packetsCount);
```

## Parameters

- `packets`: An array of packets to deallocate. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.
- `packetsCount`: The number of items in the `packets` parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

After you move one or more packets to the appropriate completion queue, call this method to recycle those packets. Recycling packets makes them available for use with new incoming or outgoing packets.

## See Also

### Deallocating Packets

- [DeallocatePacket](deallocatepacket-3i02n.md): Deprecated. Disposes of any resources associated with the packet and makes the packet available for reuse.
