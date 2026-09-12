> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalekey](https://developer.apple.com/documentation/corefoundation/cflocalekey)

# CFLocaleKey (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CFLocaleKey
```

## Topics

### Type Properties

- [alternateQuotationBeginDelimiterKey](cflocalekey/alternatequotationbegindelimiterkey.md): Specifies the alternating begin quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationBeginDelimiterKey`, then `NSLocaleAlternateQuotationBeginDelimiterKey`, and so on.
- [alternateQuotationEndDelimiterKey](cflocalekey/alternatequotationenddelimiterkey.md): Specifies the alternating end quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationEndDelimiterKey`, then `NSLocaleAlternateQuotationEndDelimiterKey`, and so on.
- [calendar](cflocalekey/calendar.md): Specifies the locale calendar.
- [calendarIdentifier](cflocalekey/calendaridentifier.md): Specifies the locale calendar identifier.
- [collationIdentifier](cflocalekey/collationidentifier.md): Specifies the locale collation identifier.
- [collatorIdentifier](cflocalekey/collatoridentifier.md): Specifies the collation identifier for the locale.
- [countryCode](cflocalekey/countrycode.md): Specifies the locale country code.
- [currencyCode](cflocalekey/currencycode.md): Specifies the locale currency code.
- [currencySymbol](cflocalekey/currencysymbol.md): Specifies the currency symbol.
- [decimalSeparator](cflocalekey/decimalseparator.md): Specifies the decimal point string.
- [exemplarCharacterSet](cflocalekey/exemplarcharacterset.md): Specifies the locale character set.
- [groupingSeparator](cflocalekey/groupingseparator.md): Specifies the separator string between groups of digits.
- [identifier](cflocalekey/identifier.md): Specifies locale identifier.
- [languageCode](cflocalekey/languagecode.md): Specifies the locale language code.
- [measurementSystem](cflocalekey/measurementsystem.md): Specifies the measurement system used.
- [quotationBeginDelimiterKey](cflocalekey/quotationbegindelimiterkey.md): Specifies the begin quotation symbol associated with the locale.
- [quotationEndDelimiterKey](cflocalekey/quotationenddelimiterkey.md): Specifies the end quotation symbol associated with the locale.
- [scriptCode](cflocalekey/scriptcode.md): Specifies the locale script code.
- [usesMetricSystem](cflocalekey/usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [variantCode](cflocalekey/variantcode.md): Specifies the locale variant code.

### Initializers

- [init(rawValue:)](cflocalekey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.

# CFLocaleKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef CFStringRef CFLocaleKey;
```

## Topics

### Type Properties

- [kCFLocaleAlternateQuotationBeginDelimiterKey](cflocalekey/alternatequotationbegindelimiterkey.md): Specifies the alternating begin quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationBeginDelimiterKey`, then `NSLocaleAlternateQuotationBeginDelimiterKey`, and so on.
- [kCFLocaleAlternateQuotationEndDelimiterKey](cflocalekey/alternatequotationenddelimiterkey.md): Specifies the alternating end quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationEndDelimiterKey`, then `NSLocaleAlternateQuotationEndDelimiterKey`, and so on.
- [kCFLocaleCalendar](cflocalekey/calendar.md): Specifies the locale calendar.
- [kCFLocaleCalendarIdentifier](cflocalekey/calendaridentifier.md): Specifies the locale calendar identifier.
- [kCFLocaleCollationIdentifier](cflocalekey/collationidentifier.md): Specifies the locale collation identifier.
- [kCFLocaleCollatorIdentifier](cflocalekey/collatoridentifier.md): Specifies the collation identifier for the locale.
- [kCFLocaleCountryCode](cflocalekey/countrycode.md): Specifies the locale country code.
- [kCFLocaleCurrencyCode](cflocalekey/currencycode.md): Specifies the locale currency code.
- [kCFLocaleCurrencySymbol](cflocalekey/currencysymbol.md): Specifies the currency symbol.
- [kCFLocaleDecimalSeparator](cflocalekey/decimalseparator.md): Specifies the decimal point string.
- [kCFLocaleExemplarCharacterSet](cflocalekey/exemplarcharacterset.md): Specifies the locale character set.
- [kCFLocaleGroupingSeparator](cflocalekey/groupingseparator.md): Specifies the separator string between groups of digits.
- [kCFLocaleIdentifier](cflocalekey/identifier.md): Specifies locale identifier.
- [kCFLocaleLanguageCode](cflocalekey/languagecode.md): Specifies the locale language code.
- [kCFLocaleMeasurementSystem](cflocalekey/measurementsystem.md): Specifies the measurement system used.
- [kCFLocaleQuotationBeginDelimiterKey](cflocalekey/quotationbegindelimiterkey.md): Specifies the begin quotation symbol associated with the locale.
- [kCFLocaleQuotationEndDelimiterKey](cflocalekey/quotationenddelimiterkey.md): Specifies the end quotation symbol associated with the locale.
- [kCFLocaleScriptCode](cflocalekey/scriptcode.md): Specifies the locale script code.
- [kCFLocaleUsesMetricSystem](cflocalekey/usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [kCFLocaleVariantCode](cflocalekey/variantcode.md): Specifies the locale variant code.

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.
- [CGFloat](cgfloat-c.typealias.md): The basic type for all floating-point values.
- [HRESULT](hresult.md)
- [LPVOID](lpvoid.md)
- [REFIID](refiid.md)
- [ULONG](ulong.md)
