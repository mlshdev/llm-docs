> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserselectiondidchange(_:)](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserselectiondidchange(_:))

# calendarChooserSelectionDidChange(\_:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when a user changes the selection.

## Declaration

```swift
optional func calendarChooserSelectionDidChange(_ calendarChooser: EKCalendarChooser)
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

<a id="Discussion"></a>

## Discussion

Use the [selectedCalendars](../ekcalendarchooser/selectedcalendars.md) property to get the current selection.

## See Also

### Selecting Calendars

- [calendarChooserDidFinish(\_:)](calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserDidCancel(\_:)](calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.

# calendarChooserSelectionDidChange: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when a user changes the selection.

## Declaration

```objectivec
- (void) calendarChooserSelectionDidChange:(EKCalendarChooser *) calendarChooser;
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

<a id="Discussion"></a>

## Discussion

Use the [selectedCalendars](../ekcalendarchooser/selectedcalendars.md) property to get the current selection.

## See Also

### Selecting Calendars

- [calendarChooserDidFinish:](calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserDidCancel:](calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.
