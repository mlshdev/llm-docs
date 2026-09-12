> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacket/setheadroom](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/setheadroom)

# SetHeadroom

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Changes the number of bytes to reserve at the front of the packet’s buffer to the specified value.

## Declaration

```objectivec
virtual kern_return_t SetHeadroom(uint8_t headroom);
```

## Parameters

- `headroom`: The new headroom value, specified in bytes.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Configuring the Packet State Information

- [SetLinkHeaderLength](setlinkheaderlength-9fqmg.md): Deprecated. Changes the number of bytes to use for the link header to the specified value.
- [SetDataOffset](setdataoffset-16kx3.md): Deprecated. Changes the offset to the beginning of the packet’s data to the specified value.
- [SetDataLength](setdatalength-788b.md): Deprecated. Changes the number of bytes of data in the packet to the specified value.
