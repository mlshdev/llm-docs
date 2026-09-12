> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/currencycode](https://developer.apple.com/documentation/foundation/nslocale/currencycode)

# currencyCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The currency code for the locale.

## Declaration

```swift
var currencyCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

Example currency codes include `"USD"`, `"EUR"`, and `"JPY"`.

Use [localizedString(forCurrencyCode:)](localizedstring%28forcurrencycode_%29.md) to obtain a version of the value suitable for display to the user.

This property contains the same value returned by the [object(forKey:)](object%28forkey_%29.md) method when passing the [currencyCode](key/currencycode.md) key.

## See Also

### Related Documentation

- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.
- [isoCurrencyCodes](isocurrencycodes.md): The list of known currency codes.

### Getting Information About a Locale

- [localeIdentifier](localeidentifier.md): The identifier for the locale.
- [countryCode](countrycode.md): Deprecated. The country or region code for the locale.
- [languageCode](languagecode.md): The language code for the locale.
- [scriptCode](scriptcode.md): The script code for the locale.
- [variantCode](variantcode.md): The variant code for the locale.
- [exemplarCharacterSet](exemplarcharacterset.md): The exemplar character set for the locale.
- [collationIdentifier](collationidentifier.md): The collation identifier for the locale.
- [collatorIdentifier](collatoridentifier.md): The collator identifier for the locale.
- [usesMetricSystem](usesmetricsystem.md): A Boolean value that indicates whether the locale uses the metric system.
- [decimalSeparator](decimalseparator.md): The decimal separator for the locale.
- [groupingSeparator](groupingseparator.md): The grouping separator for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.

# currencyCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The currency code for the locale.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

Example currency codes include `"USD"`, `"EUR"`, and `"JPY"`.

Use [localizedStringForCurrencyCode:](localizedstring%28forcurrencycode_%29.md) to obtain a version of the value suitable for display to the user.

This property contains the same value returned by the [objectForKey:](object%28forkey_%29.md) method when passing the [NSLocaleCurrencyCode](key/currencycode.md) key.

## See Also

### Related Documentation

- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.
- [ISOCurrencyCodes](isocurrencycodes.md): The list of known currency codes.

### Getting Information About a Locale

- [localeIdentifier](localeidentifier.md): The identifier for the locale.
- [countryCode](countrycode.md): Deprecated. The country or region code for the locale.
- [languageCode](languagecode.md): The language code for the locale.
- [scriptCode](scriptcode.md): The script code for the locale.
- [variantCode](variantcode.md): The variant code for the locale.
- [exemplarCharacterSet](exemplarcharacterset.md): The exemplar character set for the locale.
- [collationIdentifier](collationidentifier.md): The collation identifier for the locale.
- [collatorIdentifier](collatoridentifier.md): The collator identifier for the locale.
- [usesMetricSystem](usesmetricsystem.md): A Boolean value that indicates whether the locale uses the metric system.
- [decimalSeparator](decimalseparator.md): The decimal separator for the locale.
- [groupingSeparator](groupingseparator.md): The grouping separator for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.
