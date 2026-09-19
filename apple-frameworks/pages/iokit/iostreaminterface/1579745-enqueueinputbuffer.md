> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iostreaminterface/1579745-enqueueinputbuffer

# EnqueueInputBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
IOReturn (*EnqueueInputBuffer)(IOStreamRef stream, IOStreamBufferID bufferID, IOByteCount dataOffset, IOByteCount dataLength, IOByteCount controlOffset, IOByteCount controlLength);
```
