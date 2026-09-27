> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobigmemorycursor/1401012-withspecification

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOBigMemoryCursor> withSpecification(IOPhysicalLength maxSegmentSize, IOPhysicalLength maxTransferSize, IOPhysicalLength alignment);
```
