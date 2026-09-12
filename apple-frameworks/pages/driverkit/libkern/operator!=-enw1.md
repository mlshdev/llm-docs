> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/operator!=-enw1](https://developer.apple.com/documentation/driverkit/libkern/operator!=-enw1)

# operator!=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename A, typename P> bool operator!=(const safe_allocation<T, A, P> & x, sa_detail::nullptr_t );
```
