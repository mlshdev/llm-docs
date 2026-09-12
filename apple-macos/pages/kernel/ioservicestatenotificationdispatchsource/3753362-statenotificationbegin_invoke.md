> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicestatenotificationdispatchsource/3753362-statenotificationbegin_invoke](https://developer.apple.com/documentation/kernel/ioservicestatenotificationdispatchsource/3753362-statenotificationbegin_invoke)

# StateNotificationBegin_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t StateNotificationBegin_Invoke(const IORPC rpc, OSMetaClassBase *target, StateNotificationBegin_Handler func);
```
