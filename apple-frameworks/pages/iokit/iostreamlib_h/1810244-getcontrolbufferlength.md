> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810244-getcontrolbufferlength](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810244-getcontrolbufferlength)

# GetControlBufferLength

**Interface language:** Objective-C

**Framework:** IOKit

Get the length of the control area of an IOStreamBuffer.

## Declaration

```objectivec
IOByteCount ( *GetControlBufferLength)(
   IOStreamRef stream,
   IOStreamBufferID bufferID );
```

## Parameters

- `stream`: The IOStreamRef of the stream owning the buffer.
- `bufferID`: The IOStreamBufferID of the buffer to operate on.

<a id="return_value"></a>

## Return Value

The length in bytes of the control buffer, or 0 if there is no control buffer.

## See Also

### Buffer convenience functions

- [GetControlBuffer](1810229-getcontrolbuffer.md): Get a pointer to the control area of an IOStreamBuffer.
- [GetDataBuffer](1810262-getdatabuffer.md): Get a pointer to the data area of an IOStreamBuffer.
- [GetDataBufferLength](1810274-getdatabufferlength.md): Get the length of the data area of an IOStreamBuffer.
- [GetMode](1810285-getmode.md)
- [SetMode](1810307-setmode.md)
- [StartStream](1810318-startstream.md)
- [StopStream](1810328-stopstream.md)
- [SuspendStream](1810341-suspendstream.md)
