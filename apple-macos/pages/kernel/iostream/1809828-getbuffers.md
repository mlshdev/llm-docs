> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809828-getbuffers](https://developer.apple.com/documentation/kernel/iostream/1809828-getbuffers)

# getBuffers

**Interface language:** Objective-C

**Framework:** Kernel

Get an array containing all the buffers in the stream.

## Declaration

```objectivec
virtual OSArray *getBuffers(
 void ); 
```

<a id="overview"></a>

## Overview

Returns an OSArray containing all the buffers in the stream in order of their buffer ID.

## See Also

### Managing buffers in an IOStream

- [addBuffer](1809807-addbuffer.md): Add a buffer to an IOStream.
- [addBuffers](1809814-addbuffers.md)
- [getBufferCount](1809821-getbuffercount.md)
- [getBufferWithID](1809834-getbufferwithid.md)
- [removeAllBuffers()](1809839-removeallbuffers.md)
- [removeAllBuffers()](1809846-removeallbuffers.md)
- [removeBuffer(IOStreamBuffer \*)](1809852-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
- [removeBuffer(IOStreamBufferID)](1809860-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
