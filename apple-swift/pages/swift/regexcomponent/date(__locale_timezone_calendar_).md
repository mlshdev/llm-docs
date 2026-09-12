> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/date(_:locale:timezone:calendar:)](https://developer.apple.com/documentation/swift/regexcomponent/date(_:locale:timezone:calendar:))

# date(\_:locale:timeZone:calendar:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regex component that matches a localized date string formatted in accordance with a style, capturing it as a Foundation date.

## Declaration

```swift
static func date(_ style: Date.FormatStyle.DateStyle, locale: Locale, timeZone: TimeZone, calendar: Calendar? = nil) -> Date.ParseStrategy
```

## Parameters

- `style`: A [Date.FormatStyle.DateStyle](https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle) to use when matching date substrings.
- `locale`: The locale to use when matching date substrings. Matching uses this locale to evaluate the order of date components. It also uses the locale’s language for date format styles that use words.
- `timeZone`: The time zone to use when returning a captured [Date](https://developer.apple.com/documentation/foundation/date). The returned date’s time value is `00:00:00` in this time zone.
- `calendar`: The calendar to use when matching date substrings. If `nil`, matching uses the default calendar of the specified `locale`.

<a id="return-value"></a>

## Return Value

A `RegexComponent` that matches date substrings as Foundation [Date](https://developer.apple.com/documentation/foundation/date) instances.

<a id="discussion"></a>

## Discussion

This method matches date substrings in accordance with the formatting of Foundation’s [Date.FormatStyle](https://developer.apple.com/documentation/foundation/date/formatstyle).

If a time value follows the date substring, the matcher ignores it, treating it as any other character sequence. To match date and time substrings, use [dateTime(date:time:locale:timeZone:calendar:)](datetime%28date_time_locale_timezone_calendar_%29.md).

The following example creates a [Regex](../regex.md) that matches a date formatted with the [numeric](https://developer.apple.com/documentation/foundation/date/formatstyle/datestyle/numeric) style in the `en_US` locale. It then matches this regex against a source string containing a date with this format, some whitespace, a substring, more whitespace, and a currency value.

```swift
let source = "7/31/2022  Lemon-lime slushie      $1.99"
let matcher = Regex {
    Capture {
        One(.date(.numeric,
                  locale: Locale(identifier: "en_US"),
                  timeZone: TimeZone(identifier: "PST")!))
    }
}
guard let match = source.firstMatch(of: matcher) else { return }
let date = match.1 // date == Jul 31, 2022 at 12:00 AM PST
```

## See Also

### Matching dates and times

- [date(format:locale:timeZone:calendar:twoDigitStartDate:)](date%28format_locale_timezone_calendar_twodigitstartdate_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a format string, capturing it as a Foundation date.
- [dateTime(date:time:locale:timeZone:calendar:)](datetime%28date_time_locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date and time string, capturing it as a Foundation date.
- [iso8601](iso8601.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. A regex component that matches a default ISO 8601-formatted date string, capturing it as a Foundation date.
- [iso8601Date(timeZone:dateSeparator:)](iso8601date%28timezone_dateseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing it as a Foundation date in the specified time zone.
- [iso8601(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)](iso8601%28timezone_includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing the matched substring as a Foundation date in the specified time zone.
- [iso8601WithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)](iso8601withtimezone%28includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_timezoneseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string that includes a time zone component, capturing the matched substring as a Foundation date.
