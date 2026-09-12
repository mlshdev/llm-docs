> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/timeintervalsincereferencedate-swift.property](https://developer.apple.com/documentation/foundation/date/timeintervalsincereferencedate-swift.property)

# timeIntervalSinceReferenceDate

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between the date value and 00:00:00 UTC on 1 January 2001.

## Declaration

```swift
var timeIntervalSinceReferenceDate: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is negative if the date object is earlier than the system’s absolute reference date (00:00:00 UTC on 1 January 2001).

## See Also

### Getting Time Intervals

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between this date and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The time interval between the date value and the current date and time.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date value and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [timeIntervalBetween1970AndReferenceDate](timeintervalbetween1970andreferencedate.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
- [Date.Stride](stride.md): A type alias to define the stride of a date.
