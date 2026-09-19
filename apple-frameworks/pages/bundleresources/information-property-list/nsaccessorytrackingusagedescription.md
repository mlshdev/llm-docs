> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorytrackingusagedescription

# NSAccessoryTrackingUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 26.0+

A message that tells a person why the app is requesting access to track accessory position and location.

## Details

`NSAccessoryTrackingUsageDescription`

<a id="Discussion"></a>

## Discussion

Use this key to indicate that your app requires access to accessory-tracking data. The first time your app tries to access accessory-tracking data, the system prompts for permission. Provide a string for the prompt that explains why your app needs access.

## See Also

### Vision

- [NSWorldSensingUsageDescription](nsworldsensingusagedescription.md): A message that tells people why the app is requesting access to image tracking, plane detection, or scene reconstruction.
- [NSHandsTrackingUsageDescription](nshandstrackingusagedescription.md): A message that tells people why the app is requesting access to track their hand position and location.
