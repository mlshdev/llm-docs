> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3075041-getregistryentryid_invoke

# GetRegistryEntryID_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t GetRegistryEntryID_Invoke(const IORPC rpc, OSMetaClassBase *target, GetRegistryEntryID_Handler func);
```
