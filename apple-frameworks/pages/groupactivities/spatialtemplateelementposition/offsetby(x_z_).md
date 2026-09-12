> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementposition/offsetby(x:z:)](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementposition/offsetby(x:z:))

# offsetBy(x:z:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns a new position at the specified distance from the origin of the shared coordinate space.

## Declaration

```swift
func offsetBy(x: Double, z: Double) -> SpatialTemplateElementPosition
```

## Parameters

- `x`: The distance from the current position, in meters, along the x-axis. You can specify positive or negative values to specify new positions on either side of the original position.
- `z`: The distance from the current position, in meters, along the z-axis. You can specify positive or negative values to specify new positions on either side of the original position.

<a id="return-value"></a>

## Return Value

A position structure with the specified offsets from the current position.

<a id="discussion"></a>

## Discussion

Use this method to adjust an existing position by the specified number of meters. The x- and y-axes form a plane that is horizontal to the ground. The following example creates a new position that is four meters from the app’s content along the z-axis:

```swift
let audienceCenterPoint = SpatialTemplateElementPosition.app.offsetBy(x: 0, z: 4)
```
