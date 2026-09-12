> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/number-formatter-property-keys](https://developer.apple.com/documentation/corefoundation/number-formatter-property-keys)

# Number Formatter Property Keys (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

The keys used in key-value pairs to specify the value of number formatter properties.

<a id="overview"></a>

## Overview

The values for these keys are all `CFType` objects. The specific types for each key are specified above.

## Topics

### Constants

- [currencyCode](cfnumberformatterkey/currencycode.md): Specifies the currency code, a `CFString` object.
- [decimalSeparator](cfnumberformatterkey/decimalseparator.md): Specifies the decimal separator, a `CFString` object.
- [currencyDecimalSeparator](cfnumberformatterkey/currencydecimalseparator.md): Specifies the currency decimal separator, a `CFString` object.
- [alwaysShowDecimalSeparator](cfnumberformatterkey/alwaysshowdecimalseparator.md): Specifies if the result of converting a value to a string should always contain the decimal separator, even if the number is an integer.
- [groupingSeparator](cfnumberformatterkey/groupingseparator.md): Specifies the grouping separator, a `CFString` object.
- [useGroupingSeparator](cfnumberformatterkey/usegroupingseparator.md): Specifies if the grouping separator should be used, a `CFBoolean` object.
- [percentSymbol](cfnumberformatterkey/percentsymbol.md): Specifies the string that is used to represent the percent symbol, a `CFString` object.
- [zeroSymbol](cfnumberformatterkey/zerosymbol.md): Specifies the string that is used to represent zero, a `CFString` object.
- [naNSymbol](cfnumberformatterkey/nansymbol.md): Specifies the string that is used to represent NaN (“not a number”) when values are converted to strings, a `CFString` object.
- [infinitySymbol](cfnumberformatterkey/infinitysymbol.md): Specifies the string that is used to represent the symbol for infinity, a `CFString` object.
- [minusSign](cfnumberformatterkey/minussign.md): Specifies the symbol for the minus sign, a `CFString` object.
- [plusSign](cfnumberformatterkey/plussign.md): Specifies the symbol for the plus sign, a `CFString` object.
- [currencySymbol](cfnumberformatterkey/currencysymbol.md): Specifies the symbol for the currency, a `CFString` object.
- [exponentSymbol](cfnumberformatterkey/exponentsymbol.md): Specifies the exponent symbol (“E” or “e”) in the scientific notation of numbers (for example, as in `1.0e+56`), a `CFString` object.
- [minIntegerDigits](cfnumberformatterkey/minintegerdigits.md): Specifies the minimum number of integer digits before a decimal point, a `CFNumber` object.
- [maxIntegerDigits](cfnumberformatterkey/maxintegerdigits.md): Specifies the maximum number of integer digits before a decimal point, a `CFNumber` object.
- [minFractionDigits](cfnumberformatterkey/minfractiondigits.md): Specifies the minimum number of digits after a decimal point, a `CFNumber` object.
- [maxFractionDigits](cfnumberformatterkey/maxfractiondigits.md): Specifies the maximum number of digits after a decimal point, a `CFNumber` object.
- [groupingSize](cfnumberformatterkey/groupingsize.md): Specifies how often the “thousands” or grouping separator appears, as in “10,000,000”, a `CFNumber` object.
- [secondaryGroupingSize](cfnumberformatterkey/secondarygroupingsize.md): Specifies how often the secondary grouping separator appears, a `CFNumber` object.
- [roundingMode](cfnumberformatterkey/roundingmode.md): Specifies how the last digit is rounded, as when `3.1415926535…` is rounded to three decimal places, as in `3.142`. See [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md) for possible values.
- [roundingIncrement](cfnumberformatterkey/roundingincrement.md): Specifies a positive rounding increment, or `0.0` to disable rounding, a `CFNumber` object.
- [formatWidth](cfnumberformatterkey/formatwidth.md): Specifies the width of a formatted number within a string that is either left justified or right justified based on the value of [paddingPosition](cfnumberformatterkey/paddingposition.md), a `CFNumber` object.
- [paddingPosition](cfnumberformatterkey/paddingposition.md): Specifies the position of a formatted number within a string, a `CFNumber` object.
- [paddingCharacter](cfnumberformatterkey/paddingcharacter.md): Specifies the padding character to use when placing a formatted number within a string, a `CFString` object.
- [defaultFormat](cfnumberformatterkey/defaultformat.md): The original format string for the formatter (given the date and time style and locale specified at creation), a `CFString` object.
- [multiplier](cfnumberformatterkey/multiplier.md): Specifies the multiplier to use when placing a formatted number within a string, a `CFNumber` object.
- [positivePrefix](cfnumberformatterkey/positiveprefix.md): Specifies the plus sign prefix symbol to use when placing a formatted number within a string, a `CFString` object.
- [positiveSuffix](cfnumberformatterkey/positivesuffix.md): Specifies the plus sign suffix symbol to use when placing a formatted number within a string, a `CFString` object.
- [negativePrefix](cfnumberformatterkey/negativeprefix.md): Specifies the minus sign prefix symbol to use when placing a formatted number within a string, a `CFString` object.
- [negativeSuffix](cfnumberformatterkey/negativesuffix.md): Specifies the minus sign suffix symbol to use when placing a formatted number within a string, a `CFString` object.
- [perMillSymbol](cfnumberformatterkey/permillsymbol.md): Specifies the per mill (1/1000) symbol to use when placing a formatted number within a string, a `CFString` object.
- [internationalCurrencySymbol](cfnumberformatterkey/internationalcurrencysymbol.md): Specifies the international currency symbol to use when placing a formatted number within a string, a `CFString` object.
- [currencyGroupingSeparator](cfnumberformatterkey/currencygroupingseparator.md): Specifies the grouping symbol to use when placing a currency value within a string, a `CFString` object.
- [isLenient](cfnumberformatterkey/islenient.md): Specifies whether the formatter is lenient, a`CFBoolean` object.
- [useSignificantDigits](cfnumberformatterkey/usesignificantdigits.md): Specifies the whether the formatter uses significant digits, a `CFBoolean` object.
- [minSignificantDigits](cfnumberformatterkey/minsignificantdigits.md): Specifies the minimum number of significant digits to use, a`CFNumber` object.
- [maxSignificantDigits](cfnumberformatterkey/maxsignificantdigits.md): Specifies the maximum number of significant digits to use, a`CFNumber` object.

## See Also

### Constants

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md): These constants are used to specify how numbers should be rounded.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.

# Number Formatter Property Keys (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

The keys used in key-value pairs to specify the value of number formatter properties.

<a id="overview"></a>

## Overview

The values for these keys are all `CFType` objects. The specific types for each key are specified above.

## Topics

### Constants

- [kCFNumberFormatterCurrencyCode](cfnumberformatterkey/currencycode.md): Specifies the currency code, a `CFString` object.
- [kCFNumberFormatterDecimalSeparator](cfnumberformatterkey/decimalseparator.md): Specifies the decimal separator, a `CFString` object.
- [kCFNumberFormatterCurrencyDecimalSeparator](cfnumberformatterkey/currencydecimalseparator.md): Specifies the currency decimal separator, a `CFString` object.
- [kCFNumberFormatterAlwaysShowDecimalSeparator](cfnumberformatterkey/alwaysshowdecimalseparator.md): Specifies if the result of converting a value to a string should always contain the decimal separator, even if the number is an integer.
- [kCFNumberFormatterGroupingSeparator](cfnumberformatterkey/groupingseparator.md): Specifies the grouping separator, a `CFString` object.
- [kCFNumberFormatterUseGroupingSeparator](cfnumberformatterkey/usegroupingseparator.md): Specifies if the grouping separator should be used, a `CFBoolean` object.
- [kCFNumberFormatterPercentSymbol](cfnumberformatterkey/percentsymbol.md): Specifies the string that is used to represent the percent symbol, a `CFString` object.
- [kCFNumberFormatterZeroSymbol](cfnumberformatterkey/zerosymbol.md): Specifies the string that is used to represent zero, a `CFString` object.
- [kCFNumberFormatterNaNSymbol](cfnumberformatterkey/nansymbol.md): Specifies the string that is used to represent NaN (“not a number”) when values are converted to strings, a `CFString` object.
- [kCFNumberFormatterInfinitySymbol](cfnumberformatterkey/infinitysymbol.md): Specifies the string that is used to represent the symbol for infinity, a `CFString` object.
- [kCFNumberFormatterMinusSign](cfnumberformatterkey/minussign.md): Specifies the symbol for the minus sign, a `CFString` object.
- [kCFNumberFormatterPlusSign](cfnumberformatterkey/plussign.md): Specifies the symbol for the plus sign, a `CFString` object.
- [kCFNumberFormatterCurrencySymbol](cfnumberformatterkey/currencysymbol.md): Specifies the symbol for the currency, a `CFString` object.
- [kCFNumberFormatterExponentSymbol](cfnumberformatterkey/exponentsymbol.md): Specifies the exponent symbol (“E” or “e”) in the scientific notation of numbers (for example, as in `1.0e+56`), a `CFString` object.
- [kCFNumberFormatterMinIntegerDigits](cfnumberformatterkey/minintegerdigits.md): Specifies the minimum number of integer digits before a decimal point, a `CFNumber` object.
- [kCFNumberFormatterMaxIntegerDigits](cfnumberformatterkey/maxintegerdigits.md): Specifies the maximum number of integer digits before a decimal point, a `CFNumber` object.
- [kCFNumberFormatterMinFractionDigits](cfnumberformatterkey/minfractiondigits.md): Specifies the minimum number of digits after a decimal point, a `CFNumber` object.
- [kCFNumberFormatterMaxFractionDigits](cfnumberformatterkey/maxfractiondigits.md): Specifies the maximum number of digits after a decimal point, a `CFNumber` object.
- [kCFNumberFormatterGroupingSize](cfnumberformatterkey/groupingsize.md): Specifies how often the “thousands” or grouping separator appears, as in “10,000,000”, a `CFNumber` object.
- [kCFNumberFormatterSecondaryGroupingSize](cfnumberformatterkey/secondarygroupingsize.md): Specifies how often the secondary grouping separator appears, a `CFNumber` object.
- [kCFNumberFormatterRoundingMode](cfnumberformatterkey/roundingmode.md): Specifies how the last digit is rounded, as when `3.1415926535…` is rounded to three decimal places, as in `3.142`. See [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md) for possible values.
- [kCFNumberFormatterRoundingIncrement](cfnumberformatterkey/roundingincrement.md): Specifies a positive rounding increment, or `0.0` to disable rounding, a `CFNumber` object.
- [kCFNumberFormatterFormatWidth](cfnumberformatterkey/formatwidth.md): Specifies the width of a formatted number within a string that is either left justified or right justified based on the value of [kCFNumberFormatterPaddingPosition](cfnumberformatterkey/paddingposition.md), a `CFNumber` object.
- [kCFNumberFormatterPaddingPosition](cfnumberformatterkey/paddingposition.md): Specifies the position of a formatted number within a string, a `CFNumber` object.
- [kCFNumberFormatterPaddingCharacter](cfnumberformatterkey/paddingcharacter.md): Specifies the padding character to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterDefaultFormat](cfnumberformatterkey/defaultformat.md): The original format string for the formatter (given the date and time style and locale specified at creation), a `CFString` object.
- [kCFNumberFormatterMultiplier](cfnumberformatterkey/multiplier.md): Specifies the multiplier to use when placing a formatted number within a string, a `CFNumber` object.
- [kCFNumberFormatterPositivePrefix](cfnumberformatterkey/positiveprefix.md): Specifies the plus sign prefix symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterPositiveSuffix](cfnumberformatterkey/positivesuffix.md): Specifies the plus sign suffix symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterNegativePrefix](cfnumberformatterkey/negativeprefix.md): Specifies the minus sign prefix symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterNegativeSuffix](cfnumberformatterkey/negativesuffix.md): Specifies the minus sign suffix symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterPerMillSymbol](cfnumberformatterkey/permillsymbol.md): Specifies the per mill (1/1000) symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterInternationalCurrencySymbol](cfnumberformatterkey/internationalcurrencysymbol.md): Specifies the international currency symbol to use when placing a formatted number within a string, a `CFString` object.
- [kCFNumberFormatterCurrencyGroupingSeparator](cfnumberformatterkey/currencygroupingseparator.md): Specifies the grouping symbol to use when placing a currency value within a string, a `CFString` object.
- [kCFNumberFormatterIsLenient](cfnumberformatterkey/islenient.md): Specifies whether the formatter is lenient, a`CFBoolean` object.
- [kCFNumberFormatterUseSignificantDigits](cfnumberformatterkey/usesignificantdigits.md): Specifies the whether the formatter uses significant digits, a `CFBoolean` object.
- [kCFNumberFormatterMinSignificantDigits](cfnumberformatterkey/minsignificantdigits.md): Specifies the minimum number of significant digits to use, a`CFNumber` object.
- [kCFNumberFormatterMaxSignificantDigits](cfnumberformatterkey/maxsignificantdigits.md): Specifies the maximum number of significant digits to use, a`CFNumber` object.

## See Also

### Constants

- [Number Formatter Styles](number-formatter-styles.md): Predefined number format styles.
- [Number Format Options](number_format_options.md): These constants are used to specify how numbers should be parsed.
- [CFNumberFormatterRoundingMode](cfnumberformatterroundingmode.md): These constants are used to specify how numbers should be rounded.
- [Padding Positions](padding-positions.md): These constants are used to specify how numbers should be padded.
