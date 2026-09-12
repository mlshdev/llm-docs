> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810103-getinputport](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810103-getinputport)

# GetInputPort

**Interface language:** Objective-C

**Framework:** IOKit

Get the notification port for buffers moving in from user to kernel space.

## Declaration

```objectivec
CFMachPortRef ( *GetInputPort)(
   IOStreamRef stream );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.

<a id="return_value"></a>

## Return Value

A CFMachPortRef for the input notification port.

## See Also

### Input and output

- [GetInputQueue](1810117-getinputqueue.md): Get the shared memory queue for buffers moving in from user to kernel space.
- [GetOutputPort](1810125-getoutputport.md): Get the notification port for buffers moving out from kernel to user space.
- [GetOutputQueue](1810141-getoutputqueue.md): Get the shared memory queue for buffers moving out from kernel to user space.
- [SetOutputCallback](1810149-setoutputcallback.md): Set the callback function to be called when a new buffer is available from the kernel.
