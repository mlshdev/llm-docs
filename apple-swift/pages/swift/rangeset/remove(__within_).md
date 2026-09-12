> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/remove(_:within:)](https://developer.apple.com/documentation/swift/rangeset/remove(_:within:))

# remove(\_:within:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Removes the range that contains only the specified index from the range set.

## Declaration

```swift
mutating func remove<C>(_ index: Bound, within collection: C) where Bound == C.Index, C : Collection
```

## Parameters

- `index`: The index to remove from the range set. `index` must be a valid index of `collection` that isn’t the collection’s `endIndex`.
- `collection`: The collection that contains `index`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the number of ranges in the range set.
