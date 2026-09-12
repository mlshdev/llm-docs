> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/capabilities-swift.struct](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/capabilities-swift.struct)

# MediaOutputDevice.Capabilities

**Framework:** Media Device  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Defines the media capabilities supported by a [MediaOutputDevice](../mediaoutputdevice.md).

## Declaration

```swift
struct Capabilities
```

<a id="overview"></a>

## Overview

Use these options to describe what a device can do, such as streaming audio or video in realtime, playing media from a URL, or launching a remote application.

## Topics

### Instance Properties

- [description](capabilities-swift.struct/description.md): A textual representation of the capabilities.

### Type Properties

- [appLaunch](capabilities-swift.struct/applaunch.md): Capable of launching an application and providing an application-to-application data channel.
- [realtimeAudioStreaming](capabilities-swift.struct/realtimeaudiostreaming.md): Capable of receiving audio samples and processing them in realtime.
- [realtimeVideoStreaming](capabilities-swift.struct/realtimevideostreaming.md): Capable of receiving video samples and processing them in realtime.
- [urlPlayback](capabilities-swift.struct/urlplayback.md): Capable of receiving a media URL and providing a playback experience.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Device discovery and management

- [MediaOutputDevice](../mediaoutputdevice.md): Represents a discoverable media output device such as a TV, speaker, or streaming stick.
- [MediaOutputDevice.DeviceType](devicetype-swift.enum.md): A device type used for display in user interfaces.
- [MediaOutputDevice.VolumeControl](volumecontrol-swift.enum.md): Defines the type of volume control supported by an output device or group.
- [MediaOutputDevice.AuthorizationMethod](authorizationmethod.md): Specifies what kind of authorization UI to present when connecting to a device.
