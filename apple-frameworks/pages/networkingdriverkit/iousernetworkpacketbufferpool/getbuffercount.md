> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketbufferpool/getbuffercount](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/getbuffercount)

# GetBufferCount

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Returns the number of buffers associated with the network packet buffer pool.

## Declaration

```objectivec
virtual kern_return_t GetBufferCount(uint32_t *count);
```

## Parameters

- `count`: On output, the number of buffers in the pool. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

## See Also

### Getting Pool Information

- [GetPacketCount](getpacketcount.md): Returns the number of network packets that the pool is capable of storing.
