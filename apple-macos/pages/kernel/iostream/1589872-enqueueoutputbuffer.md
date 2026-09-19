> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iostream/1589872-enqueueoutputbuffer

# enqueueOutputBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn enqueueOutputBuffer(IOStreamBuffer *buffer, IOByteCount dataOffset, IOByteCount dataLength, IOByteCount controlOffset, IOByteCount controlLength);
```
