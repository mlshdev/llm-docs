> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/operator!=-1mtzc

# operator!=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T, typename Policy> bool operator!=(const bounded_ptr<T, Policy> & p, detail::nullptr_t );
```
