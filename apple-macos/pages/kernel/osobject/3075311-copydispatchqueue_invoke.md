> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osobject/3075311-copydispatchqueue_invoke

# CopyDispatchQueue_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyDispatchQueue_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyDispatchQueue_Handler func);
```
