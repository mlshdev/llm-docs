> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdelegate/calendarchooserdidfinish(_:)

# calendarChooserDidFinish(\_:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when a user selects one or more calendars.

## Declaration

```swift
optional func calendarChooserDidFinish(_ calendarChooser: EKCalendarChooser)
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

## See Also

### Selecting Calendars

- [calendarChooserSelectionDidChange(\_:)](calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.
- [calendarChooserDidCancel(\_:)](calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.

# calendarChooserDidFinish: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Sent when a user selects one or more calendars.

## Declaration

```objectivec
- (void) calendarChooserDidFinish:(EKCalendarChooser *) calendarChooser;
```

## Parameters

- `calendarChooser`: The calendar chooser that sent this message.

## See Also

### Selecting Calendars

- [calendarChooserSelectionDidChange:](calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.
- [calendarChooserDidCancel:](calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.
