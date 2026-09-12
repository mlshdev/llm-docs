> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/description(withcalendarformat:timezone:locale:)](https://developer.apple.com/documentation/foundation/nsdate/description(withcalendarformat:timezone:locale:))

# description(withCalendarFormat:timeZone:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Returns a string representation of the date formatted as specified by given conversion specifiers.

## Declaration

```swift
func description(withCalendarFormat format: String?, timeZone aTimeZone: TimeZone?, locale: Any?) -> String?
```

## Parameters

- `format`: The format for the returned string (see Date and Number Formatters in OS X v10.0 to 10.3 for a discussion of how to create the format string). Pass `nil` to use the default format string, “`%Y-%m-%d %H:%M:%S %z`” (this conforms to the international format `YYYY-MM-DD HH:MM:SS ±HHMM`.)
- `aTimeZone`: The time zone in which to represent the receiver. Pass `nil` to use the default time zone—specific to the current locale.
- `locale`: An `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]`.

  If you pass `nil` or an instance of `NSLocale`, `NSDate` uses the system default locale—this is not the same as the current user’s locale.

<a id="return-value"></a>

## Return Value

A string representation of the receiver, formatted as specified by the given conversion specifiers.

<a id="Discussion"></a>

## Discussion

There are several problems with the implementation of this method that cannot be fixed for compatibility reasons. To format a date, you should use a date formatter object instead (see [DateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

You could use this method to print the current time as follows:

```objc
sprintf(aString, "The current time is %s\n", [[[NSDate  date]
    descriptionWithCalendarFormat:@"%H:%M:%S %Z" timeZone:nil
    locale:[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]]
        UTF8String]);
```

## See Also

### Related Documentation

- [description(with:)](description%28with_%29.md): Returns a string representation of the date using the given locale.

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [init(string:)](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.

# descriptionWithCalendarFormat:timeZone:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Returns a string representation of the date formatted as specified by given conversion specifiers.

## Declaration

```objectivec
- (NSString *) descriptionWithCalendarFormat:(NSString *) format timeZone:(NSTimeZone *) aTimeZone locale:(id) locale;
```

## Parameters

- `format`: The format for the returned string (see Date and Number Formatters in OS X v10.0 to 10.3 for a discussion of how to create the format string). Pass `nil` to use the default format string, “`%Y-%m-%d %H:%M:%S %z`” (this conforms to the international format `YYYY-MM-DD HH:MM:SS ±HHMM`.)
- `aTimeZone`: The time zone in which to represent the receiver. Pass `nil` to use the default time zone—specific to the current locale.
- `locale`: An `NSDictionary` object containing locale data. To use the user’s preferences, you can use `[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]`.

  If you pass `nil` or an instance of `NSLocale`, `NSDate` uses the system default locale—this is not the same as the current user’s locale.

<a id="return-value"></a>

## Return Value

A string representation of the receiver, formatted as specified by the given conversion specifiers.

<a id="Discussion"></a>

## Discussion

There are several problems with the implementation of this method that cannot be fixed for compatibility reasons. To format a date, you should use a date formatter object instead (see [NSDateFormatter](../dateformatter.md) and [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)).

You could use this method to print the current time as follows:

```objc
sprintf(aString, "The current time is %s\n", [[[NSDate  date]
    descriptionWithCalendarFormat:@"%H:%M:%S %Z" timeZone:nil
    locale:[[NSUserDefaults standardUserDefaults] dictionaryRepresentation]]
        UTF8String]);
```

## See Also

### Related Documentation

- [descriptionWithLocale:](description%28with_%29.md): Returns a string representation of the date using the given locale.

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [initWithString:](init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval:](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
