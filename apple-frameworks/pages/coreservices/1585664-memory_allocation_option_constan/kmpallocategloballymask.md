> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585664-memory_allocation_option_constan/kmpallocategloballymask](https://developer.apple.com/documentation/coreservices/1585664-memory_allocation_option_constan/kmpallocategloballymask)

# kMPAllocateGloballyMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
kMPAllocateGloballyMask = 0x0002
```

<a id="discussion"></a>

## Discussion

Allocate memory from in memory space that is visible to all processes. Note that such globally-allocated space is not automatically reclaimed when the allocating process terminates. By default, [MPAllocateAligned](../1585774-mpallocatealigned.md) allocates memory from process-specific (that is, not global) memory.
