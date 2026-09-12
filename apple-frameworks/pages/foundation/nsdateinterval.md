> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval](https://developer.apple.com/documentation/foundation/nsdateinterval)

# NSDateInterval (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object representing the span of time between a specific start date and end date.

## Declaration

```swift
class NSDateInterval
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [DateInterval](dateinterval.md); use [NSDateInterval](nsdateinterval.md) when you need reference semantics or other Foundation-specific behavior.

An `NSDateInterval` object represents a closed interval between two dates. The `NSDateInterval` class provides a programmatic interface for calculating the duration of a time interval and determining whether a date falls within it, as well as comparing date intervals and checking to see whether they intersect.

An `NSDateInterval` object consists of a [startDate](nsdateinterval/startdate.md) and an [endDate](nsdateinterval/enddate.md). The [startDate](nsdateinterval/startdate.md) and [endDate](nsdateinterval/enddate.md) of a date interval can be equal, in which case its [duration](nsdateinterval/duration.md) is `0`. However, [endDate](nsdateinterval/enddate.md) cannot occur earlier than [startDate](nsdateinterval/startdate.md).

You can use the [DateIntervalFormatter](dateintervalformatter.md) class to create string representations of `NSDateInterval` objects that are suitable for display in the current locale.

> **Important**

>  The Swift overlay to the Foundation framework provides the [DateInterval](dateinterval.md) structure, which bridges to the `NSDateInterval` class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Date Intervals

- [init()](nsdateinterval/init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [init(start:duration:)](nsdateinterval/init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [init(start:end:)](nsdateinterval/init%28start_end_%29.md): Initializes a date interval from a given start date and end date.
- [init(coder:)](nsdateinterval/init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.

### Accessing Start Date, End Date, and Duration

- [startDate](nsdateinterval/startdate.md): The start date of the date interval.
- [endDate](nsdateinterval/enddate.md): The end date of the date interval.
- [duration](nsdateinterval/duration.md): The duration of the date interval.

### Comparing Date Intervals

- [compare(\_:)](nsdateinterval/compare%28__%29.md): Compares the receiver with the specified date interval.
- [isEqual(to:)](nsdateinterval/isequal%28to_%29.md): Indicates whether the receiver is equal to the specified date interval.

### Determining Intersections

- [intersects(\_:)](nsdateinterval/intersects%28__%29.md): Indicates whether the receiver intersects with the specified date interval.
- [intersection(with:)](nsdateinterval/intersection%28with_%29.md): Returns the intersection between the receiver and the specified date interval.

### Determining Whether a Date Occurs Within a Date Interval

- [contains(\_:)](nsdateinterval/contains%28__%29.md): Indicates whether the receiver contains the specified date.

### Initializers

- [init(startDate:duration:)](nsdateinterval/init%28startdate_duration_%29.md)
- [init(startDate:endDate:)](nsdateinterval/init%28startdate_enddate_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSDateInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object representing the span of time between a specific start date and end date.

## Declaration

```objectivec
@interface NSDateInterval : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [DateInterval](dateinterval.md); use [NSDateInterval](nsdateinterval.md) when you need reference semantics or other Foundation-specific behavior.

An `NSDateInterval` object represents a closed interval between two dates. The `NSDateInterval` class provides a programmatic interface for calculating the duration of a time interval and determining whether a date falls within it, as well as comparing date intervals and checking to see whether they intersect.

An `NSDateInterval` object consists of a [startDate](nsdateinterval/startdate.md) and an [endDate](nsdateinterval/enddate.md). The [startDate](nsdateinterval/startdate.md) and [endDate](nsdateinterval/enddate.md) of a date interval can be equal, in which case its [duration](nsdateinterval/duration.md) is `0`. However, [endDate](nsdateinterval/enddate.md) cannot occur earlier than [startDate](nsdateinterval/startdate.md).

You can use the [NSDateIntervalFormatter](dateintervalformatter.md) class to create string representations of `NSDateInterval` objects that are suitable for display in the current locale.

> **Important**

>  The Swift overlay to the Foundation framework provides the [DateInterval](dateinterval.md) structure, which bridges to the `NSDateInterval` class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Date Intervals

- [init](nsdateinterval/init%28%29.md): Initializes a date interval by setting the start and end date to the current date.
- [initWithStartDate:duration:](nsdateinterval/init%28start_duration_%29.md): Initializes a date interval with a given start date and duration.
- [initWithStartDate:endDate:](nsdateinterval/init%28start_end_%29.md): Initializes a date interval from a given start date and end date.
- [initWithCoder:](nsdateinterval/init%28coder_%29.md): Returns a date interval initialized from data in the given unarchiver.

### Accessing Start Date, End Date, and Duration

- [startDate](nsdateinterval/startdate.md): The start date of the date interval.
- [endDate](nsdateinterval/enddate.md): The end date of the date interval.
- [duration](nsdateinterval/duration.md): The duration of the date interval.

### Comparing Date Intervals

- [compare:](nsdateinterval/compare%28__%29.md): Compares the receiver with the specified date interval.
- [isEqualToDateInterval:](nsdateinterval/isequal%28to_%29.md): Indicates whether the receiver is equal to the specified date interval.

### Determining Intersections

- [intersectsDateInterval:](nsdateinterval/intersects%28__%29.md): Indicates whether the receiver intersects with the specified date interval.
- [intersectionWithDateInterval:](nsdateinterval/intersection%28with_%29.md): Returns the intersection between the receiver and the specified date interval.

### Determining Whether a Date Occurs Within a Date Interval

- [containsDate:](nsdateinterval/contains%28__%29.md): Indicates whether the receiver contains the specified date.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Date Representations

- [NSDate](nsdate.md): A representation of a specific point in time, independent of any calendar or time zone.
- [NSTimeInterval](timeinterval.md): A number of seconds.
