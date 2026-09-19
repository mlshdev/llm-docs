> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidinterface/4520008-reportavailable_invoke

# ReportAvailable_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t ReportAvailable_Invoke(const IORPC rpc, OSMetaClassBase *target, ReportAvailable_Handler func);
```
