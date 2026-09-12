> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timeinterval](https://developer.apple.com/documentation/foundation/timeinterval)

# TimeInterval (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A number of seconds.

## Declaration

```swift
typealias TimeInterval = Double
```

<a id="Discussion"></a>

## Discussion

A [TimeInterval](timeinterval.md) value is always specified in seconds; it yields sub-millisecond precision over a range of 10,000 years.

On its own, a time interval does not specify a unique point in time, or even a span between specific times. Combining a time interval with one or more known reference points yields a [Date](date.md) or [DateInterval](dateinterval.md) value.

## See Also

### Date Representations

- [Date](date.md): A specific point in time, independent of any calendar or time zone.
- [DateInterval](dateinterval.md): The span of time between a specific start date and end date.

# NSTimeInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A number of seconds.

## Declaration

```objectivec
typedef double NSTimeInterval;
```

<a id="Discussion"></a>

## Discussion

A [NSTimeInterval](timeinterval.md) value is always specified in seconds; it yields sub-millisecond precision over a range of 10,000 years.

On its own, a time interval does not specify a unique point in time, or even a span between specific times. Combining a time interval with one or more known reference points yields a [Date](date.md) or [DateInterval](dateinterval.md) value.

## See Also

### Date Representations

- [NSDate](nsdate.md): A representation of a specific point in time, independent of any calendar or time zone.
- [NSDateInterval](nsdateinterval.md): An object representing the span of time between a specific start date and end date.
