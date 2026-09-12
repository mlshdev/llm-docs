> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/stride](https://developer.apple.com/documentation/foundation/date/stride)

# Date.Stride

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type alias to define the stride of a date.

## Declaration

```swift
typealias Stride = TimeInterval
```

<a id="Discussion"></a>

## Discussion

The stride of a Date is a [TimeInterval](../timeinterval.md).

## See Also

### Getting Time Intervals

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between this date and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The time interval between the date value and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date value and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date value and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [timeIntervalBetween1970AndReferenceDate](timeintervalbetween1970andreferencedate.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
