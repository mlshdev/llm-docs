> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tapgesture](https://developer.apple.com/documentation/swiftui/tapgesture)

# TapGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture that recognizes one or more taps.

## Declaration

```swift
nonisolated struct TapGesture
```

<a id="overview"></a>

## Overview

To recognize a tap gesture on a view, create and configure the gesture, and then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier. The following code adds a tap gesture to a [Circle](circle.md) that toggles the color of the circle:

```swift
struct TapGestureView: View {
    @State private var tapped = false

    var tap: some Gesture {
        TapGesture(count: 1)
            .onEnded { _ in self.tapped = !self.tapped }
    }

    var body: some View {
        Circle()
            .fill(self.tapped ? Color.blue : Color.red)
            .frame(width: 100, height: 100, alignment: .center)
            .gesture(tap)
    }
}
```

## Topics

### Creating a tap gesture

- [init(count:)](tapgesture/init%28count_%29.md): Creates a tap gesture with the number of required taps.
- [init(count:inputKinds:)](tapgesture/init%28count_inputkinds_%29.md): Creates a tap gesture with the number of required taps and the input kinds the gesture recognizes.
- [count](tapgesture/count.md): The required number of tap events.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Recognizing tap gestures

- [onTapGesture(count:perform:)](view/ontapgesture%28count_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture.
- [onTapGesture(count:coordinateSpace:perform:)](view/ontapgesture%28count_coordinatespace_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onTapGesture(count:coordinateSpace:inputKinds:perform:)](view/ontapgesture%28count_coordinatespace_inputkinds_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [SpatialTapGesture](spatialtapgesture.md): A gesture that recognizes one or more taps and reports their location.
