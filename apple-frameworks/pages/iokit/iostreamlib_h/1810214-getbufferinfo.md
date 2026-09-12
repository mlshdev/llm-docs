> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810214-getbufferinfo](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810214-getbufferinfo)

# GetBufferInfo

**Interface language:** Objective-C

**Framework:** IOKit

Gets information about a buffer in an IOStream.

## Declaration

```objectivec
IOReturn ( *GetBufferInfo)(
   IOStreamRef stream,
   IOStreamBufferID bufferID,
   void **dataBufferAddressOut,
   IOByteCount *dataBufferSizeOut,
   void **controlBufferAddressOut,
   IOByteCount *controlBufferSizeOut );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.
- `bufferID`:
- `dataBufferAddressOut`:
- `dataBufferSizeOut`:
- `controlBufferAddressOut`:
- `controlBufferSizeOut`:

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the buffer ID was valid.

## See Also

### Buffer information

- [GetBufferCount](1810203-getbuffercount.md): Gets the number of buffers in the stream.
