> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onlongtouchgesture(minimumduration:perform:ontouchingchanged:)](https://developer.apple.com/documentation/swiftui/view/onlongtouchgesture(minimumduration:perform:ontouchingchanged:))

# onLongTouchGesture(minimumDuration:perform:onTouchingChanged:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** tvOS 16.0+

Adds an action to perform when this view recognizes a remote long touch gesture. A long touch gesture is when the finger is on the remote touch surface without actually pressing.

## Declaration

```swift
nonisolated func onLongTouchGesture(minimumDuration: Double = 0.5, perform action: @escaping () -> Void, onTouchingChanged: ((Bool) -> Void)? = nil) -> some View

```

## Parameters

- `minimumDuration`: The minimum duration of the long touch that must elapse before the gesture succeeds.
- `action`: The action to perform when a long touch is recognized
- `onTouchingChanged`: A closure to run when the touching state of the gesture changes, passing the current state as a parameter.

## See Also

### Recognizing long-press gestures

- [onLongPressGesture(minimumDuration:maximumDistance:perform:onPressingChanged:)](onlongpressgesture%28minimumduration_maximumdistance_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:maximumDistance:inputKinds:perform:onPressingChanged:)](onlongpressgesture%28minimumduration_maximumdistance_inputkinds_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:perform:onPressingChanged:)](onlongpressgesture%28minimumduration_perform_onpressingchanged_%29.md): Adds an action to perform when this view recognizes a long press gesture.
- [LongPressGesture](../longpressgesture.md): A gesture that succeeds when the user performs a long press.
