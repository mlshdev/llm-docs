> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerruptdispatchsource/3943325-getlastinterrupt_invoke](https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3943325-getlastinterrupt_invoke)

# GetLastInterrupt_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
static kern_return_t GetLastInterrupt_Invoke(const IORPC rpc, OSMetaClassBase *target, GetLastInterrupt_Handler func);
```
