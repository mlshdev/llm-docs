> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkgroup/3892908-invalidatekernel_invoke](https://developer.apple.com/documentation/kernel/ioworkgroup/3892908-invalidatekernel_invoke)

# InvalidateKernel_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.1+

## Declaration

```objectivec
static kern_return_t InvalidateKernel_Invoke(const IORPC rpc, OSMetaClassBase *target, InvalidateKernel_Handler func);
```
