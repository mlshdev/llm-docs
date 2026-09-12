> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809653-dequeueinputentry](https://developer.apple.com/documentation/kernel/iostream/1809653-dequeueinputentry)

# dequeueInputEntry

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn dequeueInputEntry(
 IOStreamBufferQueueEntry *entry ); 
```

## Parameters

- `entry`:

## See Also

### Queueing and dequeueing buffers

- [enqueueOutputBuffer](1809665-enqueueoutputbuffer.md): A convenience method for enqueueing a buffer.
- [enqueueOutputEntry](1809670-enqueueoutputentry.md)
