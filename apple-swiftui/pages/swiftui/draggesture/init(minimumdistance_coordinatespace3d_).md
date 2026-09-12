> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/init(minimumdistance:coordinatespace3d:)](https://developer.apple.com/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace3d:))

# init(minimumDistance:coordinateSpace3D:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.

## Declaration

```swift
@MainActor @preconcurrency init(minimumDistance: CGFloat = 0, coordinateSpace3D: some CoordinateSpace3D)
```

## Parameters

- `minimumDistance`: The minimum dragging distance for the gesture to succeed. Ensure this unit is in the same scale as the provided `CoordinateSpace3D`, the default value is 0 to avoid issues around differing coordinate space scales.
- `coordinateSpace3D`: The coordinate space 3D of the dragging gesture’s location.

## See Also

### Creating a drag gesture

- [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29-8ffe5.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:inputKinds:)](init%28minimumdistance_coordinatespace_inputkinds_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [minimumDistance](minimumdistance.md): The minimum dragging distance before the gesture succeeds.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
