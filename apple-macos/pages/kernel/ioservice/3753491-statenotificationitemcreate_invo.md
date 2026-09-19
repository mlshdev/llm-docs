> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753491-statenotificationitemcreate_invo

# StateNotificationItemCreate_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t StateNotificationItemCreate_Invoke(const IORPC rpc, OSMetaClassBase *target, StateNotificationItemCreate_Handler func);
```
