> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/operator_-89g32

# operator\>

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename U, typename P1, typename P2, typename = detail::detail::WhenOrderable<T * *, U * *>> bool operator>(const bounded_ptr<T, P1> & a, const bounded_ptr<U, P2> & b);
```
