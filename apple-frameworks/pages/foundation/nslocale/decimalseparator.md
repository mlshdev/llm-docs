> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/decimalseparator](https://developer.apple.com/documentation/foundation/nslocale/decimalseparator)

# decimalSeparator (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The decimal separator for the locale.

## Declaration

```swift
var decimalSeparator: String { get }
```

<a id="Discussion"></a>

## Discussion

Example decimal separators include `"."` and `","`.

This property contains the same value returned by the [object(forKey:)](object%28forkey_%29.md) method when passing the [decimalSeparator](key/decimalseparator.md) key.

## See Also

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
- [groupingSeparator](groupingseparator.md): The grouping separator for the locale.
- [currencyCode](currencycode.md): The currency code for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.

# decimalSeparator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The decimal separator for the locale.

## Declaration

```objectivec
@property (copy, readonly) NSString * decimalSeparator;
```

<a id="Discussion"></a>

## Discussion

Example decimal separators include `"."` and `","`.

This property contains the same value returned by the [objectForKey:](object%28forkey_%29.md) method when passing the [NSLocaleDecimalSeparator](key/decimalseparator.md) key.

## See Also

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
- [groupingSeparator](groupingseparator.md): The grouping separator for the locale.
- [currencyCode](currencycode.md): The currency code for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.
