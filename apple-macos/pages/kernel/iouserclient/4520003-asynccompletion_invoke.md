> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/4520003-asynccompletion_invoke](https://developer.apple.com/documentation/kernel/iouserclient/4520003-asynccompletion_invoke)

# AsyncCompletion_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t AsyncCompletion_Invoke(const IORPC rpc, OSMetaClassBase *target, AsyncCompletion_Handler func, const OSMetaClass *targetActionClass);
```
