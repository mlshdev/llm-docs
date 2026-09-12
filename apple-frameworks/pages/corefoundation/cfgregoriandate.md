> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgregoriandate](https://developer.apple.com/documentation/corefoundation/cfgregoriandate)

# CFGregorianDate (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Structure used to represent a point in time using the Gregorian calendar.

> Use CFCalendar or NSCalendar API instead

## Declaration

```swift
struct CFGregorianDate
```

<a id="overview"></a>

## Overview

[CFGregorianDate](cfgregoriandate.md) is implemented using the smallest data type appropriate for the range of possible values. For example, there are only 12 months in the Gregorian year, so there is no need to use an integer type larger than 8 bits. To represent a time interval in Gregorian units, use a [CFGregorianUnits](cfgregorianunits.md).

The month and day units are 1-based: the index for January is 1, and the index for the first day of the month is 1.

## Topics

### Initializers

- [init()](cfgregoriandate/init%28%29.md): Deprecated.
- [init(year:month:day:hour:minute:second:)](cfgregoriandate/init%28year_month_day_hour_minute_second_%29.md): Deprecated.

### Instance Properties

- [day](cfgregoriandate/day.md): Deprecated.
- [hour](cfgregoriandate/hour.md): Deprecated.
- [minute](cfgregoriandate/minute.md): Deprecated.
- [month](cfgregoriandate/month.md): Deprecated.
- [second](cfgregoriandate/second.md): Deprecated.
- [year](cfgregoriandate/year.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.

# CFGregorianDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure used to represent a point in time using the Gregorian calendar.

## Declaration

```objectivec
typedef struct { ... } CFGregorianDate;
```

<a id="overview"></a>

## Overview

[CFGregorianDate](cfgregoriandate.md) is implemented using the smallest data type appropriate for the range of possible values. For example, there are only 12 months in the Gregorian year, so there is no need to use an integer type larger than 8 bits. To represent a time interval in Gregorian units, use a [CFGregorianUnits](cfgregorianunits.md).

The month and day units are 1-based: the index for January is 1, and the index for the first day of the month is 1.

## Topics

### Instance Properties

- [day](cfgregoriandate/day.md): Deprecated.
- [hour](cfgregoriandate/hour.md): Deprecated.
- [minute](cfgregoriandate/minute.md): Deprecated.
- [month](cfgregoriandate/month.md): Deprecated.
- [second](cfgregoriandate/second.md): Deprecated.
- [year](cfgregoriandate/year.md): Deprecated.

## See Also

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.
