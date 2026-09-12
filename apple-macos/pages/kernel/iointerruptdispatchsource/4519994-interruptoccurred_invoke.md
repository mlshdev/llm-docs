> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/4519994-interruptoccurred_invoke](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/4519994-interruptoccurred_invoke)

# InterruptOccurred_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t InterruptOccurred_Invoke(const IORPC rpc, OSMetaClassBase *target, InterruptOccurred_Handler func, const OSMetaClass *targetActionClass);
```
