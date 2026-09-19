> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584055-simplerw

# simpleRW

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOFWPseudoAddressSpace * simpleRW(IOFireWireBus *bus, FWAddress *addr, UInt32 len, void *data);
```
