> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopyauxiliaryexecutableurl(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopyauxiliaryexecutableurl(_:_:))

# CFBundleCopyAuxiliaryExecutableURL(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle’s auxiliary executable code.

## Declaration

```swift
func CFBundleCopyAuxiliaryExecutableURL(_ bundle: CFBundle!, _ executableName: CFString!) -> CFURL!
```

## Parameters

- `bundle`: The bundle to examine.
- `executableName`: The name of `bundle`’s auxiliary executable code.

<a id="return-value"></a>

## Return Value

The URL location of the specified bundle’s auxiliary executable code, or `NULL` if it could not be found. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function can be used to find executables other than your main executable. This is useful, for instance, for applications that have some command line tool that is packaged with and used by the application. The tool can be packaged in the various platform executable directories in the bundle and can be located with this function. This allows an application to ship versions of the tool for each platform as it does for the main application executable.

## See Also

### Finding Locations in a Bundle

- [CFBundleCopyBuiltInPlugInsURL(\_:)](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL(\_:)](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL(\_:)](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopyResourcesDirectoryURL(\_:)](cfbundlecopyresourcesdirectoryurl%28__%29.md): Returns the location of a bundle’s Resources directory.
- [CFBundleCopySharedFrameworksURL(\_:)](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL(\_:)](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL(\_:)](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.

# CFBundleCopyAuxiliaryExecutableURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle’s auxiliary executable code.

## Declaration

```objectivec
extern CFURLRefCFBundleCopyAuxiliaryExecutableURL(CFBundleRef bundle, CFStringRef executableName);
```

## Parameters

- `bundle`: The bundle to examine.
- `executableName`: The name of `bundle`’s auxiliary executable code.

<a id="return-value"></a>

## Return Value

The URL location of the specified bundle’s auxiliary executable code, or `NULL` if it could not be found. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function can be used to find executables other than your main executable. This is useful, for instance, for applications that have some command line tool that is packaged with and used by the application. The tool can be packaged in the various platform executable directories in the bundle and can be located with this function. This allows an application to ship versions of the tool for each platform as it does for the main application executable.

## See Also

### Finding Locations in a Bundle

- [CFBundleCopyBuiltInPlugInsURL](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopyResourcesDirectoryURL](cfbundlecopyresourcesdirectoryurl%28__%29.md): Returns the location of a bundle’s Resources directory.
- [CFBundleCopySharedFrameworksURL](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.
