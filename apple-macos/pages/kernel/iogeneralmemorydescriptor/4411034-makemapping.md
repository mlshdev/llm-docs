> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iogeneralmemorydescriptor/4411034-makemapping](https://developer.apple.com/documentation/kernel/iogeneralmemorydescriptor/4411034-makemapping)

# makeMapping

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 14.5+

## Declaration

```objectivec
virtual IOMemoryMap * makeMapping(IOMemoryDescriptor *owner, task_t intoTask, IOVirtualAddress atAddress, IOOptionBits options, IOByteCount offset, IOByteCount length);
```
