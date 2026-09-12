> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/realtimesamplehandling](https://developer.apple.com/documentation/mediadevice/realtimesamplehandling)

# RealtimeSampleHandling

**Framework:** Media Device  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A protocol that extends a media device extension to support realtime sample delivery.

## Declaration

```swift
@MainActor protocol RealtimeSampleHandling : MediaDeviceExtension
```

## Mentioned In

- [Creating a media device extension](creating-a-media-device-extension.md)

<a id="Realtime-Video-Processing"></a>

## Realtime Video Processing

Use `ScreenCaptureKit` to receive system video samples, then use `VideoToolbox` for video sample encoding.

1. Provide an implementation of [startRealtimeSampleDelivery(session:)](realtimesamplehandling/startrealtimesampledelivery%28session_%29.md).
2. Set up ScreenCaptureKit for a media device extension:

```swift
let picker = SCContentSharingPicker.shared()
picker.addObserver(self)
picker.active = true
```

3. Receive an `SCContentFilter` from the `SCContentSharingPicker` observer.
4. Create an `SCStream`. Call `addStreamOutput(_:type:sampleHandlerQueue:)`, and start with `startCapture()`.
5. Receive and process real time screen samples via the `SCStreamOutput` protocol.

<a id="Realtime-Audio-Processing"></a>

## Realtime Audio Processing

Use `AudioServerDriver` to receive system audio samples, then use `AudioToolbox` for audio sample encoding.

## Topics

### Instance Methods

- [startRealtimeSampleDelivery(session:)](realtimesamplehandling/startrealtimesampledelivery%28session_%29.md): Called when the extension can receive realtime samples.
- [stopRealtimeSampleDelivery(session:)](realtimesamplehandling/stoprealtimesampledelivery%28session_%29.md): Called when the extension should stop realtime sample delivery.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [MediaDeviceExtension](mediadeviceextension.md)

## See Also

### Session and system communication

- [MediaOutputSession](mediaoutputsession.md): Represents a media output session for playing content on a remote device.
- [MediaDeviceRoutingManager](mediadeviceroutingmanager.md): An object used by a [MediaDeviceExtension](mediadeviceextension.md) to report device discovery, state changes, and playback events back to the system.
- [MediaDeviceError](mediadeviceerror.md): An error returned by MediaDeviceExtension operations.
