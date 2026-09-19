> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorycursor/1400994-withspecification

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMemoryCursor> withSpecification(SegmentFunction outSegFunc, IOPhysicalLength maxSegmentSize, IOPhysicalLength maxTransferSize, IOPhysicalLength alignment);
```
