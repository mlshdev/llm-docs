> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/date(withnaturallanguagestring:locale:)](https://developer.apple.com/documentation/foundation/nsdate/date(withnaturallanguagestring:locale:))

# date(withNaturalLanguageString:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Creates and returns a date object set to the date and time specified by a given string.

> Create an NSDateFormatter with \`init\` and set the dateFormat property instead.

## Declaration

```swift
class func date(withNaturalLanguageString string: String, locale: Any?) -> Any?
```

## Parameters

- `string`: A string that contains a colloquial specification of a date, such as “last Tuesday at dinner,” “3pm December 31, 2001,” “12/31/01,” or “31/12/01.”
- `locale`: An `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]`.

  If you pass `nil` or an instance of `NSLocale`, `NSDate` uses the system default locale—this is not the same as the current user’s locale.

<a id="return-value"></a>

## Return Value

A new `NSDate` object set to the date and time specified by `string` as interpreted according to `locale`.

<a id="Discussion"></a>

## Discussion

This method supports only a limited set of colloquial phrases, primarily in English. It may give unexpected results, and its use is strongly discouraged. To create a date object from a string, you should use a date formatter object instead (see [DateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

The keys and values that represent the locale data from `locale` are used when parsing the string. In addition to the locale keys listed in the class description, these keys are used when parsing natural language strings:

- NSDateTimeOrdering
- NSEarlierTimeDesignations
- NSHourNameDesignations
- NSLaterTimeDesignations
- NSNextDayDesignations
- NSNextNextDayDesignations
- NSPriorDayDesignations
- NSThisDayDesignations
- NSYearMonthWeekDesignations

## See Also

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [init(string:)](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

# dateWithNaturalLanguageString:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Creates and returns a date object set to the date and time specified by a given string.

> Create an NSDateFormatter with \`init\` and set the dateFormat property instead.

## Declaration

```objectivec
+ (id) dateWithNaturalLanguageString:(NSString *) string locale:(id) locale;
```

## Parameters

- `string`: A string that contains a colloquial specification of a date, such as “last Tuesday at dinner,” “3pm December 31, 2001,” “12/31/01,” or “31/12/01.”
- `locale`: An `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]`.

  If you pass `nil` or an instance of `NSLocale`, `NSDate` uses the system default locale—this is not the same as the current user’s locale.

<a id="return-value"></a>

## Return Value

A new `NSDate` object set to the date and time specified by `string` as interpreted according to `locale`.

<a id="Discussion"></a>

## Discussion

This method supports only a limited set of colloquial phrases, primarily in English. It may give unexpected results, and its use is strongly discouraged. To create a date object from a string, you should use a date formatter object instead (see [NSDateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

The keys and values that represent the locale data from `locale` are used when parsing the string. In addition to the locale keys listed in the class description, these keys are used when parsing natural language strings:

- NSDateTimeOrdering
- NSEarlierTimeDesignations
- NSHourNameDesignations
- NSLaterTimeDesignations
- NSNextDayDesignations
- NSNextNextDayDesignations
- NSPriorDayDesignations
- NSThisDayDesignations
- NSYearMonthWeekDesignations

## See Also

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [initWithString:](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval:](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
