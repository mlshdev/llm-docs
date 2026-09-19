> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iostreambufferqueueentry

# IOStreamBufferQueueEntry

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

## Declaration

```objectivec
struct IOStreamBufferQueueEntry;
```

## Topics

### Accessing buffer queue entry properties

- [bufferID](iostreambufferqueueentry/bufferid.md): Beta.
- [dataOffset](iostreambufferqueueentry/dataoffset.md): Beta.
- [dataLength](iostreambufferqueueentry/datalength.md): Beta.
- [controlOffset](iostreambufferqueueentry/controloffset.md): Beta.
- [controlLength](iostreambufferqueueentry/controllength.md): Beta.

### Accessing reserved properties

Don’t use these properties, which VideoDriverKit reserves for its own use.

- [reserved](iostreambufferqueueentry/reserved.md): Beta.

## See Also

### Accessing queue contents

- [entryCount](iostreambufferqueue/entrycount.md): Beta.
- [headIndex](iostreambufferqueue/headindex.md): Beta.
- [tailIndex](iostreambufferqueue/tailindex.md): Beta.
- [queue](iostreambufferqueue/queue.md): Beta.
