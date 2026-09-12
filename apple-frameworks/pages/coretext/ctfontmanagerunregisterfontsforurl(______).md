> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerunregisterfontsforurl(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontmanagerunregisterfontsforurl(_:_:_:))

# CTFontManagerUnregisterFontsForURL(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters fonts from the specified font URL with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.

## Declaration

```swift
func CTFontManagerUnregisterFontsForURL(_ fontURL: CFURL, _ scope: CTFontManagerScope, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `fontURL`: The font URL.
- `scope`: Scope constant defining the availability and lifetime of the registration. See [CTFontManagerScope](ctfontmanagerscope.md) for values to pass for this parameter.
- `error`: Pointer to a CFError object which, in case of failed registration, contains error information.

<a id="return-value"></a>

## Return Value

Returns `true` if unregistration of the fonts was successful, otherwise `false`.

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
- [CTFontManagerIsSupportedFont(\_:)](ctfontmanagerissupportedfont%28__%29.md): Determines whether a file is in a supported font format.
- [CTFontManagerRegisterFontsForURL(\_:\_:\_:)](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs(\_:\_:\_:)](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont(\_:\_:)](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.

# CTFontManagerUnregisterFontsForURL (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters fonts from the specified font URL with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.

## Declaration

```objectivec
extern bool CTFontManagerUnregisterFontsForURL(CFURLRef fontURL, CTFontManagerScope scope, CFErrorRef*error);
```

## Parameters

- `fontURL`: The font URL.
- `scope`: Scope constant defining the availability and lifetime of the registration. See [CTFontManagerScope](ctfontmanagerscope.md) for values to pass for this parameter.
- `error`: Pointer to a CFError object which, in case of failed registration, contains error information.

<a id="return-value"></a>

## Return Value

Returns `true` if unregistration of the fonts was successful, otherwise `false`.

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
- [CTFontManagerIsSupportedFont](ctfontmanagerissupportedfont%28__%29.md): Determines whether a file is in a supported font format.
- [CTFontManagerRegisterFontsForURL](ctfontmanagerregisterfontsforurl%28______%29.md): Registers fonts from the specified font URL with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterFontsForURLs](ctfontmanagerregisterfontsforurls%28______%29.md): Deprecated. Registers fonts from the specified array of font URLs with the Font Manager. Registered fonts are discoverable through font descriptor matching.
- [CTFontManagerRegisterGraphicsFont](ctfontmanagerregistergraphicsfont%28____%29.md): Deprecated. Registers the specified graphics font with the font manager.
