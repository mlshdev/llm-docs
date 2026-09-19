> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/datadetection/ddmatchcalendarevent/endtimezone

# endTimeZone (Swift)

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time zone for the event’s end date.

## Declaration

```swift
var endTimeZone: TimeZone? { get }
```

## See Also

### Getting event details

- [isAllDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [endDate](enddate.md): A date that represents the end of the event.
- [startDate](startdate.md): A date that represents the start of the event.
- [startTimeZone](starttimezone.md): The time zone for the event’s start date.

# endTimeZone (Objective-C)

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time zone for the event’s end date.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSTimeZone * endTimeZone;
```

## See Also

### Getting event details

- [allDay](isallday.md): A Boolean value that indicates whether the event is an all-day event.
- [endDate](enddate.md): A date that represents the end of the event.
- [startDate](startdate.md): A date that represents the start of the event.
- [startTimeZone](starttimezone.md): The time zone for the event’s start date.
