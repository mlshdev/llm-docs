> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3152491-setpowerstate_invoke

# SetPowerState_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t SetPowerState_Invoke(const IORPC rpc, OSMetaClassBase *target, SetPowerState_Handler func);
```
