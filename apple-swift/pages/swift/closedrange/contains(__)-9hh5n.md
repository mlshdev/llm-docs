> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/contains(_:)-9hh5n](https://developer.apple.com/documentation/swift/closedrange/contains(_:)-9hh5n)

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the given element is contained within the range.

## Declaration

```swift
func contains(_ element: Bound) -> Bool
```

## Parameters

- `element`: The element to check for containment.

<a id="return-value"></a>

## Return Value

`true` if `element` is contained in the range; otherwise, `false`.

<a id="discussion"></a>

## Discussion

A `ClosedRange` instance contains both its lower and upper bound. `element` is contained in the range if it is between the two bounds or equal to either bound.
