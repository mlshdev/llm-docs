> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetpackageinfoindirectory(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetpackageinfoindirectory(_:_:_:))

# CFBundleGetPackageInfoInDirectory(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s package type and creator without having to create a CFBundle object.

## Declaration

```swift
func CFBundleGetPackageInfoInDirectory(_ url: CFURL!, _ packageType: UnsafeMutablePointer<UInt32>!, _ packageCreator: UnsafeMutablePointer<UInt32>!) -> Bool
```

## Parameters

- `url`: The location of a bundle.
- `packageType`: On return, the four-letter type code for the bundle. This is `APPL` for applications, `FMWK` for frameworks, and `BNDL` for generic bundles. Or a more specific type code for generic bundles.
- `packageCreator`: On return, the four-letter “creator” code for the bundle.

<a id="return-value"></a>

## Return Value

`true` if the package type and creator were found, otherwise `false`.

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL(\_:)](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion(\_:)](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary(\_:)](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary(\_:)](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey(\_:\_:)](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo(\_:\_:\_:)](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleGetPackageInfoInDirectory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s package type and creator without having to create a CFBundle object.

## Declaration

```objectivec
extern Boolean CFBundleGetPackageInfoInDirectory(CFURLRef url, UInt32 *packageType, UInt32 *packageCreator);
```

## Parameters

- `url`: The location of a bundle.
- `packageType`: On return, the four-letter type code for the bundle. This is `APPL` for applications, `FMWK` for frameworks, and `BNDL` for generic bundles. Or a more specific type code for generic bundles.
- `packageCreator`: On return, the four-letter “creator” code for the bundle.

<a id="return-value"></a>

## Return Value

`true` if the package type and creator were found, otherwise `false`.

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
