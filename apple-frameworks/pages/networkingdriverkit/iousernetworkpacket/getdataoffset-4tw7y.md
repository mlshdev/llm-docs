> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacket/getdataoffset-4tw7y](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/getdataoffset-4tw7y)

# GetDataOffset

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Gets the offset to the beginning of the packet’s data.

## Declaration

```objectivec
virtual kern_return_t GetDataOffset(uint16_t *offset) const;
```

## Parameters

- `offset`: On return, the offset value.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Getting the Packet Information

- [GetHeadroom](getheadroom.md): Deprecated. Gets the number of bytes reserved at the front of the packet’s buffer.
- [GetLinkHeaderLength](getlinkheaderlength-8dlhu.md): Deprecated. Gets the number of bytes to use for the link header.
- [GetDataLength](getdatalength-8km3n.md): Deprecated. Gets the number of bytes of data in the packet.
- [GetMemorySegmentOffset](getmemorysegmentoffset-39e4c.md): Deprecated. Gets the offset to the beginning of the packet in the corresponding memory buffer.
