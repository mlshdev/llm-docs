> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgregorianunits](https://developer.apple.com/documentation/corefoundation/cfgregorianunits)

# CFGregorianUnits (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Structure used to represent a time interval in Gregorian units.

> Use CFCalendar or NSCalendar API instead

## Declaration

```swift
struct CFGregorianUnits
```

<a id="overview"></a>

## Overview

A CFGregorianUnits is used to represent arbitrary time *intervals* (to represent a point in time using Gregorian units, use a [CFGregorianDate](cfgregoriandate.md)). Each field can take values up to the maximum possible for its data type. Negative values are also valid.

## Topics

### Initializers

- [init()](cfgregorianunits/init%28%29.md): Deprecated.
- [init(years:months:days:hours:minutes:seconds:)](cfgregorianunits/init%28years_months_days_hours_minutes_seconds_%29.md): Deprecated.

### Instance Properties

- [days](cfgregorianunits/days.md): Deprecated.
- [hours](cfgregorianunits/hours.md): Deprecated.
- [minutes](cfgregorianunits/minutes.md): Deprecated.
- [months](cfgregorianunits/months.md): Deprecated.
- [seconds](cfgregorianunits/seconds.md): Deprecated.
- [years](cfgregorianunits/years.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.

# CFGregorianUnits (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Structure used to represent a time interval in Gregorian units.

## Declaration

```objectivec
typedef struct { ... } CFGregorianUnits;
```

<a id="overview"></a>

## Overview

A CFGregorianUnits is used to represent arbitrary time *intervals* (to represent a point in time using Gregorian units, use a [CFGregorianDate](cfgregoriandate.md)). Each field can take values up to the maximum possible for its data type. Negative values are also valid.

## Topics

### Instance Properties

- [days](cfgregorianunits/days.md): Deprecated.
- [hours](cfgregorianunits/hours.md): Deprecated.
- [minutes](cfgregorianunits/minutes.md): Deprecated.
- [months](cfgregorianunits/months.md): Deprecated.
- [seconds](cfgregorianunits/seconds.md): Deprecated.
- [years](cfgregorianunits/years.md): Deprecated.

## See Also

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.
