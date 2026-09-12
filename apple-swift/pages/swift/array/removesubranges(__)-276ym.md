> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/removesubranges(_:)-276ym](https://developer.apple.com/documentation/swift/array/removesubranges(_:)-276ym)

# removeSubranges(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Removes the elements at the given indices.

## Declaration

```swift
mutating func removeSubranges(_ subranges: RangeSet<Self.Index>)
```

## Parameters

- `subranges`: The indices of the elements to remove.

<a id="discussion"></a>

## Discussion

For example, this code sample finds the indices of all the negative numbers in the array, and then removes those values.

```swift
var numbers = [5, 7, -3, -8, 11, 2, -1, 6]
let negativeIndices = numbers.indices(where: { $0 < 0 })

numbers.removeSubranges(negativeIndices)
// numbers == [5, 7, 11, 2, 6]
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.
