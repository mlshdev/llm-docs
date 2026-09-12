> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/preferredlocalizations(from:)](https://developer.apple.com/documentation/foundation/bundle/preferredlocalizations(from:))

# preferredLocalizations(from:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.

## Declaration

```swift
class func preferredLocalizations(from localizationsArray: [String]) -> [String]
```

## Parameters

- `localizationsArray`: An array of `NSString` objects, each of which specifies the language ID for a localization that the bundle supports.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the preferred localizations. These strings are ordered in the array according to the user’s language preferences and are taken from the strings in the `localizationsArray` parameter.

<a id="Discussion"></a>

## Discussion

This method does not return all localizations in preference order but only those from which `NSBundle` would get localized content, typically either a single non-region-specific localization or a region-specific localization followed by a corresponding non-region-specific localization as a fallback.

However, clients who want all localizations in preference order can make repeated calls, each time taking the top localizations out of the list of localizations passed in.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizations(from:forPreferences:)](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

# preferredLocalizationsFromArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.

## Declaration

```objectivec
+ (NSArray<NSString *> *) preferredLocalizationsFromArray:(NSArray<NSString *> *) localizationsArray;
```

## Parameters

- `localizationsArray`: An array of `NSString` objects, each of which specifies the language ID for a localization that the bundle supports.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the preferred localizations. These strings are ordered in the array according to the user’s language preferences and are taken from the strings in the `localizationsArray` parameter.

<a id="Discussion"></a>

## Discussion

This method does not return all localizations in preference order but only those from which `NSBundle` would get localized content, typically either a single non-region-specific localization or a region-specific localization followed by a corresponding non-region-specific localization as a fallback.

However, clients who want all localizations in preference order can make repeated calls, each time taking the top localizations out of the list of localizations passed in.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizationsFromArray:forPreferences:](preferredlocalizations%28from_forpreferences_%29.md): Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.
