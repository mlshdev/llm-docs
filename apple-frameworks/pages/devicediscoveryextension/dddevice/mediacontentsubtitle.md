> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/mediacontentsubtitle](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/mediacontentsubtitle)

# mediaContentSubtitle (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0)

A subtitle for the current media that the device plays.

> Please use MediaDeviceExtension

## Declaration

```swift
var mediaContentSubtitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Your app’s extension sets a value for this property to communicate to the system the particular media that the device currently plays. The system displays the information to the user in a Now Playing view in the picker UI.

Set this property to `nil` when [mediaPlaybackState](mediaplaybackstate-swift.property.md) is [DDDevice.MediaPlaybackState.noContent](mediaplaybackstate-swift.enum/nocontent.md).

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaPlaybackState](mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.
- [DDDevice.MediaPlaybackState](mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.

# mediaContentSubtitle (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0)

A subtitle for the current media that the device plays.

> Please use MediaDeviceExtension

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * mediaContentSubtitle;
```

<a id="Discussion"></a>

## Discussion

Your app’s extension sets a value for this property to communicate to the system the particular media that the device currently plays. The system displays the information to the user in a Now Playing view in the picker UI.

Set this property to `nil` when [mediaPlaybackState](mediaplaybackstate-swift.property.md) is [DDDeviceMediaPlaybackStateNoContent](mediaplaybackstate-swift.enum/nocontent.md).

## See Also

### Communicating device content and playback status

- [mediaContentTitle](mediacontenttitle.md): Deprecated. A title for the current media that the device plays.
- [mediaPlaybackState](mediaplaybackstate-swift.property.md): Deprecated. A playback status for the device’s current media.
- [DDDeviceMediaPlaybackState](mediaplaybackstate-swift.enum.md): States that indicate the status of a device’s media playback.
