> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooserselectionstyle](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserselectionstyle)

# EKCalendarChooserSelectionStyle (Swift)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates whether users may select a single calendar, or multiple calendars.

## Declaration

```swift
enum EKCalendarChooserSelectionStyle
```

## Topics

### Constants

- [EKCalendarChooserSelectionStyle.single](ekcalendarchooserselectionstyle/single.md): A style that limits users to selecting a single calendar.
- [EKCalendarChooserSelectionStyle.multiple](ekcalendarchooserselectionstyle/multiple.md): A style that lets users select multiple calendars.

### Initializers

- [init(rawValue:)](ekcalendarchooserselectionstyle/init%28rawvalue_%29.md)

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
- [EKCalendarChooserDisplayStyle](ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.

# EKCalendarChooserSelectionStyle (Objective-C)

**Framework:** EventKit UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates whether users may select a single calendar, or multiple calendars.

## Declaration

```objectivec
enum EKCalendarChooserSelectionStyle : NSInteger;
```

## Topics

### Constants

- [EKCalendarChooserSelectionStyleSingle](ekcalendarchooserselectionstyle/single.md): A style that limits users to selecting a single calendar.
- [EKCalendarChooserSelectionStyleMultiple](ekcalendarchooserselectionstyle/multiple.md): A style that lets users select multiple calendars.

## See Also

### Selecting a Calendar Type

- [selectedCalendars](ekcalendarchooser/selectedcalendars.md): The calendars selected by the user.
- [selectionStyle](ekcalendarchooser/selectionstyle.md): Determines whether to allow selection of multiple calendars.
- [EKCalendarChooserDisplayStyle](ekcalendarchooserdisplaystyle.md): Indicates whether to display all calendars or writable calendars only.
