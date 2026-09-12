> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ossharedptr/operator=-5z7no](https://developer.apple.com/documentation/driverkit/ossharedptr/operator=-5z7no)

# operator=

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Method Template  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
template <typename U, typename = std::std::enable_if_t<std::is_convertible_v<U *, T *>>> OSSharedPtr<T> & operator=(const OSSharedPtr<U> & other);
```
