> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacket/getheadroom](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/getheadroom)

# GetHeadroom

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Gets the number of bytes reserved at the front of the packet’s buffer.

## Declaration

```objectivec
virtual kern_return_t GetHeadroom(uint8_t *headroom) const;
```

## Parameters

- `headroom`: On return, the headroom value.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Getting the Packet Information

- [GetLinkHeaderLength](getlinkheaderlength-8dlhu.md): Deprecated. Gets the number of bytes to use for the link header.
- [GetDataOffset](getdataoffset-4tw7y.md): Deprecated. Gets the offset to the beginning of the packet’s data.
- [GetDataLength](getdatalength-8km3n.md): Deprecated. Gets the number of bytes of data in the packet.
- [GetMemorySegmentOffset](getmemorysegmentoffset-39e4c.md): Deprecated. Gets the offset to the beginning of the packet in the corresponding memory buffer.
