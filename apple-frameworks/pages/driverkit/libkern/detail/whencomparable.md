> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/detail/whencomparable

# WhenComparable

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef void_t<decltype(declval<type-parameter-0-0>() == declval<type-parameter-0-1>()), decltype(declval<type-parameter-0-0>() != declval<type-parameter-0-1>())> WhenComparable;
```
