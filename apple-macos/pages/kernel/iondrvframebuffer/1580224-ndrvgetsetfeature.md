> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iondrvframebuffer/1580224-ndrvgetsetfeature

# ndrvGetSetFeature

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn ndrvGetSetFeature(UInt32 feature, uintptr_t newValue, uintptr_t *currentValue);
```
