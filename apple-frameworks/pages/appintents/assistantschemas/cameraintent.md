> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/cameraintent](https://developer.apple.com/documentation/appintents/assistantschemas/cameraintent)

# AssistantSchemas.CameraIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app intents that offer camera functionality.

## Declaration

```swift
protocol CameraIntent : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [openInCaptureMode](cameraintent/openincapturemode.md): Deprecated. The app intent conforms to the schema for opening the app’s camera functionality, ready to capture a photo or video.
- [setDevice](cameraintent/setdevice.md): Deprecated. The app intent conforms to the schema for choosing a device to capture a photo.
- [startCapture](cameraintent/startcapture.md): Deprecated. The app intent conforms to the schema for starting the capture of a photo or video.
- [stopCapture](cameraintent/stopcapture.md): Deprecated. The app intent conforms to the schema for stopping the capture of a photo or video.
- [switchDevice](cameraintent/switchdevice.md): Deprecated. The app intent conforms to the schema for switching between cameras or devices.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.IntentSchema](../assistantschema/intentschema.md)
- [AssistantSchemas.IntentSchema](intentschema.md)
