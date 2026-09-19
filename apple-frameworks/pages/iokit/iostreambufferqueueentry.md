> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreambufferqueueentry

# IOStreamBufferQueueEntry

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
struct IOStreamBufferQueueEntry {
    ...
};
```

## Topics

### Fields

- [bufferID](iostreambufferqueueentry/1470573-bufferid.md): The ID of the buffer passed in this queue entry.
- [dataLength](iostreambufferqueueentry/1470578-datalength.md): The length of the valid data in the buffer.
- [reserved](iostreambufferqueueentry/1470598-reserved.md): Reserved for future use.

### Instance Properties

- [controlLength](iostreambufferqueueentry/1470556-controllength.md)
- [controlOffset](iostreambufferqueueentry/1470561-controloffset.md)
- [dataOffset](iostreambufferqueueentry/1470571-dataoffset.md)
