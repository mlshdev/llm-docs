> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/unicodescalarview/remove(at:)](https://developer.apple.com/documentation/swift/string/unicodescalarview/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the element at the specified position.

## Declaration

```swift
@discardableResult mutating func remove(at position: Self.Index) -> Self.Element
```

## Parameters

- `position`: The position of the element to remove. `position` must be a valid index of the collection that is not equal to the collection’s end index.

<a id="return-value"></a>

## Return Value

The removed element.

<a id="discussion"></a>

## Discussion

All the elements following the specified position are moved to close the gap. This example removes the middle element from an array of measurements.

```swift
var measurements = [1.2, 1.5, 2.9, 1.2, 1.6]
let removed = measurements.remove(at: 2)
print(measurements)
// Prints "[1.2, 1.5, 1.2, 1.6]"
```

Calling this method may invalidate any existing indices for use with this collection.

> **Complexity**

> O(*n*), where *n* is the length of the collection.
