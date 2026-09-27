> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmacommand/1547763-transfersegment

# transferSegment

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn transferSegment(void *reference, IODMACommand *target, Segment64 segment, void *segments, UInt32 segmentIndex);
```
