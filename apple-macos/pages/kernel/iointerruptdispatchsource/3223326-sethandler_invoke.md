> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3223326-sethandler_invoke](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3223326-sethandler_invoke)

# SetHandler_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t SetHandler_Invoke(const IORPC rpc, OSMetaClassBase *target, SetHandler_Handler func);
```
