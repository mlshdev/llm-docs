> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3689551-requiremaxbusstall_invoke

# RequireMaxBusStall_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t RequireMaxBusStall_Invoke(const IORPC rpc, OSMetaClassBase *target, RequireMaxBusStall_Handler func);
```
