> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/operator_=-48u68](https://developer.apple.com/documentation/driverkit/libkern/operator_=-48u68)

# operator\>=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename U, typename P1, typename P2, typename = detail::detail::WhenOrderable<T * *, U * *>> bool operator>=(const bounded_ptr<T, P1> & a, const bounded_ptr<U, P2> & b);
```
