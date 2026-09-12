> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicloadordering/relaxed](https://developer.apple.com/documentation/synchronization/atomicloadordering/relaxed)

# relaxed

**Framework:** Synchronization  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Guarantees the atomicity of the specific operation on which it is applied, but imposes no ordering constraints on any other variable accesses.

## Declaration

```swift
static var relaxed: AtomicLoadOrdering { get }
```

<a id="discussion"></a>

## Discussion

This value corresponds to `std::memory_order_relaxed` in C++.
