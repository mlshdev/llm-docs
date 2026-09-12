> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810149-setoutputcallback](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810149-setoutputcallback)

# SetOutputCallback

**Interface language:** Objective-C

**Framework:** IOKit

Set the callback function to be called when a new buffer is available from the kernel.

## Declaration

```objectivec
IOReturn ( *SetOutputCallback)(
   IOStreamRef stream,
   IOStreamOutputCallback callback,
   void *context );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on. Pass NULL to remove the callback.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the callback was successfully set or removed.

## See Also

### Input and output

- [GetInputPort](1810103-getinputport.md): Get the notification port for buffers moving in from user to kernel space.
- [GetInputQueue](1810117-getinputqueue.md): Get the shared memory queue for buffers moving in from user to kernel space.
- [GetOutputPort](1810125-getoutputport.md): Get the notification port for buffers moving out from kernel to user space.
- [GetOutputQueue](1810141-getoutputqueue.md): Get the shared memory queue for buffers moving out from kernel to user space.
