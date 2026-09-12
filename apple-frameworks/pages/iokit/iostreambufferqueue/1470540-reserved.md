> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreambufferqueue/1470540-reserved](https://developer.apple.com/documentation/iokit/iostreambufferqueue/1470540-reserved)

# reserved

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Reserved for future use.

## Declaration

```objectivec
UInt32 reserved;
```

## See Also

### Fields

- [entryCount](1470527-entrycount.md): The number of queue entries in the queue.
- [headIndex](1470565-headindex.md): The index of the next queue slot that will be filled in by the queue writer.
- [tailIndex](1470567-tailindex.md): The index of the next queue slot that can be read by the queue reader.
- [queue](1470592-queue.md): The array of queue entries.
