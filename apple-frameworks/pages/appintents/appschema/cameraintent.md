> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/cameraintent](https://developer.apple.com/documentation/appintents/appschema/cameraintent)

# AppSchema.CameraIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the camera domain.

## Declaration

```swift
protocol CameraIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [openInCaptureMode](cameraintent/openincapturemode.md): An intent schema that opens the camera in the specified mode.
- [setDevice](cameraintent/setdevice.md): An intent schema that changes the camera to the specified position.
- [startCapture](cameraintent/startcapture.md): An intent schema that starts a capture or opens the camera in a specified mode with a timer setting.
- [stopCapture](cameraintent/stopcapture.md): An intent schema that stops a recording in progress.
- [switchDevice](cameraintent/switchdevice.md): An intent schema that toggles between front and back camera.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [openInCaptureMode](cameraintent/openincapturemode.md): An intent schema that opens the camera in the specified mode.
- [setDevice](cameraintent/setdevice.md): An intent schema that changes the camera to the specified position.
- [startCapture](cameraintent/startcapture.md): An intent schema that starts a capture or opens the camera in a specified mode with a timer setting.
- [stopCapture](cameraintent/stopcapture.md): An intent schema that stops a recording in progress.
- [switchDevice](cameraintent/switchdevice.md): An intent schema that toggles between front and back camera.
