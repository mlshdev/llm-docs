> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialtapgesture](https://developer.apple.com/documentation/swiftui/spatialtapgesture)

# SpatialTapGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A gesture that recognizes one or more taps and reports their location.

## Declaration

```swift
nonisolated struct SpatialTapGesture
```

<a id="overview"></a>

## Overview

To recognize a tap gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier. The following code adds a tap gesture to a [Circle](circle.md) that toggles the color of the circle based on the tap location:

```swift
struct TapGestureView: View {
    @State private var location: CGPoint = .zero

    var tap: some Gesture {
        SpatialTapGesture()
            .onEnded { event in
                self.location = event.location
             }
    }

    var body: some View {
        Circle()
            .fill(self.location.y > 50 ? Color.blue : Color.red)
            .frame(width: 100, height: 100, alignment: .center)
            .gesture(tap)
    }
}
```

## Topics

### Creating a spatial tap gesture

- [init(count:coordinateSpace:)](spatialtapgesture/init%28count_coordinatespace_%29-75s7q.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:)](spatialtapgesture/init%28count_coordinatespace_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace3D:)](spatialtapgesture/init%28count_coordinatespace3d_%29.md): Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.
- [init(count:coordinateSpace:inputKinds:)](spatialtapgesture/init%28count_coordinatespace_inputkinds_%29.md): Creates a tap gesture with the number of required taps, the coordinate space of the gesture’s location, and the input kinds the gesture recognizes.
- [coordinateSpace](spatialtapgesture/coordinatespace.md): The coordinate space in which to receive location values.
- [count](spatialtapgesture/count.md): The required number of tap events.

### Getting the gesture’s value

- [SpatialTapGesture.Value](spatialtapgesture/value.md): The attributes of a tap gesture.

### Deprecated initializers

- [init(count:coordinateSpace:)](spatialtapgesture/init%28count_coordinatespace_%29-1b85g.md): Deprecated. Creates a tap gesture with the number of required taps and the coordinate space of the gesture’s location.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Recognizing tap gestures

- [onTapGesture(count:perform:)](view/ontapgesture%28count_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture.
- [onTapGesture(count:coordinateSpace:perform:)](view/ontapgesture%28count_coordinatespace_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onTapGesture(count:coordinateSpace:inputKinds:perform:)](view/ontapgesture%28count_coordinatespace_inputkinds_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [TapGesture](tapgesture.md): A gesture that recognizes one or more taps.
