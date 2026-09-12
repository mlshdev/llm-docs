> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessoryanchor/coordinatespace(for:correction:)](https://developer.apple.com/documentation/arkit/accessoryanchor/coordinatespace(for:correction:))

# coordinateSpace(for:correction:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

The coordinate space of a location on this accessory.

## Declaration

```swift
func coordinateSpace(for location: Accessory.LocationName, correction: ARKitCoordinateSpace.Correction) -> ARKitCoordinateSpace
```

## Parameters

- `location`: The location name.
- `correction`: Correction type to apply.

<a id="return-value"></a>

## Return Value

The coordinate space of the location.
