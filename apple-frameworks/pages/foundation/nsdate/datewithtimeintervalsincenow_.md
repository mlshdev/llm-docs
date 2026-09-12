> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/datewithtimeintervalsincenow:](https://developer.apple.com/documentation/foundation/nsdate/datewithtimeintervalsincenow:)

# dateWithTimeIntervalSinceNow:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a date object set to a given number of seconds from the current date and time.

## Declaration

```objectivec
+ (instancetype) dateWithTimeIntervalSinceNow:(NSTimeInterval) secs;
```

## Parameters

- `secs`: The number of seconds from the current date and time for the new date. Use a negative value to specify a date before the current date.

<a id="return-value"></a>

## Return Value

An `NSDate` object set to `secs` seconds from the current date and time.

## See Also

### Related Documentation

- [initWithTimeIntervalSinceNow:](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.

### Creating a Date

- [date](date.md): Creates and returns a new date object set to the current date and time.
- [dateWithTimeIntervalSinceReferenceDate:](datewithtimeintervalsincereferencedate_.md): Creates and returns a date object set to a given number of seconds from 00:00:00 UTC on 1 January 2001.
- [dateWithTimeIntervalSince1970:](datewithtimeintervalsince1970_.md): Creates and returns a date object set to the given number of seconds from 00:00:00 UTC on 1 January 1970.
