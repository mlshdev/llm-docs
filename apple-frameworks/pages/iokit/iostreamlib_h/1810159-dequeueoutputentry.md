> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreamlib_h/1810159-dequeueoutputentry

# DequeueOutputEntry

**Interface language:** Objective-C

**Framework:** IOKit

Get the next IOStreamBufferQueueEntry available from the output queue.

## Declaration

```objectivec
IOReturn ( *DequeueOutputEntry)(
   IOStreamRef stream,
   IOStreamBufferQueueEntry *entry );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.
- `entry`: A pointer to an IOStreamBufferQueueEntry structure. The next available entry from the output queue will be copied into it.

<a id="return_value"></a>

## Return Value

The IOStreamBufferID of the next available buffer, or kInvalidIOStreamBufferID if no buffer is in the queue.

## See Also

### Buffer operations on streams

- [EnqueueInputBuffer](1810172-enqueueinputbuffer.md): Send a buffer to the kernel side of the IOStream on the input queue.
- [EnqueueInputEntry](1810188-enqueueinputentry.md)
