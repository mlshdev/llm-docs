> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundleclosebundleresourcemap(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundleclosebundleresourcemap(_:_:))

# CFBundleCloseBundleResourceMap(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Closes an open resource map for a bundle.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```swift
func CFBundleCloseBundleResourceMap(_ bundle: CFBundle!, _ refNum: CFBundleRefNum)
```

## Parameters

- `bundle`: The bundle whose resource map is referenced by `refNum`.
- `refNum`: The reference number for a resource map to close.

<a id="Discussion"></a>

## Discussion

You open a resource map using either [CFBundleOpenBundleResourceFiles(\_:\_:\_:)](cfbundleopenbundleresourcefiles%28______%29.md) or [CFBundleOpenBundleResourceMap(\_:)](cfbundleopenbundleresourcemap%28__%29.md).

## See Also

### Locating Bundle Resources

- [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory(\_:\_:\_:\_:)](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory(\_:\_:\_:)](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization(\_:\_:\_:\_:)](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles(\_:\_:\_:)](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap(\_:)](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

# CFBundleCloseBundleResourceMap (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Closes an open resource map for a bundle.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```objectivec
extern void CFBundleCloseBundleResourceMap(CFBundleRef bundle, CFBundleRefNum refNum);
```

## Parameters

- `bundle`: The bundle whose resource map is referenced by `refNum`.
- `refNum`: The reference number for a resource map to close.

<a id="Discussion"></a>

## Discussion

You open a resource map using either [CFBundleOpenBundleResourceFiles](cfbundleopenbundleresourcefiles%28______%29.md) or [CFBundleOpenBundleResourceMap](cfbundleopenbundleresourcemap%28__%29.md).

## See Also

### Locating Bundle Resources

- [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.
