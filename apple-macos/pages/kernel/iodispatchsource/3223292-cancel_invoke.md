> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchsource/3223292-cancel_invoke](https://developer.apple.com/documentation/kernel/iodispatchsource/3223292-cancel_invoke)

# Cancel_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Cancel_Invoke(const IORPC rpc, OSMetaClassBase *target, Cancel_Handler func);
```
