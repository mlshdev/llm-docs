> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerregisterfontdescriptors(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontmanagerregisterfontdescriptors(_:_:_:_:))

# CTFontManagerRegisterFontDescriptors(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Registers font descriptors with the font manager.

## Declaration

```swift
func CTFontManagerRegisterFontDescriptors(_ fontDescriptors: CFArray, _ scope: CTFontManagerScope, _ enabled: Bool, _ registrationHandler: ((CFArray, Bool) -> Bool)?)
```

## Parameters

- `fontDescriptors`: An array of font descriptors to register. The font descriptor keys for registration are [kCTFontURLAttribute](kctfonturlattribute.md), [kCTFontNameAttribute](kctfontnameattribute.md), [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md), or [kCTFontRegistrationUserInfoAttribute](kctfontregistrationuserinfoattribute.md).
- `scope`: A scope constant that defines the availability and lifetime of the registration. If you specify [CTFontManagerScope.persistent](ctfontmanagerscope/persistent.md) when you register fonts on iOS, those fonts aren’t automatically available to other processes. Other processes can call [CTFontManagerRequestFonts(\_:\_:)](ctfontmanagerrequestfonts%28____%29.md) to get access to those fonts. See [CTFontManagerScope](ctfontmanagerscope.md) for more details.
- `enabled`: A Boolean value that indicates whether the font descriptors should be enabled for font descriptor matching and discoverable though [CTFontManagerRequestFonts(\_:\_:)](ctfontmanagerrequestfonts%28____%29.md).
- `registrationHandler`: A block called as errors arise or upon completion.

  The block’s `errors` parameter contains an array of [CFError](../corefoundation/cferror.md) references; an empty array indicates no errors. Each error reference contains a [CFArray](../corefoundation/cfarray.md) of font descriptors corresponding to [kCTFontManagerErrorFontDescriptorsKey](kctfontmanagererrorfontdescriptorskey.md). These represent the font descriptors causing the error and failing to register successfully.

  This block may be called multiple times during the registration process. The `done` parameter becomes [true](https://developer.apple.com/documentation/swift/true) when the registration process completes. Return [false](https://developer.apple.com/documentation/swift/false) from the block to stop the registration operation, like after receiving an error.

<a id="Discussion"></a>

## Discussion

Registered fonts are discoverable through font descriptor matching in the calling process.

Fonts descriptors registered in a disabled state (the `enabled` parameter set to [false](https://developer.apple.com/documentation/swift/false)) aren’t immediately available for descriptor matching, but the font manager knows the descriptors can be made available if necessary. You can enable these descriptors by calling this function again with the `enabled` parameter set to [true](https://developer.apple.com/documentation/swift/true). This operation may fail if there’s another registered and enabled font with the same PostScript name.

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

# CTFontManagerRegisterFontDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Registers font descriptors with the font manager.

## Declaration

```objectivec
extern void CTFontManagerRegisterFontDescriptors(CFArrayRef fontDescriptors, CTFontManagerScope scope, bool enabled, bool (^registrationHandler)(CFArrayRef errors, bool done));
```

## Parameters

- `fontDescriptors`: An array of font descriptors to register. The font descriptor keys for registration are [kCTFontURLAttribute](kctfonturlattribute.md), [kCTFontNameAttribute](kctfontnameattribute.md), [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md), or [kCTFontRegistrationUserInfoAttribute](kctfontregistrationuserinfoattribute.md).
- `scope`: A scope constant that defines the availability and lifetime of the registration. If you specify [kCTFontManagerScopePersistent](ctfontmanagerscope/persistent.md) when you register fonts on iOS, those fonts aren’t automatically available to other processes. Other processes can call [CTFontManagerRequestFonts](ctfontmanagerrequestfonts%28____%29.md) to get access to those fonts. See [CTFontManagerScope](ctfontmanagerscope.md) for more details.
- `enabled`: A Boolean value that indicates whether the font descriptors should be enabled for font descriptor matching and discoverable though [CTFontManagerRequestFonts](ctfontmanagerrequestfonts%28____%29.md).
- `registrationHandler`: A block called as errors arise or upon completion.

  The block’s `errors` parameter contains an array of [CFErrorRef](../corefoundation/cferror.md) references; an empty array indicates no errors. Each error reference contains a [CFArrayRef](../corefoundation/cfarray.md) of font descriptors corresponding to [kCTFontManagerErrorFontDescriptorsKey](kctfontmanagererrorfontdescriptorskey.md). These represent the font descriptors causing the error and failing to register successfully.

  This block may be called multiple times during the registration process. The `done` parameter becomes [true](https://developer.apple.com/documentation/swift/true) when the registration process completes. Return [false](https://developer.apple.com/documentation/swift/false) from the block to stop the registration operation, like after receiving an error.

<a id="Discussion"></a>

## Discussion

Registered fonts are discoverable through font descriptor matching in the calling process.

Fonts descriptors registered in a disabled state (the `enabled` parameter set to [false](https://developer.apple.com/documentation/swift/false)) aren’t immediately available for descriptor matching, but the font manager knows the descriptors can be made available if necessary. You can enable these descriptors by calling this function again with the `enabled` parameter set to [true](https://developer.apple.com/documentation/swift/true). This operation may fail if there’s another registered and enabled font with the same PostScript name.

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
