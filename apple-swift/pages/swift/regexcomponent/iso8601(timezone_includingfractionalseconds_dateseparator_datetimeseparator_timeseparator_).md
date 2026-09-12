> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/iso8601(timezone:includingfractionalseconds:dateseparator:datetimeseparator:timeseparator:)](https://developer.apple.com/documentation/swift/regexcomponent/iso8601(timezone:includingfractionalseconds:dateseparator:datetimeseparator:timeseparator:))

# iso8601(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regex component that matches an ISO 8601-formatted date string, capturing the matched substring as a Foundation date in the specified time zone.

## Declaration

```swift
static func iso8601(timeZone: TimeZone, includingFractionalSeconds: Bool = false, dateSeparator: Date.ISO8601FormatStyle.DateSeparator = .dash, dateTimeSeparator: Date.ISO8601FormatStyle.DateTimeSeparator = .standard, timeSeparator: Date.ISO8601FormatStyle.TimeSeparator = .colon) -> Self
```

## Parameters

- `timeZone`: The time zone to use when returning a captured [Date](https://developer.apple.com/documentation/foundation/date). The returned date’s time value is `00:00:00` in this time zone.
- `includingFractionalSeconds`: A Boolean value that specifies whether the source string contains fractional seconds. The default is `false`.
- `dateSeparator`: The character that separates year, month, and day sections of the date substring. The default is [Date.ISO8601FormatStyle.DateSeparator.dash](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/dateseparator-swift.enum/dash).
- `dateTimeSeparator`: The character that separates the date and time sections of the substring. The default is [Date.ISO8601FormatStyle.DateTimeSeparator.standard](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/datetimeseparator-swift.enum/standard).
- `timeSeparator`: The character that separates the date and time sections of the substring. The default is [Date.ISO8601FormatStyle.TimeSeparator.colon](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/timeseparator-swift.enum/colon).

<a id="return-value"></a>

## Return Value

A `RegexComponent` that matches ISO 8601-formatted date substrings as Foundation [Date](https://developer.apple.com/documentation/foundation/date) instances.

<a id="discussion"></a>

## Discussion

This method matches an ISO 8601 date string using the provided separator characters. It doesn’t look for a time zone in the source string, and the match doesn’t include time zone characters if they’re present. Instead, the matcher interprets the string as being in the provided `timeZone`.

The following example creates a [Regex](../regex.md) that matches an ISO 8601-formatted date. The format looks for a dash for the date separator, the standard date/time separator (none), and a colon for the time separator. It also interprets the source string as being in the current time zone. The example then matches this regex against a source string containing a date with this format, some whitespace, a substring, more whitespace, and a currency value.

```swift
let iso860Source = "2022-07-14T21:10:15   Lemon-lime slushie      $1.99"
let matcher = Regex {
    Capture {
        One(.iso8601(timeZone: .current,
                     includingFractionalSeconds: false,
                     dateSeparator: .dash,
                     dateTimeSeparator: .standard,
                     timeSeparator: .colon))
    }
    OneOrMore(.horizontalWhitespace)
    OneOrMore(.any)
    OneOrMore(.horizontalWhitespace)
    One(.localizedCurrency(code:Locale.Currency("USD"),
                               locale:Locale(identifier: "en_US")))
}
let match = iso860Source.firstMatch(of: matcher)
let date = match?.1 // date == Jul 14, 2022 at 9:10 PM (may vary depending on current locale)
```

## See Also

### Matching dates and times

- [date(\_:locale:timeZone:calendar:)](date%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a style, capturing it as a Foundation date.
- [date(format:locale:timeZone:calendar:twoDigitStartDate:)](date%28format_locale_timezone_calendar_twodigitstartdate_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a format string, capturing it as a Foundation date.
- [dateTime(date:time:locale:timeZone:calendar:)](datetime%28date_time_locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date and time string, capturing it as a Foundation date.
- [iso8601](iso8601.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. A regex component that matches a default ISO 8601-formatted date string, capturing it as a Foundation date.
- [iso8601Date(timeZone:dateSeparator:)](iso8601date%28timezone_dateseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing it as a Foundation date in the specified time zone.
- [iso8601WithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)](iso8601withtimezone%28includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_timezoneseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string that includes a time zone component, capturing the matched substring as a Foundation date.
