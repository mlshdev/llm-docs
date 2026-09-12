> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicupdateordering/acquiringandreleasing](https://developer.apple.com/documentation/synchronization/atomicupdateordering/acquiringandreleasing)

# acquiringAndReleasing

**Framework:** Synchronization  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An acquiring-and-releasing operation is a combination of `.acquiring` and `.releasing` operation on the same variable.

## Declaration

```swift
static var acquiringAndReleasing: AtomicUpdateOrdering { get }
```

<a id="discussion"></a>

## Discussion

This value corresponds to `std::memory_order_acq_rel` in C++.
