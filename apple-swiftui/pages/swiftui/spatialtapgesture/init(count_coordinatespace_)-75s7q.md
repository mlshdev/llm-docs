> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialtapgesture/init(count:coordinatespace:)-75s7q](https://developer.apple.com/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:)-75s7q)

# init(count:coordinateSpace:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.

## Declaration

```swift
nonisolated init(count: Int = 1, coordinateSpace: some CoordinateSpaceProtocol = .local)
```

## Parameters

- `count`: The required number of taps to complete the tap gesture.
- `coordinateSpace`: The coordinate space of the tap gesture’s location.

## See Also

### Creating a spatial tap gesture

- [init(count:coordinateSpace:)](init%28count_coordinatespace_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace3D:)](init%28count_coordinatespace3d_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:inputKinds:)](init%28count_coordinatespace_inputkinds_%29.md): Creates a tap gesture with the number of required taps, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
- [count](count.md): The required number of tap events.
