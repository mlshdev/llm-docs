> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioeventlink/3892874-invalidatekernel_invoke

# InvalidateKernel_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.1+

## Declaration

```objectivec
static kern_return_t InvalidateKernel_Invoke(const IORPC rpc, OSMetaClassBase *target, InvalidateKernel_Handler func);
```
