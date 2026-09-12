> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablecollection/sort(using:)-694fo](https://developer.apple.com/documentation/swift/mutablecollection/sort(using:)-694fo)

# sort(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sorts the collection using the given comparator to compare elements.

## Declaration

```swift
mutating func sort<Comparator>(using comparator: Comparator) where Comparator : SortComparator, Self.Element == Comparator.Compared
```

## Parameters

- `comparator`: The sort comparator used to compare elements.
