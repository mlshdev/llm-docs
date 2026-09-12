> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/timeintervalsincereferencedate-swift.property](https://developer.apple.com/documentation/foundation/nsdate/timeintervalsincereferencedate-swift.property)

# timeIntervalSinceReferenceDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between the date object and 00:00:00 UTC on 1 January 2001.

## Declaration

```swift
var timeIntervalSinceReferenceDate: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is negative if the date object is earlier than the system’s absolute reference date (00:00:00 UTC on 1 January 2001).

## See Also

### Getting Time Intervals

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

# timeIntervalSinceReferenceDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between the date object and 00:00:00 UTC on 1 January 2001.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeIntervalSinceReferenceDate;
```

<a id="Discussion"></a>

## Discussion

This property’s value is negative if the date object is earlier than the system’s absolute reference date (00:00:00 UTC on 1 January 2001).

## See Also

### Getting Time Intervals

- [timeIntervalSinceDate:](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
