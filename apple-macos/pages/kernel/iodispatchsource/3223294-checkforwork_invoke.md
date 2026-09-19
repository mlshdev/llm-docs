> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodispatchsource/3223294-checkforwork_invoke

# CheckForWork_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CheckForWork_Invoke(const IORPC rpc, OSMetaClassBase *target, CheckForWork_Handler func);
```
