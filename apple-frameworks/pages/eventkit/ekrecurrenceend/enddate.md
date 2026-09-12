> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrenceend/enddate](https://developer.apple.com/documentation/eventkit/ekrecurrenceend/enddate)

# endDate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The end date of the recurrence end, or `nil` if the recurrence end is count-based.

## Declaration

```swift
var endDate: Date? { get }
```

## See Also

### Accessing Recurrence End Properties

- [occurrenceCount](occurrencecount.md): The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.

# endDate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The end date of the recurrence end, or `nil` if the recurrence end is count-based.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * endDate;
```

## See Also

### Accessing Recurrence End Properties

- [occurrenceCount](occurrencecount.md): The occurrence count of the recurrence end, or `0` if the recurrence end is date-based.
