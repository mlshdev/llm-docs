> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetvalueforinfodictionarykey(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetvalueforinfodictionarykey(_:_:))

# CFBundleGetValueForInfoDictionaryKey(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a value (localized if possible) from a bundle’s information dictionary.

## Declaration

```swift
func CFBundleGetValueForInfoDictionaryKey(_ bundle: CFBundle!, _ key: CFString!) -> CFTypeRef!
```

## Parameters

- `bundle`: The bundle to examine.
- `key`: The key for the value to return.

<a id="return-value"></a>

## Return Value

A value corresponding to `key` in `bundle`’s information dictionary. If available, a localized value is returned, otherwise the global value is returned. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should use this function rather than retrieving values directly from the info dictionary (`Info.plist`) because `CFBundleGetValueForInfoDictionaryKey` returns localized values if any are available (from the `InfoPlist.strings` file for the current locale).

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL(\_:)](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion(\_:)](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier(\_:)](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary(\_:)](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary(\_:)](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory(\_:)](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL(\_:)](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo(\_:\_:\_:)](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory(\_:\_:\_:)](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures(\_:)](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL(\_:)](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber(\_:)](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.

# CFBundleGetValueForInfoDictionaryKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a value (localized if possible) from a bundle’s information dictionary.

## Declaration

```objectivec
extern CFTypeRefCFBundleGetValueForInfoDictionaryKey(CFBundleRef bundle, CFStringRef key);
```

## Parameters

- `bundle`: The bundle to examine.
- `key`: The key for the value to return.

<a id="return-value"></a>

## Return Value

A value corresponding to `key` in `bundle`’s information dictionary. If available, a localized value is returned, otherwise the global value is returned. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should use this function rather than retrieving values directly from the info dictionary (`Info.plist`) because `CFBundleGetValueForInfoDictionaryKey` returns localized values if any are available (from the `InfoPlist.strings` file for the current locale).

## See Also

### Getting Bundle Properties

- [CFBundleCopyBundleURL](cfbundlecopybundleurl%28__%29.md): Returns the location of a bundle.
- [CFBundleGetDevelopmentRegion](cfbundlegetdevelopmentregion%28__%29.md): Returns the bundle’s development region from the bundle’s information property list.
- [CFBundleGetIdentifier](cfbundlegetidentifier%28__%29.md): Returns the bundle identifier from a bundle’s information property list.
- [CFBundleGetInfoDictionary](cfbundlegetinfodictionary%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleGetLocalInfoDictionary](cfbundlegetlocalinfodictionary%28__%29.md): Returns a bundle’s localized information dictionary.
- [CFBundleCopyInfoDictionaryInDirectory](cfbundlecopyinfodictionaryindirectory%28__%29.md): Returns a bundle’s information dictionary.
- [CFBundleCopyInfoDictionaryForURL](cfbundlecopyinfodictionaryforurl%28__%29.md): Returns the information dictionary for a given URL location.
- [CFBundleGetPackageInfo](cfbundlegetpackageinfo%28______%29.md): Returns a bundle’s package type and creator.
- [CFBundleGetPackageInfoInDirectory](cfbundlegetpackageinfoindirectory%28______%29.md): Returns a bundle’s package type and creator without having to create a CFBundle object.
- [CFBundleCopyExecutableArchitectures](cfbundlecopyexecutablearchitectures%28__%29.md): Returns an array of CFNumbers representing the architectures a given bundle provides.
- [CFBundleCopyExecutableArchitecturesForURL](cfbundlecopyexecutablearchitecturesforurl%28__%29.md): Returns an array of CFNumbers representing the architectures a given URL provides.
- [CFBundleGetVersionNumber](cfbundlegetversionnumber%28__%29.md): Returns a bundle’s version number.
