> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/spatialplaybackcapabilitieschangednotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/spatialplaybackcapabilitieschangednotification)

# spatialPlaybackCapabilitiesChangedNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification the system posts when its spatial playback capabilities change.

## Declaration

```swift
class let spatialPlaybackCapabilitiesChangedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when spatial playback capabilities change due to a change in user preference.

The `userInfo` dictionary of this notification contains the [AVAudioSessionSpatialAudioEnabledKey](../avaudiosessionspatialaudioenabledkey.md) key, which indicates whether spatial audio is in an enabled state.

A route change may result in a change in the ability for the system to play spatial audio, so observe [routeChangeNotification](routechangenotification.md) and use the [isSpatialAudioEnabled](../avaudiosessionportdescription/isspatialaudioenabled.md) property to check if the current route supports spatialized playback.

## Topics

### User Info Keys

- [AVAudioSessionSpatialAudioEnabledKey](../avaudiosessionspatialaudioenabledkey.md): A user info key that you use to retrieve the state of spatial playback.

# AVAudioSessionSpatialPlaybackCapabilitiesChangedNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification the system posts when its spatial playback capabilities change.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionSpatialPlaybackCapabilitiesChangedNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when spatial playback capabilities change due to a change in user preference.

The `userInfo` dictionary of this notification contains the [AVAudioSessionSpatialAudioEnabledKey](../avaudiosessionspatialaudioenabledkey.md) key, which indicates whether spatial audio is in an enabled state.

A route change may result in a change in the ability for the system to play spatial audio, so observe [AVAudioSessionRouteChangeNotification](routechangenotification.md) and use the [spatialAudioEnabled](../avaudiosessionportdescription/isspatialaudioenabled.md) property to check if the current route supports spatialized playback.

## Topics

### User Info Keys

- [AVAudioSessionSpatialAudioEnabledKey](../avaudiosessionspatialaudioenabledkey.md): A user info key that you use to retrieve the state of spatial playback.
