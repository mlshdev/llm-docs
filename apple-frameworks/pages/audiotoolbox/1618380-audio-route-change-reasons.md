> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1618380-audio-route-change-reasons](https://developer.apple.com/documentation/audiotoolbox/1618380-audio-route-change-reasons)

# Audio Route Change Reasons (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Identifiers for the various reasons that an audio route can change while your app is running.

<a id="overview"></a>

## Overview

You encounter these identifiers as values in the [CFDictionary](../corefoundation/cfdictionary.md) object passed to your property listener callback function when it is listening for audio route changes. See the description for [kAudioSessionProperty_AudioRouteChange](kaudiosessionproperty_audioroutechange.md).

## Topics

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_Override](kaudiosessionroutechangereason_override.md): The audio route has been overridden.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_NoSuitableRouteForCategory](kaudiosessionroutechangereason_nosuitablerouteforcategory.md): There is no audio hardware route for the audio session category.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)

## See Also

### Audio Routes

- [Audio Route Description Dictionary Keys](audio-route-description-dictionary-keys.md): Keys for the [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md) dictionary.
- [Audio Route Type Key](audio-route-type-key.md): The one key for an audio route input or output dictionary.
- [Audio Input Routes](audio-input-routes.md): Strings that identify the various audio input sources for a device.
- [Audio Output Routes](audio-output-routes.md): The various audio output destinations available for an iOS device.
- [Audio Route Change Dictionary Keys](audio-route-change-dictionary-keys.md): Keys for obtaining information about an audio hardware route change.
- [Alternative Audio Route Change Reason Dictionary Key](alternative-audio-route-change-reason-dictionary-key.md): An alternate key for obtaining information about the reason for an audio route change.

# Audio Route Change Reasons (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Identifiers for the various reasons that an audio route can change while your app is running.

<a id="overview"></a>

## Overview

You encounter these identifiers as values in the [CFDictionaryRef](../corefoundation/cfdictionary.md) object passed to your property listener callback function when it is listening for audio route changes. See the description for [kAudioSessionProperty_AudioRouteChange](kaudiosessionproperty_audioroutechange.md).

## Topics

### Constants

- [kAudioSessionRouteChangeReason_Unknown](kaudiosessionroutechangereason_unknown.md): Deprecated. The audio route changed but the reason is not known.
- [kAudioSessionRouteChangeReason_NewDeviceAvailable](kaudiosessionroutechangereason_newdeviceavailable.md): A new audio hardware device became available; for example, a headset was plugged in.
- [kAudioSessionRouteChangeReason_OldDeviceUnavailable](kaudiosessionroutechangereason_olddeviceunavailable.md): The previously-used audio hardware device is now unavailable; for example, a headset was unplugged.
- [kAudioSessionRouteChangeReason_CategoryChange](kaudiosessionroutechangereason_categorychange.md): The audio session category has changed.
- [kAudioSessionRouteChangeReason_Override](kaudiosessionroutechangereason_override.md): The audio route has been overridden.
- [kAudioSessionRouteChangeReason_WakeFromSleep](kaudiosessionroutechangereason_wakefromsleep.md): The device woke from sleep.
- [kAudioSessionRouteChangeReason_NoSuitableRouteForCategory](kaudiosessionroutechangereason_nosuitablerouteforcategory.md): There is no audio hardware route for the audio session category.
- [kAudioSessionRouteChangeReason_RouteConfigurationChange](kaudiosessionroutechangereason_routeconfigurationchange.md)

## See Also

### Audio Routes

- [Audio Route Description Dictionary Keys](audio-route-description-dictionary-keys.md): Keys for the [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md) dictionary.
- [Audio Route Type Key](audio-route-type-key.md): The one key for an audio route input or output dictionary.
- [Audio Input Routes](audio-input-routes.md): Strings that identify the various audio input sources for a device.
- [Audio Output Routes](audio-output-routes.md): The various audio output destinations available for an iOS device.
- [Audio Route Change Dictionary Keys](audio-route-change-dictionary-keys.md): Keys for obtaining information about an audio hardware route change.
- [Alternative Audio Route Change Reason Dictionary Key](alternative-audio-route-change-reason-dictionary-key.md): An alternate key for obtaining information about the reason for an audio route change.
