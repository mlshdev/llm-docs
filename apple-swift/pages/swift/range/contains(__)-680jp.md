> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/contains(_:)-680jp](https://developer.apple.com/documentation/swift/range/contains(_:)-680jp)

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the given closed range is contained within this range.

## Declaration

```swift
func contains(_ other: ClosedRange<Bound>) -> Bool
```

## Parameters

- `other`: A closed range to check for containment within this range.

<a id="return-value"></a>

## Return Value

`true` if `other` is wholly contained within this range; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The given closed range is contained within this range if its bounds are contained within this range. If this range is empty, it cannot contain a closed range, since closed ranges by definition contain their boundaries.

```swift
let range = 0..<10
range.contains(2...5)        // true
range.contains(2...10)       // false
range.contains(2...12)       // false

let emptyRange = 3..<3
emptyRange.contains(3...3)   // false
```

> **Complexity**

> O(1)
