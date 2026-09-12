> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/datewithtimeintervalsincereferencedate:](https://developer.apple.com/documentation/foundation/nsdate/datewithtimeintervalsincereferencedate:)

# dateWithTimeIntervalSinceReferenceDate:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a date object set to a given number of seconds from 00:00:00 UTC on 1 January 2001.

## Declaration

```objectivec
+ (instancetype) dateWithTimeIntervalSinceReferenceDate:(NSTimeInterval) ti;
```

## Parameters

- `ti`: The number of seconds from the absolute reference date (00:00:00 UTC on 1 January 2001) for the new date. Use a negative argument to specify a date and time before the reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object set to `ti` seconds from the absolute reference date.

## See Also

### Related Documentation

- [initWithTimeIntervalSinceReferenceDate:](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.

### Creating a Date

- [date](date.md): Creates and returns a new date object set to the current date and time.
- [dateWithTimeIntervalSinceNow:](datewithtimeintervalsincenow_.md): Creates and returns a date object set to a given number of seconds from the current date and time.
- [dateWithTimeIntervalSince1970:](datewithtimeintervalsince1970_.md): Creates and returns a date object set to the given number of seconds from 00:00:00 UTC on 1 January 1970.
