> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/insert(copying:at:)-4823q](https://developer.apple.com/documentation/swift/uniquearray/insert(copying:at:)-4823q)

# insert(copying:at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copies the elements of a collection into this array at the specified position.

## Declaration

```swift
mutating func insert(copying newElements: some Collection<Element>, at index: Int)
```

## Parameters

- `newElements`: The new elements to insert into the array.
- `index`: The position at which to insert the new elements. It must be a valid index of the array.

<a id="discussion"></a>

## Discussion

The new elements are inserted before the element currently at the specified index. If you pass the array’s `endIndex` as the `index` parameter, then the new elements are appended to the end of the array.

All existing elements at or following the specified position are moved to make room for the new item.

If the array does not have sufficient capacity to hold enough elements, then this reallocates the array’s storage to extend its capacity, using a geometric growth rate.

> **Complexity**

> O(`self.count` \+ `newElements.count`)
