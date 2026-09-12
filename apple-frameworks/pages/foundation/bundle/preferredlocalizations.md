> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/preferredlocalizations](https://developer.apple.com/documentation/foundation/bundle/preferredlocalizations)

# preferredLocalizations (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An ordered list of preferred localizations contained in the bundle.

## Declaration

```swift
var preferredLocalizations: [String] { get }
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../nsstring.md) objects containing language IDs for localizations in the bundle. The strings are ordered according to the user’s language preferences and available localizations.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizations(from:)](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizations(from:forPreferences:)](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

# preferredLocalizations (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An ordered list of preferred localizations contained in the bundle.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * preferredLocalizations;
```

<a id="Discussion"></a>

## Discussion

An array of [NSString](../nsstring.md) objects containing language IDs for localizations in the bundle. The strings are ordered according to the user’s language preferences and available localizations.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizationsFromArray:](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizationsFromArray:forPreferences:](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.
