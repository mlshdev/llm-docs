> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/operator==-15jrb](https://developer.apple.com/documentation/driverkit/libkern/operator==-15jrb)

# operator==

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename P, typename U, typename = detail::detail::WhenComparable<T * *, U * *>> bool operator==(U * *a, const bounded_ptr<T, P> & b);
```
