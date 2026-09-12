> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/preferredpencildoubletapaction](https://developer.apple.com/documentation/swiftui/environmentvalues/preferredpencildoubletapaction)

# preferredPencilDoubleTapAction

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

The action that the user prefers to perform after double-tapping their Apple Pencil, as selected in the Settings app.

## Declaration

```swift
var preferredPencilDoubleTapAction: PencilPreferredAction { get }
```

<a id="discussion"></a>

## Discussion

You can read this value by creating a property with the [Environment](../environment.md) property wrapper and using it inside the action closure of the [onPencilDoubleTap(perform:)](../view/onpencildoubletap%28perform_%29.md) view modifier as an indication of what to do after the user double-taps their Apple Pencil:

```swift
@Environment(\.preferredPencilDoubleTapAction) private var preferredAction

var body: some View {
    MyDrawingCanvas()
        .onPencilDoubleTap { value in
            switch preferredAction {
                ...
            }
        }
}
```

In macOS, this value cannot be changed by users and is always set to [switchEraser](../pencilpreferredaction/switcheraser.md).

## See Also

### Recognizing Apple Pencil gestures

- [onPencilDoubleTap(perform:)](../view/onpencildoubletap%28perform_%29.md): Adds an action to perform after the user double-taps their Apple Pencil.
- [onPencilSqueeze(perform:)](../view/onpencilsqueeze%28perform_%29.md): Adds an action to perform when the user squeezes their Apple Pencil.
- [preferredPencilSqueezeAction](preferredpencilsqueezeaction.md): The action that the user prefers to perform when squeezing their Apple Pencil, as selected in the Settings app.
- [PencilPreferredAction](../pencilpreferredaction.md): An action that the user prefers to perform after double-tapping their Apple Pencil.
- [PencilDoubleTapGestureValue](../pencildoubletapgesturevalue.md): Describes the value of an Apple Pencil double-tap gesture.
- [PencilSqueezeGestureValue](../pencilsqueezegesturevalue.md): Describes the value of an Apple Pencil squeeze gesture.
- [PencilSqueezeGesturePhase](../pencilsqueezegesturephase.md): Describes the phase and value of an Apple Pencil squeeze gesture.
- [PencilHoverPose](../pencilhoverpose.md): A value describing the location and distance of an Apple Pencil hovering in the area above a view’s bounds.
