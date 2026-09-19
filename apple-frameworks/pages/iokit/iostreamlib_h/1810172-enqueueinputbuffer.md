> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreamlib_h/1810172-enqueueinputbuffer

# EnqueueInputBuffer

**Interface language:** Objective-C

**Framework:** IOKit

Send a buffer to the kernel side of the IOStream on the input queue.

## Declaration

```objectivec
IOReturn ( *EnqueueInputBuffer)(
   IOStreamRef stream,
   IOStreamBufferID bufferID,
   IOByteCount dataOffset,
   IOByteCount dataLength,
   IOByteCount controlOffset,
   IOByteCount controlLength );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.
- `bufferID`: The IOStreamBufferID of the buffer to place on the queue.
- `dataLength`: The length of the valid data in the buffer.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the buffer was successfully placed on the input queue.

## See Also

### Buffer operations on streams

- [DequeueOutputEntry](1810159-dequeueoutputentry.md): Get the next IOStreamBufferQueueEntry available from the output queue.
- [EnqueueInputEntry](1810188-enqueueinputentry.md)
