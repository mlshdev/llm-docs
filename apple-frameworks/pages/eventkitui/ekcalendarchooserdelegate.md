> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooserdelegate](https://developer.apple.com/documentation/eventkitui/ekcalendarchooserdelegate)

# EKCalendarChooserDelegate (Swift)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Methods a calendar chooser’s delegate may use to receive notifications.

## Declaration

```swift
protocol EKCalendarChooserDelegate : NSObjectProtocol
```

## Topics

### Selecting Calendars

- [calendarChooserDidFinish(\_:)](ekcalendarchooserdelegate/calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserSelectionDidChange(\_:)](ekcalendarchooserdelegate/calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.
- [calendarChooserDidCancel(\_:)](ekcalendarchooserdelegate/calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Calendar Selection

- [delegate](ekcalendarchooser/delegate.md): The calendar chooser’s delegate.

# EKCalendarChooserDelegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Methods a calendar chooser’s delegate may use to receive notifications.

## Declaration

```objectivec
@protocol EKCalendarChooserDelegate <NSObject>
```

## Topics

### Selecting Calendars

- [calendarChooserDidFinish:](ekcalendarchooserdelegate/calendarchooserdidfinish%28__%29.md): Sent when a user selects one or more calendars.
- [calendarChooserSelectionDidChange:](ekcalendarchooserdelegate/calendarchooserselectiondidchange%28__%29.md): Sent when a user changes the selection.
- [calendarChooserDidCancel:](ekcalendarchooserdelegate/calendarchooserdidcancel%28__%29.md): Sent when the user cancels a calendar selection.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Calendar Selection

- [delegate](ekcalendarchooser/delegate.md): The calendar chooser’s delegate.
