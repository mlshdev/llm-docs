> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localeidentifier](https://developer.apple.com/documentation/foundation/nslocale/localeidentifier)

# localeIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the locale.

## Declaration

```swift
var localeIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Examples of locale identifiers include `"en_GB"`, `"es_ES_PREEURO"`, and `"zh-Hant_HK_POSIX@collation=pinyin;currency=CNY"`.

Use [localizedString(forIdentifier:)](../locale/localizedstring%28foridentifier_%29.md) to obtain a version of the value suitable for display to the user.

> **Note**

>  The value held in the property may differ from the identifier used to initialize the locale because [NSLocale](../nslocale.md) may canonicalize it during initialization.

This property contains the same value returned by the [object(forKey:)](object%28forkey_%29.md) method when passing the [identifier](key/identifier.md) key.

## See Also

### Related Documentation

- [availableLocaleIdentifiers](availablelocaleidentifiers.md): The list of locale identifiers available on the system.

### Getting Information About a Locale

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
- [currencyCode](currencycode.md): The currency code for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.

# localeIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The identifier for the locale.

## Declaration

```objectivec
@property (copy, readonly) NSString * localeIdentifier;
```

<a id="Discussion"></a>

## Discussion

Examples of locale identifiers include `"en_GB"`, `"es_ES_PREEURO"`, and `"zh-Hant_HK_POSIX@collation=pinyin;currency=CNY"`.

Use [localizedString(forIdentifier:)](../locale/localizedstring%28foridentifier_%29.md) to obtain a version of the value suitable for display to the user.

> **Note**

>  The value held in the property may differ from the identifier used to initialize the locale because [NSLocale](../nslocale.md) may canonicalize it during initialization.

This property contains the same value returned by the [objectForKey:](object%28forkey_%29.md) method when passing the [NSLocaleIdentifier](key/identifier.md) key.

## See Also

### Related Documentation

- [availableLocaleIdentifiers](availablelocaleidentifiers.md): The list of locale identifiers available on the system.

### Getting Information About a Locale

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
- [currencyCode](currencycode.md): The currency code for the locale.
- [currencySymbol](currencysymbol.md): The currency symbol for the locale.
- [calendarIdentifier](calendaridentifier.md): The calendar identifier for the locale.
- [quotationBeginDelimiter](quotationbegindelimiter.md): The begin quotation symbol for the locale.
- [quotationEndDelimiter](quotationenddelimiter.md): The end quotation symbol for the locale.
