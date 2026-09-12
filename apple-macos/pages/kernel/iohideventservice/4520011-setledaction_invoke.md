> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/4520011-setledaction_invoke](https://developer.apple.com/documentation/kernel/iohideventservice/4520011-setledaction_invoke)

# SetLEDAction_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t SetLEDAction_Invoke(const IORPC rpc, OSMetaClassBase *target, SetLEDAction_Handler func, const OSMetaClass *targetActionClass);
```
