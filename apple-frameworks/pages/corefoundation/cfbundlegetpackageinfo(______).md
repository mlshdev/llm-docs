> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetpackageinfo(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetpackageinfo(_:_:_:))

# CFBundleGetPackageInfo(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s package type and creator.

## Declaration

```swift
func CFBundleGetPackageInfo(_ bundle: CFBundle!, _ packageType: UnsafeMutablePointer<UInt32>!, _ packageCreator: UnsafeMutablePointer<UInt32>!)
```

## Parameters

- `bundle`: The bundle to examine.
- `packageType`: On return, the four-letter type code for the bundle. This is `APPL` for applications, `FMWK` for frameworks, and `BNDL` for generic bundles. Or a more specific type code for generic bundles.
- `packageCreator`: On return, the four-letter “creator” code for the bundle.

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
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleGetPackageInfo (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s package type and creator.

## Declaration

```objectivec
extern void CFBundleGetPackageInfo(CFBundleRef bundle, UInt32 *packageType, UInt32 *packageCreator);
```

## Parameters

- `bundle`: The bundle to examine.
- `packageType`: On return, the four-letter type code for the bundle. This is `APPL` for applications, `FMWK` for frameworks, and `BNDL` for generic bundles. Or a more specific type code for generic bundles.
- `packageCreator`: On return, the four-letter “creator” code for the bundle.

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
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
