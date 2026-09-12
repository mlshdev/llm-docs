> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalekey/variantcode](https://developer.apple.com/documentation/corefoundation/cflocalekey/variantcode)

# variantCode (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the locale variant code.

## Declaration

```swift
static let variantCode: CFLocaleKey!
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a CFString containing the variant name. The variant code is arbitrary and application-specific. ICU adds “`_EURO`”  to its locale designations for locales that support the Euro currency. For  “`en_US_POSIX`” the variant is “`POSIX`”, and for “`hy_AM_REVISED`” it is “`REVISED`”.

## See Also

### Constants

- [identifier](identifier.md): Specifies locale identifier.
- [languageCode](languagecode.md): Specifies the locale language code.
- [countryCode](countrycode.md): Specifies the locale country code.
- [scriptCode](scriptcode.md): Specifies the locale script code.
- [exemplarCharacterSet](exemplarcharacterset.md): Specifies the locale character set.
- [calendarIdentifier](calendaridentifier.md): Specifies the locale calendar identifier.
- [calendar](calendar.md): Specifies the locale calendar.
- [collationIdentifier](collationidentifier.md): Specifies the locale collation identifier.
- [usesMetricSystem](usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [measurementSystem](measurementsystem.md): Specifies the measurement system used.
- [decimalSeparator](decimalseparator.md): Specifies the decimal point string.
- [groupingSeparator](groupingseparator.md): Specifies the separator string between groups of digits.
- [currencySymbol](currencysymbol.md): Specifies the currency symbol.
- [currencyCode](currencycode.md): Specifies the locale currency code.
- [collatorIdentifier](collatoridentifier.md): Specifies the collation identifier for the locale.

# kCFLocaleVariantCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the locale variant code.

## Declaration

```objectivec
extern CFLocaleKey const kCFLocaleVariantCode;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a CFString containing the variant name. The variant code is arbitrary and application-specific. ICU adds “`_EURO`”  to its locale designations for locales that support the Euro currency. For  “`en_US_POSIX`” the variant is “`POSIX`”, and for “`hy_AM_REVISED`” it is “`REVISED`”.

## See Also

### Constants

- [kCFLocaleIdentifier](identifier.md): Specifies locale identifier.
- [kCFLocaleLanguageCode](languagecode.md): Specifies the locale language code.
- [kCFLocaleCountryCode](countrycode.md): Specifies the locale country code.
- [kCFLocaleScriptCode](scriptcode.md): Specifies the locale script code.
- [kCFLocaleExemplarCharacterSet](exemplarcharacterset.md): Specifies the locale character set.
- [kCFLocaleCalendarIdentifier](calendaridentifier.md): Specifies the locale calendar identifier.
- [kCFLocaleCalendar](calendar.md): Specifies the locale calendar.
- [kCFLocaleCollationIdentifier](collationidentifier.md): Specifies the locale collation identifier.
- [kCFLocaleUsesMetricSystem](usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [kCFLocaleMeasurementSystem](measurementsystem.md): Specifies the measurement system used.
- [kCFLocaleDecimalSeparator](decimalseparator.md): Specifies the decimal point string.
- [kCFLocaleGroupingSeparator](groupingseparator.md): Specifies the separator string between groups of digits.
- [kCFLocaleCurrencySymbol](currencysymbol.md): Specifies the currency symbol.
- [kCFLocaleCurrencyCode](currencycode.md): Specifies the locale currency code.
- [kCFLocaleCollatorIdentifier](collatoridentifier.md): Specifies the collation identifier for the locale.
