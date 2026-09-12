> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopyexecutablearchitecturesforurl(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopyexecutablearchitecturesforurl(_:))

# CFBundleCopyExecutableArchitecturesForURL(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of CFNumbers representing the architectures a given URL provides.

## Declaration

```swift
func CFBundleCopyExecutableArchitecturesForURL(_ url: CFURL!) -> CFArray!
```

## Parameters

- `url`: The URL to examine.

<a id="return-value"></a>

## Return Value

For a directory URL, if the bundle’s executable exists and is a Mach-O file, returns an array of CFNumbers whose values are integers representing the architectures the URL provides. For a plain file URL representing an unbundled executable, returns the architectures it provides if it is a Mach-O file. Possible values are listed in [Architecture Types](1537096-architecture-types.md). If there is no bundle executable or if the executable is not a Mach-O file, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

For a directory URL, this is equivalent to calling [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md) on the corresponding bundle.

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
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleCopyExecutableArchitecturesForURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of CFNumbers representing the architectures a given URL provides.

## Declaration

```objectivec
extern CFArrayRefCFBundleCopyExecutableArchitecturesForURL(CFURLRef url);
```

## Parameters

- `url`: The URL to examine.

<a id="return-value"></a>

## Return Value

For a directory URL, if the bundle’s executable exists and is a Mach-O file, returns an array of CFNumbers whose values are integers representing the architectures the URL provides. For a plain file URL representing an unbundled executable, returns the architectures it provides if it is a Mach-O file. Possible values are listed in [Architecture Types](1537096-architecture-types.md). If there is no bundle executable or if the executable is not a Mach-O file, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

For a directory URL, this is equivalent to calling [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md) on the corresponding bundle.

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
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
