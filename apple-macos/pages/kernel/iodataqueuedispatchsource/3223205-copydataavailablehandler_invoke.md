> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3223205-copydataavailablehandler_invoke

# CopyDataAvailableHandler_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyDataAvailableHandler_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyDataAvailableHandler_Handler func);
```
