> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/calendarevent](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/calendarevent)

# DataDetector.Match.SemanticDetails.CalendarEvent

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The values the framework returns that represent date components of a calendar event.

## Declaration

```swift
struct CalendarEvent
```

<a id="Discussion"></a>

## Discussion

You can use these properties to populate an Event. The event may contain just a single date, such as a start date, but can contain both a start and end date.

- [allDay](calendarevent/allday.md) is `true` if the date or date range doesn’t specify a time.
- [startDate](calendarevent/startdate.md) may contain the start date of the event.
- [endDate](calendarevent/enddate.md) may contain the end date of the event.
- [endTimeZone](calendarevent/endtimezone.md) may contain the time zone of the end date of the event.
- [startTimeZone](calendarevent/starttimezone.md) may contain the time zone of the start date of the event.

## Topics

### Calendar event properties

- [allDay](calendarevent/allday.md): A Boolean value that indicates whether the event is an all-day event.
- [startDate](calendarevent/startdate.md): An optional date that may contain the start date of the event.
- [endDate](calendarevent/enddate.md): An optional date that may contain the end date of the event.
- [startTimeZone](calendarevent/starttimezone.md): An optional time zone object that may contain the time zone of the start date of the event.
- [endTimeZone](calendarevent/endtimezone.md): An optional time zone object that may contain the time zone of the end date of the event.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
