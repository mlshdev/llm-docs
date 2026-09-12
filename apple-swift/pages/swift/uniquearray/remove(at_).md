> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/remove(at:)](https://developer.apple.com/documentation/swift/uniquearray/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes and returns the element at the specified position.

## Declaration

```swift
@discardableResult mutating func remove(at index: Int) -> Element
```

## Parameters

- `index`: The position of the element to remove. `index` must be a valid index of the array that is not equal to the end index.

<a id="return-value"></a>

## Return Value

The removed element.

<a id="discussion"></a>

## Discussion

All the elements following the specified position are moved to close the gap.

> **Complexity**

> O(`self.count`)
