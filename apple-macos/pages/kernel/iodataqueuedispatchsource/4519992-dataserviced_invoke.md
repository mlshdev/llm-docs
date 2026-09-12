> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/4519992-dataserviced_invoke](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/4519992-dataserviced_invoke)

# DataServiced_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t DataServiced_Invoke(const IORPC rpc, OSMetaClassBase *target, DataServiced_Handler func, const OSMetaClass *targetActionClass);
```
