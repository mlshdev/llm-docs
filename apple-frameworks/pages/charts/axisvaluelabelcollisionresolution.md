> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axisvaluelabelcollisionresolution](https://developer.apple.com/documentation/charts/axisvaluelabelcollisionresolution)

# AxisValueLabelCollisionResolution

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
struct AxisValueLabelCollisionResolution
```

## Topics

### Type Properties

- [automatic](axisvaluelabelcollisionresolution/automatic.md): Automatically determine the prevention method based on axis type and data.
- [disabled](axisvaluelabelcollisionresolution/disabled.md): Do not apply collision resolution to this label. The label will always be displayed.
- [greedy](axisvaluelabelcollisionresolution/greedy.md): Use a greedy algorithm. Display a label if it’s not overlapping with other labels.
- [truncate](axisvaluelabelcollisionresolution/truncate.md): Truncate a label to the space available to it.

### Type Methods

- [greedy(priority:minimumSpacing:)](axisvaluelabelcollisionresolution/greedy%28priority_minimumspacing_%29.md): Use a greedy algorithm. Display a label if it’s not overlapping with other labels.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Supporting types

- [AxisValueLabelOrientation](axisvaluelabelorientation.md): Describes the orientation of a label.
