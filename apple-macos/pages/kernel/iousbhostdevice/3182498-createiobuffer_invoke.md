> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3182498-createiobuffer_invoke](https://developer.apple.com/documentation/kernel/iousbhostdevice/3182498-createiobuffer_invoke)

# CreateIOBuffer_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t CreateIOBuffer_Invoke(const IORPC rpc, OSMetaClassBase *target, CreateIOBuffer_Handler func);
```
