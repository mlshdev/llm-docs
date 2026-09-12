> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalseparator](https://developer.apple.com/documentation/foundation/nsdecimalseparator)

# NSDecimalSeparator

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

A string that specifies the decimal separator.

> Use [decimalSeparator](numberformatter/decimalseparator.md) or [currencyDecimalSeparator](numberformatter/currencydecimalseparator.md) (`NSNumberFormatter`)  or retrieve the `NSLocaleDecimalSeparator` from the current locale instead.

## Declaration

```objectivec
extern NSString * const NSDecimalSeparator;
```

<a id="Discussion"></a>

## Discussion

The decimal separator separates the ones place from the tenths place. The default is “`.`”.

## See Also

### Numeric Information

- [NSCurrencySymbol](nscurrencysymbol.md): Deprecated. A string that specifies the symbol used to denote currency in this language.
- [NSDecimalDigits](nsdecimaldigits.md): Deprecated. Strings that identify the decimal digits in addition to or instead of the ASCII digits.
- [NSInternationalCurrencyString](nsinternationalcurrencystring.md): Deprecated. A string containing a three-letter abbreviation for currency, following the ISO 4217 standard.
- [NSNegativeCurrencyFormatString](nsnegativecurrencyformatstring.md): Deprecated. A format string that specifies how negative numbers are printed when representing a currency value.
- [NSPositiveCurrencyFormatString](nspositivecurrencyformatstring.md): Deprecated. A format string that specifies how positive numbers are printed when representing a currency value.
- [NSThousandsSeparator](nsthousandsseparator.md): Deprecated. A string that specifies the separator character for the thousands place of a decimal number.
