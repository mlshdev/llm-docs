> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ossharedptr/operator=-lttt

# operator=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Method Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename U, typename = std::std::enable_if_t<std::is_convertible_v<U *, T *>>> OSSharedPtr<T> & operator=(OSSharedPtr<U> && other);
```
