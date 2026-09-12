> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h](https://developer.apple.com/documentation/iokit/iostreamlib_h)

# IOStreamLib.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

IOCFPlugin library for using IOStream objects.

<a id="overview"></a>

## Overview

The IOStream plugin provides a convenient set of functions for accessing and manipulating IOStream objects from user programs.

<a id="1674705"></a>

### Included Headers

- \<sys/cdefs.h\>
- \<IOKit/IOKitLib.h\>
- \<IOKit/IOCFPlugIn.h\>
- \<CoreFoundation/CoreFoundation.h\>
- \<IOKit/stream/IOStreamShared.h\>

## Topics

### Run loop operations

- [AddToRunLoop](iostreamlib_h/1809610-addtorunloop.md): Add the CFRunLoopSource for the notification port to a run loop.
- [GetRunLoopSource](iostreamlib_h/1809678-getrunloopsource.md): Gets a CFRunLoopSource for the CFMachPort used for notifications from the kernel that data is ready.
- [RemoveFromRunLoop](iostreamlib_h/1809745-removefromrunloop.md): Remove the CFRunLoopSource for the notification port from a run loop.

### Opening and closing streams

- [Close](iostreamlib_h/1809625-close.md): Closes an IOStream.
- [Open](iostreamlib_h/1809697-open.md): Open an IOStream from user space.

### Notifications

- [SendInputNotification](iostreamlib_h/1810077-sendinputnotification.md): Send a notification to the kernel side of the IOStream that data is available in the input queue.
- [SendInputSyncNotification](iostreamlib_h/1810090-sendinputsyncnotification.md): Notify the kernel side of the stream that input is ready by using a fast trap to call directly into the stream user client driver. This will transfer control to the kernel and continue executing on your same thread, rather than sending the notification to a separate thread.

### Input and output

- [GetInputPort](iostreamlib_h/1810103-getinputport.md): Get the notification port for buffers moving in from user to kernel space.
- [GetInputQueue](iostreamlib_h/1810117-getinputqueue.md): Get the shared memory queue for buffers moving in from user to kernel space.
- [GetOutputPort](iostreamlib_h/1810125-getoutputport.md): Get the notification port for buffers moving out from kernel to user space.
- [GetOutputQueue](iostreamlib_h/1810141-getoutputqueue.md): Get the shared memory queue for buffers moving out from kernel to user space.
- [SetOutputCallback](iostreamlib_h/1810149-setoutputcallback.md): Set the callback function to be called when a new buffer is available from the kernel.

### Buffer operations on streams

- [DequeueOutputEntry](iostreamlib_h/1810159-dequeueoutputentry.md): Get the next IOStreamBufferQueueEntry available from the output queue.
- [EnqueueInputBuffer](iostreamlib_h/1810172-enqueueinputbuffer.md): Send a buffer to the kernel side of the IOStream on the input queue.
- [EnqueueInputEntry](iostreamlib_h/1810188-enqueueinputentry.md)

### Buffer information

- [GetBufferCount](iostreamlib_h/1810203-getbuffercount.md): Gets the number of buffers in the stream.
- [GetBufferInfo](iostreamlib_h/1810214-getbufferinfo.md): Gets information about a buffer in an IOStream.

### Buffer convenience functions

- [GetControlBuffer](iostreamlib_h/1810229-getcontrolbuffer.md): Get a pointer to the control area of an IOStreamBuffer.
- [GetControlBufferLength](iostreamlib_h/1810244-getcontrolbufferlength.md): Get the length of the control area of an IOStreamBuffer.
- [GetDataBuffer](iostreamlib_h/1810262-getdatabuffer.md): Get a pointer to the data area of an IOStreamBuffer.
- [GetDataBufferLength](iostreamlib_h/1810274-getdatabufferlength.md): Get the length of the data area of an IOStreamBuffer.
- [GetMode](iostreamlib_h/1810285-getmode.md)
- [SetMode](iostreamlib_h/1810307-setmode.md)
- [StartStream](iostreamlib_h/1810318-startstream.md)
- [StopStream](iostreamlib_h/1810328-stopstream.md)
- [SuspendStream](iostreamlib_h/1810341-suspendstream.md)

### Callbacks

- [IOStreamCallback](iostreamlib_h/iostreamcallback.md)
- [IOStreamOutputCallback](iostreamoutputcallback.md)

### Data Types

- [IOStreamRef](iostreamref.md)
