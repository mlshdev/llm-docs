> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/style](https://developer.apple.com/documentation/foundation/numberformatter/style)

# NumberFormatter.Style (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The predefined number format styles used by the [numberStyle](numberstyle.md) property.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

The table below provides examples of each formatting style for the U.S., France, and China.

| Style | en_US Locale | fr_FR Locale | zh_CN Locale |
| --- | --- | --- | --- |
| [NumberFormatter.Style.none](style/none.md) | 1235 | 1235 | 1235 |
| [NumberFormatter.Style.decimal](style/decimal.md) | 1,234.568 | 1 234,568 | 1,234.568 |
| [NumberFormatter.Style.percent](style/percent.md) | 12% | 12 % | 12% |
| [NumberFormatter.Style.scientific](style/scientific.md) | 1.2345678E3 | 1,2345678E3 | 1.2345678E3 |
| [NumberFormatter.Style.spellOut](style/spellout.md) | one hundred twenty-three | cent vingt-trois | 一百二十三 |
| [NumberFormatter.Style.ordinal](style/ordinal.md) | 3rd | 3e | 第3 |
| [NumberFormatter.Style.currency](style/currency.md) | $1,234.57 | 1 234,57 € | ￥1,234.57 |
| [NumberFormatter.Style.currencyAccounting](style/currencyaccounting.md) | ($1,234.57) | (1 234,57 €) | (￥1,234.57) |
| [NumberFormatter.Style.currencyISOCode](style/currencyisocode.md) | USD1,234.57 | 1 234,57 EUR | CNY1,234.57 |
| [NumberFormatter.Style.currencyPlural](style/currencyplural.md) | 1,234.57 US dollars | 1 234,57 euros | 1,234.57人民币 |

## Topics

### Formatting Styles

- [NumberFormatter.Style.none](style/none.md): An integer representation.
- [NumberFormatter.Style.decimal](style/decimal.md): A decimal style format.
- [NumberFormatter.Style.percent](style/percent.md): A percent style format.
- [NumberFormatter.Style.scientific](style/scientific.md): A scientific style format.
- [NumberFormatter.Style.spellOut](style/spellout.md): A style format in which numbers are spelled out in the language defined by the number formatter locale.
- [NumberFormatter.Style.ordinal](style/ordinal.md): An ordinal style format.
- [NumberFormatter.Style.currency](style/currency.md): A currency style format that uses the currency symbol defined by the number formatter locale.
- [NumberFormatter.Style.currencyAccounting](style/currencyaccounting.md): An accounting currency style format that uses the currency symbol defined by the number formatter locale.
- [NumberFormatter.Style.currencyISOCode](style/currencyisocode.md): A currency style format that uses the ISO 4217 currency code defined by the number formatter locale.
- [NumberFormatter.Style.currencyPlural](style/currencyplural.md): A currency style format that uses the pluralized denomination defined by the number formatter locale.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NumberFormatter.Behavior](behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior()](defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](formatterbehavior.md) property.
- [NumberFormatter.PadPosition](padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.
- [NumberFormatter.RoundingMode](roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.

# NSNumberFormatterStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The predefined number format styles used by the [numberStyle](numberstyle.md) property.

## Declaration

```objectivec
enum NSNumberFormatterStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

The table below provides examples of each formatting style for the U.S., France, and China.

| Style | en_US Locale | fr_FR Locale | zh_CN Locale |
| --- | --- | --- | --- |
| [NSNumberFormatterNoStyle](style/none.md) | 1235 | 1235 | 1235 |
| [NSNumberFormatterDecimalStyle](style/decimal.md) | 1,234.568 | 1 234,568 | 1,234.568 |
| [NSNumberFormatterPercentStyle](style/percent.md) | 12% | 12 % | 12% |
| [NSNumberFormatterScientificStyle](style/scientific.md) | 1.2345678E3 | 1,2345678E3 | 1.2345678E3 |
| [NSNumberFormatterSpellOutStyle](style/spellout.md) | one hundred twenty-three | cent vingt-trois | 一百二十三 |
| [NSNumberFormatterOrdinalStyle](style/ordinal.md) | 3rd | 3e | 第3 |
| [NSNumberFormatterCurrencyStyle](style/currency.md) | $1,234.57 | 1 234,57 € | ￥1,234.57 |
| [NSNumberFormatterCurrencyAccountingStyle](style/currencyaccounting.md) | ($1,234.57) | (1 234,57 €) | (￥1,234.57) |
| [NSNumberFormatterCurrencyISOCodeStyle](style/currencyisocode.md) | USD1,234.57 | 1 234,57 EUR | CNY1,234.57 |
| [NSNumberFormatterCurrencyPluralStyle](style/currencyplural.md) | 1,234.57 US dollars | 1 234,57 euros | 1,234.57人民币 |

## Topics

### Formatting Styles

- [NSNumberFormatterNoStyle](style/none.md): An integer representation.
- [NSNumberFormatterDecimalStyle](style/decimal.md): A decimal style format.
- [NSNumberFormatterPercentStyle](style/percent.md): A percent style format.
- [NSNumberFormatterScientificStyle](style/scientific.md): A scientific style format.
- [NSNumberFormatterSpellOutStyle](style/spellout.md): A style format in which numbers are spelled out in the language defined by the number formatter locale.
- [NSNumberFormatterOrdinalStyle](style/ordinal.md): An ordinal style format.
- [NSNumberFormatterCurrencyStyle](style/currency.md): A currency style format that uses the currency symbol defined by the number formatter locale.
- [NSNumberFormatterCurrencyAccountingStyle](style/currencyaccounting.md): An accounting currency style format that uses the currency symbol defined by the number formatter locale.
- [NSNumberFormatterCurrencyISOCodeStyle](style/currencyisocode.md): A currency style format that uses the ISO 4217 currency code defined by the number formatter locale.
- [NSNumberFormatterCurrencyPluralStyle](style/currencyplural.md): A currency style format that uses the pluralized denomination defined by the number formatter locale.

## See Also

### Constants

- [NSNumberFormatterBehavior](behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior](defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](formatterbehavior.md) property.
- [NSNumberFormatterPadPosition](padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](paddingposition.md) property.
- [NSNumberFormatterRoundingMode](roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](roundingmode-swift.property.md) property.
