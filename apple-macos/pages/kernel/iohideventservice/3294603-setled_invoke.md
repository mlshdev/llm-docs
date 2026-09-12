> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/3294603-setled_invoke](https://developer.apple.com/documentation/kernel/iohideventservice/3294603-setled_invoke)

# SetLED_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
static kern_return_t SetLED_Invoke(const IORPC rpc, OSMetaClassBase *target, SetLED_Handler func);
```
