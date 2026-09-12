> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooserdisplaystyle](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdisplaystyle)

# EKCalendarChooserDisplayStyle (Swift)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates whether to display all calendars or writable calendars only.

## Declaration

```swift
enum EKCalendarChooserDisplayStyle
```

## Topics

### Constants

- [EKCalendarChooserDisplayStyle.allCalendars](ekcalendarchooserdisplaystyle/allcalendars.md): Displays writable and read-only calendars.
- [EKCalendarChooserDisplayStyle.writableCalendarsOnly](ekcalendarchooserdisplaystyle/writablecalendarsonly.md): Displays writable calendars only.

### Initializers

- [init(rawValue:)](ekcalendarchooserdisplaystyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting a Calendar Type

- [selectedCalendars](ekcalendarchooser/selectedcalendars.md): The calendars selected by the user.
- [selectionStyle](ekcalendarchooser/selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.

# EKCalendarChooserDisplayStyle (Objective-C)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates whether to display all calendars or writable calendars only.

## Declaration

```objectivec
enum EKCalendarChooserDisplayStyle : NSInteger;
```

## Topics

### Constants

- [EKCalendarChooserDisplayAllCalendars](ekcalendarchooserdisplaystyle/allcalendars.md): Displays writable and read-only calendars.
- [EKCalendarChooserDisplayWritableCalendarsOnly](ekcalendarchooserdisplaystyle/writablecalendarsonly.md): Displays writable calendars only.

## See Also

### Selecting a Calendar Type

- [selectedCalendars](ekcalendarchooser/selectedcalendars.md): The calendars selected by the user.
- [selectionStyle](ekcalendarchooser/selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserSelectionStyle](ekcalendarchooserselectionstyle.md): Indicates whether users may select a single calendar, or multiple calendars.
