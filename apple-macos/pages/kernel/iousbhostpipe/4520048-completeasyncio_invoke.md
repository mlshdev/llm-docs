> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/4520048-completeasyncio_invoke](https://developer.apple.com/documentation/kernel/iousbhostpipe/4520048-completeasyncio_invoke)

# CompleteAsyncIO_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
static kern_return_t CompleteAsyncIO_Invoke(const IORPC rpc, OSMetaClassBase *target, CompleteAsyncIO_Handler func);
```
