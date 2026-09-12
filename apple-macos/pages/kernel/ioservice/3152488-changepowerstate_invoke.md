> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3152488-changepowerstate_invoke](https://developer.apple.com/documentation/kernel/ioservice/3152488-changepowerstate_invoke)

# ChangePowerState_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t ChangePowerState_Invoke(const IORPC rpc, OSMetaClassBase *target, ChangePowerState_Handler func);
```
