> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/key/alternatequotationbegindelimiterkey](https://developer.apple.com/documentation/foundation/nslocale/key/alternatequotationbegindelimiterkey)

# alternateQuotationBeginDelimiterKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The alternating begin quotation symbol associated with the locale.

## Declaration

```swift
static let alternateQuotationBeginDelimiterKey: NSLocale.Key
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSString` object; for example, `"‘"`, `"‹"`, or `"『"`.

In some locales, when quotations are nested, the quotation characters alternate. Thus, [quotationBeginDelimiterKey](quotationbegindelimiterkey.md), then [alternateQuotationBeginDelimiterKey](alternatequotationbegindelimiterkey.md), etc.

## See Also

### Keys

- [identifier](identifier.md): The locale identifier.
- [countryCode](countrycode.md): The locale country or region code.
- [languageCode](languagecode.md): The locale language code.
- [scriptCode](scriptcode.md): The locale script code.
- [variantCode](variantcode.md): The locale variant code.
- [exemplarCharacterSet](exemplarcharacterset.md): The exemplar character set for the locale.
- [calendar](calendar.md): The calendar associated with the locale.
- [collationIdentifier](collationidentifier.md): The collation associated with the locale.
- [collatorIdentifier](collatoridentifier.md): The collation identifier for the locale.
- [usesMetricSystem](usesmetricsystem.md): A flag that indicates whether the locale uses the metric system.
- [measurementSystem](measurementsystem.md): The measurement system associated with the locale.
- [decimalSeparator](decimalseparator.md): The decimal separator associated with the locale.
- [groupingSeparator](groupingseparator.md): The numeric grouping separator associated with the locale.
- [currencySymbol](currencysymbol.md): The currency symbol associated with the locale.
- [currencyCode](currencycode.md): The currency code associated with the locale.

# NSLocaleAlternateQuotationBeginDelimiterKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The alternating begin quotation symbol associated with the locale.

## Declaration

```objectivec
extern NSLocaleKey const NSLocaleAlternateQuotationBeginDelimiterKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSString` object; for example, `"‘"`, `"‹"`, or `"『"`.

In some locales, when quotations are nested, the quotation characters alternate. Thus, [NSLocaleQuotationBeginDelimiterKey](quotationbegindelimiterkey.md), then [NSLocaleAlternateQuotationBeginDelimiterKey](alternatequotationbegindelimiterkey.md), etc.

## See Also

### Keys

- [NSLocaleIdentifier](identifier.md): The locale identifier.
- [NSLocaleCountryCode](countrycode.md): The locale country or region code.
- [NSLocaleLanguageCode](languagecode.md): The locale language code.
- [NSLocaleScriptCode](scriptcode.md): The locale script code.
- [NSLocaleVariantCode](variantcode.md): The locale variant code.
- [NSLocaleExemplarCharacterSet](exemplarcharacterset.md): The exemplar character set for the locale.
- [NSLocaleCalendar](calendar.md): The calendar associated with the locale.
- [NSLocaleCollationIdentifier](collationidentifier.md): The collation associated with the locale.
- [NSLocaleCollatorIdentifier](collatoridentifier.md): The collation identifier for the locale.
- [NSLocaleUsesMetricSystem](usesmetricsystem.md): A flag that indicates whether the locale uses the metric system.
- [NSLocaleMeasurementSystem](measurementsystem.md): The measurement system associated with the locale.
- [NSLocaleDecimalSeparator](decimalseparator.md): The decimal separator associated with the locale.
- [NSLocaleGroupingSeparator](groupingseparator.md): The numeric grouping separator associated with the locale.
- [NSLocaleCurrencySymbol](currencysymbol.md): The currency symbol associated with the locale.
- [NSLocaleCurrencyCode](currencycode.md): The currency code associated with the locale.
