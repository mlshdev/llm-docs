> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3516640-haspcipowermanagement_invoke](https://developer.apple.com/documentation/kernel/iopcidevice/3516640-haspcipowermanagement_invoke)

# HasPCIPowerManagement_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
static kern_return_t HasPCIPowerManagement_Invoke(const IORPC rpc, OSMetaClassBase *target, HasPCIPowerManagement_Handler func);
```
