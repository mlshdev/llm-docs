> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/operator==-6j7ha](https://developer.apple.com/documentation/driverkit/libkern/operator==-6j7ha)

# operator==

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename P, typename U, typename = detail::detail::WhenComparable<T * *, U * *>> bool operator==(const bounded_ptr<T, P> & a, U * *b);
```
