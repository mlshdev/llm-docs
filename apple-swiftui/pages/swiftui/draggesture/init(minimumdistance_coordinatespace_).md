> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:)](https://developer.apple.com/documentation/swiftui/draggesture/init(minimumdistance:coordinatespace:))

# init(minimumDistance:coordinateSpace:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.

## Declaration

```swift
@MainActor @preconcurrency init(minimumDistance: CGFloat = 10, coordinateSpace: some CoordinateSpaceProtocol = .local)
```

## Parameters

- `minimumDistance`: The minimum dragging distance for the gesture to succeed.
- `coordinateSpace`: The coordinate space of the dragging gesture’s location.

## See Also

### Creating a drag gesture

- [init(minimumDistance:coordinateSpace:)](init%28minimumdistance_coordinatespace_%29-8ffe5.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace3D:)](init%28minimumdistance_coordinatespace3d_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds and the coordinate space of the gesture’s location.
- [init(minimumDistance:coordinateSpace:inputKinds:)](init%28minimumdistance_coordinatespace_inputkinds_%29.md): Creates a dragging gesture with the minimum dragging distance before the gesture succeeds, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [minimumDistance](minimumdistance.md): The minimum dragging distance before the gesture succeeds.
- [coordinateSpace](coordinatespace.md): The coordinate space in which to receive location values.
