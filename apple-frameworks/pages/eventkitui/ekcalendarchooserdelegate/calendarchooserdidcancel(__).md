> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserdidcancel(_:)](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserdidcancel(_:))

# calendarChooserDidCancel(\_:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when the user cancels a calendar selection.

## Declaration

```swift
optional func calendarChooserDidCancel(_ calendarChooser: EKCalendarChooser)
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

## See Also

### Selecting Calendars

- [calendarChooserDidFinish(\_:)](calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserSelectionDidChange(\_:)](calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.

# calendarChooserDidCancel: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when the user cancels a calendar selection.

## Declaration

```objectivec
- (void) calendarChooserDidCancel:(EKCalendarChooser *) calendarChooser;
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

## See Also

### Selecting Calendars

- [calendarChooserDidFinish:](calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserSelectionDidChange:](calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.
