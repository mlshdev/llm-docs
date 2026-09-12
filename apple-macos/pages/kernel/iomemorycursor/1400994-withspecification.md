> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorycursor/1400994-withspecification](https://developer.apple.com/documentation/kernel/iomemorycursor/1400994-withspecification)

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMemoryCursor> withSpecification(SegmentFunction outSegFunc, IOPhysicalLength maxSegmentSize, IOPhysicalLength maxTransferSize, IOPhysicalLength alignment);
```
