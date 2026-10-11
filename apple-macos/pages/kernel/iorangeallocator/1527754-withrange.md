> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iorangeallocator/1527754-withrange

# withRange

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IORangeAllocator> withRange(IORangeScalar endOfRange, IORangeScalar defaultAlignment, UInt32 capacity, IOOptionBits options);
```
