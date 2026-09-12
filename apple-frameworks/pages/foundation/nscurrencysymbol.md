> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscurrencysymbol](https://developer.apple.com/documentation/foundation/nscurrencysymbol)

# NSCurrencySymbol

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

A string that specifies the symbol used to denote currency in this language.

> These constants are deprecated in OS X v10.5. Where there are replacements, you can typically find them in [NSNumberFormatter](numberformatter.md) or [NSLocale](nslocale.md)—for example, [currencySymbol](numberformatter/currencysymbol.md), [currencyDecimalSeparator](numberformatter/currencydecimalseparator.md), and [thousandSeparator](numberformatter/thousandseparator.md)—otherwise you should use the patterns described in [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## Declaration

```objectivec
extern NSString * const NSCurrencySymbol;
```

<a id="Discussion"></a>

## Discussion

The default is “$”.

## See Also

### Numeric Information

- [NSDecimalDigits](nsdecimaldigits.md): Deprecated. Strings that identify the decimal digits in addition to or instead of the ASCII digits.
- [NSDecimalSeparator](nsdecimalseparator.md): Deprecated. A string that specifies the decimal separator.
- [NSInternationalCurrencyString](nsinternationalcurrencystring.md): Deprecated. A string containing a three-letter abbreviation for currency, following the ISO 4217 standard.
- [NSNegativeCurrencyFormatString](nsnegativecurrencyformatstring.md): Deprecated. A format string that specifies how negative numbers are printed when representing a currency value.
- [NSPositiveCurrencyFormatString](nspositivecurrencyformatstring.md): Deprecated. A format string that specifies how positive numbers are printed when representing a currency value.
- [NSThousandsSeparator](nsthousandsseparator.md): Deprecated. A string that specifies the separator character for the thousands place of a decimal number.
