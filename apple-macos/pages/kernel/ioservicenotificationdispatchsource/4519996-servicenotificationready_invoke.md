> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicenotificationdispatchsource/4519996-servicenotificationready_invoke](https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/4519996-servicenotificationready_invoke)

# ServiceNotificationReady_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t ServiceNotificationReady_Invoke(const IORPC rpc, OSMetaClassBase *target, ServiceNotificationReady_Handler func, const OSMetaClass *targetActionClass);
```
