> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/technotes/tn3132-changes-eventkit-and-eventkitui-in-ios16](https://developer.apple.com/documentation/technotes/tn3132-changes-eventkit-and-eventkitui-in-ios16)

# TN3132: Changes to EventKit and EventKitUI in iOS 16

**Kind:** Technote

Test your apps against EventKit and EventKitUI API changes in iOS 16.

<a id="Overview"></a>

## Overview

The iOS 16 SDK introduces some changes to the EventKit and EventKitUI frameworks. This document highlights some of the major changes. To learn about related changes in macOS Ventura 13, see [TN3130: Changes to EventKit in macOS Ventura 13](tn3130-changes-to-eventkit-in-macos13-ventura.md).

For apps running on systems prior to iOS 16, built with Xcode 13 or earlier and linked against older versions of the iOS SDK, the legacy behavior remains in place when using these frameworks. When you run your app on iOS 16, and have built it with Xcode 14 and linked against the iOS 16 SDK, you may see behavior that you are unfamiliar with when using EventKit or EventKitUI. To identify these changes in behavior, thoroughly test your app on each major OS version it supports on real hardware. Confirm that your implementation of EventKit or EventKitUI behaves as you expect in each OS version and update your code where needed.
If you notice an unexpected behavior in EventKit, report it using [Feedback Assistant](https://developer.apple.com/bug-reporting/).

<a id="EKCalendarChooser"></a>

## EKCalendarChooser

Setting the [selectedCalendars](https://developer.apple.com/documentation/eventkitui/ekcalendarchooser/selectedcalendars) property of a calendar chooser view controller no longer calls the [calendarChooserSelectionDidChange(\_:)](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserselectiondidchange%28_:%29) delegate method. `calendarChooserSelectionDidChange(_:)` is only called when the user selects a calendar in the view controller.

<a id="EKEventStore"></a>

## EKEventStore

<a id="Committing-changes"></a>

### Committing changes

When you call [saveCalendar(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/savecalendar%28_:commit:%29), [removeCalendar(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/removecalendar%28_:commit:%29), [save(\_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save%28_:span:commit:%29), [remove(\_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/remove%28_:span:commit:%29), [save(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save%28_:commit:%29), or [remove(\_:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/remove%28_:commit:%29) methods with the `commit` parameter set to `true`, [EKEventStore](https://developer.apple.com/documentation/eventkit/ekeventstore) attempts to immediately save and commit your changes to the event store. If the commit fails, `EKEventStore` automatically rolls back all changes that have been saved but aren’t yet committed to the event store.

In the legacy behavior, objects remain saved but uncommitted in the event store when the commit failed.

<a id="Fetching-events"></a>

### Fetching events

[events(matching:)](https://developer.apple.com/documentation/eventkit/ekeventstore/events%28matching:%29) and [enumerateEvents(matching:using:)](https://developer.apple.com/documentation/eventkit/ekeventstore/enumerateevents%28matching:using:%29) now return events that have been saved but weren’t yet committed to the event store.

In the legacy behavior, `events(matching:)` and `enumerateEvents(matching:using:)` only return events that have been saved and committed to the event store.

<a id="Recurring-events"></a>

### Recurring events

If you are saving a detached occurrence of a recurring event, and you specify [EKSpan.futureEvents](https://developer.apple.com/documentation/eventkit/ekspan/futureevents) for the `span` parameter of the [save(\_:span:commit:)](https://developer.apple.com/documentation/eventkit/ekeventstore/save%28_:span:commit:%29) method, your changes apply to all future occurrences of the event.

In the legacy behavior, your changes only apply to this instance of the recurring event.

<a id="Revision-History"></a>

## Revision History

- **2022-08-16** First published.

## See Also

### Related Documentation

- [TN3130: Changes to EventKit in macOS Ventura 13](tn3130-changes-to-eventkit-in-macos13-ventura.md): Test your apps against EventKit API changes in macOS Ventura 13.
- [TN3153: Adopting API changes for EventKit in iOS 17, macOS 14, and watchOS 10](tn3153-adopting-api-changes-for-eventkit-in-ios-macos-and-watchos.md): Test your existing apps against EventKit API latest changes.
