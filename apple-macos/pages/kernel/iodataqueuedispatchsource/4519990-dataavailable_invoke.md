> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/4519990-dataavailable_invoke](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/4519990-dataavailable_invoke)

# DataAvailable_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t DataAvailable_Invoke(const IORPC rpc, OSMetaClassBase *target, DataAvailable_Handler func, const OSMetaClass *targetActionClass);
```
