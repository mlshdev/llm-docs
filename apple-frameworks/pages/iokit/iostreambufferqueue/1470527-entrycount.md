> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreambufferqueue/1470527-entrycount

# entryCount

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

The number of queue entries in the queue.

## Declaration

```objectivec
UInt32 entryCount;
```

## See Also

### Fields

- [headIndex](1470565-headindex.md): The index of the next queue slot that will be filled in by the queue writer.
- [tailIndex](1470567-tailindex.md): The index of the next queue slot that can be read by the queue reader.
- [reserved](1470540-reserved.md): Reserved for future use.
- [queue](1470592-queue.md): The array of queue entries.
