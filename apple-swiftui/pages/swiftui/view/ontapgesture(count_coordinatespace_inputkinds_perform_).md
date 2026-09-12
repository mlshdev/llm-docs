> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ontapgesture(count:coordinatespace:inputkinds:perform:)](https://developer.apple.com/documentation/swiftui/view/ontapgesture(count:coordinatespace:inputkinds:perform:))

# onTapGesture(count:coordinateSpace:inputKinds:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.

## Declaration

```swift
nonisolated func onTapGesture(count: Int = 1, coordinateSpace: some CoordinateSpaceProtocol = .local, inputKinds: GestureInputKinds = .all, perform action: @escaping (CGPoint) -> Void) -> some View

```

## Parameters

- `count`: The number of taps or clicks required to trigger the action closure provided in `action`.
- `coordinateSpace`: The coordinate space in which to receive location values.
- `inputKinds`: A set of input kinds that this gesture recognizes. If not specified, the gesture will recognize all applicable input kinds that a person can use to perform it.
- `action`: The action to perform. This closure receives an input that indicates where the interaction occurred.

## See Also

### Recognizing tap gestures

- [onTapGesture(count:perform:)](ontapgesture%28count_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture.
- [onTapGesture(count:coordinateSpace:perform:)](ontapgesture%28count_coordinatespace_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [TapGesture](../tapgesture.md): A gesture that recognizes one or more taps.
- [SpatialTapGesture](../spatialtapgesture.md): A gesture that recognizes one or more taps and reports their location.
