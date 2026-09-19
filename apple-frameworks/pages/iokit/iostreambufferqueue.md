> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreambufferqueue

# IOStreamBufferQueue

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
struct IOStreamBufferQueue {
    ...
};
```

## Topics

### Fields

- [entryCount](iostreambufferqueue/1470527-entrycount.md): The number of queue entries in the queue.
- [headIndex](iostreambufferqueue/1470565-headindex.md): The index of the next queue slot that will be filled in by the queue writer.
- [tailIndex](iostreambufferqueue/1470567-tailindex.md): The index of the next queue slot that can be read by the queue reader.
- [reserved](iostreambufferqueue/1470540-reserved.md): Reserved for future use.
- [queue](iostreambufferqueue/1470592-queue.md): The array of queue entries.
