> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/timeintervalsince(_:)](https://developer.apple.com/documentation/foundation/nsdate/timeintervalsince(_:))

# timeIntervalSince(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the interval between the receiver and another given date.

## Declaration

```swift
func timeIntervalSince(_ anotherDate: Date) -> TimeInterval
```

## Parameters

- `anotherDate`: The date with which to compare the receiver. You must pass a non-`nil` date object.

<a id="return-value"></a>

## Return Value

The interval between the receiver and the `anotherDate` parameter. If the receiver is earlier than `anotherDate`, the return value is negative. If `anotherDate` is `nil`, the results are undefined.

## See Also

### Getting Time Intervals

- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

# timeIntervalSinceDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the interval between the receiver and another given date.

## Declaration

```objectivec
- (NSTimeInterval) timeIntervalSinceDate:(NSDate *) anotherDate;
```

## Parameters

- `anotherDate`: The date with which to compare the receiver. You must pass a non-`nil` date object.

<a id="return-value"></a>

## Return Value

The interval between the receiver and the `anotherDate` parameter. If the receiver is earlier than `anotherDate`, the return value is negative. If `anotherDate` is `nil`, the results are undefined.

## See Also

### Getting Time Intervals

- [timeIntervalSinceNow](timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](../nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.
