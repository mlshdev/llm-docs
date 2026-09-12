> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/insert(_:at:)](https://developer.apple.com/documentation/swift/uniquearray/insert(_:at:))

# insert(\_:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Inserts a new element into the array at the specified position.

## Declaration

```swift
mutating func insert(_ item: consuming Element, at index: Int)
```

## Parameters

- `item`: The new element to insert into the array.
- `index`: The position at which to insert the new element. `index` must be a valid index in the array.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold any more elements, then this reallocates storage to extend its capacity, using a geometric growth rate.

The new element is inserted before the element currently at the specified index. If you pass the array’s `endIndex` as the `index` parameter, then the new element is appended to the container.

All existing elements at or following the specified position are moved to make room for the new item.

> **Complexity**

> O(`self.count`)
