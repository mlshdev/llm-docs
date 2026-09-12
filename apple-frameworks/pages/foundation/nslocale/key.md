> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/key](https://developer.apple.com/documentation/foundation/nslocale/key)

# NSLocale.Key (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The keys used to access components of a locale.

## Declaration

```swift
struct Key
```

<a id="Discussion"></a>

## Discussion

Use these keys with the methods [object(forKey:)](object%28forkey_%29.md) and [displayName(forKey:value:)](displayname%28forkey_value_%29.md).

## Topics

### Initializers

- [init(rawValue:)](key/init%28rawvalue_%29.md)

### Keys

- [identifier](key/identifier.md): The locale identifier.
- [countryCode](key/countrycode.md): The locale country or region code.
- [languageCode](key/languagecode.md): The locale language code.
- [scriptCode](key/scriptcode.md): The locale script code.
- [variantCode](key/variantcode.md): The locale variant code.
- [exemplarCharacterSet](key/exemplarcharacterset.md): The exemplar character set for the locale.
- [calendar](key/calendar.md): The calendar associated with the locale.
- [collationIdentifier](key/collationidentifier.md): The collation associated with the locale.
- [collatorIdentifier](key/collatoridentifier.md): The collation identifier for the locale.
- [usesMetricSystem](key/usesmetricsystem.md): A flag that indicates whether the locale uses the metric system.
- [measurementSystem](key/measurementsystem.md): The measurement system associated with the locale.
- [decimalSeparator](key/decimalseparator.md): The decimal separator associated with the locale.
- [groupingSeparator](key/groupingseparator.md): The numeric grouping separator associated with the locale.
- [currencySymbol](key/currencysymbol.md): The currency symbol associated with the locale.
- [currencyCode](key/currencycode.md): The currency code associated with the locale.
- [quotationEndDelimiterKey](key/quotationenddelimiterkey.md): The end quotation symbol associated with the locale.
- [quotationBeginDelimiterKey](key/quotationbegindelimiterkey.md): The begin quotation symbol associated with the locale.
- [alternateQuotationEndDelimiterKey](key/alternatequotationenddelimiterkey.md): The alternate end quotation symbol associated with the locale.
- [alternateQuotationBeginDelimiterKey](key/alternatequotationbegindelimiterkey.md): The alternating begin quotation symbol associated with the locale.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Locale Information by Key

- [object(forKey:)](object%28forkey_%29.md): Returns the value of the component corresponding to the specified key.
- [displayName(forKey:value:)](displayname%28forkey_value_%29.md): Returns the display name for the given locale component value.

# NSLocaleKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The keys used to access components of a locale.

## Declaration

```objectivec
typedef NSString * NSLocaleKey;
```

<a id="Discussion"></a>

## Discussion

Use these keys with the methods [objectForKey:](object%28forkey_%29.md) and [displayNameForKey:value:](displayname%28forkey_value_%29.md).

## Topics

### Keys

- [NSLocaleIdentifier](key/identifier.md): The locale identifier.
- [NSLocaleCountryCode](key/countrycode.md): The locale country or region code.
- [NSLocaleLanguageCode](key/languagecode.md): The locale language code.
- [NSLocaleScriptCode](key/scriptcode.md): The locale script code.
- [NSLocaleVariantCode](key/variantcode.md): The locale variant code.
- [NSLocaleExemplarCharacterSet](key/exemplarcharacterset.md): The exemplar character set for the locale.
- [NSLocaleCalendar](key/calendar.md): The calendar associated with the locale.
- [NSLocaleCollationIdentifier](key/collationidentifier.md): The collation associated with the locale.
- [NSLocaleCollatorIdentifier](key/collatoridentifier.md): The collation identifier for the locale.
- [NSLocaleUsesMetricSystem](key/usesmetricsystem.md): A flag that indicates whether the locale uses the metric system.
- [NSLocaleMeasurementSystem](key/measurementsystem.md): The measurement system associated with the locale.
- [NSLocaleDecimalSeparator](key/decimalseparator.md): The decimal separator associated with the locale.
- [NSLocaleGroupingSeparator](key/groupingseparator.md): The numeric grouping separator associated with the locale.
- [NSLocaleCurrencySymbol](key/currencysymbol.md): The currency symbol associated with the locale.
- [NSLocaleCurrencyCode](key/currencycode.md): The currency code associated with the locale.
- [NSLocaleQuotationEndDelimiterKey](key/quotationenddelimiterkey.md): The end quotation symbol associated with the locale.
- [NSLocaleQuotationBeginDelimiterKey](key/quotationbegindelimiterkey.md): The begin quotation symbol associated with the locale.
- [NSLocaleAlternateQuotationEndDelimiterKey](key/alternatequotationenddelimiterkey.md): The alternate end quotation symbol associated with the locale.
- [NSLocaleAlternateQuotationBeginDelimiterKey](key/alternatequotationbegindelimiterkey.md): The alternating begin quotation symbol associated with the locale.

## See Also

### Accessing Locale Information by Key

- [objectForKey:](object%28forkey_%29.md): Returns the value of the component corresponding to the specified key.
- [displayNameForKey:value:](displayname%28forkey_value_%29.md): Returns the display name for the given locale component value.
