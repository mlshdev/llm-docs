> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810117-getinputqueue](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810117-getinputqueue)

# GetInputQueue

**Interface language:** Objective-C

**Framework:** IOKit

Get the shared memory queue for buffers moving in from user to kernel space.

## Declaration

```objectivec
IOStreamBufferQueue *( *GetInputQueue)(
   IOStreamRef stream );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.

<a id="return_value"></a>

## Return Value

A pointer to the shared memory IOStreamBufferQueue structure for the input queue.

<a id="overview"></a>

## Overview

If you use the notification functions, you should never need to access the queues directly.

## See Also

### Input and output

- [GetInputPort](1810103-getinputport.md): Get the notification port for buffers moving in from user to kernel space.
- [GetOutputPort](1810125-getoutputport.md): Get the notification port for buffers moving out from kernel to user space.
- [GetOutputQueue](1810141-getoutputqueue.md): Get the shared memory queue for buffers moving out from kernel to user space.
- [SetOutputCallback](1810149-setoutputcallback.md): Set the callback function to be called when a new buffer is available from the kernel.
