> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3684896-stop_async_invoke](https://developer.apple.com/documentation/kernel/ioservice/3684896-stop_async_invoke)

# Stop_async_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t Stop_async_Invoke(const IORPC rpc, OSMetaClassBase *target, Stop_async_Handler func);
```
