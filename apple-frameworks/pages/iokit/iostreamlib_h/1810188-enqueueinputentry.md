> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810188-enqueueinputentry](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810188-enqueueinputentry)

# EnqueueInputEntry

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
IOReturn ( *EnqueueInputEntry)(
   IOStreamRef stream,
   IOStreamBufferQueueEntry *entry);
```

## See Also

### Buffer operations on streams

- [DequeueOutputEntry](1810159-dequeueoutputentry.md): Get the next IOStreamBufferQueueEntry available from the output queue.
- [EnqueueInputBuffer](1810172-enqueueinputbuffer.md): Send a buffer to the kernel side of the IOStream on the input queue.
