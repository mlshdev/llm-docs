> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspace/1584063-simplereader](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584063-simplereader)

# simpleReader

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static UInt32 simpleReader(void *refcon, UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, IOMemoryDescriptor **buf, IOByteCount *offset, IOFWRequestRefCon reqrefcon);
```
