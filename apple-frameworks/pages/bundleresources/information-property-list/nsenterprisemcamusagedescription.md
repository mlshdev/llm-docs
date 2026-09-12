> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsenterprisemcamusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsenterprisemcamusagedescription)

# NSEnterpriseMCAMUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** visionOS 2.0+ (deprecated in 2.3)

A message that tells people why the app is requesting access to the device’s main camera.

> Use [NSMainCameraUsageDescription](nsmaincamerausagedescription.md) instead.

## Details

`NSEnterpriseMCAMUsageDescription`

<a id="Discussion"></a>

## Discussion

The system uses this string in visionOS 2-2.3 to tell someone why your app requests permission to use the main camera. In newer versions of visionOS, the system uses the value of [NSMainCameraUsageDescription](nsmaincamerausagedescription.md) instead.

For information about using the main camera in your visionOS app, see [Accessing the main camera](../../visionos/accessing-the-main-camera.md).

## See Also

### Deprecated keys

- [NSCalendarsUsageDescription](nscalendarsusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their calendar data.
- [NSRemindersUsageDescription](nsremindersusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their reminders.
