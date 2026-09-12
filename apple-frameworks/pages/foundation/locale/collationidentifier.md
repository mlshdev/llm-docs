> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/collationidentifier](https://developer.apple.com/documentation/foundation/locale/collationidentifier)

# collationIdentifier

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 8.0+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 9.0)

The collation identifier for the locale, or `nil` if it has none.

## Declaration

```swift
var collationIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

For example, for the locale “en_US@collation=phonebook”, returns “phonebook”.

## See Also

### Getting information about a locale

- [identifier](identifier.md): The identifier of the locale.
- [identifier(\_:)](identifier%28__%29.md): Returns the locale identifier, in the specified standard format.
- [Locale.IdentifierType](identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [calendar](calendar.md): The calendar for the locale, or the Gregorian calendar as a fallback.
- [regionCode](regioncode.md): Deprecated. The region code of the locale, or `nil` if it has none.
- [languageCode](languagecode-swift.property.md): Deprecated. The language code of the locale, or `nil` if has none.
- [scriptCode](scriptcode.md): Deprecated. The script code of the locale, or `nil` if has none.
- [variantCode](variantcode.md): Deprecated. The variant code for the locale, or `nil` if it has none.
- [exemplarCharacterSet](exemplarcharacterset.md): The exemplar character set for the locale, or `nil` if has none.
- [collatorIdentifier](collatoridentifier.md): The collator identifier of the locale.
- [usesMetricSystem](usesmetricsystem.md): Deprecated. A Boolean that is true if the locale uses the metric system.
- [decimalSeparator](decimalseparator.md): The decimal separator of the locale.
- [groupingSeparator](groupingseparator.md): The grouping separator of the locale.
- [currencyCode](currencycode.md): Deprecated. The currency code of the locale.
- [currencySymbol](currencysymbol.md): The currency symbol of the locale.
