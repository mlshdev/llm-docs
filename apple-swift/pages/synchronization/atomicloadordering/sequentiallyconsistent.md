> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicloadordering/sequentiallyconsistent](https://developer.apple.com/documentation/synchronization/atomicloadordering/sequentiallyconsistent)

# sequentiallyConsistent

**Framework:** Synchronization  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sequentially consistent load performs an acquiring load and also guarantees that it and all other sequentially consistent atomic operations (loads, stores, updates) appear to be executed in a single, total sequential ordering.

## Declaration

```swift
static var sequentiallyConsistent: AtomicLoadOrdering { get }
```

<a id="discussion"></a>

## Discussion

This value corresponds to `std::memory_order_seq_cst` in C++.
