> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/longpressgesture](https://developer.apple.com/documentation/swiftui/longpressgesture)

# LongPressGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A gesture that succeeds when the user performs a long press.

## Declaration

```swift
nonisolated struct LongPressGesture
```

## Mentioned In

- [Adding interactivity with gestures](adding-interactivity-with-gestures.md)
- [Composing SwiftUI gestures](composing-swiftui-gestures.md)

<a id="overview"></a>

## Overview

To recognize a long-press gesture on a view, create and configure the gesture, then add it to the view using the [gesture(\_:including:)](view/gesture%28__including_%29.md) modifier.

Add a long-press gesture to a [Circle](circle.md) to animate its color from blue to red, and then change it to green when the gesture ends:

```swift
struct LongPressGestureView: View {
    @GestureState private var isDetectingLongPress = false
    @State private var completedLongPress = false

    var longPress: some Gesture {
        LongPressGesture(minimumDuration: 3)
            .updating($isDetectingLongPress) { currentState, gestureState,
                    transaction in
                gestureState = currentState
                transaction.animation = Animation.easeIn(duration: 2.0)
            }
            .onEnded { finished in
                self.completedLongPress = finished
            }
    }

    var body: some View {
        Circle()
            .fill(self.isDetectingLongPress ?
                Color.red :
                (self.completedLongPress ? Color.green : Color.blue))
            .frame(width: 100, height: 100, alignment: .center)
            .gesture(longPress)
    }
}
```

## Topics

### Creating a long press gesture

- [init(minimumDuration:)](longpressgesture/init%28minimumduration_%29.md): Creates a long-press gesture with a minimum duration
- [init(minimumDuration:maximumDistance:)](longpressgesture/init%28minimumduration_maximumdistance_%29.md): Creates a long-press gesture with a minimum duration and a maximum distance that the interaction can move before the gesture fails.
- [init(minimumDuration:maximumDistance:inputKinds:)](longpressgesture/init%28minimumduration_maximumdistance_inputkinds_%29.md): Creates a long-press gesture with a minimum duration, a maximum distance, and the input kinds the gesture recognizes.
- [minimumDuration](longpressgesture/minimumduration.md): The minimum duration of the long press that must elapse before the gesture succeeds.
- [maximumDistance](longpressgesture/maximumdistance.md): The maximum distance that the long press can move before the gesture fails.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Recognizing long-press gestures

- [onLongPressGesture(minimumDuration:maximumDistance:perform:onPressingChanged:)](view/onlongpressgesture%28minimumduration_maximumdistance_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:maximumDistance:inputKinds:perform:onPressingChanged:)](view/onlongpressgesture%28minimumduration_maximumdistance_inputkinds_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:perform:onPressingChanged:)](view/onlongpressgesture%28minimumduration_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [onLongTouchGesture(minimumDuration:perform:onTouchingChanged:)](view/onlongtouchgesture%28minimumduration_perform_ontouchingchanged_%29.md): Adds an action to perform when this view recognizes a remote long touch gesture. A long touch gesture is when the finger is on the remote touch surface without actually pressing.
