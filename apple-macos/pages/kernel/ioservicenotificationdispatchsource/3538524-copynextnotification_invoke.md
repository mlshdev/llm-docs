> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservicenotificationdispatchsource/3538524-copynextnotification_invoke](https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/3538524-copynextnotification_invoke)

# CopyNextNotification_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

## Declaration

```objectivec
static kern_return_t CopyNextNotification_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyNextNotification_Handler func);
```
