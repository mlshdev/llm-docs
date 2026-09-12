> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorymap/1442054-redirect](https://developer.apple.com/documentation/kernel/iomemorymap/1442054-redirect)

# redirect

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn redirect(IOMemoryDescriptor *newBackingMemory, IOOptionBits options, mach_vm_size_t offset);
```
