> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagercreatefontdescriptorfromdata(_:)](https://developer.apple.com/documentation/coretext/ctfontmanagercreatefontdescriptorfromdata(_:))

# CTFontManagerCreateFontDescriptorFromData(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a font descriptor representing the font in the supplied data.

## Declaration

```swift
func CTFontManagerCreateFontDescriptorFromData(_ data: CFData) -> CTFontDescriptor?
```

## Parameters

- `data`: The font data.

<a id="return-value"></a>

## Return Value

A font descriptor created from the data or `NULL` if it is not a valid font.

<a id="Discussion"></a>

## Discussion

If the data contains a font collection (TTC or OTC), only the first font in the collection will be returned. Use [CTFontManagerCreateFontDescriptorsFromData(\_:)](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md) in that case.

> **Note**

>  The font descriptor returned by this function is not available through font descriptor matching. As a result, you can’t directly look for the font by name with functions like [CTFontCreateWithName(\_:\_:\_:)](ctfontcreatewithname%28______%29.md). If you wish to make the font available for name matching, use [CTFontManagerRegisterFontURLs(\_:\_:\_:\_:)](ctfontmanagerregisterfonturls%28________%29.md) instead.

## See Also

### Related Documentation

- [CTFontManagerCreateFontDescriptorsFromData(\_:)](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md): Creates an array of font descriptors for the fonts in the supplied data.
- [CTFontManagerRegisterFontURLs(\_:\_:\_:\_:)](ctfontmanagerregisterfonturls%28________%29.md): Registers fonts from the specified font URLs with the font manager.

### Functions

- [CTFontDescriptorMatchFontDescriptorsWithProgressHandler(\_:\_:\_:)](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md): Matches font descriptors and tracks progress with a progress handler.
- [CTFontManagerCompareFontFamilyNames(\_:\_:\_:)](ctfontmanagercomparefontfamilynames%28______%29.md): A comparator function to compare font family names and sort them according to Apple guidelines.
- [CTFontManagerCopyAvailableFontFamilyNames()](ctfontmanagercopyavailablefontfamilynames%28%29.md): Returns an array of visible font family names sorted for user interface display.
- [CTFontManagerCopyAvailableFontURLs()](ctfontmanagercopyavailablefonturls%28%29.md): Returns an array of font URLs.
- [CTFontManagerCopyAvailablePostScriptNames()](ctfontmanagercopyavailablepostscriptnames%28%29.md): Returns an array of unique PostScript font names for the fonts.
- [CTFontManagerCreateFontDescriptorsFromURL(\_:)](ctfontmanagercreatefontdescriptorsfromurl%28__%29.md): Returns an array of font descriptors representing each of the fonts in the specified URL.
- [CTFontManagerCreateFontRequestRunLoopSource(\_:\_:)](ctfontmanagercreatefontrequestrunloopsource%28____%29.md): Deprecated. Creates a reference to a run loop source used to convey font requests from the Font Manager.
- [CTFontManagerEnableFontDescriptors(\_:\_:)](ctfontmanagerenablefontdescriptors%28____%29.md): Enables or disables the matching font descriptors for font descriptor matching.
- [CTFontManagerGetAutoActivationSetting(\_:)](ctfontmanagergetautoactivationsetting%28__%29.md): Gets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerGetScopeForURL(\_:)](ctfontmanagergetscopeforurl%28__%29.md): Returns the registration scope of the specified URL.
- [CTFontManagerIsSupportedFont(\_:)](ctfontmanagerissupportedfont%28__%29.md): Determines whether a file is in a supported font format.
- [CTFontManagerRegisterFontsForURL(\_:\_:\_:)](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs(\_:\_:\_:)](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont(\_:\_:)](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.
- [CTFontManagerSetAutoActivationSetting(\_:\_:)](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.

# CTFontManagerCreateFontDescriptorFromData (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a font descriptor representing the font in the supplied data.

## Declaration

```objectivec
extern CTFontDescriptorRefCTFontManagerCreateFontDescriptorFromData(CFDataRef data);
```

## Parameters

- `data`: The font data.

<a id="return-value"></a>

## Return Value

A font descriptor created from the data or `NULL` if it is not a valid font.

<a id="Discussion"></a>

## Discussion

If the data contains a font collection (TTC or OTC), only the first font in the collection will be returned. Use [CTFontManagerCreateFontDescriptorsFromData](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md) in that case.

> **Note**

>  The font descriptor returned by this function is not available through font descriptor matching. As a result, you can’t directly look for the font by name with functions like [CTFontCreateWithName](ctfontcreatewithname%28______%29.md). If you wish to make the font available for name matching, use [CTFontManagerRegisterFontURLs](ctfontmanagerregisterfonturls%28________%29.md) instead.

## See Also

### Related Documentation

- [CTFontManagerCreateFontDescriptorsFromData](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md): Creates an array of font descriptors for the fonts in the supplied data.
- [CTFontManagerRegisterFontURLs](ctfontmanagerregisterfonturls%28________%29.md): Registers fonts from the specified font URLs with the font manager.

### Functions

- [CTFontDescriptorMatchFontDescriptorsWithProgressHandler](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md): Matches font descriptors and tracks progress with a progress handler.
- [CTFontManagerCompareFontFamilyNames](ctfontmanagercomparefontfamilynames%28______%29.md): A comparator function to compare font family names and sort them according to Apple guidelines.
- [CTFontManagerCopyAvailableFontFamilyNames](ctfontmanagercopyavailablefontfamilynames%28%29.md): Returns an array of visible font family names sorted for user interface display.
- [CTFontManagerCopyAvailableFontURLs](ctfontmanagercopyavailablefonturls%28%29.md): Returns an array of font URLs.
- [CTFontManagerCopyAvailablePostScriptNames](ctfontmanagercopyavailablepostscriptnames%28%29.md): Returns an array of unique PostScript font names for the fonts.
- [CTFontManagerCreateFontDescriptorsFromURL](ctfontmanagercreatefontdescriptorsfromurl%28__%29.md): Returns an array of font descriptors representing each of the fonts in the specified URL.
- [CTFontManagerCreateFontRequestRunLoopSource](ctfontmanagercreatefontrequestrunloopsource%28____%29.md): Deprecated. Creates a reference to a run loop source used to convey font requests from the Font Manager.
- [CTFontManagerEnableFontDescriptors](ctfontmanagerenablefontdescriptors%28____%29.md): Enables or disables the matching font descriptors for font descriptor matching.
- [CTFontManagerGetAutoActivationSetting](ctfontmanagergetautoactivationsetting%28__%29.md): Gets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerGetScopeForURL](ctfontmanagergetscopeforurl%28__%29.md): Returns the registration scope of the specified URL.
- [CTFontManagerIsSupportedFont](ctfontmanagerissupportedfont%28__%29.md): Determines whether a file is in a supported font format.
- [CTFontManagerRegisterFontsForURL](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.
- [CTFontManagerSetAutoActivationSetting](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.
