> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547742-writebytes](https://developer.apple.com/documentation/kernel/iodmacommand/1547742-writebytes)

# writeBytes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Copy data to the IODMACommand's buffer from the specified buffer.

## Declaration

```objectivec
UInt64 writeBytes(UInt64 offset, const void *bytes, UInt64 length);
```

## Parameters

- `offset`: A byte offset into the IODMACommand's memory, relative to the prepared offset.
- `bytes`: The caller supplied buffer to copy the data from.
- `length`: The length of the data to copy.

<a id="return_value"></a>

## Return Value

The number of bytes copied, zero will be returned if the specified offset is beyond the prepared length of the IODMACommand.

<a id="discussion"></a>

## Discussion

This method copies data to the IODMACommand's memory at the given offset, from the caller's buffer. The IODMACommand must be prepared, and the offset is relative to the prepared offset.

## See Also

### Transferring Data

- [readBytes](1811301-readbytes.md): Copy data from the IODMACommand's buffer to the specified buffer.
- [readBytes](1547724-readbytes.md): Copy data from the IODMACommand's buffer to the specified buffer.
- [writeBytes](1811341-writebytes.md): Copy data to the IODMACommand's buffer from the specified buffer.
