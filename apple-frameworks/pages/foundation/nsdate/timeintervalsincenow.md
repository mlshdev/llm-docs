> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/timeintervalsincenow](https://developer.apple.com/documentation/foundation/nsdate/timeintervalsincenow)

# timeIntervalSinceNow (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between the date object and the current date and time.

## Declaration

```swift
var timeIntervalSinceNow: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

If the date object is earlier than the current date and time, this property’s value is negative.

## See Also

### Getting Time Intervals

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

# timeIntervalSinceNow (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between the date object and the current date and time.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeIntervalSinceNow;
```

<a id="Discussion"></a>

## Discussion

If the date object is earlier than the current date and time, this property’s value is negative.

## See Also

### Getting Time Intervals

- [timeIntervalSinceDate:](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
