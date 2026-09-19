> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584063-simplereader

# simpleReader

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static UInt32 simpleReader(void *refcon, UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, IOMemoryDescriptor **buf, IOByteCount *offset, IOFWRequestRefCon reqrefcon);
```
