> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3919731-configureinterrupts_invoke](https://developer.apple.com/documentation/kernel/iopcidevice/3919731-configureinterrupts_invoke)

# ConfigureInterrupts_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.3+ (deprecated in 12.3)

## Declaration

```objectivec
static kern_return_t ConfigureInterrupts_Invoke(const IORPC rpc, OSMetaClassBase *target, ConfigureInterrupts_Handler func);
```
