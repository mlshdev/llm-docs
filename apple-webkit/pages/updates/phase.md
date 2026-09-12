> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/updates/phase](https://developer.apple.com/documentation/updates/phase)

# PHASE updates

**Framework:** Updates  
**Kind:** Article

Learn about important changes to PHASE.

<a id="Overview"></a>

## Overview

Browse notable changes in [PHASE](https://developer.apple.com/documentation/phase).

<a id="June-2024"></a>

## June 2024

<a id="AirPods-head-tracking"></a>

### AirPods head tracking

- Adjust the [PHASEListener](https://developer.apple.com/documentation/phase/phaselistener) orientation to match someone’s head pose provided via compatible AirPods by setting the new [automaticHeadTrackingFlags](https://developer.apple.com/documentation/phase/phaselistener/automaticheadtrackingflags) property to [orientation](https://developer.apple.com/documentation/phase/phaseautomaticheadtrackingflags/orientation). To observe this property, the system requires your app to have the [com.apple.developer.coremotion.head-pose](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.coremotion.head-pose) entitlement.

<a id="Personalized-spatial-audio-profile"></a>

### Personalized spatial audio profile

- Tailor [PHASESource](https://developer.apple.com/documentation/phase/phasesource) output according to a person’s personalized spatial audio profile that they configure in Settings by adding the [com.apple.developer.spatial-audio.profile-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.spatial-audio.profile-access) entitlement to your app.

<a id="Spatial-audio-toggle-in-Control-Center"></a>

### Spatial audio toggle in Control Center

- Instruct [PHASE](https://developer.apple.com/documentation/phase) to ignore the new system spatial audio toggle in Control Center by adding the [AVGameBypassSystemSpatialAudio](https://developer.apple.com/documentation/bundleresources/information-property-list/avgamebypasssystemspatialaudio) key to your app’s `Info.plist`.

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
- [AVFAudio updates](avfaudio.md): Learn about important changes to AVFAudio.
- [AVFoundation updates](avfoundation.md): Learn about important changes to AVFoundation.
