> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3516634-findpcicapability_invoke

# FindPCICapability_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
static kern_return_t FindPCICapability_Invoke(const IORPC rpc, OSMetaClassBase *target, FindPCICapability_Handler func);
```
