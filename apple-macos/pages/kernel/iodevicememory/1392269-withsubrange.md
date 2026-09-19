> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodevicememory/1392269-withsubrange

# withSubRange

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IODeviceMemory> withSubRange(IODeviceMemory *of, IOPhysicalAddress offset, IOPhysicalLength length);
```
