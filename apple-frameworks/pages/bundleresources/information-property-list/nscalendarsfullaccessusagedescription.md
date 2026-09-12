> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nscalendarsfullaccessusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarsfullaccessusagedescription)

# NSCalendarsFullAccessUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A message that tells people why the app is requesting access to read and write their calendar data.

## Details

`NSCalendarsFullAccessUsageDescription`

<a id="Discussion"></a>

## Discussion

If your app needs to create calendar events but doesn’t need to read them, use [NSCalendarsWriteOnlyAccessUsageDescription](nscalendarswriteonlyaccessusagedescription.md). If your app runs on iOS 17 or later and presents an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to allow people to create calendar events, you don’t need to request calendar access.

> **Important**

>  This key is required if your app uses APIs that read and write the person’s calendar data.

## See Also

### Calendar and reminders

- [NSCalendarsWriteOnlyAccessUsageDescription](nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
- [Accessing the event store](../../eventkit/accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
