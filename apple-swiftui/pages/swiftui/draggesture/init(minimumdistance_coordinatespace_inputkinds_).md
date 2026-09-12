> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:inputkinds:)](https://developer.apple.com/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:inputkinds:))

# init(minimumDistance:coordinateSpace:inputKinds:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a dragging gesture with the minimum dragging distance before the gesture succeeds, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.

## Declaration

```swift
@MainActor @preconcurrency init(minimumDistance: CGFloat = 10, coordinateSpace: some CoordinateSpaceProtocol = .local, inputKinds: GestureInputKinds = .all)
```

## Parameters

- `minimumDistance`: The minimum distance a person needs to drag before the drag gesture begins.
- `coordinateSpace`: The coordinate space of the dragging gesture’s location.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.

## See Also

### Creating a drag gesture

- [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29-8ffe5.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace3D:)](init%28minimumdistance_coordinatespace3d_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [minimumDistance](minimumdistance.md): The minimum dragging distance before the gesture succeeds.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
