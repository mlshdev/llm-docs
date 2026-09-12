> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale](https://developer.apple.com/documentation/foundation/locale)

# Locale

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.

## Declaration

```swift
struct Locale
```

<a id="overview"></a>

## Overview

[Locale](locale.md) encapsulates information about linguistic, cultural, and technological conventions and standards. Examples of information encapsulated by a locale include the symbol used for the decimal separator in numbers and the formatting conventions for dates and times.

Apps use locales to provide, format, and interpret information about and according to the user’s customs and preferences. Data formatting APIs commonly make use of locales to present data in a locale-appropriate way.

You can create a [Locale](locale.md) from a common identifier like `en-US`, or by specifying its components. More commonly, you access the current system locale with the [current](locale/current.md) or [autoupdatingCurrent](locale/autoupdatingcurrent.md) static variables.

<a id="Working-with-locale-components"></a>

### Working with locale components

A [Locale](locale.md) exposes its various traits — the appropriate measurement system, currency symbols, date and time conventions, and more — as strongly-typed properties like [currency](locale/currency-swift.property.md), `numberingSystem`, and `firstDayOfWeek`.

In addition, the [language](locale/language-swift.property.md) property allows you examine traits of languages, through the [Locale.Language](locale/language-swift.struct.md) type, in contast with [NSLocale](nslocale.md), where [languageCode](nslocale/languagecode.md) is just a string identifier. You can use a locale’s language to compare whether two locales use the same language, or if one language is a parent of another.

The following example creates a [Locale](locale.md) from the identifier `zh-CN`, for Chinese. It then accesses this locale’s [language](locale/language-swift.property.md) to get the language’s [script](locale/language-swift.struct/script.md), and uses a US English locale to get a localized string describing the script: “Simplified Han”. With the locale `zh-Hant-CN`, for Traditional Chinese, the script would be “Traditional Han” instead.

```swift
let zhCN = Locale(identifier: "zh-CN")
if let script = zhCN.language.script {
    let enUS = Locale(identifier: "en-US")
    let localizedScript = enUS.localizedString(forScript: script) // "Simplified Han"
}
```

<a id="Creating-custom-locales-from-components"></a>

### Creating custom locales from components

You can create a custom locale by creating a [Locale](locale.md) instance from a customized [Locale.Components](locale/components.md). Do this when you want to tweak specific aspects of a locale. The following example creates a locale that uses language conventions of British English (language region `GB`), but otherwise uses US conventions for things like currency and measurement.

```swift
var components = Locale.Components(languageCode: "en", languageRegion: "GB")
components.region = Locale.Region("US")
let en_GB_US = Locale(components: components)
```

Creating a custom locale like this isn’t necessarily common in apps, but can be useful in unit testing your app’s localizations.

## Topics

### Creating a locale by identifier

- [init(identifier:)](locale/init%28identifier_%29.md): Creates a locale with the specified identifier.

### Creating a locale by components

- [init(components:)](locale/init%28components_%29.md): Creates a locale from the given components.
- [Locale.Components](locale/components.md): A type that represents the components of a locale, for use when creating a locale with specific overrides.
- [init(languageCode:script:languageRegion:)](locale/init%28languagecode_script_languageregion_%29.md): Creates a locale with the specified language code, script, and region identifier.
- [init(languageComponents:)](locale/init%28languagecomponents_%29.md): Creates a locale from the given language components.
- [Locale.Language.Components](locale/language-swift.struct/components.md): A type that identifies a language by its various components.

### Getting the user’s locale

- [autoupdatingCurrent](locale/autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [current](locale/current.md): A locale representing the user’s region settings at the time the property is read.

### Getting known identifiers and codes

- [availableIdentifiers](locale/availableidentifiers.md): A list of available identifiers.
- [isoRegionCodes](locale/isoregioncodes.md): Deprecated. A list of available region codes.
- [isoLanguageCodes](locale/isolanguagecodes.md): Deprecated. A list of available language codes.
- [isoCurrencyCodes](locale/isocurrencycodes.md): Deprecated. A list of available currency codes.
- [commonISOCurrencyCodes](locale/commonisocurrencycodes.md): A list of common currency codes.

### Converting between identifiers

- [canonicalIdentifier(from:)](locale/canonicalidentifier%28from_%29.md): Deprecated. Returns a canonical identifier from the given string.
- [components(fromIdentifier:)](locale/components%28fromidentifier_%29.md): Deprecated. Returns a dictionary that splits an identifier into its component pieces.
- [identifier(fromComponents:)](locale/identifier%28fromcomponents_%29.md): Constructs an identifier from a dictionary of components.
- [identifier(\_:from:)](locale/identifier%28__from_%29.md): Returns the identifier conforming to the specified standard for the specified string.
- [Locale.IdentifierType](locale/identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [canonicalLanguageIdentifier(from:)](locale/canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier from the given string.
- [identifier(fromWindowsLocaleCode:)](locale/identifier%28fromwindowslocalecode_%29.md): Returns the locale identifier from a given Windows locale code, or `nil` if it could not be converted.
- [windowsLocaleCode(fromIdentifier:)](locale/windowslocalecode%28fromidentifier_%29.md): Returns the Windows locale code from a given identifier, or `nil` if it could not be converted.

### Getting locale components

- [Locale.Components](locale/components.md): A type that represents the components of a locale, for use when creating a locale with specific overrides.

### Getting language components

- [language](locale/language-swift.property.md): The language of a locale.
- [Locale.Language](locale/language-swift.struct.md): A type that represents a language, as used in a locale.

### Getting date and time components

- [firstDayOfWeek](locale/firstdayofweek.md): The first day of the week as represented by this locale.
- [Locale.Weekday](locale/weekday.md): A type that represents weekdays, used for indicating a locale’s first day of the week.
- [hourCycle](locale/hourcycle-swift.property.md): The hour cycle used by the locale, like one-to-twelve or zero-to-twenty-three.
- [Locale.HourCycle](locale/hourcycle-swift.enum.md): A type that represents the hour cycle used in a locale, like one-to-twelve or zero-to-twenty-three.
- [timeZone](locale/timezone.md): The time zone associated with the locale, if any.

### Getting measurement and counting components

- [currency](locale/currency-swift.property.md): The currency used by the locale.
- [Locale.Currency](locale/currency-swift.struct.md): A type that represents the currency system used by a locale, like dollars or euros.
- [measurementSystem](locale/measurementsystem-swift.property.md): The measurement system used by the locale, like metric or the US system.
- [Locale.MeasurementSystem](locale/measurementsystem-swift.struct.md): A type that represents the measurement system used by a locale, like metric or the US system.
- [numberingSystem](locale/numberingsystem-swift.property.md): The numbering system used by the locale.
- [availableNumberingSystems](locale/availablenumberingsystems.md): An array containing all the valid numbering systems for the locale.
- [Locale.NumberingSystem](locale/numberingsystem-swift.struct.md): A type that represents the numbering system used in a locale.

### Getting region components

- [region](locale/region-swift.property.md): The region used by the locale.
- [Locale.Region](locale/region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [subdivision](locale/subdivision-swift.property.md): The optional subdivision of the region used by this locale.
- [Locale.Subdivision](locale/subdivision-swift.struct.md): A type that represents a subdivision of a region, such as a state in the US or a province in Canada.
- [variant](locale/variant-swift.property.md): An optional variant used by the locale.
- [Locale.Variant](locale/variant-swift.struct.md): A type that represents a locale’s language variant.

### Getting ordering components

- [collation](locale/collation-swift.property.md): The string sort order of the locale.
- [Locale.Collation](locale/collation-swift.struct.md): A type that represents the string sort order used by the locale.

### Getting information about a locale

- [identifier](locale/identifier.md): The identifier of the locale.
- [identifier(\_:)](locale/identifier%28__%29.md): Returns the locale identifier, in the specified standard format.
- [Locale.IdentifierType](locale/identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [calendar](locale/calendar.md): The calendar for the locale, or the Gregorian calendar as a fallback.
- [regionCode](locale/regioncode.md): Deprecated. The region code of the locale, or `nil` if it has none.
- [languageCode](locale/languagecode-swift.property.md): Deprecated. The language code of the locale, or `nil` if has none.
- [scriptCode](locale/scriptcode.md): Deprecated. The script code of the locale, or `nil` if has none.
- [variantCode](locale/variantcode.md): Deprecated. The variant code for the locale, or `nil` if it has none.
- [exemplarCharacterSet](locale/exemplarcharacterset.md): The exemplar character set for the locale, or `nil` if has none.
- [collationIdentifier](locale/collationidentifier.md): Deprecated. The collation identifier for the locale, or `nil` if it has none.
- [collatorIdentifier](locale/collatoridentifier.md): The collator identifier of the locale.
- [usesMetricSystem](locale/usesmetricsystem.md): Deprecated. A Boolean that is true if the locale uses the metric system.
- [decimalSeparator](locale/decimalseparator.md): The decimal separator of the locale.
- [groupingSeparator](locale/groupingseparator.md): The grouping separator of the locale.
- [currencyCode](locale/currencycode.md): Deprecated. The currency code of the locale.
- [currencySymbol](locale/currencysymbol.md): The currency symbol of the locale.
- [quotationBeginDelimiter](locale/quotationbegindelimiter.md): The quotation begin delimiter of the locale.
- [quotationEndDelimiter](locale/quotationenddelimiter.md): The quotation end delimiter of the locale.
- [alternateQuotationBeginDelimiter](locale/alternatequotationbegindelimiter.md): The alternate quotation begin delimiter of the locale.
- [alternateQuotationEndDelimiter](locale/alternatequotationenddelimiter.md): The alternate quotation end delimiter of the locale.

### Getting display information about a locale

- [localizedString(for:)](locale/localizedstring%28for_%29.md): Returns a localized string for a specified calendar.
- [localizedString(forCollationIdentifier:)](locale/localizedstring%28forcollationidentifier_%29.md): Returns a localized string for a specified ICU collation identifier.
- [localizedString(forCollatorIdentifier:)](locale/localizedstring%28forcollatoridentifier_%29.md): Returns a localized string for a specified ICU collator identifier.
- [localizedString(forCurrencyCode:)](locale/localizedstring%28forcurrencycode_%29.md): Returns a localized string for a specified ISO 4217 currency code.
- [localizedString(forIdentifier:)](locale/localizedstring%28foridentifier_%29.md): Returns a localized string for a specified locale identifier.
- [localizedString(forLanguageCode:)](locale/localizedstring%28forlanguagecode_%29.md): Returns a localized string for a specified language code.
- [localizedString(forRegionCode:)](locale/localizedstring%28forregioncode_%29.md): Returns a localized string for a specified region code.
- [localizedString(forScriptCode:)](locale/localizedstring%28forscriptcode_%29.md): Returns a localized string for a specified script code.
- [localizedString(forVariantCode:)](locale/localizedstring%28forvariantcode_%29.md): Returns a localized string for a specified variant code.

### Getting the user’s preferred languages

- [preferredLanguages](locale/preferredlanguages.md): A list of the user’s preferred languages.

### Getting line and character direction for a language

- [characterDirection(forLanguage:)](locale/characterdirection%28forlanguage_%29.md): Deprecated. Returns the character direction for a specified language code.
- [lineDirection(forLanguage:)](locale/linedirection%28forlanguage_%29.md): Deprecated. Returns the line direction for a specified language code.
- [Locale.LanguageDirection](locale/languagedirection.md): An alias for the standard set of language directions.
- [NSLocale.LanguageDirection](nslocale/languagedirection.md): The directions that a language may take across a page of text.

### Working with notification messages

- [Locale.CurrentLocaleDidChangeMessage](locale/currentlocaledidchangemessage.md): A message the system sends when the current locale changes.

### Using reference types

- [NSLocale](nslocale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.

### Structures

- [Locale.LanguageCode](locale/languagecode-swift.struct.md): An alphabetical code associated with a language.
- [Locale.Script](locale/script.md): The written script used with a given language.

### Type Properties

- [preferredLocales](locale/preferredlocales.md): Returns a list of the user’s preferred locales, as specified in Language & Region settings, taking into account any per-app language overrides.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
