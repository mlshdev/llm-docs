> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionroutechangereason_override](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionroutechangereason_override)

# kAudioSessionRouteChangeReason_Override (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The audio route has been overridden.

## Declaration

```swift
var kAudioSessionRouteChangeReason_Override: Int { get }
```

<a id="discussion"></a>

## Discussion

For example, while using the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) category, output audio has been redirected to the speaker using the [kAudioSessionProperty_OverrideAudioRoute](kaudiosessionproperty_overrideaudioroute.md) property.

## See Also

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_NoSuitableRouteForCategory](kaudiosessionroutechangereason_nosuitablerouteforcategory.md): There is no audio hardware route for the audio session category.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)

# kAudioSessionRouteChangeReason_Override (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The audio route has been overridden.

## Declaration

```objectivec
kAudioSessionRouteChangeReason_Override
```

<a id="discussion"></a>

## Discussion

For example, while using the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) category, output audio has been redirected to the speaker using the [kAudioSessionProperty_OverrideAudioRoute](kaudiosessionproperty_overrideaudioroute.md) property.

## See Also

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_NoSuitableRouteForCategory](kaudiosessionroutechangereason_nosuitablerouteforcategory.md): There is no audio hardware route for the audio session category.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)
