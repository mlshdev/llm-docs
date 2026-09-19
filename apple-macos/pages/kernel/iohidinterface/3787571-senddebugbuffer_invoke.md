> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidinterface/3787571-senddebugbuffer_invoke

# SendDebugBuffer_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static kern_return_t SendDebugBuffer_Invoke(const IORPC rpc, OSMetaClassBase *target, SendDebugBuffer_Handler func);
```
