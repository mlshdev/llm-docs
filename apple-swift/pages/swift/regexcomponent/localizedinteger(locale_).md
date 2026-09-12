> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/localizedinteger(locale:)](https://developer.apple.com/documentation/swift/regexcomponent/localizedinteger(locale:))

# localizedInteger(locale:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regex component that matches a localized numeric string, capturing it as an integer value.

## Declaration

```swift
static func localizedInteger(locale: Locale) -> Self
```

## Parameters

- `locale`: The locale that specifies formatting conventions to use when matching numeric strings.

<a id="return-value"></a>

## Return Value

A `RegexComponent` that matches localized substrings as [Int](../int.md) instances.

<a id="discussion"></a>

## Discussion

This method matches decimal substrings in accordance with the provided locale. For example, the value `1234567890` formats as `1,234,567,890` in the `en_US` locale, as `1 234 567 890` in the `FR` locale, and as `1234567890` in the `JP` locale. Because of this, the regex needs to know what locale convention to match against.

The following example creates a [Regex](../regex.md) that matches a date and time followed by whitespace and an integer formatted in the `en_US` locale. It then matches this regex against a source string containing a date with this format, some whitespace, and an integer value.

```swift
let enUSLocale = Locale(languageCode: .english, languageRegion: .unitedStates)
let source = "7/31/2022, 5:15:12 AM  49,525"
let matcher = Regex {
    One(.dateTime(date: .numeric,
                  time: .standard,
                  locale: enUSLocale,
                  timeZone: TimeZone(identifier: "PST")!))
    OneOrMore(.horizontalWhitespace)
    Capture {
        One(.localizedInteger(locale: enUSLocale))
    }
}
guard let match = source.firstMatch(of: matcher) else { return }
let matchedInteger = match?.1 // matchedInteger == 49525
```

## See Also

### Matching numeric formats

- [localizedDouble(locale:)](localizeddouble%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>`. Creates a regex component that matches a localized numeric string, capturing it as a double-precision floating-point value.
- [localizedDecimal(locale:)](localizeddecimal%28locale_%29.md): Conforms when `Self` is `Decimal.FormatStyle`. Creates a regex component that matches a localized decimal string, capturing it as a Foundation decimal.
- [localizedCurrency(code:locale:)](localizedcurrency%28code_locale_%29.md): Conforms when `Self` is `Decimal.FormatStyle.Currency`. Creates a regex component that matches a localized currency string, capturing it as a decimal value.
- [localizedIntegerCurrency(code:locale:)](localizedintegercurrency%28code_locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Currency`. Creates a regex component that matches a localized currency string, capturing it as an integer value.
- [localizedIntegerPercentage(locale:)](localizedintegerpercentage%28locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.
- [localizedDoublePercentage(locale:)](localizeddoublepercentage%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.
