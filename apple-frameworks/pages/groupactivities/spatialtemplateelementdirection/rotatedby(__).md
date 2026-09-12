> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementdirection/rotatedby(_:)](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementdirection/rotatedby(_:))

# rotatedBy(\_:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns a new direction structure that adds the specified rotation angle to the current direction’s value.

## Declaration

```swift
func rotatedBy(_ rotationAngle: Angle2D) -> SpatialTemplateElementDirection
```

## Parameters

- `rotationAngle`: The amount of rotation to apply along the y-axis.

<a id="return-value"></a>

## Return Value

A new direction structure that combines the rotation value of the current structure and the `rotationAngle` value.
