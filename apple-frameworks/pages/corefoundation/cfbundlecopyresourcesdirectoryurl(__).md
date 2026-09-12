> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopyresourcesdirectoryurl(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopyresourcesdirectoryurl(_:))

# CFBundleCopyResourcesDirectoryURL(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle’s Resources directory.

## Declaration

```swift
func CFBundleCopyResourcesDirectoryURL(_ bundle: CFBundle!) -> CFURL!
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFURL object describing the location of `bundle`’s resources directory, or `NULL` if it could not be found. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

In general, you should never need to use this function. Use [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md) and similar functions instead.

## See Also

### Finding Locations in a Bundle

- [CFBundleCopyAuxiliaryExecutableURL(\_:\_:)](cfbundlecopyauxiliaryexecutableurl%28____%29.md): Returns the location of a bundle’s auxiliary executable code.
- [CFBundleCopyBuiltInPlugInsURL(\_:)](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL(\_:)](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL(\_:)](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopySharedFrameworksURL(\_:)](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL(\_:)](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL(\_:)](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.

# CFBundleCopyResourcesDirectoryURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the location of a bundle’s Resources directory.

## Declaration

```objectivec
extern CFURLRefCFBundleCopyResourcesDirectoryURL(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle to examine.

<a id="return-value"></a>

## Return Value

A CFURL object describing the location of `bundle`’s resources directory, or `NULL` if it could not be found. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

In general, you should never need to use this function. Use [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md) and similar functions instead.

## See Also

### Finding Locations in a Bundle

- [CFBundleCopyAuxiliaryExecutableURL](cfbundlecopyauxiliaryexecutableurl%28____%29.md): Returns the location of a bundle’s auxiliary executable code.
- [CFBundleCopyBuiltInPlugInsURL](cfbundlecopybuiltinpluginsurl%28__%29.md): Returns the location of a bundle’s built in plug-in.
- [CFBundleCopyExecutableURL](cfbundlecopyexecutableurl%28__%29.md): Returns the location of a bundle’s main executable code.
- [CFBundleCopyPrivateFrameworksURL](cfbundlecopyprivateframeworksurl%28__%29.md): Returns the location of a bundle’s private Frameworks directory.
- [CFBundleCopySharedFrameworksURL](cfbundlecopysharedframeworksurl%28__%29.md): Returns the location of a bundle’s shared frameworks directory.
- [CFBundleCopySharedSupportURL](cfbundlecopysharedsupporturl%28__%29.md): Returns the location of a bundle’s shared support files directory.
- [CFBundleCopySupportFilesDirectoryURL](cfbundlecopysupportfilesdirectoryurl%28__%29.md): Returns the location of the bundle’s support files directory.
