> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/platform_error_handler_t](https://developer.apple.com/documentation/kernel/platform_error_handler_t)

# platform_error_handler_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef void (*platform_error_handler_t)(void *refcon, vm_offset_t fault_addr);
```
