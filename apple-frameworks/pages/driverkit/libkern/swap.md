> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/swap

# swap

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
void swap(safe_allocation<T, Allocator, TrappingPolicy> & a, safe_allocation<T, Allocator, TrappingPolicy> & b) noexcept;
```
