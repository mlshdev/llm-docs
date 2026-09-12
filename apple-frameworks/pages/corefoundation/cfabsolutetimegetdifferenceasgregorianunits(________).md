> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfabsolutetimegetdifferenceasgregorianunits(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfabsolutetimegetdifferenceasgregorianunits(_:_:_:_:))

# CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.

> Use CFCalendar or NSCalendar API instead

## Declaration

```swift
func CFAbsoluteTimeGetDifferenceAsGregorianUnits(_ at1: CFAbsoluteTime, _ at2: CFAbsoluteTime, _ tz: CFTimeZone!, _ unitFlags: CFOptionFlags) -> CFGregorianUnits
```

## Parameters

- `at1`: An absolute time.
- `at2`: An absolute time.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.
- `unitFlags`: A mask that specifies which Gregorian unit fields to use when converting the absolute time difference into a Gregorian interval. See [CFGregorianUnitFlags](cfgregorianunitflags.md) for a list of values from which to construct the mask.

<a id="return-value"></a>

## Return Value

The difference between the specified absolute times (as `at1 - at2`—if `at1` is earlier than `at2`, the result is negative) expressed in the units specified by `unitFlags`.

<a id="Discussion"></a>

## Discussion

The temporal difference is expressed as accurately as possible, given the units specified. For example, if you asked for the number of months and hours between 2:30pm on April 8 2005 and 5:45pm September 9 2005, the result would be 5 months and 27 hours.

The following example prints the number of hours and minutes between the current time (now) and the reference date (1 January 2001 00:00:00 GMT).

```objc
CFAbsoluteTime now = CFAbsoluteTimeGetCurrent ();
 
CFGregorianUnits units = CFAbsoluteTimeGetDifferenceAsGregorianUnits
    (now, 0, NULL, (kCFGregorianUnitsHours | kCFGregorianUnitsMinutes));
 
CFStringRef output = CFStringCreateWithFormat
    (NULL, 0, CFSTR("hours: %d; minutes: %d"), units.hours, units.minutes);
CFShow(output);
```

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits(\_:\_:\_:)](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent()](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek(\_:\_:)](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear(\_:\_:)](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear(\_:\_:)](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime(\_:\_:)](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

# CFAbsoluteTimeGetDifferenceAsGregorianUnits (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.

> Use CFCalendar or NSCalendar API instead

## Declaration

```objectivec
extern CFGregorianUnits CFAbsoluteTimeGetDifferenceAsGregorianUnits(CFAbsoluteTime at1, CFAbsoluteTime at2, CFTimeZoneRef tz, CFOptionFlags unitFlags);
```

## Parameters

- `at1`: An absolute time.
- `at2`: An absolute time.
- `tz`: The time zone to use for time correction. Pass `NULL` for GMT.
- `unitFlags`: A mask that specifies which Gregorian unit fields to use when converting the absolute time difference into a Gregorian interval. See [CFGregorianUnitFlags](cfgregorianunitflags.md) for a list of values from which to construct the mask.

<a id="return-value"></a>

## Return Value

The difference between the specified absolute times (as `at1 - at2`—if `at1` is earlier than `at2`, the result is negative) expressed in the units specified by `unitFlags`.

<a id="Discussion"></a>

## Discussion

The temporal difference is expressed as accurately as possible, given the units specified. For example, if you asked for the number of months and hours between 2:30pm on April 8 2005 and 5:45pm September 9 2005, the result would be 5 months and 27 hours.

The following example prints the number of hours and minutes between the current time (now) and the reference date (1 January 2001 00:00:00 GMT).

```objc
CFAbsoluteTime now = CFAbsoluteTimeGetCurrent ();
 
CFGregorianUnits units = CFAbsoluteTimeGetDifferenceAsGregorianUnits
    (now, 0, NULL, (kCFGregorianUnitsHours | kCFGregorianUnitsMinutes));
 
CFStringRef output = CFStringCreateWithFormat
    (NULL, 0, CFSTR("hours: %d; minutes: %d"), units.hours, units.minutes);
CFShow(output);
```

## See Also

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.
