> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/avfaudio](https://developer.apple.com/documentation/updates/avfaudio)

# AVFAudio updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to AVFAudio.

<a id="Overview"></a>

## Overview

Browse notable changes in [AVFAudio](https://developer.apple.com/documentation/avfaudio).

<a id="June-2024"></a>

## June 2024

<a id="Spatial-audio-with-AVAudioEngine"></a>

### Spatial audio with AVAudioEngine

- Adjust the [AVAudioEnvironmentNode](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode) orientation to match someone’s head pose via compatible AirPods by setting the new [isListenerHeadTrackingEnabled](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/islistenerheadtrackingenabled) property to `true`. The system requires your app to have the [com.apple.developer.coremotion.head-pose](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.coremotion.head-pose) entitlement to observe this property.
- Tailor [AVAudioEnvironmentNode](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode) output according to a person’s personalized spatial audio profile that they configure in Settings by adding the [com.apple.developer.spatial-audio.profile-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.spatial-audio.profile-access) entitlement to your app.
- Instruct [AVAudioEnvironmentNode](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode) to ignore the new system spatial audio toggle in Control Center by adding the [AVGameBypassSystemSpatialAudio](https://developer.apple.com/documentation/bundleresources/information-property-list/avgamebypasssystemspatialaudio) key to your app’s `Info.plist`.

## See Also

### Technology and frameworks

- [Accelerate updates](accelerate.md): Learn about important changes to Accelerate.
- [Accessibility updates](accessibility.md): Learn about important changes to Accessibility.
- [ActivityKit updates](activitykit.md): Learn about important changes in ActivityKit.
- [AdAttributionKit Updates](adattributionkit.md): Learn about important changes to AdAttributionKit.
- [App Clips updates](appclips.md): Learn about important changes in App Clips.
- [App Intents updates](appintents.md): Learn about important changes in App Intents.
- [AppKit updates](appkit.md): Learn about important changes to AppKit.
- [Apple Intelligence updates](apple-intelligence.md): Learn about important changes to Apple Intelligence.
- [AppleMapsServerAPI Updates](applemapsserverapi.md): Learn about important changes to AppleMapsServerAPI.
- [Apple Pencil updates](applepencil.md): Learn about important changes to Apple Pencil.
- [ARKit updates](arkit.md): Learn about important changes to ARKit.
- [Audio Toolbox updates](audiotoolbox.md): Learn about important changes to Audio Toolbox.
- [AuthenticationServices updates](authenticationservices.md): Learn about important changes to AuthenticationServices.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.
- [Background Tasks updates](backgroundtasks.md): Learn about important changes in Background Tasks.
