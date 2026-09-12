> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchqueue/3223277-setport_invoke](https://developer.apple.com/documentation/kernel/iodispatchqueue/3223277-setport_invoke)

# SetPort_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t SetPort_Invoke(const IORPC rpc, OSMetaClassBase *target, SetPort_Handler func);
```
