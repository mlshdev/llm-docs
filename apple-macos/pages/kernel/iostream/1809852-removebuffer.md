> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809852-removebuffer](https://developer.apple.com/documentation/kernel/iostream/1809852-removebuffer)

# removeBuffer(IOStreamBuffer \*)

**Interface language:** Objective-C

**Framework:** Kernel

Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.

## Declaration

```objectivec
virtual IOReturn removeBuffer(
 IOStreamBuffer *buffer); 
```

## Parameters

- `buffer`: A pointer to an IOStreamBuffer object in the stream.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the buffer was removed, or kIOReturnNotFound if the buffer was not in this stream.

## See Also

### Managing buffers in an IOStream

- [addBuffer](1809807-addbuffer.md): Add a buffer to an IOStream.
- [addBuffers](1809814-addbuffers.md)
- [getBufferCount](1809821-getbuffercount.md)
- [getBuffers](1809828-getbuffers.md): Get an array containing all the buffers in the stream.
- [getBufferWithID](1809834-getbufferwithid.md)
- [removeAllBuffers()](1809839-removeallbuffers.md)
- [removeAllBuffers()](1809846-removeallbuffers.md)
- [removeBuffer(IOStreamBufferID)](1809860-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
