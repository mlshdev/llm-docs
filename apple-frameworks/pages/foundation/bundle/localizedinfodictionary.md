> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/localizedinfodictionary](https://developer.apple.com/documentation/foundation/bundle/localizedinfodictionary)

# localizedInfoDictionary (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the keys from the bundle’s localized property list.

## Declaration

```swift
var localizedInfoDictionary: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

This property uses the preferred localization for the current user when determining which resources to include. If the preferred localization is not available, this property chooses the most appropriate localization found in the bundle.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [preferredLocalizations(from:)](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizations(from:forPreferences:)](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

# localizedInfoDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the keys from the bundle’s localized property list.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * localizedInfoDictionary;
```

<a id="Discussion"></a>

## Discussion

This property uses the preferred localization for the current user when determining which resources to include. If the preferred localization is not available, this property chooses the most appropriate localization found in the bundle.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [preferredLocalizationsFromArray:](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizationsFromArray:forPreferences:](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.
