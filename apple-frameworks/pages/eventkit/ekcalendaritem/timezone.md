> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/timezone](https://developer.apple.com/documentation/eventkit/ekcalendaritem/timezone)

# timeZone (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The time zone for the calendar item.

## Declaration

```swift
var timeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the calendar item is a floating event. A floating event is not tied to a particular time zone. It occurs at a given time regardless of the time zone — for example, “lunch at noon.” The start and end times of a floating event should be set as if they were in the system time zone.

## See Also

### Accessing Calendar Item Properties

- [calendar](calendar.md): The calendar for the calendar item.
- [title](title.md): The title for the calendar item.
- [location](location.md): The location associated with the calendar item.
- [creationDate](creationdate.md): The date that this calendar item was created.
- [lastModifiedDate](lastmodifieddate.md): The date that the calendar item was last modified.
- [url](url.md): The URL for the calendar item.

# timeZone (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The time zone for the calendar item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the calendar item is a floating event. A floating event is not tied to a particular time zone. It occurs at a given time regardless of the time zone — for example, “lunch at noon.” The start and end times of a floating event should be set as if they were in the system time zone.

## See Also

### Accessing Calendar Item Properties

- [calendar](calendar.md): The calendar for the calendar item.
- [title](title.md): The title for the calendar item.
- [location](location.md): The location associated with the calendar item.
- [creationDate](creationdate.md): The date that this calendar item was created.
- [lastModifiedDate](lastmodifieddate.md): The date that the calendar item was last modified.
- [URL](url.md): The URL for the calendar item.
