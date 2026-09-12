> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/systemclockdidchange](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/systemclockdidchange)

# systemClockDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a change in the system clock.

## Declaration

```swift
static var systemClockDidChange: NotificationCenter.BaseMessageIdentifier<Date.SystemClockDidChangeMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [Date.SystemClockDidChangeMessage](../../date/systemclockdidchangemessage.md).

## See Also

### Identifying calendar, date, and time zone messages

- [calendarDayChanged](calendardaychanged.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<Calendar.CalendarDayChangedMessage>`. An identifier for a message about a change in calendar day.
- [systemTimeZoneDidChange](systemtimezonedidchange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<TimeZone.SystemTimeZoneDidChangeMessage>`. An identifier for a message about a change in the system time zone.
