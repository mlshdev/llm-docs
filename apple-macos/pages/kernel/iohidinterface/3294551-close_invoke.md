> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3294551-close_invoke](https://developer.apple.com/documentation/kernel/iohidinterface/3294551-close_invoke)

# Close_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
static kern_return_t Close_Invoke(const IORPC rpc, OSMetaClassBase *target, Close_Handler func);
```
