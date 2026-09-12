> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585664-memory_allocation_option_constan](https://developer.apple.com/documentation/coreservices/1585664-memory_allocation_option_constan)

# Memory Allocation Option Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Specify optional actions when calling the `MPAllocateAligned` function.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPAllocateClearMask](1585664-memory_allocation_option_constan/kmpallocateclearmask.md): Deprecated. Zero out the allocated memory block.
- [kMPAllocateGloballyMask](1585664-memory_allocation_option_constan/kmpallocategloballymask.md): Deprecated.
- [kMPAllocateResidentMask](1585664-memory_allocation_option_constan/kmpallocateresidentmask.md): Deprecated. Allocate memory from resident memory only (that is, the allocated memory is not pageable).
- [kMPAllocateNoGrowthMask](1585664-memory_allocation_option_constan/kmpallocatenogrowthmask.md): Deprecated. Do not attempt to grow the pool of available memory. Specifying this option is useful, as attempting to grow memory may cause your task to block until such memory becomes available.
- [kMPAllocateNoCreateMask](1585664-memory_allocation_option_constan/kmpallocatenocreatemask.md): Deprecated.
