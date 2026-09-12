> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopylocalizationsforpreferences(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopylocalizationsforpreferences(_:_:))

# CFBundleCopyLocalizationsForPreferences(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.

## Declaration

```swift
func CFBundleCopyLocalizationsForPreferences(_ locArray: CFArray!, _ prefArray: CFArray!) -> CFArray!
```

## Parameters

- `locArray`: An array of possible localizations to search.
- `prefArray`: An array of preferred localizations. If `NULL`, the user’s actual preferred localizations will be used.

<a id="return-value"></a>

## Return Value

An array containing the localizations that CFBundle would use. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This is not the same as [CFBundleCopyPreferredLocalizationsFromArray(\_:)](cfbundlecopypreferredlocalizationsfromarray%28__%29.md), because that function takes the current application context into account. To determine the localizations that another application would use, apply this function to the result of [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md).

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString(\_:\_:\_:\_:)](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForURL(\_:)](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFBundleCopyPreferredLocalizationsFromArray(\_:)](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.

# CFBundleCopyLocalizationsForPreferences (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.

## Declaration

```objectivec
extern CFArrayRefCFBundleCopyLocalizationsForPreferences(CFArrayRef locArray, CFArrayRef prefArray);
```

## Parameters

- `locArray`: An array of possible localizations to search.
- `prefArray`: An array of preferred localizations. If `NULL`, the user’s actual preferred localizations will be used.

<a id="return-value"></a>

## Return Value

An array containing the localizations that CFBundle would use. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This is not the same as [CFBundleCopyPreferredLocalizationsFromArray](cfbundlecopypreferredlocalizationsfromarray%28__%29.md), because that function takes the current application context into account. To determine the localizations that another application would use, apply this function to the result of [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md).

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForURL](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFBundleCopyPreferredLocalizationsFromArray](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.
- [CFCopyLocalizedString](cfcopylocalizedstring.md): Searches the default strings file `Localizable.strings` for the string associated with the specified key.
- [CFCopyLocalizedStringFromTable](cfcopylocalizedstringfromtable.md): Searches the specified strings file for the string associated with the specified key.
- [CFCopyLocalizedStringFromTableInBundle](cfcopylocalizedstringfromtableinbundle.md): Returns a localized version of the specified string.
- [CFCopyLocalizedStringWithDefaultValue](cfcopylocalizedstringwithdefaultvalue.md): Returns a localized version of a localization string.
