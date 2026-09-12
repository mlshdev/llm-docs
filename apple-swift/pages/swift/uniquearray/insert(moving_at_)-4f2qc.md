> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/insert(moving:at:)-4f2qc](https://developer.apple.com/documentation/swift/uniquearray/insert(moving:at:)-4f2qc)

# insert(moving:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Moves the elements of a fully initialized buffer into this array, starting at the specified position, and leaving the buffer uninitialized.

## Declaration

```swift
mutating func insert(moving items: UnsafeMutableBufferPointer<Element>, at index: Int)
```

## Parameters

- `items`: A fully initialized buffer whose contents to move into the array.
- `index`: The index at which to move `items`.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold all elements, then this reallocates storage to extend its capacity, using a geometric growth rate.

> **Complexity**

> O(`self.count` \+ `items.count`)
