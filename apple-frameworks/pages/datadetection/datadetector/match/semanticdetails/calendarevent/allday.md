> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/calendarevent/allday](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/calendarevent/allday)

# allDay

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether the event is an all-day event.

## Declaration

```swift
let allDay: Bool
```

<a id="Discussion"></a>

## Discussion

This may be `true` if the date or date range doesn’t specify a time.

## See Also

### Calendar event properties

- [startDate](startdate.md): An optional date that may contain the start date of the event.
- [endDate](enddate.md): An optional date that may contain the end date of the event.
- [startTimeZone](starttimezone.md): An optional time zone object that may contain the time zone of the start date of the event.
- [endTimeZone](endtimezone.md): An optional time zone object that may contain the time zone of the end date of the event.
