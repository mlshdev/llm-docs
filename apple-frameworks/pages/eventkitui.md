> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui](https://developer.apple.com/documentation/eventkitui)

# EventKit UI (Swift)

**Framework:** EventKit UI  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Display an interface for viewing, selecting, and editing calendar events and reminders.

<a id="overview"></a>

## Overview

On iOS, use the EventKitUI framework to show calendar and reminder information to the user modally. EventKitUI provides view controllers for viewing and editing calendar and reminder information, choosing which calendar to view, and for determining whether to present calendars as read-only or readable and writeable.

The view controllers you’ll use on iOS are:

- [EKEventViewController](eventkitui/ekeventviewcontroller.md), for displaying existing events.
- [EKEventEditViewController](eventkitui/ekeventeditviewcontroller.md), for creating, editing, or deleting events.
- [EKCalendarChooser](eventkitui/ekcalendarchooser.md), for selecting one or more calendars, and to determine whether a calendar has read-only or read-write access.

You present these interfaces from within your app. Upon presentation, the system manages all interactions with the user, notifying you when the interfaces are dismissed.

EventKitUI also provides several configurable classes for selecting a default calendar, displaying buttons, or to enabling the user to select one or more calendars.

> **Note**

> To access the event store, which contains calendar and reminder data, use EventKit. For more information, see [Accessing the event store](eventkit/accessing-the-event-store.md).

## Topics

### Calendar Views

- [EKEventViewController](eventkitui/ekeventviewcontroller.md): A view controller for displaying existing calendar and reminder events, and for optionally editing those events.

### Calendar Edits

- [EKEventEditViewController](eventkitui/ekeventeditviewcontroller.md): A view controller for creating, editing, and deleting calendar events.

### Calendar Selection

- [EKCalendarChooser](eventkitui/ekcalendarchooser.md): A view controller for determining whether a user may select one or more calendars.

### EventKit Bundle Access

- [EventKitUIBundle()](eventkitui/eventkituibundle%28%29.md): Use to access resources within the app bundle.

### Reference

- [EventKitUI Constants](eventkitui/eventkitui-constants.md)

# EventKit UI (Objective-C)

**Framework:** EventKit UI  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Display an interface for viewing, selecting, and editing calendar events and reminders.

<a id="overview"></a>

## Overview

On iOS, use the EventKitUI framework to show calendar and reminder information to the user modally. EventKitUI provides view controllers for viewing and editing calendar and reminder information, choosing which calendar to view, and for determining whether to present calendars as read-only or readable and writeable.

The view controllers you’ll use on iOS are:

- [EKEventViewController](eventkitui/ekeventviewcontroller.md), for displaying existing events.
- [EKEventEditViewController](eventkitui/ekeventeditviewcontroller.md), for creating, editing, or deleting events.
- [EKCalendarChooser](eventkitui/ekcalendarchooser.md), for selecting one or more calendars, and to determine whether a calendar has read-only or read-write access.

You present these interfaces from within your app. Upon presentation, the system manages all interactions with the user, notifying you when the interfaces are dismissed.

EventKitUI also provides several configurable classes for selecting a default calendar, displaying buttons, or to enabling the user to select one or more calendars.

> **Note**

> To access the event store, which contains calendar and reminder data, use EventKit. For more information, see [Accessing the event store](eventkit/accessing-the-event-store.md).

## Topics

### Calendar Views

- [EKEventViewController](eventkitui/ekeventviewcontroller.md): A view controller for displaying existing calendar and reminder events, and for optionally editing those events.

### Calendar Edits

- [EKEventEditViewController](eventkitui/ekeventeditviewcontroller.md): A view controller for creating, editing, and deleting calendar events.

### Calendar Selection

- [EKCalendarChooser](eventkitui/ekcalendarchooser.md): A view controller for determining whether a user may select one or more calendars.

### EventKit Bundle Access

- [EventKitUIBundle](eventkitui/eventkituibundle%28%29.md): Use to access resources within the app bundle.

### Reference

- [EventKitUI Constants](eventkitui/eventkitui-constants.md)
