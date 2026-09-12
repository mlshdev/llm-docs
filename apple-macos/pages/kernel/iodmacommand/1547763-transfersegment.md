> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547763-transfersegment](https://developer.apple.com/documentation/kernel/iodmacommand/1547763-transfersegment)

# transferSegment

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn transferSegment(void *reference, IODMACommand *target, Segment64 segment, void *segments, UInt32 segmentIndex);
```
