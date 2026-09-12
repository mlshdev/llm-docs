> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/date(with:)](https://developer.apple.com/documentation/foundation/nsdate/date(with:))

# date(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).

> Use NSDateFormatter instead

## Declaration

```swift
class func date(with aString: String) -> Any
```

## Parameters

- `aString`: A string that specifies a date and time value in the international string representation format—`YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` is a time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”).

  You must specify all fields of the format string, including the time zone offset, which must have a plus or minus sign prefix.

<a id="return-value"></a>

## Return Value

An `NSDate` object with a date and time value specified by `aString`.

<a id="Discussion"></a>

## Discussion

To create a date object from a string, you should typically use a date formatter object instead (see [DateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

## See Also

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [init(string:)](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

# dateWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).

> Use NSDateFormatter instead

## Declaration

```objectivec
+ (id) dateWithString:(NSString *) aString;
```

## Parameters

- `aString`: A string that specifies a date and time value in the international string representation format—`YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` is a time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”).

  You must specify all fields of the format string, including the time zone offset, which must have a plus or minus sign prefix.

<a id="return-value"></a>

## Return Value

An `NSDate` object with a date and time value specified by `aString`.

<a id="Discussion"></a>

## Discussion

To create a date object from a string, you should typically use a date formatter object instead (see [NSDateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

## See Also

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [initWithString:](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval:](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
