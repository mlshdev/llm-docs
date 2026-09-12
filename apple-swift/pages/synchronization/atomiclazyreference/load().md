> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomiclazyreference/load()](https://developer.apple.com/documentation/synchronization/atomiclazyreference/load())

# load()

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Atomically loads and returns the current value of this reference.

## Declaration

```swift
func load() -> Instance?
```

<a id="return-value"></a>

## Return Value

A value of `Instance` if the lazy reference was written to, or `nil` if it has not been written to yet.

<a id="discussion"></a>

## Discussion

> **Note**

> The load operation is performed with the memory ordering `AtomicLoadOrdering.acquiring`.
