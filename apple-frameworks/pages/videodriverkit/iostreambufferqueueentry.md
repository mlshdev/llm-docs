> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iostreambufferqueueentry](https://developer.apple.com/documentation/videodriverkit/iostreambufferqueueentry)

# IOStreamBufferQueueEntry

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+

## Declaration

```objectivec
struct IOStreamBufferQueueEntry;
```

## Topics

### Accessing buffer queue entry properties

- [bufferID](iostreambufferqueueentry/bufferid.md)
- [dataOffset](iostreambufferqueueentry/dataoffset.md)
- [dataLength](iostreambufferqueueentry/datalength.md)
- [controlOffset](iostreambufferqueueentry/controloffset.md)
- [controlLength](iostreambufferqueueentry/controllength.md)

### Accessing reserved properties

Don’t use these properties, which VideoDriverKit reserves for its own use.

- [reserved](iostreambufferqueueentry/reserved.md)

## See Also

### Accessing queue contents

- [entryCount](iostreambufferqueue/entrycount.md)
- [headIndex](iostreambufferqueue/headindex.md)
- [tailIndex](iostreambufferqueue/tailindex.md)
- [queue](iostreambufferqueue/queue.md)
