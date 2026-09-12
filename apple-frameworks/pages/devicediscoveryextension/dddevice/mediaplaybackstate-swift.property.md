> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/mediaplaybackstate-swift.property](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/mediaplaybackstate-swift.property)

# mediaPlaybackState (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0)

A playback status for the device’s current media.

> Please use MediaDeviceExtension

## Declaration

```swift
var mediaPlaybackState: DDDevice.MediaPlaybackState { get set }
```

<a id="Discussion"></a>

## Discussion

Your app’s extension sets a value for this property to communicate to the system whether the device currently plays media. While the device plays, the system displays an equalizer animation next to the device in the picker UI.

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [DDDevice.MediaPlaybackState](mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.

# mediaPlaybackState (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0)

A playback status for the device’s current media.

> Please use MediaDeviceExtension

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) DDDeviceMediaPlaybackState mediaPlaybackState;
```

<a id="Discussion"></a>

## Discussion

Your app’s extension sets a value for this property to communicate to the system whether the device currently plays media. While the device plays, the system displays an equalizer animation next to the device in the picker UI.

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaContentSubtitle](mediacontentsubtitle.md): Deprecated. A subtitle for the current media that the device plays.
- [DDDeviceMediaPlaybackState](mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.
