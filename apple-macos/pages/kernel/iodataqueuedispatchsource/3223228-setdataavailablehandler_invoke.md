> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3223228-setdataavailablehandler_invoke

# SetDataAvailableHandler_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t SetDataAvailableHandler_Invoke(const IORPC rpc, OSMetaClassBase *target, SetDataAvailableHandler_Handler func);
```
