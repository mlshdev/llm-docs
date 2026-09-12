> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/isolanguagecodes](https://developer.apple.com/documentation/foundation/nslocale/isolanguagecodes)

# isoLanguageCodes (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of known language codes.

## Declaration

```swift
class var isoLanguageCodes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

A language code is a short string that represent a particular language. All languages have a three-character ISO 639-2 string, while some languages also have a two-character ISO 639-1 string. See [ISO 639.2 Codes for the Representation of Names of Languages](http://www.loc.gov/standards/iso639-2/php/English_list.php) for the complete list of standardized language codes.

The array provided by this property contains a list of codes for all the languages the system knows about, designated by the ISO 639-1 code if available, or the ISO 639-2 code if not. Use the method [localizedString(forLanguageCode:)](localizedstring%28forlanguagecode_%29.md) to obtain a human readable string for any of the codes in the list.

For more information about language localization in your app, see [Language and Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15).

Not all language codes have supporting locale data in the system.

## See Also

### Getting Known Identifiers and Codes

- [availableLocaleIdentifiers](availablelocaleidentifiers.md): The list of locale identifiers available on the system.
- [isoCountryCodes](isocountrycodes.md): The list of known country or region codes.
- [isoCurrencyCodes](isocurrencycodes.md): The list of known currency codes.
- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.

# ISOLanguageCodes (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The list of known language codes.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * ISOLanguageCodes;
```

<a id="Discussion"></a>

## Discussion

A language code is a short string that represent a particular language. All languages have a three-character ISO 639-2 string, while some languages also have a two-character ISO 639-1 string. See [ISO 639.2 Codes for the Representation of Names of Languages](http://www.loc.gov/standards/iso639-2/php/English_list.php) for the complete list of standardized language codes.

The array provided by this property contains a list of codes for all the languages the system knows about, designated by the ISO 639-1 code if available, or the ISO 639-2 code if not. Use the method [localizedStringForLanguageCode:](localizedstring%28forlanguagecode_%29.md) to obtain a human readable string for any of the codes in the list.

For more information about language localization in your app, see [Language and Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15).

Not all language codes have supporting locale data in the system.

## See Also

### Getting Known Identifiers and Codes

- [availableLocaleIdentifiers](availablelocaleidentifiers.md): The list of locale identifiers available on the system.
- [ISOCountryCodes](isocountrycodes.md): The list of known country or region codes.
- [ISOCurrencyCodes](isocurrencycodes.md): The list of known currency codes.
- [commonISOCurrencyCodes](commonisocurrencycodes.md): A list of commonly encountered currency codes.
