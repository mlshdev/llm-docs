> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkitui/ekcalendarchooser/selectedcalendars

# selectedCalendars (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calendars selected by the user.

## Declaration

```swift
var selectedCalendars: Set<EKCalendar> { get set }
```

## See Also

### Selecting a Calendar Type

- [selectionStyle](selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.
- [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.

# selectedCalendars (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calendars selected by the user.

## Declaration

```objectivec
@property (nonatomic, copy) NSSet<EKCalendar *> * selectedCalendars;
```

## See Also

### Selecting a Calendar Type

- [selectionStyle](selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](../ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.
- [EKCalendarChooserDisplayStyle](../ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.
