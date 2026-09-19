> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iosubmemorydescriptor/1571783-withsubrange

# withSubRange

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOSubMemoryDescriptor> withSubRange(IOMemoryDescriptor *of, IOByteCount offset, IOByteCount length, IOOptionBits options);
```
