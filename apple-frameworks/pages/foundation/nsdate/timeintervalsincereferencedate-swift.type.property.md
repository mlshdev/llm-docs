> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/timeintervalsincereferencedate-swift.type.property](https://developer.apple.com/documentation/foundation/nsdate/timeintervalsincereferencedate-swift.type.property)

# timeIntervalSinceReferenceDate (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.

## Declaration

```swift
class var timeIntervalSinceReferenceDate: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The interval between the system’s absolute reference date (00:00:00 UTC on 1 January 2001) and the current date and time.

<a id="Discussion"></a>

## Discussion

This method is the primitive method for [NSDate](../nsdate.md). If you subclass [NSDate](../nsdate.md), you must override this method with your own implementation for it.

## See Also

### Getting Time Intervals

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

# timeIntervalSinceReferenceDate (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.

## Declaration

```objectivec
@property (class, readonly) NSTimeInterval timeIntervalSinceReferenceDate;
```

<a id="return-value"></a>

## Return Value

The interval between the system’s absolute reference date (00:00:00 UTC on 1 January 2001) and the current date and time.

<a id="Discussion"></a>

## Discussion

This method is the primitive method for [NSDate](../nsdate.md). If you subclass [NSDate](../nsdate.md), you must override this method with your own implementation for it.

## See Also

### Getting Time Intervals

- [timeIntervalSinceDate:](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
