> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/arrayslice/remove(at:)](https://developer.apple.com/documentation/swift/arrayslice/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the element at the specified position.

## Declaration

```swift
@discardableResult mutating func remove(at index: Int) -> Element
```

## Parameters

- `index`: The position of the element to remove. `index` must be a valid index of the array.

<a id="return-value"></a>

## Return Value

The element at the specified index.

<a id="discussion"></a>

## Discussion

All the elements following the specified position are moved up to close the gap.

```swift
var measurements: [Double] = [1.1, 1.5, 2.9, 1.2, 1.5, 1.3, 1.2]
let removed = measurements.remove(at: 2)
print(measurements)
// Prints "[1.1, 1.5, 1.2, 1.5, 1.3, 1.2]"
```

> **Complexity**

> O(*n*), where *n* is the length of the array.
