> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream

# IOUserVideoStream

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A video stream.

## Declaration

```objectivec
class IOUserVideoStream;
```

<a id="overview"></a>

## Overview

[IOUserVideoDevice](iouservideodevice.md) instances own [IOUserVideoStream](iouservideostream.md) instances. [IOUserVideoStream](iouservideostream.md) allocates memory descriptors that the host uses for running IO. Changes to the owning [IOUserVideoDevice](iouservideodevice.md) will potentially update formats on the underlying [IOUserVideoStream](iouservideostream.md).

## Topics

### Creating a video stream

- [Create](iouservideostream/create.md): Beta.
- [init](iouservideostream/init.md): Beta. Initializes an video stream.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.

### Freeing a video stream

- [free](iouservideostream/free.md): Beta. Frees the video stream.

### Getting information about the class

- [GetClassID](iouservideostream/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideostream/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Performing I/O

- [StartIO](iouservideostream/startio.md): Beta. Tells the stream to start IO.
- [StopIO](iouservideostream/stopio.md): Beta. Tells the stream to stop IO.
- [IOUserVideoStartStopFlags](videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
- [InputNotification](iouservideostream/inputnotification.md): Beta.

### Working with stream formats

- [SetCurrentStreamFormat](iouservideostream/setcurrentstreamformat.md): Beta. Sets the current stream format.
- [GetCurrentStreamFormat](iouservideostream/getcurrentstreamformat.md): Beta. Gets the current basic description of the stream.
- [SetAvailableStreamFormats](iouservideostream/setavailablestreamformats.md): Beta. Sets the available descriptions for the stream.
- [GetAvailableStreamFormats](iouservideostream/getavailablestreamformats.md): Beta. Gets the available basic descriptions for the stream.
- [GetNumberAvailableStreamFormats](iouservideostream/getnumberavailablestreamformats.md): Beta. Gets the number of available description for the stream.
- [IOUserVideoStreamBasicDescription](videodriverkit/iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [GetStreamDirection](iouservideostream/getstreamdirection.md): Beta. Gets the direction of the stream.
- [IOUserVideoStreamDirection](videodriverkit/iouservideostreamdirection.md): Beta. The direction of a video stream.
- [SetStreamIsActive](iouservideostream/setstreamisactive.md): Beta. Sets whether that the stream is active and doing IO.
- [GetStreamIsActive](iouservideostream/getstreamisactive.md): Beta. Gets the stream activity state.

### Working with stream terminals

- [SetTerminalType](iouservideostream/setterminaltype.md): Beta. Sets the terminal type of the stream.
- [GetTerminalType](iouservideostream/getterminaltype.md): Beta. Gets the terminal type of the stream.
- [IOUserVideoStreamTerminalType](videodriverkit/iouservideostreamterminaltype.md): Beta. The terminal type of video stream.

### Working with memory descriptors

- [GetOutputControlMemoryDescriptor](iouservideostream/getoutputcontrolmemorydescriptor.md): Beta. Gets the memory descriptor used for the control data part of a buffer.
- [GetOutputDataMemoryDescriptor](iouservideostream/getoutputdatamemorydescriptor.md): Beta. Gets the memory descriptor used for the video data part of a buffer.
- [GetOutputQueueMemoryDescriptor](iouservideostream/getoutputqueuememorydescriptor.md): Beta. Returns an memory descriptorrepesenting the shared memory output queue buffer.
- [GetInputQueueMemoryDescriptor](iouservideostream/getinputqueuememorydescriptor.md): Beta. Returns an memory descriptor for the shared memory input queue buffer.
- [GetMemoryObjectID](iouservideostream/getmemoryobjectid.md): Beta. Gets the video object identifier for a memory object.

### Managing stream changes

- [HandleChangeCurrentStreamFormat](iouservideostream/handlechangecurrentstreamformat.md): Beta. The system calls this virtual method when the stream’s format changes.
- [HandleChangeStreamIsActive](iouservideostream/handlechangestreamisactive.md): Beta. The system calls this virtual method when the stream active state changes.
- [DeviceSampleRateChanged](iouservideostream/devicesampleratechanged.md): Beta. Call to update stream formats when the owning video device changes sample rate

### Working with video buffers

- [GetBufferCount](iouservideostream/getbuffercount.md): Beta. Returns the number of buffers in the buffer queue.
- [GetBufferList](iouservideostream/getbufferlist.md): Beta. Gets an array containing all the buffers in the video stream.
- [GetBufferWithID](iouservideostream/getbufferwithid.md): Beta.
- [addBuffer](iouservideostream/addbuffer.md): Beta. Add a buffer to a video stream.
- [addBuffers](iouservideostream/addbuffers.md): Beta.
- [enqueueOutputBuffer](iouservideostream/enqueueoutputbuffer.md): Beta.
- [IOUserVideoBuffer](iouservideobuffer.md): Beta.
- [removeAllBuffers](iouservideostream/removeallbuffers.md): Beta. Removes all buffers from the video stream.
- [SendOutputBufferNotification](iouservideostream/sendoutputbuffernotification.md): Beta. Sends a notification to the host that data is available for reading on the output queue.

### Working with channels

- [SetStartingChannel](iouservideostream/setstartingchannel.md): Beta. Sets the starting channel of the stream.
- [GetStartingChannel](iouservideostream/getstartingchannel.md): Beta. Gets the starting channel of the stream.

### Working with queues

- [GetInputQueue](iouservideostream/getinputqueue.md): Beta. Gets the buffer queue for the stream.
- [GetOutputQueue](iouservideostream/getoutputqueue.md): Beta. Gets the memory descriptor used for video IO that was initialized with or set on the video stream.
- [createQueues](iouservideostream/createqueues.md): Beta. Creates the shared input and output queues, without regard to whether the stream is open or not.
- [destroyQueues](iouservideostream/destroyqueues.md): Beta. Releases the shared input and output queues.
- [dequeueInputEntry](iouservideostream/dequeueinputentry.md): Beta.
- [enqueueOutputEntry](iouservideostream/enqueueoutputentry.md): Beta.
- [SendBufferQueueChange](iouservideostream/sendbufferqueuechange.md): Beta. Sends a notification to the host that the buffer queue has changed.
- [IOStreamBufferQueue](iostreambufferqueue.md): Beta.

### Stream memory types

- [kIOStreamMemoryTypeBufferControl](kiostreammemorytypebuffercontrol.md): Beta.
- [kIOStreamMemoryTypeBufferData](kiostreammemorytypebufferdata.md): Beta.
- [kIOStreamMemoryTypeInputQueue](kiostreammemorytypeinputqueue.md): Beta.
- [kIOStreamMemoryTypeMask](kiostreammemorytypemask.md): Beta.
- [kIOStreamMemoryTypeOutputQueue](kiostreammemorytypeoutputqueue.md): Beta.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)
