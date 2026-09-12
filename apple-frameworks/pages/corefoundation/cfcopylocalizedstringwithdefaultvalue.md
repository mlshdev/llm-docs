> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcopylocalizedstringwithdefaultvalue](https://developer.apple.com/documentation/corefoundation/cfcopylocalizedstringwithdefaultvalue)

# CFCopyLocalizedStringWithDefaultValue

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a localized version of a localization string.

## Declaration

```objectivec
#define CFCopyLocalizedStringWithDefaultValue(key, tbl, bundle, value, comment)
```

## Parameters

- `key`: The development language version of the string. This string is used as the search key to locate the localized version of the string.
- `tbl`: The name of the strings file to search. The name should not include the `strings` filename extension.
- `bundle`: The bundle to examine.
- `value`: The default value for the requested localization string.
- `comment`: A comment to provide the translators with contextual information necessary for proper translation.

<a id="return-value"></a>

## Return Value

The localized version of the requested string. If no value corresponding to `key` is found, returns `value`, unless `value` is `NULL` or an empty string, in which case `key` is returned instead. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This is a macro variant of [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md) for use with the `genstrings` tool.

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyLocalizationsForURL](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFBundleCopyPreferredLocalizationsFromArray](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.
- [CFCopyLocalizedString](cfcopylocalizedstring.md): Searches the default strings file `Localizable.strings` for the string associated with the specified key.
- [CFCopyLocalizedStringFromTable](cfcopylocalizedstringfromtable.md): Searches the specified strings file for the string associated with the specified key.
- [CFCopyLocalizedStringFromTableInBundle](cfcopylocalizedstringfromtableinbundle.md): Returns a localized version of the specified string.
