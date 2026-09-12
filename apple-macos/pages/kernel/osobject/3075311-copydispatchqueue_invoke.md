> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osobject/3075311-copydispatchqueue_invoke](https://developer.apple.com/documentation/kernel/osobject/3075311-copydispatchqueue_invoke)

# CopyDispatchQueue_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyDispatchQueue_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyDispatchQueue_Handler func);
```
