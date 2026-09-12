> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809665-enqueueoutputbuffer](https://developer.apple.com/documentation/kernel/iostream/1809665-enqueueoutputbuffer)

# enqueueOutputBuffer

**Interface language:** Objective-C

**Framework:** Kernel

A convenience method for enqueueing a buffer.

## Declaration

```objectivec
virtual IOReturn enqueueOutputBuffer(
 IOStreamBuffer *buffer, 
 IOByteCount dataOffset = 0, 
 IOByteCount dataLength = 0, 
 IOByteCount controlOffset = 0, 
 IOByteCount controlLength = 0); 
```

## Parameters

- `buffer`:
- `dataOffset`:
- `dataLength`:
- `controlOffset`:
- `controlLength`:

## See Also

### Queueing and dequeueing buffers

- [dequeueInputEntry](1809653-dequeueinputentry.md)
- [enqueueOutputEntry](1809670-enqueueoutputentry.md)
