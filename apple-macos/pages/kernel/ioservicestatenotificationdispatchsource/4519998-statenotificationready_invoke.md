> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicestatenotificationdispatchsource/4519998-statenotificationready_invoke](https://developer.apple.com/documentation/kernel/ioservicestatenotificationdispatchsource/4519998-statenotificationready_invoke)

# StateNotificationReady_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t StateNotificationReady_Invoke(const IORPC rpc, OSMetaClassBase *target, StateNotificationReady_Handler func, const OSMetaClass *targetActionClass);
```
