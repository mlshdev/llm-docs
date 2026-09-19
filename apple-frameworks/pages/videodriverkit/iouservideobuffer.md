> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobuffer

# IOUserVideoBuffer

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
class IOUserVideoBuffer;
```

## Topics

### Creating a video buffer

- [Create](iouservideobuffer/create.md): Beta.
- [init](iouservideobuffer/init.md): Beta.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.

### Freeing a video buffer

- [free](iouservideobuffer/free.md): Beta.

### Getting information about the class

- [GetClassID](iouservideobuffer/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideobuffer/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Working with memory descriptors

- [SetDataMemoryDescriptor](iouservideobuffer/setdatamemorydescriptor.md): Beta. Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetDataMemoryDescriptor](iouservideobuffer/getdatamemorydescriptor.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [SetControlMemoryDescriptor](iouservideobuffer/setcontrolmemorydescriptor.md): Beta. Sets a new IOMemoryDescriptor to use for video IO on the IOUserVideoStream.
- [GetControlMemoryDescriptor](iouservideobuffer/getcontrolmemorydescriptor.md): Beta. Gets the memory descriptior used for video IO that was initialized with or set on the video stream.

### Accessing buffer ID

- [getBufferID](iouservideobuffer/getbufferid.md): Beta.
- [setBufferID](iouservideobuffer/setbufferid.md): Beta.
- [IOStreamBufferID](iostreambufferid.md): Beta.
- [kIOStreamBufferIDMask](kiostreambufferidmask.md): Beta.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)

## See Also

### Working with video buffers

- [GetBufferCount](iouservideostream/getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](iouservideostream/getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](iouservideostream/getbufferwithid.md): Beta.
- [addBuffer](iouservideostream/addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](iouservideostream/addbuffers.md): Beta.
- [enqueueOutputBuffer](iouservideostream/enqueueoutputbuffer.md): Beta.
- [removeAllBuffers](iouservideostream/removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](iouservideostream/sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.
