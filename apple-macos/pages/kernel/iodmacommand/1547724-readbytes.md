> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547724-readbytes](https://developer.apple.com/documentation/kernel/iodmacommand/1547724-readbytes)

# readBytes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Copy data from the IODMACommand's buffer to the specified buffer.

## Declaration

```objectivec
UInt64 readBytes(UInt64 offset, void *bytes, UInt64 length);
```

## Parameters

- `offset`: A byte offset into the IODMACommand's memory, relative to the prepared offset.
- `bytes`: The caller supplied buffer to copy the data to.
- `length`: The length of the data to copy.

<a id="return_value"></a>

## Return Value

The number of bytes copied, zero will be returned if the specified offset is beyond the prepared length of the IODMACommand.

<a id="discussion"></a>

## Discussion

This method copies data from the IODMACommand's memory at the given offset, to the caller's buffer. The IODMACommand must be prepared, and the offset is relative to the prepared offset.

## See Also

### Transferring Data

- [readBytes](1811301-readbytes.md): Copy data from the IODMACommand's buffer to the specified buffer.
- [writeBytes](1811341-writebytes.md): Copy data to the IODMACommand's buffer from the specified buffer.
- [writeBytes](1547742-writebytes.md): Copy data to the IODMACommand's buffer from the specified buffer.
