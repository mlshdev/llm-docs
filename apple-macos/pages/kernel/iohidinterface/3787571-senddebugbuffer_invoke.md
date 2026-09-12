> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3787571-senddebugbuffer_invoke](https://developer.apple.com/documentation/kernel/iohidinterface/3787571-senddebugbuffer_invoke)

# SendDebugBuffer_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static kern_return_t SendDebugBuffer_Invoke(const IORPC rpc, OSMetaClassBase *target, SendDebugBuffer_Handler func);
```
