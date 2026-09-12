> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfabsolutetimegetcurrent()](https://developer.apple.com/documentation/corefoundation/cfabsolutetimegetcurrent())

# CFAbsoluteTimeGetCurrent() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current system absolute time.

## Declaration

```swift
func CFAbsoluteTimeGetCurrent() -> CFAbsoluteTime
```

<a id="return-value"></a>

## Return Value

The current absolute time.

<a id="Discussion"></a>

## Discussion

Absolute time is measured in seconds relative to the absolute reference date of Jan 1 2001 00:00:00 GMT. A positive value represents a date after the reference date, a negative value represents a date before it. For example, the absolute time `-32940326` is equivalent to December 16th, 1999 at 17:54:34. Repeated calls to this function do not guarantee monotonically increasing results. The system time may decrease due to synchronization with external time references or due to an explicit user change of the clock.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits(\_:\_:\_:)](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetDayOfWeek(\_:\_:)](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear(\_:\_:)](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:)](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear(\_:\_:)](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime(\_:\_:)](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

# CFAbsoluteTimeGetCurrent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current system absolute time.

## Declaration

```objectivec
extern CFAbsoluteTime CFAbsoluteTimeGetCurrent();
```

<a id="return-value"></a>

## Return Value

The current absolute time.

<a id="Discussion"></a>

## Discussion

Absolute time is measured in seconds relative to the absolute reference date of Jan 1 2001 00:00:00 GMT. A positive value represents a date after the reference date, a negative value represents a date before it. For example, the absolute time `-32940326` is equivalent to December 16th, 1999 at 17:54:34. Repeated calls to this function do not guarantee monotonically increasing results. The system time may decrease due to synchronization with external time references or due to an explicit user change of the clock.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetDayOfWeek](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.
