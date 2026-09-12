> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialtapgesture/init(count:coordinatespace3d:)](https://developer.apple.com/documentation/swiftui/spatialtapgesture/init(count:coordinatespace3d:))

# init(count:coordinateSpace3D:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.

## Declaration

```swift
nonisolated init(count: Int = 1, coordinateSpace3D: some CoordinateSpace3D)
```

## Parameters

- `count`: The required number of taps to complete the tap gesture.
- `coordinateSpace3D`: The coordinate space 3D of the tap gesture’s location.

## See Also

### Creating a spatial tap gesture

- [init(count:coordinateSpace:)](init%28count_coordinatespace_%29-75s7q.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:)](init%28count_coordinatespace_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:inputKinds:)](init%28count_coordinatespace_inputkinds_%29.md): Creates a tap gesture with the number of required taps, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
- [count](count.md): The required number of tap events.
