> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecopyresourceurlsoftypeindirectory(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecopyresourceurlsoftypeindirectory(_:_:_:))

# CFBundleCopyResourceURLsOfTypeInDirectory(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.

## Declaration

```swift
func CFBundleCopyResourceURLsOfTypeInDirectory(_ bundleURL: CFURL!, _ resourceType: CFString!, _ subDirName: CFString!) -> CFArray!
```

## Parameters

- `bundleURL`: The location of a bundle to examine.
- `resourceType`: The abstract type of the resources to locate. The type is expressed as a filename extension, such as `jpg`.
- `subDirName`: The name of the subdirectory of the bundle’s resources directory to search. Pass `NULL` to search the standard CFBundle resource locations.

<a id="return-value"></a>

## Return Value

A CFArray object containing the CFURL objects of the requested resources. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function provides a means to obtain an array containing the locations of all of the requested resources without first creating a CFBundle object. However, since CFBundle objects cache search results, it is faster to create a CFBundle object if you need to repeatedly access resources.

Note that file names are case-sensitive, even on file systems (such as HFS+) that are not case sensitive with regards to file names.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap(\_:\_:)](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL(\_:\_:\_:\_:)](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory(\_:\_:\_:\_:)](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType(\_:\_:\_:)](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLForLocalization(\_:\_:\_:\_:\_:)](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization(\_:\_:\_:\_:)](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles(\_:\_:\_:)](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap(\_:)](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.

# CFBundleCopyResourceURLsOfTypeInDirectory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array of CFURL objects describing the locations of all resources in a bundle of the specified type without needing to create a CFBundle object.

## Declaration

```objectivec
extern CFArrayRefCFBundleCopyResourceURLsOfTypeInDirectory(CFURLRef bundleURL, CFStringRef resourceType, CFStringRef subDirName);
```

## Parameters

- `bundleURL`: The location of a bundle to examine.
- `resourceType`: The abstract type of the resources to locate. The type is expressed as a filename extension, such as `jpg`.
- `subDirName`: The name of the subdirectory of the bundle’s resources directory to search. Pass `NULL` to search the standard CFBundle resource locations.

<a id="return-value"></a>

## Return Value

A CFArray object containing the CFURL objects of the requested resources. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function provides a means to obtain an array containing the locations of all of the requested resources without first creating a CFBundle object. However, since CFBundle objects cache search results, it is faster to create a CFBundle object if you need to repeatedly access resources.

Note that file names are case-sensitive, even on file systems (such as HFS+) that are not case sensitive with regards to file names.

## See Also

### Locating Bundle Resources

- [CFBundleCloseBundleResourceMap](cfbundleclosebundleresourcemap%28____%29.md): Deprecated. Closes an open resource map for a bundle.
- [CFBundleCopyResourceURL](cfbundlecopyresourceurl%28________%29.md): Returns the location of a resource contained in the specified bundle.
- [CFBundleCopyResourceURLInDirectory](cfbundlecopyresourceurlindirectory%28________%29.md): Returns the location of a resource contained in the specified bundle directory without requiring the creation of a CFBundle object.
- [CFBundleCopyResourceURLsOfType](cfbundlecopyresourceurlsoftype%28______%29.md): Assembles an array of URLs specifying all of the resources of the specified type found in a bundle.
- [CFBundleCopyResourceURLForLocalization](cfbundlecopyresourceurlforlocalization%28__________%29.md): Returns the location of a localized resource in a bundle.
- [CFBundleCopyResourceURLsOfTypeForLocalization](cfbundlecopyresourceurlsoftypeforlocalization%28________%29.md): Returns an array containing copies of the URL locations for a specified bundle, resource, and localization name.
- [CFBundleOpenBundleResourceFiles](cfbundleopenbundleresourcefiles%28______%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in separate resource maps.
- [CFBundleOpenBundleResourceMap](cfbundleopenbundleresourcemap%28__%29.md): Deprecated. Opens the non-localized and localized resource files (if any) for a bundle in a single resource map.
