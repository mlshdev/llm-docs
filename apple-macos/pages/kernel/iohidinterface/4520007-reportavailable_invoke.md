> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/4520007-reportavailable_invoke](https://developer.apple.com/documentation/kernel/iohidinterface/4520007-reportavailable_invoke)

# ReportAvailable_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t ReportAvailable_Invoke(const IORPC rpc, OSMetaClassBase *target, ReportAvailable_Handler func, const OSMetaClass *targetActionClass);
```
