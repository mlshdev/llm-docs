> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/libkern/reinterpret_pointer_cast-1viq2

# reinterpret_pointer_cast

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename T_, typename U, typename Policy> bounded_ptr<T_, Policy> reinterpret_pointer_cast(const bounded_ptr<U, Policy> & ) noexcept;
```
