> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/bounded_ptr/operator=-5l0bz](https://developer.apple.com/documentation/driverkit/libkern/bounded_ptr/operator=-5l0bz)

# operator=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Method Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename U, typename Policy, typename = detail::detail::enable_if_t<detail::is_convertible_v<U *, T *>>> bounded_ptr<T, TrappingPolicy> & operator=(const bounded_ptr<U, Policy> & other);
```
