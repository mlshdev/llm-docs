> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/date(withcalendarformat:timezone:)](https://developer.apple.com/documentation/foundation/nsdate/date(withcalendarformat:timezone:))

# date(withCalendarFormat:timeZone:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Converts the receiver to a calendar date with a given format string and time zone.

> Use [NSDate](../nsdate.md) methods to set the individual date values.

## Declaration

```swift
func date(withCalendarFormat format: String?, timeZone aTimeZone: TimeZone?) -> NSCalendarDate
```

## Parameters

- `format`: The format for the returned string (see Date and Number Formatters in OS X v10.0 to 10.3 for a discussion of how to create the format string). Pass `nil` to use the default format string, “`%Y-%m-%d %H:%M:%S %z`” (this conforms to the international format `YYYY-MM-DD HH:MM:SS ±HHMM`.)
- `aTimeZone`: The time zone for the new calendar date. Pass `nil` to use the default time zone—specific to the current locale.

<a id="return-value"></a>

## Return Value

A new [NSCalendarDate](../nscalendardate.md) object bound to `format` and the time zone `aTimeZone`.

## See Also

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [init(string:)](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

# dateWithCalendarFormat:timeZone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Converts the receiver to a calendar date with a given format string and time zone.

> Use [NSDate](../nsdate.md) methods to set the individual date values.

## Declaration

```objectivec
- (NSCalendarDate *) dateWithCalendarFormat:(NSString *) format timeZone:(NSTimeZone *) aTimeZone;
```

## Parameters

- `format`: The format for the returned string (see Date and Number Formatters in OS X v10.0 to 10.3 for a discussion of how to create the format string). Pass `nil` to use the default format string, “`%Y-%m-%d %H:%M:%S %z`” (this conforms to the international format `YYYY-MM-DD HH:MM:SS ±HHMM`.)
- `aTimeZone`: The time zone for the new calendar date. Pass `nil` to use the default time zone—specific to the current locale.

<a id="return-value"></a>

## Return Value

A new [NSCalendarDate](../nscalendardate.md) object bound to `format` and the time zone `aTimeZone`.

## See Also

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [initWithString:](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval:](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
