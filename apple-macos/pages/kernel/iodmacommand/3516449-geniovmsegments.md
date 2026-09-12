> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/3516449-geniovmsegments](https://developer.apple.com/documentation/kernel/iodmacommand/3516449-geniovmsegments)

# genIOVMSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
IOReturn genIOVMSegments(uint32_t op, InternalSegmentFunction outSegFunc, void *reference, UInt64 *offsetP, void *segmentsP, UInt32 *numSegmentsP);
```
