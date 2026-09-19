> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreamlib_h/1810203-getbuffercount

# GetBufferCount

**Interface language:** Objective-C

**Framework:** IOKit

Gets the number of buffers in the stream.

## Declaration

```objectivec
IOItemCount ( *GetBufferCount)(
   IOStreamRef stream );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.

<a id="return_value"></a>

## Return Value

Returns then number of buffers in the stream.

## See Also

### Buffer information

- [GetBufferInfo](1810214-getbufferinfo.md): Gets information about a buffer in an IOStream.
