> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwpseudoaddressspace/1584061-readwrite](https://developer.apple.com/documentation/kernel/iofwpseudoaddressspace/1584061-readwrite)

# readWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOFWPseudoAddressSpace * readWrite(FWAddress addr, UInt32 len, FWReadCallback reader, FWWriteCallback writer, void *refcon);
```
