> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmacommand/3516449-geniovmsegments

# genIOVMSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
IOReturn genIOVMSegments(uint32_t op, InternalSegmentFunction outSegFunc, void *reference, UInt64 *offsetP, void *segmentsP, UInt32 *numSegmentsP);
```
