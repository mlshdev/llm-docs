> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/getpacketbufferpool-63snl

# GetPacketBufferPool

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Gets the memory buffer that contains the pakcet.

## Declaration

```objectivec
virtual kern_return_t GetPacketBufferPool(IOUserNetworkPacketBufferPool **pool) const;
```

## Parameters

- `pool`: On return, the memory buffer containing the packet.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.
