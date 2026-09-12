> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/contains(_:)-822cl](https://developer.apple.com/documentation/swift/closedrange/contains(_:)-822cl)

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the given closed range is contained within this closed range.

## Declaration

```swift
func contains(_ other: ClosedRange<Bound>) -> Bool
```

## Parameters

- `other`: A closed range to check for containment within this closed range.

<a id="return-value"></a>

## Return Value

`true` if `other` is wholly contained within this closed range; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The given closed range is contained within this range if its bounds are contained within this closed range.

```swift
let range = 0...10
range.contains(2...5)        // true
range.contains(2...10)       // true
range.contains(2...12)       // false
```

> **Complexity**

> O(1)
