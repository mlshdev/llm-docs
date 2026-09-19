> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/setdatalength-788b

# SetDataLength

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Changes the number of bytes of data in the packet to the specified value.

## Declaration

```objectivec
virtual kern_return_t SetDataLength(uint32_t length);
```

## Parameters

- `length`: The new data length value, specified in bytes.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Configuring the Packet State Information

- [SetHeadroom](setheadroom.md): Deprecated. Changes the number of bytes to reserve at the front of the packet’s buffer to the specified value.
- [SetLinkHeaderLength](setlinkheaderlength-9fqmg.md): Deprecated. Changes the number of bytes to use for the link header to the specified value.
- [SetDataOffset](setdataoffset-16kx3.md): Deprecated. Changes the offset to the beginning of the packet’s data to the specified value.
