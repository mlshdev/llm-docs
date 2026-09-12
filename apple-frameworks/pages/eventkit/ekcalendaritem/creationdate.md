> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/creationdate](https://developer.apple.com/documentation/eventkit/ekcalendaritem/creationdate)

# creationDate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date that this calendar item was created.

## Declaration

```swift
var creationDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

If `nil`, this property was not set or was synced in this state.

## See Also

### Accessing Calendar Item Properties

- [calendar](calendar.md): The calendar for the calendar item.
- [title](title.md): The title for the calendar item.
- [location](location.md): The location associated with the calendar item.
- [lastModifiedDate](lastmodifieddate.md): The date that the calendar item was last modified.
- [timeZone](timezone.md): The time zone for the calendar item.
- [url](url.md): The URL for the calendar item.

# creationDate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The date that this calendar item was created.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * creationDate;
```

<a id="Discussion"></a>

## Discussion

If `nil`, this property was not set or was synced in this state.

## See Also

### Accessing Calendar Item Properties

- [calendar](calendar.md): The calendar for the calendar item.
- [title](title.md): The title for the calendar item.
- [location](location.md): The location associated with the calendar item.
- [lastModifiedDate](lastmodifieddate.md): The date that the calendar item was last modified.
- [timeZone](timezone.md): The time zone for the calendar item.
- [URL](url.md): The URL for the calendar item.
