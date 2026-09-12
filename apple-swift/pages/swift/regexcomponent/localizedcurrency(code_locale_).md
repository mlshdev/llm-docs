> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/localizedcurrency(code:locale:)](https://developer.apple.com/documentation/swift/regexcomponent/localizedcurrency(code:locale:))

# localizedCurrency(code:locale:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regex component that matches a localized currency string, capturing it as a decimal value.

## Declaration

```swift
static func localizedCurrency(code: Locale.Currency, locale: Locale) -> Self
```

## Parameters

- `code`: The currency code that indicates the currency symbol or name to match against.
- `locale`: The locale that specifies formatting conventions to use when matching currency strings.

<a id="return-value"></a>

## Return Value

A `RegexComponent` that matches localized currency substrings as [Int](../int.md) instances.

<a id="discussion"></a>

## Discussion

This method matches currency substrings in accordance with the provided currency code and locale. For example, the currency code `USD` matches U.S. dollars, which use the symbol `$`, and `JPY` matches Japanese yen, which use the symbol `¥`. The locale determines formatting conventions for number separators in the currency value. The regex uses both of these to match currency substrings.

The method preserves fractional parts in currency strings. To match currency strings without fractional parts, you may use [localizedIntegerCurrency(code:locale:)](localizedintegercurrency%28code_locale_%29.md) to capture integer values.

The following example creates a [Regex](../regex.md) that matches a date and time followed by whitespace and a currency value that uses U.S. dollars and the `en_US` locale. It then matches this regex against a source string containing a date with this format, some whitespace, and a currency value in dollars.

```swift
let enUSLocale = Locale(languageCode: .english, languageRegion: .unitedStates)
let source = "7/31/2022, 5:15:12 AM    $39,739.45"
let matcher = Regex {
    One(.dateTime(date: .numeric,
                  time: .standard,
                  locale: enUSLocale,
                  timeZone: TimeZone(identifier: "PST")!))
    OneOrMore(.horizontalWhitespace)
    Capture {
        One(.localizedCurrency(code: Locale.Currency("USD"),
                               locale: enUSLocale))
    }
}

guard let match = source.firstMatch(of: matcher) else { return }
let currency = match?.1 // currency = 39739.45
```

## See Also

### Matching numeric formats

- [localizedInteger(locale:)](localizedinteger%28locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>`. Creates a regex component that matches a localized numeric string, capturing it as an integer value.
- [localizedDouble(locale:)](localizeddouble%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>`. Creates a regex component that matches a localized numeric string, capturing it as a double-precision floating-point value.
- [localizedDecimal(locale:)](localizeddecimal%28locale_%29.md): Conforms when `Self` is `Decimal.FormatStyle`. Creates a regex component that matches a localized decimal string, capturing it as a Foundation decimal.
- [localizedIntegerCurrency(code:locale:)](localizedintegercurrency%28code_locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Currency`. Creates a regex component that matches a localized currency string, capturing it as an integer value.
- [localizedIntegerPercentage(locale:)](localizedintegerpercentage%28locale_%29.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.
- [localizedDoublePercentage(locale:)](localizeddoublepercentage%28locale_%29.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>.Percent`. Creates a regex component that matches a localized percentage string, capturing it as a double-precision floating-point value.
