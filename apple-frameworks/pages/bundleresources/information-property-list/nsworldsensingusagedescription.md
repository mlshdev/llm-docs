> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsworldsensingusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsworldsensingusagedescription)

# NSWorldSensingUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 1.0+

A message that tells people why the app is requesting access to image tracking, plane detection, or scene reconstruction.

## Details

`NSWorldSensingUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key to indicate that your app requires access to world-sensing data. This includes plane detection, image tracking, and scene-reconstruction anchors. The first time your app tries to access world-sensing data, the system prompts for permission. Provide a string for the prompt that explains why your app needs access. For more information on setting up ARKit for world sensing, see [Setting up access to ARKit data](../../visionos/setting-up-access-to-arkit-data.md).

> **Note**

>  World tracking — unlike world sensing — doesn’t require authorization. For more information, see [Tracking specific points in world space](../../visionos/tracking-points-in-world-space.md).

## See Also

### Vision

- [NSHandsTrackingUsageDescription](nshandstrackingusagedescription.md): A message that tells people why the app is requesting access to track their hand position and location.
- [NSAccessoryTrackingUsageDescription](nsaccessorytrackingusagedescription.md): A message that tells a person why the app is requesting access to track accessory position and location.
