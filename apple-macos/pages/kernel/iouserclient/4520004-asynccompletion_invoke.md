> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/4520004-asynccompletion_invoke

# AsyncCompletion_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
static kern_return_t AsyncCompletion_Invoke(const IORPC rpc, OSMetaClassBase *target, AsyncCompletion_Handler func);
```
