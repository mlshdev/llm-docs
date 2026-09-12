> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarkvalues](https://developer.apple.com/documentation/charts/axismarkvalues)

# AxisMarkValues

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Describes the values the axis markers will present (one for each value).

## Declaration

```swift
struct AxisMarkValues
```

## Topics

### Type Properties

- [automatic](axismarkvalues/automatic.md): Automatically determines the values for the markers of the axis.

### Type Methods

- [automatic(desiredCount:roundLowerBound:roundUpperBound:)](axismarkvalues/automatic%28desiredcount_roundlowerbound_roundupperbound_%29.md): Automatically determines the values for the markers, approximating the target number of values.
- [automatic(minimumStride:desiredCount:roundLowerBound:roundUpperBound:)](axismarkvalues/automatic%28minimumstride_desiredcount_roundlowerbound_roundupperbound_%29.md)
- [stride(by:count:roundLowerBound:roundUpperBound:calendar:)](axismarkvalues/stride%28by_count_roundlowerbound_roundupperbound_calendar_%29.md): Creates values with the given calendar unit.
- [stride(by:roundLowerBound:roundUpperBound:)](axismarkvalues/stride%28by_roundlowerbound_roundupperbound_%29.md): Creates values with the given number step.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Supporting types

- [AxisMarkPreset](axismarkpreset.md): Describes preset styles for axis markers.
- [AxisMarkPosition](axismarkposition.md): Describes the position of axis markers.
