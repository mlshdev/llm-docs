> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/locale-property-keys](https://developer.apple.com/documentation/corefoundation/locale-property-keys)

# Locale Property Keys (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Predefined locale keys used to get property values.

<a id="overview"></a>

## Overview

Locale objects use key-value pairs to store property values. Use the [CFLocaleGetValue(\_:\_:)](cflocalegetvalue%28____%29.md) function to get the value of a specific property listed above.

## Topics

### Constants

- [identifier](cflocalekey/identifier.md): Specifies locale identifier.
- [languageCode](cflocalekey/languagecode.md): Specifies the locale language code.
- [countryCode](cflocalekey/countrycode.md): Specifies the locale country code.
- [scriptCode](cflocalekey/scriptcode.md): Specifies the locale script code.
- [variantCode](cflocalekey/variantcode.md): Specifies the locale variant code.
- [exemplarCharacterSet](cflocalekey/exemplarcharacterset.md): Specifies the locale character set.
- [calendarIdentifier](cflocalekey/calendaridentifier.md): Specifies the locale calendar identifier.
- [calendar](cflocalekey/calendar.md): Specifies the locale calendar.
- [collationIdentifier](cflocalekey/collationidentifier.md): Specifies the locale collation identifier.
- [usesMetricSystem](cflocalekey/usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [measurementSystem](cflocalekey/measurementsystem.md): Specifies the measurement system used.
- [decimalSeparator](cflocalekey/decimalseparator.md): Specifies the decimal point string.
- [groupingSeparator](cflocalekey/groupingseparator.md): Specifies the separator string between groups of digits.
- [currencySymbol](cflocalekey/currencysymbol.md): Specifies the currency symbol.
- [currencyCode](cflocalekey/currencycode.md): Specifies the locale currency code.
- [collatorIdentifier](cflocalekey/collatoridentifier.md): Specifies the collation identifier for the locale.
- [quotationBeginDelimiterKey](cflocalekey/quotationbegindelimiterkey.md): Specifies the begin quotation symbol associated with the locale.
- [quotationEndDelimiterKey](cflocalekey/quotationenddelimiterkey.md): Specifies the end quotation symbol associated with the locale.
- [alternateQuotationBeginDelimiterKey](cflocalekey/alternatequotationbegindelimiterkey.md): Specifies the alternating begin quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationBeginDelimiterKey`, then `NSLocaleAlternateQuotationBeginDelimiterKey`, and so on.
- [alternateQuotationEndDelimiterKey](cflocalekey/alternatequotationenddelimiterkey.md): Specifies the alternating end quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationEndDelimiterKey`, then `NSLocaleAlternateQuotationEndDelimiterKey`, and so on.

## See Also

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.

# Locale Property Keys (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Predefined locale keys used to get property values.

<a id="overview"></a>

## Overview

Locale objects use key-value pairs to store property values. Use the [CFLocaleGetValue](cflocalegetvalue%28____%29.md) function to get the value of a specific property listed above.

## Topics

### Constants

- [kCFLocaleIdentifier](cflocalekey/identifier.md): Specifies locale identifier.
- [kCFLocaleLanguageCode](cflocalekey/languagecode.md): Specifies the locale language code.
- [kCFLocaleCountryCode](cflocalekey/countrycode.md): Specifies the locale country code.
- [kCFLocaleScriptCode](cflocalekey/scriptcode.md): Specifies the locale script code.
- [kCFLocaleVariantCode](cflocalekey/variantcode.md): Specifies the locale variant code.
- [kCFLocaleExemplarCharacterSet](cflocalekey/exemplarcharacterset.md): Specifies the locale character set.
- [kCFLocaleCalendarIdentifier](cflocalekey/calendaridentifier.md): Specifies the locale calendar identifier.
- [kCFLocaleCalendar](cflocalekey/calendar.md): Specifies the locale calendar.
- [kCFLocaleCollationIdentifier](cflocalekey/collationidentifier.md): Specifies the locale collation identifier.
- [kCFLocaleUsesMetricSystem](cflocalekey/usesmetricsystem.md): Specifies the whether the locale uses the metric system.
- [kCFLocaleMeasurementSystem](cflocalekey/measurementsystem.md): Specifies the measurement system used.
- [kCFLocaleDecimalSeparator](cflocalekey/decimalseparator.md): Specifies the decimal point string.
- [kCFLocaleGroupingSeparator](cflocalekey/groupingseparator.md): Specifies the separator string between groups of digits.
- [kCFLocaleCurrencySymbol](cflocalekey/currencysymbol.md): Specifies the currency symbol.
- [kCFLocaleCurrencyCode](cflocalekey/currencycode.md): Specifies the locale currency code.
- [kCFLocaleCollatorIdentifier](cflocalekey/collatoridentifier.md): Specifies the collation identifier for the locale.
- [kCFLocaleQuotationBeginDelimiterKey](cflocalekey/quotationbegindelimiterkey.md): Specifies the begin quotation symbol associated with the locale.
- [kCFLocaleQuotationEndDelimiterKey](cflocalekey/quotationenddelimiterkey.md): Specifies the end quotation symbol associated with the locale.
- [kCFLocaleAlternateQuotationBeginDelimiterKey](cflocalekey/alternatequotationbegindelimiterkey.md): Specifies the alternating begin quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationBeginDelimiterKey`, then `NSLocaleAlternateQuotationBeginDelimiterKey`, and so on.
- [kCFLocaleAlternateQuotationEndDelimiterKey](cflocalekey/alternatequotationenddelimiterkey.md): Specifies the alternating end quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate. Thus, `NSLocaleQuotationEndDelimiterKey`, then `NSLocaleAlternateQuotationEndDelimiterKey`, and so on.

## See Also

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.
