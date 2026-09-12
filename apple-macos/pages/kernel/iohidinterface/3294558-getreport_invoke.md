> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3294558-getreport_invoke](https://developer.apple.com/documentation/kernel/iohidinterface/3294558-getreport_invoke)

# GetReport_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
static kern_return_t GetReport_Invoke(const IORPC rpc, OSMetaClassBase *target, GetReport_Handler func);
```
