> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753478-getbusystate_invoke

# GetBusyState_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t GetBusyState_Invoke(const IORPC rpc, OSMetaClassBase *target, GetBusyState_Handler func);
```
