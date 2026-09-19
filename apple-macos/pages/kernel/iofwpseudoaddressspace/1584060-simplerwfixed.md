> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584060-simplerwfixed

# simpleRWFixed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOFWPseudoAddressSpace * simpleRWFixed(IOFireWireBus *control, FWAddress addr, UInt32 len, const void *data);
```
