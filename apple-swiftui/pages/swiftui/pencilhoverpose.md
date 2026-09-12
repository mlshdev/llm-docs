> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilhoverpose](https://developer.apple.com/documentation/swiftui/pencilhoverpose)

# PencilHoverPose

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

A value describing the location and distance of an Apple Pencil hovering in the area above a view’s bounds.

## Declaration

```swift
struct PencilHoverPose
```

## Topics

### Getting the hover characteristics

- [altitude](pencilhoverpose/altitude.md): A value that represents the altitude angle of the hovering Apple Pencil.
- [anchor](pencilhoverpose/anchor.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a normalized anchor point relative to that view.
- [azimuth](pencilhoverpose/azimuth.md): A value that represents the azimuth angle of a hovering Apple Pencil.
- [location](pencilhoverpose/location.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a point in that view’s coordinate space.
- [roll](pencilhoverpose/roll.md): A value that represents the barrel roll angle of the hovering Apple Pencil.
- [zDistance](pencilhoverpose/zdistance.md): The normalized distance between the screen and a hovering Apple Pencil.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Recognizing Apple Pencil gestures

- [onPencilDoubleTap(perform:)](view/onpencildoubletap%28perform_%29.md): Adds an action to perform after the user double-taps their Apple Pencil.
- [onPencilSqueeze(perform:)](view/onpencilsqueeze%28perform_%29.md): Adds an action to perform when the user squeezes their Apple Pencil.
- [preferredPencilDoubleTapAction](environmentvalues/preferredpencildoubletapaction.md): The action that the user prefers to perform after double-tapping their Apple Pencil, as selected in the Settings app.
- [preferredPencilSqueezeAction](environmentvalues/preferredpencilsqueezeaction.md): The action that the user prefers to perform when squeezing their Apple Pencil, as selected in the Settings app.
- [PencilPreferredAction](pencilpreferredaction.md): An action that the user prefers to perform after double-tapping their Apple Pencil.
- [PencilDoubleTapGestureValue](pencildoubletapgesturevalue.md): Describes the value of an Apple Pencil double-tap gesture.
- [PencilSqueezeGestureValue](pencilsqueezegesturevalue.md): Describes the value of an Apple Pencil squeeze gesture.
- [PencilSqueezeGesturePhase](pencilsqueezegesturephase.md): Describes the phase and value of an Apple Pencil squeeze gesture.
