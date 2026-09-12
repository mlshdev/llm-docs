> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerissupportedfont(_:)](https://developer.apple.com/documentation/coretext/ctfontmanagerissupportedfont(_:))

# CTFontManagerIsSupportedFont(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.6+

Determines whether a file is in a supported font format.

## Declaration

```swift
func CTFontManagerIsSupportedFont(_ fontURL: CFURL) -> Bool
```

## Parameters

- `fontURL`: A file URL.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is in a supported font format; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This function doesn’t validate any font data, so you must handle registration or font descriptor creation failures yourself.

## See Also

### Functions

- [CTFontDescriptorMatchFontDescriptorsWithProgressHandler(\_:\_:\_:)](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md): Matches font descriptors and tracks progress with a progress handler.
- [CTFontManagerCompareFontFamilyNames(\_:\_:\_:)](ctfontmanagercomparefontfamilynames%28______%29.md): A comparator function to compare font family names and sort them according to Apple guidelines.
- [CTFontManagerCopyAvailableFontFamilyNames()](ctfontmanagercopyavailablefontfamilynames%28%29.md): Returns an array of visible font family names sorted for user interface display.
- [CTFontManagerCopyAvailableFontURLs()](ctfontmanagercopyavailablefonturls%28%29.md): Returns an array of font URLs.
- [CTFontManagerCopyAvailablePostScriptNames()](ctfontmanagercopyavailablepostscriptnames%28%29.md): Returns an array of unique PostScript font names for the fonts.
- [CTFontManagerCreateFontDescriptorFromData(\_:)](ctfontmanagercreatefontdescriptorfromdata%28__%29.md): Creates a font descriptor representing the font in the supplied data.
- [CTFontManagerCreateFontDescriptorsFromURL(\_:)](ctfontmanagercreatefontdescriptorsfromurl%28__%29.md): Returns an array of font descriptors representing each of the fonts in the specified URL.
- [CTFontManagerCreateFontRequestRunLoopSource(\_:\_:)](ctfontmanagercreatefontrequestrunloopsource%28____%29.md): Deprecated. Creates a reference to a run loop source used to convey font requests from the Font Manager.
- [CTFontManagerEnableFontDescriptors(\_:\_:)](ctfontmanagerenablefontdescriptors%28____%29.md): Enables or disables the matching font descriptors for font descriptor matching.
- [CTFontManagerGetAutoActivationSetting(\_:)](ctfontmanagergetautoactivationsetting%28__%29.md): Gets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerGetScopeForURL(\_:)](ctfontmanagergetscopeforurl%28__%29.md): Returns the registration scope of the specified URL.
- [CTFontManagerRegisterFontsForURL(\_:\_:\_:)](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs(\_:\_:\_:)](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont(\_:\_:)](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.
- [CTFontManagerSetAutoActivationSetting(\_:\_:)](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.

# CTFontManagerIsSupportedFont (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.6+

Determines whether a file is in a supported font format.

## Declaration

```objectivec
extern bool CTFontManagerIsSupportedFont(CFURLRef fontURL);
```

## Parameters

- `fontURL`: A file URL.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is in a supported font format; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This function doesn’t validate any font data, so you must handle registration or font descriptor creation failures yourself.

## See Also

### Functions

- [CTFontDescriptorMatchFontDescriptorsWithProgressHandler](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md): Matches font descriptors and tracks progress with a progress handler.
- [CTFontManagerCompareFontFamilyNames](ctfontmanagercomparefontfamilynames%28______%29.md): A comparator function to compare font family names and sort them according to Apple guidelines.
- [CTFontManagerCopyAvailableFontFamilyNames](ctfontmanagercopyavailablefontfamilynames%28%29.md): Returns an array of visible font family names sorted for user interface display.
- [CTFontManagerCopyAvailableFontURLs](ctfontmanagercopyavailablefonturls%28%29.md): Returns an array of font URLs.
- [CTFontManagerCopyAvailablePostScriptNames](ctfontmanagercopyavailablepostscriptnames%28%29.md): Returns an array of unique PostScript font names for the fonts.
- [CTFontManagerCreateFontDescriptorFromData](ctfontmanagercreatefontdescriptorfromdata%28__%29.md): Creates a font descriptor representing the font in the supplied data.
- [CTFontManagerCreateFontDescriptorsFromURL](ctfontmanagercreatefontdescriptorsfromurl%28__%29.md): Returns an array of font descriptors representing each of the fonts in the specified URL.
- [CTFontManagerCreateFontRequestRunLoopSource](ctfontmanagercreatefontrequestrunloopsource%28____%29.md): Deprecated. Creates a reference to a run loop source used to convey font requests from the Font Manager.
- [CTFontManagerEnableFontDescriptors](ctfontmanagerenablefontdescriptors%28____%29.md): Enables or disables the matching font descriptors for font descriptor matching.
- [CTFontManagerGetAutoActivationSetting](ctfontmanagergetautoactivationsetting%28__%29.md): Gets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerGetScopeForURL](ctfontmanagergetscopeforurl%28__%29.md): Returns the registration scope of the specified URL.
- [CTFontManagerRegisterFontsForURL](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.
- [CTFontManagerSetAutoActivationSetting](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.
