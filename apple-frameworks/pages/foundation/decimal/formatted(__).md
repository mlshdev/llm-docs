> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatted(_:)](https://developer.apple.com/documentation/foundation/decimal/formatted(_:))

# formatted(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats the decimal using the provided format style.

## Declaration

```swift
func formatted<S>(_ format: S) -> S.FormatOutput where S : FormatStyle, S.FormatInput == Decimal
```

## Parameters

- `format`: The format style to apply when formatting the decimal.

<a id="return-value"></a>

## Return Value

A localized, formatted string representation of the decimal.

<a id="Discussion"></a>

## Discussion

Use this method when you want to format a single decimal value with a specific format style or multiple format styles. The following example shows the results of formatting a given decimal value with format styles for the `en_US` and `fr_FR` locales:

```swift
let decimal: Decimal = 123456.789
let usStyle = Decimal.FormatStyle(locale: Locale(identifier: "en_US"))
let frStyle = Decimal.FormatStyle(locale: Locale(identifier: "fr_FR"))
let formattedUS = decimal.formatted(usStyle) // 123,456.789
let formattedFR = decimal.formatted(frStyle) // 123 456,789
```

## See Also

### Formatting decimals

- [formatted()](formatted%28%29.md): Formats the decimal using a default localized format style.
- [Decimal.FormatStyle](formatstyle.md): A structure that converts between decimal values and their textual representations.
