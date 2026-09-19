> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/3294600-seteventmemory_invoke

# SetEventMemory_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
static kern_return_t SetEventMemory_Invoke(const IORPC rpc, OSMetaClassBase *target, SetEventMemory_Handler func);
```
