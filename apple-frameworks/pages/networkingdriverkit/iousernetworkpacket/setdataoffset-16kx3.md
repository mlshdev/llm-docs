> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacket/setdataoffset-16kx3](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/setdataoffset-16kx3)

# SetDataOffset

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Changes the offset to the beginning of the packet’s data to the specified value.

## Declaration

```objectivec
virtual kern_return_t SetDataOffset(uint16_t offset);
```

## Parameters

- `offset`: The new data offset value, specified in bytes from the beginning of the buffer.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Configuring the Packet State Information

- [SetHeadroom](setheadroom.md): Deprecated. Changes the number of bytes to reserve at the front of the packet’s buffer to the specified value.
- [SetLinkHeaderLength](setlinkheaderlength-9fqmg.md): Deprecated. Changes the number of bytes to use for the link header to the specified value.
- [SetDataLength](setdatalength-788b.md): Deprecated. Changes the number of bytes of data in the packet to the specified value.
