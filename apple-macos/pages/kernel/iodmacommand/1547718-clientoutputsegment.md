> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmacommand/1547718-clientoutputsegment

# clientOutputSegment

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn clientOutputSegment(void *reference, IODMACommand *target, Segment64 segment, void *vSegList, UInt32 outSegIndex);
```
