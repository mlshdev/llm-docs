> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/4519997-servicenotificationready_invoke

# ServiceNotificationReady_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t ServiceNotificationReady_Invoke(const IORPC rpc, OSMetaClassBase *target, ServiceNotificationReady_Handler func);
```
