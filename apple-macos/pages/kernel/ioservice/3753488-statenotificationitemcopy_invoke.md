> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753488-statenotificationitemcopy_invoke

# StateNotificationItemCopy_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t StateNotificationItemCopy_Invoke(const IORPC rpc, OSMetaClassBase *target, StateNotificationItemCopy_Handler func);
```
