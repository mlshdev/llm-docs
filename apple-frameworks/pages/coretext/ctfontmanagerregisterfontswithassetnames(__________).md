> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagerregisterfontswithassetnames(_:_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontmanagerregisterfontswithassetnames(_:_:_:_:_:))

# CTFontManagerRegisterFontsWithAssetNames(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Registers named font assets in the specified bundle with the font manager.

## Declaration

```swift
func CTFontManagerRegisterFontsWithAssetNames(_ fontAssetNames: CFArray, _ bundle: CFBundle?, _ scope: CTFontManagerScope, _ enabled: Bool, _ registrationHandler: ((CFArray, Bool) -> Bool)?)
```

## Parameters

- `fontAssetNames`: An array of font name assets in the asset catalog.
- `bundle`: A bundle that contains the asset catalog. Passing `NULL` resolves to the main bundle.
- `scope`: A scope constant that defines the availability and lifetime of the registration. On iOS, the only supported scope is [CTFontManagerScope.persistent](ctfontmanagerscope/persistent.md), which means the fonts aren’t automatically available to other processes. Other processes can call [CTFontManagerRequestFonts(\_:\_:)](ctfontmanagerrequestfonts%28____%29.md) to get access to the fonts. See [CTFontManagerScope](ctfontmanagerscope.md) for more details.
- `enabled`: A Boolean value that indicates whether the font assets should be enabled for font descriptor matching and discoverable through [CTFontManagerRequestFonts(\_:\_:)](ctfontmanagerrequestfonts%28____%29.md).
- `registrationHandler`: A block called as errors arise or upon completion.

  The block’s `errors` parameter contains an array of [CFError](../corefoundation/cferror.md) references; an empty array indicates no errors. Each error reference contains a [CFArray](../corefoundation/cfarray.md) of font asset names corresponding to [kCTFontManagerErrorFontAssetNameKey](kctfontmanagererrorfontassetnamekey.md). These represent the font asset names causing the error and failing to register successfully.

  This block may be called multiple times during the registration process. The `done` parameter becomes [true](https://developer.apple.com/documentation/swift/true) when the registration process completes. Return [false](https://developer.apple.com/documentation/swift/false) from the block to stop the registration operation, like after receiving an error.

<a id="Discussion"></a>

## Discussion

Registered fonts are discoverable through font descriptor matching in the calling process.

Calling this function extracts the font assets from the asset catalog and registers them. You must make this call after the completion handler of either [beginAccessingResources(completionHandler:)](../foundation/nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md): or [conditionallyBeginAccessingResources(completionHandler:)](../foundation/nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md) is called successfully.

Name the assets using PostScript names for individual faces, or family names for variable or collection fonts. You can use the same names to unregister the fonts with [CTFontManagerUnregisterFontDescriptors(\_:\_:\_:)](ctfontmanagerunregisterfontdescriptors%28______%29.md).

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

# CTFontManagerRegisterFontsWithAssetNames (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Registers named font assets in the specified bundle with the font manager.

## Declaration

```objectivec
extern void CTFontManagerRegisterFontsWithAssetNames(CFArrayRef fontAssetNames, CFBundleRef bundle, CTFontManagerScope scope, bool enabled, bool (^registrationHandler)(CFArrayRef errors, bool done));
```

## Parameters

- `fontAssetNames`: An array of font name assets in the asset catalog.
- `bundle`: A bundle that contains the asset catalog. Passing `NULL` resolves to the main bundle.
- `scope`: A scope constant that defines the availability and lifetime of the registration. On iOS, the only supported scope is [kCTFontManagerScopePersistent](ctfontmanagerscope/persistent.md), which means the fonts aren’t automatically available to other processes. Other processes can call [CTFontManagerRequestFonts](ctfontmanagerrequestfonts%28____%29.md) to get access to the fonts. See [CTFontManagerScope](ctfontmanagerscope.md) for more details.
- `enabled`: A Boolean value that indicates whether the font assets should be enabled for font descriptor matching and discoverable through [CTFontManagerRequestFonts](ctfontmanagerrequestfonts%28____%29.md).
- `registrationHandler`: A block called as errors arise or upon completion.

  The block’s `errors` parameter contains an array of [CFErrorRef](../corefoundation/cferror.md) references; an empty array indicates no errors. Each error reference contains a [CFArrayRef](../corefoundation/cfarray.md) of font asset names corresponding to [kCTFontManagerErrorFontAssetNameKey](kctfontmanagererrorfontassetnamekey.md). These represent the font asset names causing the error and failing to register successfully.

  This block may be called multiple times during the registration process. The `done` parameter becomes [true](https://developer.apple.com/documentation/swift/true) when the registration process completes. Return [false](https://developer.apple.com/documentation/swift/false) from the block to stop the registration operation, like after receiving an error.

<a id="Discussion"></a>

## Discussion

Registered fonts are discoverable through font descriptor matching in the calling process.

Calling this function extracts the font assets from the asset catalog and registers them. You must make this call after the completion handler of either [beginAccessingResourcesWithCompletionHandler:](../foundation/nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md): or [conditionallyBeginAccessingResourcesWithCompletionHandler:](../foundation/nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md) is called successfully.

Name the assets using PostScript names for individual faces, or family names for variable or collection fonts. You can use the same names to unregister the fonts with [CTFontManagerUnregisterFontDescriptors](ctfontmanagerunregisterfontdescriptors%28______%29.md).

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
