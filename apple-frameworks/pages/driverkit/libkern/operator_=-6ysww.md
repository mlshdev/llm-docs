> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/operator_=-6ysww

# operator\>=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename U, typename P, typename = detail::detail::WhenOrderable<T * *, U * *>> bool operator>=(T * *a, const bounded_ptr<U, P> & b);
```
