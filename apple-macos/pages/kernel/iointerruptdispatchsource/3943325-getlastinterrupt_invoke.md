> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerruptdispatchsource/3943325-getlastinterrupt_invoke

# GetLastInterrupt_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
static kern_return_t GetLastInterrupt_Invoke(const IORPC rpc, OSMetaClassBase *target, GetLastInterrupt_Handler func);
```
