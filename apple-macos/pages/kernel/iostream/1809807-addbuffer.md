> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809807-addbuffer](https://developer.apple.com/documentation/kernel/iostream/1809807-addbuffer)

# addBuffer

**Interface language:** Objective-C

**Framework:** Kernel

Add a buffer to an IOStream.

## Declaration

```objectivec
virtual IOReturn addBuffer(
 IOStreamBuffer *buffer); 
```

## Parameters

- `buffer`:

<a id="overview"></a>

## Overview

Adds an IOStreamBuffer to an IOStream. It will be added to the end of the buffer array, so the buffer ID of existing buffers will not change.

## See Also

### Managing buffers in an IOStream

- [addBuffers](1809814-addbuffers.md)
- [getBufferCount](1809821-getbuffercount.md)
- [getBuffers](1809828-getbuffers.md): Get an array containing all the buffers in the stream.
- [getBufferWithID](1809834-getbufferwithid.md)
- [removeAllBuffers()](1809839-removeallbuffers.md)
- [removeAllBuffers()](1809846-removeallbuffers.md)
- [removeBuffer(IOStreamBuffer \*)](1809852-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
- [removeBuffer(IOStreamBufferID)](1809860-removebuffer.md): Removes a buffer from the stream. Buffers cannot be removed while the stream is open, as this will change the buffer IDs of existing buffers.
