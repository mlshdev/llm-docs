> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopypreferredlocalizationsfromarray(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopypreferredlocalizationsfromarray(_:))

# CFBundleCopyPreferredLocalizationsFromArray(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.

## Declaration

```swift
func CFBundleCopyPreferredLocalizationsFromArray(_ locArray: CFArray!) -> CFArray!
```

## Parameters

- `locArray`: An array of possible localizations.

<a id="return-value"></a>

## Return Value

A subset of `locArray` that CFBundle would use in the current application context. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can obtain `locArray` using the [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md) function.

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations(\_:)](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString(\_:\_:\_:\_:)](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences(\_:\_:)](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyLocalizationsForURL(\_:)](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.

# CFBundleCopyPreferredLocalizationsFromArray (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Given an array of possible localizations, returns the one or more of them that CFBundle would use in the current application context.

## Declaration

```objectivec
extern CFArrayRefCFBundleCopyPreferredLocalizationsFromArray(CFArrayRef locArray);
```

## Parameters

- `locArray`: An array of possible localizations.

<a id="return-value"></a>

## Return Value

A subset of `locArray` that CFBundle would use in the current application context. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can obtain `locArray` using the [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md) function.

## See Also

### Managing Localizations

- [CFBundleCopyBundleLocalizations](cfbundlecopybundlelocalizations%28__%29.md): Returns an array containing a bundle’s localizations.
- [CFBundleCopyLocalizedString](cfbundlecopylocalizedstring%28________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleCopyLocalizationsForPreferences](cfbundlecopylocalizationsforpreferences%28____%29.md): Given an array of possible localizations and preferred locations, returns the one or more of them that CFBundle would use, without reference to the current application context.
- [CFBundleCopyLocalizationsForURL](cfbundlecopylocalizationsforurl%28__%29.md): Returns an array containing the localizations for a bundle or executable at a particular location.
- [CFCopyLocalizedString](cfcopylocalizedstring.md): Searches the default strings file `Localizable.strings` for the string associated with the specified key.
- [CFCopyLocalizedStringFromTable](cfcopylocalizedstringfromtable.md): Searches the specified strings file for the string associated with the specified key.
- [CFCopyLocalizedStringFromTableInBundle](cfcopylocalizedstringfromtableinbundle.md): Returns a localized version of the specified string.
- [CFCopyLocalizedStringWithDefaultValue](cfcopylocalizedstringwithdefaultvalue.md): Returns a localized version of a localization string.
