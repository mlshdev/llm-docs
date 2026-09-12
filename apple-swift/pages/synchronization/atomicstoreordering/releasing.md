> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicstoreordering/releasing](https://developer.apple.com/documentation/synchronization/atomicstoreordering/releasing)

# releasing

**Framework:** Synchronization  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A releasing store synchronizes with acquiring operations that read the value it stores. It ensures that the releasing and acquiring threads agree that all preceding variable accesses on the releasing thread happen before the atomic operation itself.

## Declaration

```swift
static var releasing: AtomicStoreOrdering { get }
```

<a id="discussion"></a>

## Discussion

This value corresponds to `std::memory_order_release` in C++.
