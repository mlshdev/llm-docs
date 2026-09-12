> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent](https://developer.apple.com/documentation/swift/regexcomponent)

# RegexComponent

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents a regular expression.

## Declaration

```swift
protocol RegexComponent<RegexOutput>
```

<a id="overview"></a>

## Overview

You can use types that conform to `RegexComponent` as parameters to string searching operations and inside `RegexBuilder` closures.

## Topics

### Creating a regex component

- [init(\_:\_:)](regexcomponent/init%28____%29.md): Conforms when `Self` is `CharacterClass`. Creates a character class that combines the given classes in a union.

### Getting a regex from a component

- [regex](regexcomponent/regex.md): The regular expression represented by this component.

### Matching substring sequences

- [anyOf(\_:)](regexcomponent/anyof%28__%29-3pexl.md): Conforms when `Self` is `CharacterClass`. Returns a character class that matches any Unicode scalar in the given sequence.
- [anyOf(\_:)](regexcomponent/anyof%28__%29-4xgea.md): Conforms when `Self` is `CharacterClass`. Returns a character class that matches any character in the given string or sequence.
- [any](regexcomponent/any.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element.
- [anyGraphemeCluster](regexcomponent/anygraphemecluster.md): Conforms when `Self` is `CharacterClass`. A character class that matches any single `Character`, or extended grapheme cluster, regardless of the current semantic level.
- [anyNonNewline](regexcomponent/anynonnewline.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that isn’t a newline.
- [digit](regexcomponent/digit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any digit.
- [hexDigit](regexcomponent/hexdigit.md): Conforms when `Self` is `CharacterClass`. A character class that matches any hexadecimal digit.
- [word](regexcomponent/word.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is a “word character”.

### Matching whitespace and line endings

- [horizontalWhitespace](regexcomponent/horizontalwhitespace.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is classified as horizontal whitespace.
- [newlineSequence](regexcomponent/newlinesequence.md): Conforms when `Self` is `CharacterClass`. A character class that matches any newline sequence.
- [verticalWhitespace](regexcomponent/verticalwhitespace.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is classified as vertical whitespace.
- [whitespace](regexcomponent/whitespace.md): Conforms when `Self` is `CharacterClass`. A character class that matches any element that is classified as whitespace.

### Matching dates and times

- [date(\_:locale:timeZone:calendar:)](regexcomponent/date%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a style, capturing it as a Foundation date.
- [date(format:locale:timeZone:calendar:twoDigitStartDate:)](regexcomponent/date%28format_locale_timezone_calendar_twodigitstartdate_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date string formatted in accordance with a format string, capturing it as a Foundation date.
- [dateTime(date:time:locale:timeZone:calendar:)](regexcomponent/datetime%28date_time_locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.ParseStrategy`. Creates a regex component that matches a localized date and time string, capturing it as a Foundation date.
- [iso8601](regexcomponent/iso8601.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. A regex component that matches a default ISO 8601-formatted date string, capturing it as a Foundation date.
- [iso8601Date(timeZone:dateSeparator:)](regexcomponent/iso8601date%28timezone_dateseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing it as a Foundation date in the specified time zone.
- [iso8601(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)](regexcomponent/iso8601%28timezone_includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string, capturing the matched substring as a Foundation date in the specified time zone.
- [iso8601WithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)](regexcomponent/iso8601withtimezone%28includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_timezoneseparator_%29.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. Creates a regex component that matches an ISO 8601-formatted date string that includes a time zone component, capturing the matched substring as a Foundation date.

### Matching numeric formats

- [localizedInteger(locale:)](regexcomponent/localizedinteger%28locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>`. Creates a regex component that matches a localized numeric string, capturing it as an integer value.
- [localizedDouble(locale:)](regexcomponent/localizeddouble%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>`. Creates a regex component that matches a localized numeric string, capturing it as a double-precision floating-point value.
- [localizedDecimal(locale:)](regexcomponent/localizeddecimal%28locale_%29.md): Conforms when `Self` is `Decimal.FormatStyle`. Creates a regex component that matches a localized decimal string, capturing it as a Foundation decimal.
- [localizedCurrency(code:locale:)](regexcomponent/localizedcurrency%28code_locale_%29.md): Conforms when `Self` is `Decimal.FormatStyle.Currency`. Creates a regex component that matches a localized currency string, capturing it as a decimal value.
- [localizedIntegerCurrency(code:locale:)](regexcomponent/localizedintegercurrency%28code_locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Currency`. Creates a regex component that matches a localized currency string, capturing it as an integer value.
- [localizedIntegerPercentage(locale:)](regexcomponent/localizedintegerpercentage%28locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.
- [localizedDoublePercentage(locale:)](regexcomponent/localizeddoublepercentage%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.

### Matching URLs

- [url(scheme:user:password:host:port:path:query:fragment:)](regexcomponent/url%28scheme_user_password_host_port_path_query_fragment_%29.md): Conforms when `Self` is `URL.ParseStrategy`. Creates a regex component that matches a URL substring, capturing it as a Foundation URL.

### Supporting types

- [RegexOutput](regexcomponent/regexoutput.md): The output type for this regular expression.
- [RegexComponent.DateStyle](regexcomponent/datestyle.md): Conforms when `Self` is `Date.ParseStrategy`. A type alias to use when matching date components in a regular expression.
- [RegexComponent.TimeStyle](regexcomponent/timestyle.md): Conforms when `Self` is `Date.ParseStrategy`. A type alias to use when matching time components in a regular expression.

### Type Properties

- [http](regexcomponent/http.md): Conforms when `Self` is `Date.HTTPFormatStyle`. Creates a regex component to match an HTTP date and time, such as “2015-11-14’T’15:05:03’Z’”, and capture the string as a `Date` using the time zone as specified in the string.
- [httpComponents](regexcomponent/httpcomponents.md): Conforms when `Self` is `DateComponents.HTTPFormatStyle`. Creates a regex component to match an HTTP date and time, such as “2015-11-14’T’15:05:03’Z’”, and capture the string as a `DateComponents` using the time zone as specified in the string.
- [iso8601Components](regexcomponent/iso8601components.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`. Creates a regex component to match an ISO 8601 date and time, such as “2015-11-14’T’15:05:03’Z’”, and capture the string as a `DateComponents` using the time zone as specified in the string.

### Type Methods

- [iso8601Components(timeZone:includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:)](regexcomponent/iso8601components%28timezone_includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_%29.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`. Creates a regex component to match an ISO 8601 date and time string without time zone, and capture the string as a `DateComponents` using the specified `timeZone`. If the string contains time zone designators, matches up until the start of time zone designators.
- [iso8601ComponentsWithTimeZone(includingFractionalSeconds:dateSeparator:dateTimeSeparator:timeSeparator:timeZoneSeparator:)](regexcomponent/iso8601componentswithtimezone%28includingfractionalseconds_dateseparator_datetimeseparator_timeseparator_timezoneseparator_%29.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`. Creates a regex component to match an ISO 8601 date and time string, including time zone, and capture the string as a `DateComponents` using the time zone as specified in the string.
- [iso8601DateComponents(timeZone:dateSeparator:)](regexcomponent/iso8601datecomponents%28timezone_dateseparator_%29.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`. Creates a regex component to match an ISO 8601 date string, such as “2015-11-14”, and capture the string as a `DateComponents`. The captured `DateComponents` would be at midnight in the specified `timeZone`.

## Relationships

### Inherited By

- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)

### Conforming Types

- [Anchor](../regexbuilder/anchor.md)
- [Capture](../regexbuilder/capture.md)
- [Character](character.md)
- [CharacterClass](../regexbuilder/characterclass.md)
- [ChoiceOf](../regexbuilder/choiceof.md)
- [Local](../regexbuilder/local.md)
- [Lookahead](../regexbuilder/lookahead.md)
- [NegativeLookahead](../regexbuilder/negativelookahead.md)
- [One](../regexbuilder/one.md)
- [OneOrMore](../regexbuilder/oneormore.md)
- [Optionally](../regexbuilder/optionally.md)
- [Reference](../regexbuilder/reference.md)
- [Regex](regex.md)
- [Repeat](../regexbuilder/repeat.md)
- [String](string.md)
- [Substring](substring.md)
- [TryCapture](../regexbuilder/trycapture.md)
- [Unicode.Scalar](unicode/scalar.md)
- [ZeroOrMore](../regexbuilder/zeroormore.md)

## See Also

### Regular Expressions

- [Regex](regex.md): A regular expression.
- [RegexRepetitionBehavior](regexrepetitionbehavior.md): Specifies how much to attempt to match when using a quantifier.
- [RegexSemanticLevel](regexsemanticlevel.md): A semantic level to use during regex matching.
- [RegexWordBoundaryKind](regexwordboundarykind.md): A word boundary algorithm to use during regex matching.
- [AnyRegexOutput](anyregexoutput.md): The type-erased, dynamic output of a regular expression match.
- [CustomConsumingRegexComponent](customconsumingregexcomponent.md)
