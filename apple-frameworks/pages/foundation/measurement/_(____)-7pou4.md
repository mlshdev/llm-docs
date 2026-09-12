> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/_(_:_:)-7pou4](https://developer.apple.com/documentation/foundation/measurement/_(_:_:)-7pou4)

# \<(\_:\_:)

**Framework:** Foundation  
**Kind:** Operator  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Compare two measurements of the same `Unit`.

## Declaration

```swift
static func < <LeftHandSideType, RightHandSideType>(lhs: Measurement<LeftHandSideType>, rhs: Measurement<RightHandSideType>) -> Bool where LeftHandSideType : Unit, RightHandSideType : Unit
```

<a id="return-value"></a>

## Return Value

`true` if the measurements can be compared and the `lhs` is less than the `rhs` converted value.
