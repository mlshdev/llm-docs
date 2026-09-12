> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/mediaplaybackstate-swift.enum](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/mediaplaybackstate-swift.enum)

# DDDevice.MediaPlaybackState (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

States that indicate the status of a device’s media playback.

## Declaration

```swift
enum MediaPlaybackState
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) property [mediaPlaybackState](mediaplaybackstate-swift.property.md) is of this type.

## Topics

### Distinguishing media playback states

- [DDDevice.MediaPlaybackState.noContent](mediaplaybackstate-swift.enum/nocontent.md): A state that indicates when the device plays no content.
- [DDDevice.MediaPlaybackState.paused](mediaplaybackstate-swift.enum/paused.md): A state that indicates when content playback for the device pauses.
- [DDDevice.MediaPlaybackState.playing](mediaplaybackstate-swift.enum/playing.md): A state that indicates when the device plays media.

### Initializers

- [init(rawValue:)](mediaplaybackstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [mediaPlaybackState](mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.

# DDDeviceMediaPlaybackState (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

States that indicate the status of a device’s media playback.

## Declaration

```objectivec
enum DDDeviceMediaPlaybackState : NSInteger;
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) property [mediaPlaybackState](mediaplaybackstate-swift.property.md) is of this type.

## Topics

### Distinguishing media playback states

- [DDDeviceMediaPlaybackStateNoContent](mediaplaybackstate-swift.enum/nocontent.md): A state that indicates when the device plays no content.
- [DDDeviceMediaPlaybackStatePaused](mediaplaybackstate-swift.enum/paused.md): A state that indicates when content playback for the device pauses.
- [DDDeviceMediaPlaybackStatePlaying](mediaplaybackstate-swift.enum/playing.md): A state that indicates when the device plays media.

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [mediaPlaybackState](mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.
