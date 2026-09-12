> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585664-memory_allocation_option_constan/kmpallocatenogrowthmask](https://developer.apple.com/documentation/coreservices/1585664-memory_allocation_option_constan/kmpallocatenogrowthmask)

# kMPAllocateNoGrowthMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Do not attempt to grow the pool of available memory. Specifying this option is useful, as attempting to grow memory may cause your task to block until such memory becomes available.

## Declaration

```objectivec
kMPAllocateNoGrowthMask = 0x0010
```
