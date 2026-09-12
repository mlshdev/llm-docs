> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/localizedstring(forlanguagecode:)](https://developer.apple.com/documentation/foundation/locale/localizedstring(forlanguagecode:))

# localizedString(forLanguageCode:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string for a specified language code.

## Declaration

```swift
func localizedString(forLanguageCode languageCode: String) -> String?
```

<a id="Discussion"></a>

## Discussion

For example, in the “en” locale, the result for `"es"` is `"Spanish"`.

## See Also

### Getting display information about a locale

- [localizedString(for:)](localizedstring%28for_%29.md): Returns a localized string for a specified calendar.
- [localizedString(forCollationIdentifier:)](localizedstring%28forcollationidentifier_%29.md): Returns a localized string for a specified ICU collation identifier.
- [localizedString(forCollatorIdentifier:)](localizedstring%28forcollatoridentifier_%29.md): Returns a localized string for a specified ICU collator identifier.
- [localizedString(forCurrencyCode:)](localizedstring%28forcurrencycode_%29.md): Returns a localized string for a specified ISO 4217 currency code.
- [localizedString(forIdentifier:)](localizedstring%28foridentifier_%29.md): Returns a localized string for a specified locale identifier.
- [localizedString(forRegionCode:)](localizedstring%28forregioncode_%29.md): Returns a localized string for a specified region code.
- [localizedString(forScriptCode:)](localizedstring%28forscriptcode_%29.md): Returns a localized string for a specified script code.
- [localizedString(forVariantCode:)](localizedstring%28forvariantcode_%29.md): Returns a localized string for a specified variant code.
