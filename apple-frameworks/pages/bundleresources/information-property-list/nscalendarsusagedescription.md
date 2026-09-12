> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nscalendarsusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarsusagedescription)

# NSCalendarsUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 6.0+ (deprecated in 17.0) · iPadOS 6.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · watchOS 6.0+ (deprecated in 10.0)

A message that tells people why the app is requesting access to their calendar data.

> `NSCalendarsUsageDescription` has been deprecated. If your app needs read and write access to a person’s calendar data, use [NSCalendarsFullAccessUsageDescription](nscalendarsfullaccessusagedescription.md) instead. If your app needs to create events in a person’s default calendar, use [NSCalendarsWriteOnlyAccessUsageDescription](nscalendarswriteonlyaccessusagedescription.md) instead.

## Details

`NSCalendarsUsageDescription`

<a id="Discussion"></a>

## Discussion

> **Important**

>  This key is required if your app uses APIs that access the person’s calendar data.

## See Also

### Deprecated keys

- [NSEnterpriseMCAMUsageDescription](nsenterprisemcamusagedescription.md): Deprecated. A message that tells people why the app is requesting access to the device’s main camera.
- [NSRemindersUsageDescription](nsremindersusagedescription.md): Deprecated. A message that tells people why the app is requesting access to their reminders.
