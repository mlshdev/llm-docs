> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/core-text-functions](https://developer.apple.com/documentation/coretext/core-text-functions)

# Core Text Functions (Swift)

**Framework:** Core Text  
**Kind:** API Collection

## Topics

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
- [CTFontManagerSetAutoActivationSetting(\_:\_:)](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerUnregisterFontsForURL(\_:\_:\_:)](ctfontmanagerunregisterfontsforurl%28______%29.md): Unregisters fonts from the specified font URL with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.
- [CTFontManagerUnregisterFontsForURLs(\_:\_:\_:)](ctfontmanagerunregisterfontsforurls%28______%29.md): Deprecated. Unregisters fonts from the specified array of font URLs with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.
- [CTFontManagerUnregisterGraphicsFont(\_:\_:)](ctfontmanagerunregistergraphicsfont%28____%29.md): Deprecated. Unregisters the specified graphics font with the font manager.
- [CTFontManagerCopyRegisteredFontDescriptors(\_:\_:)](ctfontmanagercopyregisteredfontdescriptors%28____%29.md): Retrieves the font descriptors that were registered with the font manager.
- [CTFontManagerCreateFontDescriptorsFromData(\_:)](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md): Creates an array of font descriptors for the fonts in the supplied data.
- [CTFontManagerRegisterFontDescriptors(\_:\_:\_:\_:)](ctfontmanagerregisterfontdescriptors%28________%29.md): Registers font descriptors with the font manager.
- [CTFontManagerRegisterFontURLs(\_:\_:\_:\_:)](ctfontmanagerregisterfonturls%28________%29.md): Registers fonts from the specified font URLs with the font manager.
- [CTFontManagerRegisterFontsWithAssetNames(\_:\_:\_:\_:\_:)](ctfontmanagerregisterfontswithassetnames%28__________%29.md): Registers named font assets in the specified bundle with the font manager.
- [CTFontManagerRequestFonts(\_:\_:)](ctfontmanagerrequestfonts%28____%29.md): Resolves font descriptors specified on input.
- [CTFontManagerUnregisterFontDescriptors(\_:\_:\_:)](ctfontmanagerunregisterfontdescriptors%28______%29.md): Unregisters font descriptors with the font manager.
- [CTFontManagerUnregisterFontURLs(\_:\_:\_:)](ctfontmanagerunregisterfonturls%28______%29.md): Unregisters fonts from the specified font URLs with the font manager.
- [CTGetCoreTextVersion()](ctgetcoretextversion%28%29.md): Deprecated. Returns the version of the Core Text framework.
- [CTRubyAnnotationCreate(\_:\_:\_:\_:)](ctrubyannotationcreate%28________%29.md): Creates an immutable ruby annotation object.
- [CTRubyAnnotationCreateCopy(\_:)](ctrubyannotationcreatecopy%28__%29.md): Creates an immutable copy of a ruby annotation object.
- [CTRubyAnnotationCreateWithAttributes(\_:\_:\_:\_:\_:)](ctrubyannotationcreatewithattributes%28__________%29.md): Creates an immutable ruby annotation object with the specified attributes.
- [CTRubyAnnotationGetAlignment(\_:)](ctrubyannotationgetalignment%28__%29.md): Retrieves the alignment value of a ruby annotation object.
- [CTRubyAnnotationGetOverhang(\_:)](ctrubyannotationgetoverhang%28__%29.md): Retrieves the overhang value of a ruby annotation object.
- [CTRubyAnnotationGetSizeFactor(\_:)](ctrubyannotationgetsizefactor%28__%29.md): Retrieves the size factor of a ruby annotation object.
- [CTRubyAnnotationGetTextForPosition(\_:\_:)](ctrubyannotationgettextforposition%28____%29.md): Retrieves the ruby text for a particular position in a ruby annotation.
- [CTRubyAnnotationGetTypeID()](ctrubyannotationgettypeid%28%29.md): Retrieves the type of the ruby annotation object.
- [CTFontCopyNameForGlyph(\_:\_:)](ctfontcopynameforglyph%28____%29.md): Retrieves the name for the specified glyph.
- [CTFontDrawImageFromAdaptiveImageProviderAtPoint(\_:\_:\_:\_:)](ctfontdrawimagefromadaptiveimageprovideratpoint%28________%29.md)
- [CTFontGetTypographicBoundsForAdaptiveImageProvider(\_:\_:)](ctfontgettypographicboundsforadaptiveimageprovider%28____%29.md)
- [CTFontHasTable(\_:\_:)](ctfonthastable%28____%29.md)

## See Also

### Reference

- [Styling Attributed Strings](styling-attributed-strings.md): Attributes to which Core Text responds when placed in a `CFAttributedString` object.
- [Core Text Structures](core-text-structures.md)
- [Core Text Enumerations](core-text-enumerations.md)
- [Core Text Constants](core-text-constants.md)
- [Core Text Data Types](core-text-data-types.md)
- [SFNT Support](sfnt-support.md)

# Core Text Functions (Objective-C)

**Framework:** Core Text  
**Kind:** API Collection

## Topics

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
- [CTFontManagerSetAutoActivationSetting](ctfontmanagersetautoactivationsetting%28____%29.md): Sets the auto-activation setting for the specified bundle identifier.
- [CTFontManagerUnregisterFontsForURL](ctfontmanagerunregisterfontsforurl%28______%29.md): Unregisters fonts from the specified font URL with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.
- [CTFontManagerUnregisterFontsForURLs](ctfontmanagerunregisterfontsforurls%28______%29.md): Deprecated. Unregisters fonts from the specified array of font URLs with the Font Manager. Unregistered fonts are no longer discoverable through font descriptor matching.
- [CTFontManagerUnregisterGraphicsFont](ctfontmanagerunregistergraphicsfont%28____%29.md): Deprecated. Unregisters the specified graphics font with the font manager.
- [CTFontManagerCopyRegisteredFontDescriptors](ctfontmanagercopyregisteredfontdescriptors%28____%29.md): Retrieves the font descriptors that were registered with the font manager.
- [CTFontManagerCreateFontDescriptorsFromData](ctfontmanagercreatefontdescriptorsfromdata%28__%29.md): Creates an array of font descriptors for the fonts in the supplied data.
- [CTFontManagerRegisterFontDescriptors](ctfontmanagerregisterfontdescriptors%28________%29.md): Registers font descriptors with the font manager.
- [CTFontManagerRegisterFontURLs](ctfontmanagerregisterfonturls%28________%29.md): Registers fonts from the specified font URLs with the font manager.
- [CTFontManagerRegisterFontsWithAssetNames](ctfontmanagerregisterfontswithassetnames%28__________%29.md): Registers named font assets in the specified bundle with the font manager.
- [CTFontManagerRequestFonts](ctfontmanagerrequestfonts%28____%29.md): Resolves font descriptors specified on input.
- [CTFontManagerUnregisterFontDescriptors](ctfontmanagerunregisterfontdescriptors%28______%29.md): Unregisters font descriptors with the font manager.
- [CTFontManagerUnregisterFontURLs](ctfontmanagerunregisterfonturls%28______%29.md): Unregisters fonts from the specified font URLs with the font manager.
- [CTGetCoreTextVersion](ctgetcoretextversion%28%29.md): Deprecated. Returns the version of the Core Text framework.
- [CTRubyAnnotationCreate](ctrubyannotationcreate%28________%29.md): Creates an immutable ruby annotation object.
- [CTRubyAnnotationCreateCopy](ctrubyannotationcreatecopy%28__%29.md): Creates an immutable copy of a ruby annotation object.
- [CTRubyAnnotationCreateWithAttributes](ctrubyannotationcreatewithattributes%28__________%29.md): Creates an immutable ruby annotation object with the specified attributes.
- [CTRubyAnnotationGetAlignment](ctrubyannotationgetalignment%28__%29.md): Retrieves the alignment value of a ruby annotation object.
- [CTRubyAnnotationGetOverhang](ctrubyannotationgetoverhang%28__%29.md): Retrieves the overhang value of a ruby annotation object.
- [CTRubyAnnotationGetSizeFactor](ctrubyannotationgetsizefactor%28__%29.md): Retrieves the size factor of a ruby annotation object.
- [CTRubyAnnotationGetTextForPosition](ctrubyannotationgettextforposition%28____%29.md): Retrieves the ruby text for a particular position in a ruby annotation.
- [CTRubyAnnotationGetTypeID](ctrubyannotationgettypeid%28%29.md): Retrieves the type of the ruby annotation object.
- [CTFontCopyNameForGlyph](ctfontcopynameforglyph%28____%29.md): Retrieves the name for the specified glyph.
- [CTFontDrawImageFromAdaptiveImageProviderAtPoint](ctfontdrawimagefromadaptiveimageprovideratpoint%28________%29.md)
- [CTFontGetTypographicBoundsForAdaptiveImageProvider](ctfontgettypographicboundsforadaptiveimageprovider%28____%29.md)
- [CTFontHasTable](ctfonthastable%28____%29.md)

## See Also

### Reference

- [Styling Attributed Strings](styling-attributed-strings.md): Attributes to which Core Text responds when placed in a `CFAttributedString` object.
- [Core Text Structures](core-text-structures.md)
- [Core Text Enumerations](core-text-enumerations.md)
- [Core Text Constants](core-text-constants.md)
- [Core Text Data Types](core-text-data-types.md)
- [SFNT Support](sfnt-support.md)
