> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformatterkey/roundingmode](https://developer.apple.com/documentation/corefoundation/cfnumberformatterkey/roundingmode)

# roundingMode (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies how the last digit is rounded, as when `3.1415926535…` is rounded to three decimal places, as in `3.142`. See [CFNumberFormatterRoundingMode](../cfnumberformatterroundingmode.md) for possible values.

## Declaration

```swift
static let roundingMode: CFNumberFormatterKey!
```

## See Also

### Constants

- [currencyCode](currencycode.md): Specifies the currency code, a `CFString` object.
- [decimalSeparator](decimalseparator.md): Specifies the decimal separator, a `CFString` object.
- [currencyDecimalSeparator](currencydecimalseparator.md): Specifies the currency decimal separator, a `CFString` object.
- [alwaysShowDecimalSeparator](alwaysshowdecimalseparator.md): Specifies if the result of converting a value to a string should always contain the decimal separator, even if the number is an integer.
- [groupingSeparator](groupingseparator.md): Specifies the grouping separator, a `CFString` object.
- [useGroupingSeparator](usegroupingseparator.md): Specifies if the grouping separator should be used, a `CFBoolean` object.
- [percentSymbol](percentsymbol.md): Specifies the string that is used to represent the percent symbol, a `CFString` object.
- [zeroSymbol](zerosymbol.md): Specifies the string that is used to represent zero, a `CFString` object.
- [naNSymbol](nansymbol.md): Specifies the string that is used to represent NaN (“not a number”) when values are converted to strings, a `CFString` object.
- [infinitySymbol](infinitysymbol.md): Specifies the string that is used to represent the symbol for infinity, a `CFString` object.
- [minusSign](minussign.md): Specifies the symbol for the minus sign, a `CFString` object.
- [plusSign](plussign.md): Specifies the symbol for the plus sign, a `CFString` object.
- [currencySymbol](currencysymbol.md): Specifies the symbol for the currency, a `CFString` object.
- [exponentSymbol](exponentsymbol.md): Specifies the exponent symbol (“E” or “e”) in the scientific notation of numbers (for example, as in `1.0e+56`), a `CFString` object.
- [minIntegerDigits](minintegerdigits.md): Specifies the minimum number of integer digits before a decimal point, a `CFNumber` object.

# kCFNumberFormatterRoundingMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies how the last digit is rounded, as when `3.1415926535…` is rounded to three decimal places, as in `3.142`. See [CFNumberFormatterRoundingMode](../cfnumberformatterroundingmode.md) for possible values.

## Declaration

```objectivec
extern CFNumberFormatterKey const kCFNumberFormatterRoundingMode;
```

## See Also

### Constants

- [kCFNumberFormatterCurrencyCode](currencycode.md): Specifies the currency code, a `CFString` object.
- [kCFNumberFormatterDecimalSeparator](decimalseparator.md): Specifies the decimal separator, a `CFString` object.
- [kCFNumberFormatterCurrencyDecimalSeparator](currencydecimalseparator.md): Specifies the currency decimal separator, a `CFString` object.
- [kCFNumberFormatterAlwaysShowDecimalSeparator](alwaysshowdecimalseparator.md): Specifies if the result of converting a value to a string should always contain the decimal separator, even if the number is an integer.
- [kCFNumberFormatterGroupingSeparator](groupingseparator.md): Specifies the grouping separator, a `CFString` object.
- [kCFNumberFormatterUseGroupingSeparator](usegroupingseparator.md): Specifies if the grouping separator should be used, a `CFBoolean` object.
- [kCFNumberFormatterPercentSymbol](percentsymbol.md): Specifies the string that is used to represent the percent symbol, a `CFString` object.
- [kCFNumberFormatterZeroSymbol](zerosymbol.md): Specifies the string that is used to represent zero, a `CFString` object.
- [kCFNumberFormatterNaNSymbol](nansymbol.md): Specifies the string that is used to represent NaN (“not a number”) when values are converted to strings, a `CFString` object.
- [kCFNumberFormatterInfinitySymbol](infinitysymbol.md): Specifies the string that is used to represent the symbol for infinity, a `CFString` object.
- [kCFNumberFormatterMinusSign](minussign.md): Specifies the symbol for the minus sign, a `CFString` object.
- [kCFNumberFormatterPlusSign](plussign.md): Specifies the symbol for the plus sign, a `CFString` object.
- [kCFNumberFormatterCurrencySymbol](currencysymbol.md): Specifies the symbol for the currency, a `CFString` object.
- [kCFNumberFormatterExponentSymbol](exponentsymbol.md): Specifies the exponent symbol (“E” or “e”) in the scientific notation of numbers (for example, as in `1.0e+56`), a `CFString` object.
- [kCFNumberFormatterMinIntegerDigits](minintegerdigits.md): Specifies the minimum number of integer digits before a decimal point, a `CFNumber` object.
