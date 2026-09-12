> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundleopenbundleresourcemap(_:)](https://developer.apple.com/documentation/corefoundation/cfbundleopenbundleresourcemap(_:))

# CFBundleOpenBundleResourceMap(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```swift
func CFBundleOpenBundleResourceMap(_ bundle: CFBundle!) -> CFBundleRefNum
```

## Parameters

- `bundle`: The bundle whose resource map you want to open.

<a id="return-value"></a>

## Return Value

A distinct reference number for the resource map.

<a id="Discussion"></a>

## Discussion

Creates and makes current a single read-only resource map containing the non-localized and localized resource files. If this function is called multiple times, it opens the files multiple times and returns distinct reference numbers for each. Use [CFBundleCloseBundleResourceMap(\_:\_:)](cfbundleclosebundleresourcemap%28____%29.md) to close a resource map.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap(\_:\_:)](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory(\_:\_:\_:\_:)](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory(\_:\_:\_:)](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization(\_:\_:\_:\_:)](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles(\_:\_:\_:)](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.

# CFBundleOpenBundleResourceMap (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

> The Carbon Resource Manager is deprecated. This should only be used to access Resource Manager-style resources in old bundles.

## Declaration

```objectivec
extern CFBundleRefNum CFBundleOpenBundleResourceMap(CFBundleRef bundle);
```

## Parameters

- `bundle`: The bundle whose resource map you want to open.

<a id="return-value"></a>

## Return Value

A distinct reference number for the resource map.

<a id="Discussion"></a>

## Discussion

Creates and makes current a single read-only resource map containing the non-localized and localized resource files. If this function is called multiple times, it opens the files multiple times and returns distinct reference numbers for each. Use [CFBundleCloseBundleResourceMap](cfbundleclosebundleresourcemap%28____%29.md) to close a resource map.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLsOfTypeInDirectory](cfbundlecopyresourceurlsoftypeindirectory%28______%29.md): Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.
- [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
