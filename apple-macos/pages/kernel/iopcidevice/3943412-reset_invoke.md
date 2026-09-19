> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3943412-reset_invoke

# Reset_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 13.0+ (deprecated in 13.0)

## Declaration

```objectivec
static kern_return_t Reset_Invoke(const IORPC rpc, OSMetaClassBase *target, Reset_Handler func);
```
