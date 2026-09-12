> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/insert(moving:at:)-6d5t1](https://developer.apple.com/documentation/swift/uniquearray/insert(moving:at:)-6d5t1)

# insert(moving:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Moves the elements of an output span into this array, starting at the specified position, and leaving the span empty.

## Declaration

```swift
mutating func insert(moving items: inout OutputSpan<Element>, at index: Int)
```

## Parameters

- `items`: An output span whose contents to move into the array.
- `index`: The position at which to insert the new items. `index` must be a valid index in the array.

<a id="discussion"></a>

## Discussion

All existing elements at or following the specified position are moved to make room for the new items.

If the array does not have sufficient capacity to hold the new elements, then this reallocates storage to extend its capacity, using a geometric growth rate.

> **Complexity**

> O(`self.count` \+ `items.count`)
