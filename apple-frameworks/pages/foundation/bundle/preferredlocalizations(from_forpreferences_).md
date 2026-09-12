> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/preferredlocalizations(from:forpreferences:)](https://developer.apple.com/documentation/foundation/bundle/preferredlocalizations(from:forpreferences:))

# preferredLocalizations(from:forPreferences:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

## Declaration

```swift
class func preferredLocalizations(from localizationsArray: [String], forPreferences preferencesArray: [String]?) -> [String]
```

## Parameters

- `localizationsArray`: An array of identifiers, each corresponding to a localization that a bundle can support.
- `preferencesArray`: An array of BCP 47 language codes corresponding to a user’s preferred languages.

  If this parameter is `nil`, the method uses the current user’s language preferences.

<a id="return-value"></a>

## Return Value

An array of locale identifiers, ordered according to user preference.  If none of the user-preferred localizations are available, this method returns one of the values in `localizationsArray`.

<a id="Discussion"></a>

## Discussion

This method returns only the locale identifiers for which a bundle would  provide localized content. Typically, this means one of the following:

- A single localization that isn’t region-specific
- A region-specific localization, followed by a corresponding localization that isn’t region-specific, as a fallback

This method doesn’t return all localizations in order of user preference. To get this information, you can call this method repeatedly, each time removing the identifiers returned by the previous call.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizations(from:)](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.

# preferredLocalizationsFromArray:forPreferences: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns locale identifiers for which a bundle would provide localized content, given a specified list of candidates for a user’s language preferences.

## Declaration

```objectivec
+ (NSArray<NSString *> *) preferredLocalizationsFromArray:(NSArray<NSString *> *) localizationsArray forPreferences:(NSArray<NSString *> *) preferencesArray;
```

## Parameters

- `localizationsArray`: An array of identifiers, each corresponding to a localization that a bundle can support.
- `preferencesArray`: An array of BCP 47 language codes corresponding to a user’s preferred languages.

  If this parameter is `nil`, the method uses the current user’s language preferences.

<a id="return-value"></a>

## Return Value

An array of locale identifiers, ordered according to user preference.  If none of the user-preferred localizations are available, this method returns one of the values in `localizationsArray`.

<a id="Discussion"></a>

## Discussion

This method returns only the locale identifiers for which a bundle would  provide localized content. Typically, this means one of the following:

- A single localization that isn’t region-specific
- A region-specific localization, followed by a corresponding localization that isn’t region-specific, as a fallback

This method doesn’t return all localizations in order of user preference. To get this information, you can call this method repeatedly, each time removing the identifiers returned by the previous call.

## See Also

### Getting localization information

- [localizations](localizations.md): A list of all the localizations contained in the bundle.
- [preferredLocalizations](preferredlocalizations.md): An ordered list of preferred localizations contained in the bundle.
- [developmentLocalization](developmentlocalization.md): The localization for the development language.
- [localizedInfoDictionary](localizedinfodictionary.md): A dictionary with the keys from the bundle’s localized property list.
- [preferredLocalizationsFromArray:](preferredlocalizations%28from_%29.md): Returns one or more localizations from the specified list that a bundle object would use to locate resources for the current user.
