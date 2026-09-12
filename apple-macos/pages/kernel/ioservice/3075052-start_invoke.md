> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3075052-start_invoke](https://developer.apple.com/documentation/kernel/ioservice/3075052-start_invoke)

# Start_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Start_Invoke(const IORPC rpc, OSMetaClassBase *target, Start_Handler func);
```
