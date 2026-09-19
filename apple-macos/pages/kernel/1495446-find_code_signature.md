> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1495446-find_code_signature

# find_code_signature

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kern_return_t find_code_signature(mach_port_t task_access_port, int32_t new_pid);
```
