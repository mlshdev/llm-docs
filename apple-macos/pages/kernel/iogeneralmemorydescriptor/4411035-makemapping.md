> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iogeneralmemorydescriptor/4411035-makemapping

# makeMapping

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 14.5+

## Declaration

```objectivec
virtual IOMemoryMap * makeMapping(IOMemoryDescriptor *owner, task_t intoTask, IOVirtualAddress atAddress, IOOptionBits options, IOByteCount offset, IOByteCount length);
```
