> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/calendardaychanged](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/calendardaychanged)

# calendarDayChanged

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a change in calendar day.

## Declaration

```swift
static var calendarDayChanged: NotificationCenter.BaseMessageIdentifier<Calendar.CalendarDayChangedMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [Calendar.CalendarDayChangedMessage](../../calendar/calendardaychangedmessage.md).

## See Also

### Identifying calendar, date, and time zone messages

- [systemClockDidChange](systemclockdidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Date.SystemClockDidChangeMessage>`. An identifier for a message about a change in the system clock.
- [systemTimeZoneDidChange](systemtimezonedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<TimeZone.SystemTimeZoneDidChangeMessage>`. An identifier for a message about a change in the system time zone.
