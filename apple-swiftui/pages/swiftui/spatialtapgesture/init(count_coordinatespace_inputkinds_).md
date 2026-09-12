> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialtapgesture/init(count:coordinatespace:inputkinds:)](https://developer.apple.com/documentation/swiftui/spatialtapgesture/init(count:coordinatespace:inputkinds:))

# init(count:coordinateSpace:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a tap gesture with the number of required taps, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.

## Declaration

```swift
nonisolated init(count: Int = 1, coordinateSpace: some CoordinateSpaceProtocol = .local, inputKinds: GestureInputKinds = .all)
```

## Parameters

- `count`: The required number of taps to complete the tap gesture.
- `coordinateSpace`: The coordinate space of the tap gesture’s location.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating a spatial tap gesture

- [init(count:coordinateSpace:)](init%28count_coordinatespace_%29-75s7q.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:)](init%28count_coordinatespace_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace3D:)](init%28count_coordinatespace3d_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
- [count](count.md): The required number of tap events.
