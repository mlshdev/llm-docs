> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init(string:)](https://developer.apple.com/documentation/foundation/nsdate/init(string:))

# init(string:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Returns a date object initialized with a date and time value specified by a given string in the international string representation format.

> Use NSDateFormatter instead

## Declaration

```swift
convenience init?(string description: String)
```

## Parameters

- `description`: A string that specifies a date and time value in the international string representation format—`YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` is a time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”).

  You must specify all fields of the format string, including the time zone offset, which must have a plus or minus sign prefix.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized with a date and time value specified by `aString`.

## See Also

### Related Documentation

- [description](description.md): A string representation of the date object.

### Legacy Operations

- [date(withNaturalLanguageString:)](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [date(withCalendarFormat:timeZone:)](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [description(withCalendarFormat:timeZone:locale:)](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

# initWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

Returns a date object initialized with a date and time value specified by a given string in the international string representation format.

> Use NSDateFormatter instead

## Declaration

```objectivec
- (id) initWithString:(NSString *) description;
```

## Parameters

- `description`: A string that specifies a date and time value in the international string representation format—`YYYY-MM-DD HH:MM:SS ±HHMM`, where `±HHMM` is a time zone offset in hours and minutes from UTC (for example, “`2001-03-24 10:45:32 +0600`”).

  You must specify all fields of the format string, including the time zone offset, which must have a plus or minus sign prefix.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized with a date and time value specified by `aString`.

## See Also

### Related Documentation

- [description](description.md): A string representation of the date object.

### Legacy Operations

- [dateWithNaturalLanguageString:](date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [addTimeInterval:](addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [dateWithCalendarFormat:timeZone:](date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [descriptionWithCalendarFormat:timeZone:locale:](description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.
