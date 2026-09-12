> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioeventlink/3892877-seteventlinkport_invoke](https://developer.apple.com/documentation/kernel/ioeventlink/3892877-seteventlinkport_invoke)

# SetEventlinkPort_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.1+

## Declaration

```objectivec
static kern_return_t SetEventlinkPort_Invoke(const IORPC rpc, OSMetaClassBase *target, SetEventlinkPort_Handler func);
```
