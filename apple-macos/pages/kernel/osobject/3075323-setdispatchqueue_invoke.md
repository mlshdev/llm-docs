> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osobject/3075323-setdispatchqueue_invoke](https://developer.apple.com/documentation/kernel/osobject/3075323-setdispatchqueue_invoke)

# SetDispatchQueue_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t SetDispatchQueue_Invoke(const IORPC rpc, OSMetaClassBase *target, SetDispatchQueue_Handler func);
```
