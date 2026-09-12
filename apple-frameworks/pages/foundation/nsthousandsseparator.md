> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsthousandsseparator](https://developer.apple.com/documentation/foundation/nsthousandsseparator)

# NSThousandsSeparator

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

A string that specifies the separator character for the thousands place of a decimal number.

> Retrieve the `NSLocaleGroupingSeparator` from the current locale instead.

## Declaration

```objectivec
extern NSString * const NSThousandsSeparator;
```

<a id="Discussion"></a>

## Discussion

The default is a comma.

## See Also

### Numeric Information

- [NSCurrencySymbol](nscurrencysymbol.md): Deprecated. A string that specifies the symbol used to denote currency in this language.
- [NSDecimalDigits](nsdecimaldigits.md): Deprecated. Strings that identify the decimal digits in addition to or instead of the ASCII digits.
- [NSDecimalSeparator](nsdecimalseparator.md): Deprecated. A string that specifies the decimal separator.
- [NSInternationalCurrencyString](nsinternationalcurrencystring.md): Deprecated. A string containing a three-letter abbreviation for currency, following the ISO 4217 standard.
- [NSNegativeCurrencyFormatString](nsnegativecurrencyformatstring.md): Deprecated. A format string that specifies how negative numbers are printed when representing a currency value.
- [NSPositiveCurrencyFormatString](nspositivecurrencyformatstring.md): Deprecated. A format string that specifies how positive numbers are printed when representing a currency value.
