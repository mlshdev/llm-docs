> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/draggesture/value/predictedendtranslation3d](https://developer.apple.com/documentation/swiftui/draggesture/value/predictedendtranslation3d)

# predictedEndTranslation3D

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

A prediction of what the final translation would be if dragging stopped now, based on the current drag velocity.

## Declaration

```swift
var predictedEndTranslation3D: Vector3D { get }
```

## See Also

### Getting 3D position

- [startLocation3D](startlocation3d.md): The 3D start location of the drag gesture.
- [location3D](location3d.md): The 3D location of the drag gesture.
- [predictedEndLocation3D](predictedendlocation3d.md): A prediction of where the final location would be if dragging stopped now, based on the current drag velocity.
- [translation3D](translation3d.md): The translation of the drag gesture from `startLocation3D` to `location3D`.
- [startInputDevicePose3D](startinputdevicepose3d.md): The starting 3D pose of the device driving the drag, if one exists.
- [inputDevicePose3D](inputdevicepose3d.md): The 3D pose of the device driving the drag, if one exists.
