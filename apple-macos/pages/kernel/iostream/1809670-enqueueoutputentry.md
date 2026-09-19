> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iostream/1809670-enqueueoutputentry

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
