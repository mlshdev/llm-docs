> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetinfodictionary(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetinfodictionary(_:))

# CFBundleGetInfoDictionary(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s information dictionary.

## Declaration

```swift
func CFBundleGetInfoDictionary(_ bundle: CFBundle!) -> CFDictionary!
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFDictionary object containing the data stored in the bundle’s information property list (the `Info.plist` file). This is a global information dictionary. CFBundle may add extra keys to this dictionary for its own use. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should typically use [CFBundleGetValueForInfoDictionaryKey(\_:\_:)](cfbundlegetvalueforinfodictionarykey%28____%29.md) rather than retrieving values directly from the info dictionary because the function will return localized values if any are available. Use `CFBundleGetInfoDictionary` only if you know that the key you are interested in will not be localized.

To retrieve an info dictionary without creating a CFBundle object, see [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md) and [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md).

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL(\_:)](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion(\_:)](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetLocalInfoDictionary(\_:)](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey(\_:\_:)](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo(\_:\_:\_:)](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleGetInfoDictionary (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a bundle’s information dictionary.

## Declaration

```objectivec
extern CFDictionaryRefCFBundleGetInfoDictionary(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFDictionary object containing the data stored in the bundle’s information property list (the `Info.plist` file). This is a global information dictionary. CFBundle may add extra keys to this dictionary for its own use. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should typically use [CFBundleGetValueForInfoDictionaryKey](cfbundlegetvalueforinfodictionarykey%28____%29.md) rather than retrieving values directly from the info dictionary because the function will return localized values if any are available. Use `CFBundleGetInfoDictionary` only if you know that the key you are interested in will not be localized.

To retrieve an info dictionary without creating a CFBundle object, see [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md) and [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md).

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetLocalInfoDictionary](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleGetValueForInfoDictionaryKey](cfbundlegetvalueforinfodictionarykey%28____%29.md): Returns a value (localized if possible) from a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
