> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerrequestfonts(_:_:)](https://developer.apple.com/documentation/coretext/ctfontmanagerrequestfonts(_:_:))

# CTFontManagerRequestFonts(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves font descriptors specified on input.

## Declaration

```swift
func CTFontManagerRequestFonts(_ fontDescriptors: CFArray, _ completionHandler: @escaping (CFArray) -> Void)
```

## Parameters

- `fontDescriptors`: An array of font descriptors to make available to the process.  The keys for describing the fonts may be a combination of [kCTFontNameAttribute](kctfontnameattribute.md), [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md), or [kCTFontRegistrationUserInfoAttribute](kctfontregistrationuserinfoattribute.md).
- `completionHandler`: A block called after the request operation completes. This block takes a `unresolvedFontDescriptors` parameter that contains an array of descriptors that couldn’t be resolved or found. The array can be empty if all descriptors resolved.

<a id="Discussion"></a>

## Discussion

On iOS, fonts registered by font provider apps in the [CTFontManagerScope.persistent](ctfontmanagerscope/persistent.md) scope aren’t automatically available to other apps. Other apps must call this function to make the fonts available for font descriptor matching.

On iOS, if the font descriptors can’t be found, the system presents the user with a dialog that indicates which fonts couldn’t be resolved. The system may provide the user with a way to resolve the missing fonts, if the font manager has a way to enable them.

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

# CTFontManagerRequestFonts (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves font descriptors specified on input.

## Declaration

```objectivec
extern void CTFontManagerRequestFonts(CFArrayRef fontDescriptors, void (^completionHandler)(CFArrayRef unresolvedFontDescriptors));
```

## Parameters

- `fontDescriptors`: An array of font descriptors to make available to the process.  The keys for describing the fonts may be a combination of [kCTFontNameAttribute](kctfontnameattribute.md), [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md), or [kCTFontRegistrationUserInfoAttribute](kctfontregistrationuserinfoattribute.md).
- `completionHandler`: A block called after the request operation completes. This block takes a `unresolvedFontDescriptors` parameter that contains an array of descriptors that couldn’t be resolved or found. The array can be empty if all descriptors resolved.

<a id="Discussion"></a>

## Discussion

On iOS, fonts registered by font provider apps in the [kCTFontManagerScopePersistent](ctfontmanagerscope/persistent.md) scope aren’t automatically available to other apps. Other apps must call this function to make the fonts available for font descriptor matching.

On iOS, if the font descriptors can’t be found, the system presents the user with a dialog that indicates which fonts couldn’t be resolved. The system may provide the user with a way to resolve the missing fonts, if the font manager has a way to enable them.

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
