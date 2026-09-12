> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfabsolutetimeaddgregorianunits(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfabsolutetimeaddgregorianunits(_:_:_:))

# CFAbsoluteTimeAddGregorianUnits(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Adds a time interval, expressed as Gregorian units, to a given absolute time.

> Use CFCalendar or NSCalendar API instead

## Declaration

```swift
func CFAbsoluteTimeAddGregorianUnits(_ at: CFAbsoluteTime, _ tz: CFTimeZone!, _ units: CFGregorianUnits) -> CFAbsoluteTime
```

## Parameters

- `at`: The absolute time to which the interval is added.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.
- `units`: The time interval to add to `at`.

<a id="return-value"></a>

## Return Value

An absolute time value equal to the sum of `at` and `units`.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeGetCurrent()](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek(\_:\_:)](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear(\_:\_:)](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:)](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear(\_:\_:)](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime(\_:\_:)](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

# CFAbsoluteTimeAddGregorianUnits (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Adds a time interval, expressed as Gregorian units, to a given absolute time.

> Use CFCalendar or NSCalendar API instead

## Declaration

```objectivec
extern CFAbsoluteTime CFAbsoluteTimeAddGregorianUnits(CFAbsoluteTime at, CFTimeZoneRef tz, CFGregorianUnits units);
```

## Parameters

- `at`: The absolute time to which the interval is added.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.
- `units`: The time interval to add to `at`.

<a id="return-value"></a>

## Return Value

An absolute time value equal to the sum of `at` and `units`.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeGetCurrent](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.
