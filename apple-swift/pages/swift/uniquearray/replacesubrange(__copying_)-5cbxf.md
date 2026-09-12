> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/replacesubrange(_:copying:)-5cbxf](https://developer.apple.com/documentation/swift/uniquearray/replacesubrange(_:copying:)-5cbxf)

# replaceSubrange(\_:copying:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Replaces the specified subrange of elements by copying the elements of the given buffer pointer, which must be fully initialized.

## Declaration

```swift
mutating func replaceSubrange(_ subrange: Range<Int>, copying newElements: UnsafeBufferPointer<Element>)
```

## Parameters

- `subrange`: The subrange of the array to replace. The bounds of the range must be valid indices in the array.
- `newElements`: The new elements to copy into the collection.

<a id="discussion"></a>

## Discussion

This method has the effect of removing the specified range of elements from the array and inserting the new elements starting at the same location. The number of new elements need not match the number of elements being removed.

If the capacity of the array isn’t sufficient to perform the replacement, then this reallocates the array’s storage to extend its capacity, using a geometric growth rate.

If you pass a zero-length range as the `subrange` parameter, this method inserts the elements of `newElements` at `subrange.lowerBound`. Calling the `insert(copying:at:)` method instead is preferred in this case.

Likewise, if you pass a zero-length buffer as the `newElements` parameter, this method removes the elements in the given subrange without replacement. Calling the `removeSubrange(_:)` method instead is preferred in this case.

> **Complexity**

> O(*n* \+ *m*), where *n* is count of this array and *m* is the count of `newElements`.
