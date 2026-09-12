> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/timeintervalsince(_:)](https://developer.apple.com/documentation/foundation/date/timeintervalsince(_:))

# timeIntervalSince(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the interval between this date and another given date.

## Declaration

```swift
func timeIntervalSince(_ date: Date) -> TimeInterval
```

## Parameters

- `date`: The date with which to compare this one.

<a id="return-value"></a>

## Return Value

The interval between the receiver and the `another` parameter. If the receiver is earlier than `anotherDate`, the return value is negative. If `anotherDate` is `nil`, the results are undefined.

## See Also

### Getting Time Intervals

- [timeIntervalSinceNow](timeintervalsincenow.md): The time interval between the date value and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date value and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date value and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [timeIntervalBetween1970AndReferenceDate](timeintervalbetween1970andreferencedate.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
- [Date.Stride](stride.md): A type alias to define the stride of a date.
