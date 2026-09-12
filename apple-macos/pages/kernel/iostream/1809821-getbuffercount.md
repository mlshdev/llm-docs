> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809821-getbuffercount](https://developer.apple.com/documentation/kernel/iostream/1809821-getbuffercount)

# getBufferCount

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOItemCount getBufferCount(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if all the buffers were successfully removed. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.

## See Also

### Managing buffers in an IOStream

- [addBuffer](1809807-addbuffer.md): Add a buffer to an IOStream.
- [addBuffers](1809814-addbuffers.md)
- [getBuffers](1809828-getbuffers.md): Get an array containing all the buffers in the stream.
- [getBufferWithID](1809834-getbufferwithid.md)
- [removeAllBuffers()](1809839-removeallbuffers.md)
- [removeAllBuffers()](1809846-removeallbuffers.md)
- [removeBuffer(IOStreamBuffer \*)](1809852-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
- [removeBuffer(IOStreamBufferID)](1809860-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
