> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/replacesubrange(_:moving:)-6vpdp](https://developer.apple.com/documentation/swift/uniquearray/replacesubrange(_:moving:)-6vpdp)

# replaceSubrange(\_:moving:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Replaces the specified range of elements by moving the contents of an output span into their place. On return, the span is left empty.

## Declaration

```swift
mutating func replaceSubrange(_ subrange: Range<Int>, moving items: inout OutputSpan<Element>)
```

## Parameters

- `subrange`: The subrange of the array to replace. The bounds of the range must be valid indices in the array.
- `items`: An output span whose contents are to be moved into the array.

<a id="discussion"></a>

## Discussion

This method has the effect of removing the specified range of elements from the array and inserting the new elements starting at the same location. The number of new elements need not match the number of elements being removed.

If the array does not have sufficient capacity to perform the replacement, then this reallocates the array’s storage to extend its capacity, using a geometric growth rate.

If you pass a zero-length range as the `subrange` parameter, this method inserts the elements of `newElements` at `subrange.lowerBound`. Calling the `insert(moving:at:)` method instead is preferred in this case.

Likewise, if you pass a zero-length buffer as the `newElements` parameter, this method removes the elements in the given subrange without replacement. Calling the `removeSubrange(_:)` method instead is preferred in this case.

> **Complexity**

> O(`self.count` \+ `items.count`)
