> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/platform_error_handler_t

# platform_error_handler_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

## Declaration

```objectivec
typedef void (*platform_error_handler_t)(void *refcon, vm_offset_t fault_addr);
```
