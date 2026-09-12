> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/libkern/detail/whencomparable](https://developer.apple.com/documentation/driverkit/libkern/detail/whencomparable)

# WhenComparable

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef void_t<decltype(declval<type-parameter-0-0>() == declval<type-parameter-0-1>()), decltype(declval<type-parameter-0-0>() != declval<type-parameter-0-1>())> WhenComparable;
```
