> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809670-enqueueoutputentry](https://developer.apple.com/documentation/kernel/iostream/1809670-enqueueoutputentry)

# enqueueOutputEntry

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn enqueueOutputEntry(
 IOStreamBufferQueueEntry *entry ); 
```

## Parameters

- `entry`:

## See Also

### Queueing and dequeueing buffers

- [dequeueInputEntry](1809653-dequeueinputentry.md)
- [enqueueOutputBuffer](1809665-enqueueoutputbuffer.md): A convenience method for enqueueing a buffer.
