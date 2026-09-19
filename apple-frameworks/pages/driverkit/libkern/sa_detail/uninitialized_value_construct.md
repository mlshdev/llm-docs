> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/sa_detail/uninitialized_value_construct

# uninitialized_value_construct

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T> void uninitialized_value_construct(T * *first, T * *last);
```
