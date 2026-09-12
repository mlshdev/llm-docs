> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/4520046-completeasynciobundled_invoke](https://developer.apple.com/documentation/kernel/iousbhostpipe/4520046-completeasynciobundled_invoke)

# CompleteAsyncIOBundled_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t CompleteAsyncIOBundled_Invoke(const IORPC rpc, OSMetaClassBase *target, CompleteAsyncIOBundled_Handler func);
```
