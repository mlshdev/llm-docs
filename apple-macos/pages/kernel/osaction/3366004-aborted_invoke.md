> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osaction/3366004-aborted_invoke](https://developer.apple.com/documentation/kernel/osaction/3366004-aborted_invoke)

# Aborted_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Aborted_Invoke(const IORPC rpc, OSMetaClassBase *target, Aborted_Handler func);
```
