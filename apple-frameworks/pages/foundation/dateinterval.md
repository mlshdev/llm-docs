> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateinterval](https://developer.apple.com/documentation/foundation/dateinterval)

# DateInterval

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The span of time between a specific start date and end date.

## Declaration

```swift
struct DateInterval
```

<a id="overview"></a>

## Overview

DateInterval represents a closed date interval in the form of \[startDate, endDate\].  It is possible for the start and end dates to be the same with a duration of 0.  DateInterval does not support reverse intervals i.e. intervals where the duration is less than 0 and the end date occurs earlier in time than the start date.

## Topics

### Creating a Date Interval

- [init()](dateinterval/init%28%29.md): Initializes an interval with start and end dates set to the current date and the duration set to `0`.
- [init(start:duration:)](dateinterval/init%28start_duration_%29.md): Initializes an interval with the specified start date and duration.
- [init(start:end:)](dateinterval/init%28start_end_%29.md): Initializes an interval with the specified start and end date.

### Accessing Start Date, End Date, and Duration

- [start](dateinterval/start.md): The start date.
- [end](dateinterval/end.md): The end date.
- [duration](dateinterval/duration.md): The duration.

### Determining Intersections

- [intersection(with:)](dateinterval/intersection%28with_%29.md): Returns an interval that represents the interval where the given date interval and the current instance intersect.
- [intersects(\_:)](dateinterval/intersects%28__%29.md): Indicates whether this interval intersects the specified interval.

### Determining Whether a Date Occurs Within a Date Interval

- [contains(\_:)](dateinterval/contains%28__%29.md): Indicates whether this interval contains the given date.

### Using Reference Types

- [NSDateInterval](nsdateinterval.md): An object representing the span of time between a specific start date and end date.

### Instance Methods

- [compare(\_:)](dateinterval/compare%28__%29.md): Compares two intervals.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Date Representations

- [Date](date.md): A specific point in time, independent of any calendar or time zone.
- [TimeInterval](timeinterval.md): A number of seconds.
