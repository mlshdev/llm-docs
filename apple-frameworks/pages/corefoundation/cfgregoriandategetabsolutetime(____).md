> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfgregoriandategetabsolutetime(_:_:)](https://developer.apple.com/documentation/corefoundation/cfgregoriandategetabsolutetime(_:_:))

# CFGregorianDateGetAbsoluteTime(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Converts a Gregorian date value into an absolute time value.

> Use CFCalendar or NSCalendar API instead

## Declaration

```swift
func CFGregorianDateGetAbsoluteTime(_ gdate: CFGregorianDate, _ tz: CFTimeZone!) -> CFAbsoluteTime
```

## Parameters

- `gdate`: The Gregorian date to convert.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.

<a id="return-value"></a>

## Return Value

The absolute time equivalent of `gdate`.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits(\_:\_:\_:)](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent()](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek(\_:\_:)](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear(\_:\_:)](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:)](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear(\_:\_:)](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

# CFGregorianDateGetAbsoluteTime (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Converts a Gregorian date value into an absolute time value.

> Use CFCalendar or NSCalendar API instead

## Declaration

```objectivec
extern CFAbsoluteTime CFGregorianDateGetAbsoluteTime(CFGregorianDate gdate, CFTimeZoneRef tz);
```

## Parameters

- `gdate`: The Gregorian date to convert.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.

<a id="return-value"></a>

## Return Value

The absolute time equivalent of `gdate`.

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.
