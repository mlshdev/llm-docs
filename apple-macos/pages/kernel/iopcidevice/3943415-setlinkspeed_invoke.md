> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3943415-setlinkspeed_invoke

# SetLinkSpeed_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 13.0+ (deprecated in 13.0)

## Declaration

```objectivec
static kern_return_t SetLinkSpeed_Invoke(const IORPC rpc, OSMetaClassBase *target, SetLinkSpeed_Handler func);
```
