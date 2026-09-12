> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/distance(from:to:)](https://developer.apple.com/documentation/swift/uniquearray/distance(from:to:))

# distance(from:to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the distance between two indices.

## Declaration

```swift
func distance(from start: UniqueArray<Element>.Index, to end: UniqueArray<Element>.Index) -> Int
```

## Parameters

- `start`: A valid index of the collection.
- `end`: Another valid index of the collection. If end is equal to start, the result is zero.

<a id="return-value"></a>

## Return Value

The distance between `start` and `end`.

<a id="discussion"></a>

## Discussion

> **Note**

> To improve performance, this method does not validate that the given index is valid before offseting it. Index validation is deferred until the resulting index is used to access an element. This optimization may be removed in future versions; do not rely on it.

> **Complexity**

> O(1)
