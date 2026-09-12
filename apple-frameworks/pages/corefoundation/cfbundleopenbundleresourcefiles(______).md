> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundleopenbundleresourcefiles(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundleopenbundleresourcefiles(_:_:_:))

# CFBundleOpenBundleResourceFiles(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```swift
func CFBundleOpenBundleResourceFiles(_ bundle: CFBundle!, _ refNum: UnsafeMutablePointer<CFBundleRefNum>!, _ localizedRefNum: UnsafeMutablePointer<CFBundleRefNum>!) -> Int32
```

## Parameters

- `bundle`: The bundle whose resource map you want to open.
- `refNum`: On return, the reference number of the non-localized resource map.
- `localizedRefNum`: On return, the reference number of the localized resource map.

<a id="return-value"></a>

## Return Value

An error code. The function returns `0` (`noErr`) if successful. If the bundle contains more than one resource file, the function returns an error code only if none was opened. The most common error is `resFNotFound`, but the function may also pass through other errors returned from the Resource Manager.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap(\_:\_:)](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory(\_:\_:\_:\_:)](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory(\_:\_:\_:)](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization(\_:\_:\_:\_:)](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceMap(\_:)](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

# CFBundleOpenBundleResourceFiles (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```objectivec
extern SInt32 CFBundleOpenBundleResourceFiles(CFBundleRef bundle, CFBundleRefNum *refNum, CFBundleRefNum *localizedRefNum);
```

## Parameters

- `bundle`: The bundle whose resource map you want to open.
- `refNum`: On return, the reference number of the non-localized resource map.
- `localizedRefNum`: On return, the reference number of the localized resource map.

<a id="return-value"></a>

## Return Value

An error code. The function returns `0` (`noErr`) if successful. If the bundle contains more than one resource file, the function returns an error code only if none was opened. The most common error is `resFNotFound`, but the function may also pass through other errors returned from the Resource Manager.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceMap](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.
