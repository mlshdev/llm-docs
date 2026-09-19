> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/bounded_ptr/operator-=

# operator-=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Method Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T_ = T> bounded_ptr<T, TrappingPolicy> & operator-=(ptrdiff_t n);
```
