> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirebus/1571440-createpseudoaddressspace](https://developer.apple.com/documentation/kernel/iofirewirebus/1571440-createpseudoaddressspace)

# createPseudoAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWPseudoAddressSpace * createPseudoAddressSpace(FWAddress *addr, UInt32 len, FWReadCallback reader, FWWriteCallback writer, void *refcon);
```
