> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionroutechangereason_nosuitablerouteforcategory](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionroutechangereason_nosuitablerouteforcategory)

# kAudioSessionRouteChangeReason_NoSuitableRouteForCategory (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

There is no audio hardware route for the audio session category.

## Declaration

```swift
var kAudioSessionRouteChangeReason_NoSuitableRouteForCategory: Int { get }
```

<a id="discussion"></a>

## Discussion

For example, the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) is set but there is no audio input device.

## See Also

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_Override](kaudiosessionroutechangereason_override.md): The audio route has been overridden.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)

# kAudioSessionRouteChangeReason_NoSuitableRouteForCategory (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

There is no audio hardware route for the audio session category.

## Declaration

```objectivec
kAudioSessionRouteChangeReason_NoSuitableRouteForCategory
```

<a id="discussion"></a>

## Discussion

For example, the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) is set but there is no audio input device.

## See Also

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_Override](kaudiosessionroutechangereason_override.md): The audio route has been overridden.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)
