> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/developmentlocalization](https://developer.apple.com/documentation/foundation/bundle/developmentlocalization)

# developmentLocalization (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The localization for the development language.

## Declaration

```swift
var developmentLocalization: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the value in the `CFBundleDevelopmentRegion` key of the bundle’s property list (`Info.plist`).

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizations(from:)](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizations(from:forPreferences:)](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

# developmentLocalization (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The localization for the development language.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * developmentLocalization;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the value in the `CFBundleDevelopmentRegion` key of the bundle’s property list (`Info.plist`).

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizationsFromArray:](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
- [preferredLocalizationsFromArray:forPreferences:](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.
