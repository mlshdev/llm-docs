> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/iso8601date(timezone:dateseparator:)](https://developer.apple.com/documentation/swift/regexcomponent/iso8601date(timezone:dateseparator:))

# iso8601Date(timeZone:dateSeparator:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regex component that matches an ISO 8601-formatted date string, capturing it as a Foundation date in the specified time zone.

## Declaration

```swift
static func iso8601Date(timeZone: TimeZone, dateSeparator: Date.ISO8601FormatStyle.DateSeparator = .dash) -> Self
```

## Parameters

- `timeZone`: The time zone to use when returning a captured [Date](https://developer.apple.com/documentation/foundation/date). The returned date’s time value is `00:00:00` in this time zone.
- `dateSeparator`: The character that separates year, month, and day sections of the date substring.

<a id="return-value"></a>

## Return Value

A `RegexComponent` that matches ISO 8601-formatted date substrings as Foundation [Date](https://developer.apple.com/documentation/foundation/date) instances.

<a id="discussion"></a>

## Discussion

This method matches an ISO 8601 date string using the provided date separator. This method only matches a date substring. If the source string also contains a time, this method doesn’t match it. To match both date and time in an ISO 8601-formatted string, use [iso8601(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)](iso8601%28timezone_includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_%29.md).

The returned date’s time is midnight in the provided time zone.

The following example creates a [Regex](../regex.md) that matches a date formatted with the base ISO 8601 format and dashes for date separators. It then matches this regex against a source string containing a date with this format, some whitespace, a substring, more whitespace, and a currency value.

```swift
let iso860Source = "2022-07-14   Lemon-lime slushie      $1.99"
let matcher = Regex {
    Capture {
        One(.iso8601Date(timeZone: TimeZone(identifier: "PST")!,
                         dateSeparator: .dash))
    }
    OneOrMore(.horizontalWhitespace)
    OneOrMore(.any)
    OneOrMore(.horizontalWhitespace)
    One(.localizedCurrency(code:Locale.Currency("USD"),
                           locale:Locale(identifier: "en_US")))
}
let match = iso860Source.firstMatch(of: matcher)
let date = match?.1 // date == Jul 14, 2022 at 12:00 AM PST
```

## See Also

### Matching dates and times

- [date(\_:locale:timeZone:calendar:)](date%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a style, capturing it as a Foundation date.
- [date(format:locale:timeZone:calendar:twoDigitStartDate:)](date%28format_locale_timezone_calendar_twodigitstartdate_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a format string, capturing it as a Foundation date.
- [dateTime(date:time:locale:timeZone:calendar:)](datetime%28date_time_locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date and time string, capturing it as a Foundation date.
- [iso8601](iso8601.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. A regex component that matches a default ISO 8601-formatted date string, capturing it as a Foundation date.
- [iso8601(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)](iso8601%28timezone_includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing the matched substring as a Foundation date in the specified time zone.
- [iso8601WithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)](iso8601withtimezone%28includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_timezoneseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string that includes a time zone component, capturing the matched substring as a Foundation date.
