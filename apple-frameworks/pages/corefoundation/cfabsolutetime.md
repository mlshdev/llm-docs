> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfabsolutetime](https://developer.apple.com/documentation/corefoundation/cfabsolutetime)

# CFAbsoluteTime (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.

## Declaration

```swift
typealias CFAbsoluteTime = CFTimeInterval
```

<a id="Discussion"></a>

## Discussion

Absolute time is measured by the number of seconds between the reference date and the specified date. Negative values indicate dates/times before the reference date. Positive values indicate dates/times after the reference date.

## See Also

### Data Types

- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.

# CFAbsoluteTime (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.

## Declaration

```objectivec
typedef CFTimeInterval CFAbsoluteTime;
```

<a id="Discussion"></a>

## Discussion

Absolute time is measured by the number of seconds between the reference date and the specified date. Negative values indicate dates/times before the reference date. Positive values indicate dates/times after the reference date.

## See Also

### Data Types

- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.
