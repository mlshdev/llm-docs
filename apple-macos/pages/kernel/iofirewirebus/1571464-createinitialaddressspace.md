> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirebus/1571464-createinitialaddressspace](https://developer.apple.com/documentation/kernel/iofirewirebus/1571464-createinitialaddressspace)

# createInitialAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWPseudoAddressSpace * createInitialAddressSpace(UInt32 addressLo, UInt32 len, FWReadCallback reader, FWWriteCallback writer, void *refcon);
```
