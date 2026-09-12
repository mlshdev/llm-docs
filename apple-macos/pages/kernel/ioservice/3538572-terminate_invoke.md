> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3538572-terminate_invoke](https://developer.apple.com/documentation/kernel/ioservice/3538572-terminate_invoke)

# Terminate_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+

## Declaration

```objectivec
static kern_return_t Terminate_Invoke(const IORPC rpc, OSMetaClassBase *target, Terminate_Handler func);
```
