> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/safe_allocation/safe_allocation_t,_allocator,_trappingpolicy_-6fh36

# safe_allocation\<T, Allocator, TrappingPolicy\>

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Constructor  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
explicit safe_allocation<T, Allocator, TrappingPolicy>(T * *data, size_t n, adopt_memory_t );
```
