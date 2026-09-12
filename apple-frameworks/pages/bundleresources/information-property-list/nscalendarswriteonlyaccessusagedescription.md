> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription)

# NSCalendarsWriteOnlyAccessUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A message that tells people why the app is requesting access to create calendar events.

## Details

`NSCalendarsWriteOnlyAccessUsageDescription`

<a id="Discussion"></a>

## Discussion

If your app needs to read calendar events in addition to creating them, use [NSCalendarsFullAccessUsageDescription](nscalendarsfullaccessusagedescription.md). If your app runs on iOS 17 or later and presents an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to allow people to create calendar events, you don’t need to request calendar access.

> **Important**

>  This key is required if your app uses APIs that write to the person’s calendar data.

## See Also

### Calendar and reminders

- [NSCalendarsFullAccessUsageDescription](nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSRemindersFullAccessUsageDescription](nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
- [Accessing the event store](../../eventkit/accessing-the-event-store.md): Request access to a person’s calendar data through the event store.
