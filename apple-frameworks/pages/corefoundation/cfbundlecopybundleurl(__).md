> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopybundleurl(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopybundleurl(_:))

# CFBundleCopyBundleURL(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle.

## Declaration

```swift
func CFBundleCopyBundleURL(_ bundle: CFBundle!) -> CFURL!
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFURL object describing the location of `bundle`, or `NULL` if the specified bundle does not exist. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Bundle Properties

- [CFBundleGetDevelopmentRegion(\_:)](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary(\_:)](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary(\_:)](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey(\_:\_:)](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo(\_:\_:\_:)](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleCopyBundleURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle.

## Declaration

```objectivec
extern CFURLRefCFBundleCopyBundleURL(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFURL object describing the location of `bundle`, or `NULL` if the specified bundle does not exist. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Bundle Properties

- [CFBundleGetDevelopmentRegion](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
