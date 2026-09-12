> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/style/currencyaccounting](https://developer.apple.com/documentation/foundation/numberformatter/style/currencyaccounting)

# NumberFormatter.Style.currencyAccounting (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An accounting currency style format that uses the currency symbol defined by the number formatter locale.

## Declaration

```swift
case currencyAccounting
```

<a id="Discussion"></a>

## Discussion

This style behaves like the [NumberFormatter.Style.currency](currency.md) style, except that negative numbers representations are surrounded by parentheses rather than preceded by a negative symbol. For example, in the en_US locale, the number -1234.5678 is represented as ($1,234.57); in the fr_FR locale, the number -1234.5678 is represented as (1 234,57 €).

## See Also

### Formatting Styles

- [NumberFormatter.Style.none](none.md): An integer representation.
- [NumberFormatter.Style.decimal](decimal.md): A decimal style format.
- [NumberFormatter.Style.percent](percent.md): A percent style format.
- [NumberFormatter.Style.scientific](scientific.md): A scientific style format.
- [NumberFormatter.Style.spellOut](spellout.md): A style format in which numbers are spelled out in the language defined by the number formatter locale.
- [NumberFormatter.Style.ordinal](ordinal.md): An ordinal style format.
- [NumberFormatter.Style.currency](currency.md): A currency style format that uses the currency symbol defined by the number formatter locale.
- [NumberFormatter.Style.currencyISOCode](currencyisocode.md): A currency style format that uses the ISO 4217 currency code defined by the number formatter locale.
- [NumberFormatter.Style.currencyPlural](currencyplural.md): A currency style format that uses the pluralized denomination defined by the number formatter locale.

# NSNumberFormatterCurrencyAccountingStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An accounting currency style format that uses the currency symbol defined by the number formatter locale.

## Declaration

```objectivec
NSNumberFormatterCurrencyAccountingStyle
```

<a id="Discussion"></a>

## Discussion

This style behaves like the [NSNumberFormatterCurrencyStyle](currency.md) style, except that negative numbers representations are surrounded by parentheses rather than preceded by a negative symbol. For example, in the en_US locale, the number -1234.5678 is represented as ($1,234.57); in the fr_FR locale, the number -1234.5678 is represented as (1 234,57 €).

## See Also

### Formatting Styles

- [NSNumberFormatterNoStyle](none.md): An integer representation.
- [NSNumberFormatterDecimalStyle](decimal.md): A decimal style format.
- [NSNumberFormatterPercentStyle](percent.md): A percent style format.
- [NSNumberFormatterScientificStyle](scientific.md): A scientific style format.
- [NSNumberFormatterSpellOutStyle](spellout.md): A style format in which numbers are spelled out in the language defined by the number formatter locale.
- [NSNumberFormatterOrdinalStyle](ordinal.md): An ordinal style format.
- [NSNumberFormatterCurrencyStyle](currency.md): A currency style format that uses the currency symbol defined by the number formatter locale.
- [NSNumberFormatterCurrencyISOCodeStyle](currencyisocode.md): A currency style format that uses the ISO 4217 currency code defined by the number formatter locale.
- [NSNumberFormatterCurrencyPluralStyle](currencyplural.md): A currency style format that uses the pluralized denomination defined by the number formatter locale.
