> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopylocalizationsforurl(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopylocalizationsforurl(_:))

# CFBundleCopyLocalizationsForURL(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the localizations for a bundle or executable at a particular location.

## Declaration

```swift
func CFBundleCopyLocalizationsForURL(_ url: CFURL!) -> CFArray!
```

## Parameters

- `url`: The location of a bundle’s localizations.

<a id="return-value"></a>

## Return Value

An array containing the localizations available at `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

For a directory URL, this is equivalent to calling the [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md) function on the corresponding bundle. For a plain file URL representing an unbundled application, this will attempt to determine its localizations using the [kCFBundleLocalizationsKey](kcfbundlelocalizationskey.md) and [kCFBundleDevelopmentRegionKey](kcfbundledevelopmentregionkey.md) keys in the dictionary returned by [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md), or a `vers` resource if those are not present.

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString(\_:\_:\_:\_:)](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences(\_:\_:)](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyPreferredLocalizationsFromArray(\_:)](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.

# CFBundleCopyLocalizationsForURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the localizations for a bundle or executable at a particular location.

## Declaration

```objectivec
extern CFArrayRefCFBundleCopyLocalizationsForURL(CFURLRef url);
```

## Parameters

- `url`: The location of a bundle’s localizations.

<a id="return-value"></a>

## Return Value

An array containing the localizations available at `url`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

For a directory URL, this is equivalent to calling the [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md) function on the corresponding bundle. For a plain file URL representing an unbundled application, this will attempt to determine its localizations using the [kCFBundleLocalizationsKey](kcfbundlelocalizationskey.md) and [kCFBundleDevelopmentRegionKey](kcfbundledevelopmentregionkey.md) keys in the dictionary returned by [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md), or a `vers` resource if those are not present.

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyPreferredLocalizationsFromArray](cfbundlecopypreferredlocalizationsfromarray%28__%29.md): Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.
- [CFCopyLocalizedString](cfcopylocalizedstring.md): Searches the default strings file `Localizable.strings` for the string associated with the specified key.
- [CFCopyLocalizedStringFromTable](cfcopylocalizedstringfromtable.md): Searches the specified strings file for the string associated with the specified key.
- [CFCopyLocalizedStringFromTableInBundle](cfcopylocalizedstringfromtableinbundle.md): Returns a localized version of the specified string.
- [CFCopyLocalizedStringWithDefaultValue](cfcopylocalizedstringwithdefaultvalue.md): Returns a localized version of a localization string.
