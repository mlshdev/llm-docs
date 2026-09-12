> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/sa_detail/destroy-5sjje](https://developer.apple.com/documentation/driverkit/libkern/sa_detail/destroy-5sjje)

# destroy

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, enable_if_t<!is_trivially_destructible_v<T>> * = nullptr> void destroy(T * *first, T * *last);
```
