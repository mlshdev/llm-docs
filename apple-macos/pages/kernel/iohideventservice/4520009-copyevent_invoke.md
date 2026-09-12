> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/4520009-copyevent_invoke](https://developer.apple.com/documentation/kernel/iohideventservice/4520009-copyevent_invoke)

# CopyEvent_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t CopyEvent_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyEvent_Handler func, const OSMetaClass *targetActionClass);
```
