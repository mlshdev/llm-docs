> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/url(forresource:withextension:subdirectory:localization:)](https://developer.apple.com/documentation/foundation/bundle/url(forresource:withextension:subdirectory:localization:))

# url(forResource:withExtension:subdirectory:localization:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.

## Declaration

```swift
func url(forResource name: String?, withExtension ext: String?, subdirectory subpath: String?, localization localizationName: String?) -> URL?
```

## Parameters

- `name`: The name of the resource file.

  If you specify `nil`, the method returns the first resource file it finds that matches the remaining criteria.
- `ext`: The filename extension of the file to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and the file URL is the first file encountered that exactly matches `name`.
- `subpath`: The name of the bundle subdirectory to search.
- `localizationName`: The language ID for the localization. This parameter should correspond to the name of one of the bundle’s language-specific resource directories without the `.lproj` extension.

<a id="return-value"></a>

## Return Value

The file URL for the resource file or `nil` if the file could not be located.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [urls(forResourcesWithExtension:subdirectory:)](urls%28forresourceswithextension_subdirectory_%29.md), except that only nonlocalized resources and those in the language-specific `.lproj` directory specified by `localizationName` are searched.

There should typically be little reason to use this method—see Getting the Current Language and Locale. See also [preferredLocalizations(from:forPreferences:)](preferredlocalizations%28from_forpreferences_%29.md) for how to determine what localizations are available.

## See Also

### Finding resource files

- [url(forResource:withExtension:subdirectory:)](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [url(forResource:withExtension:)](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [urls(forResourcesWithExtension:subdirectory:)](urls%28forresourceswithextension_subdirectory_%29.md): Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.
- [urls(forResourcesWithExtension:subdirectory:localization:)](urls%28forresourceswithextension_subdirectory_localization_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [url(forResource:withExtension:subdirectory:in:)](url%28forresource_withextension_subdirectory_in_%29.md): Creates and returns a file URL for the resource with the specified name and extension in the specified bundle.
- [urls(forResourcesWithExtension:subdirectory:in:)](urls%28forresourceswithextension_subdirectory_in_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, within the specified bundle.
- [path(forResource:ofType:)](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.
- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [path(forResource:ofType:inDirectory:forLocalization:)](path%28forresource_oftype_indirectory_forlocalization_%29.md): Returns the full pathname for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [paths(forResourcesOfType:inDirectory:forLocalization:)](paths%28forresourcesoftype_indirectory_forlocalization_%29.md): Returns an array containing the file for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.

# URLForResource:withExtension:subdirectory:localization: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.

## Declaration

```objectivec
- (NSURL *) URLForResource:(NSString *) name withExtension:(NSString *) ext subdirectory:(NSString *) subpath localization:(NSString *) localizationName;
```

## Parameters

- `name`: The name of the resource file.

  If you specify `nil`, the method returns the first resource file it finds that matches the remaining criteria.
- `ext`: The filename extension of the file to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and the file URL is the first file encountered that exactly matches `name`.
- `subpath`: The name of the bundle subdirectory to search.
- `localizationName`: The language ID for the localization. This parameter should correspond to the name of one of the bundle’s language-specific resource directories without the `.lproj` extension.

<a id="return-value"></a>

## Return Value

The file URL for the resource file or `nil` if the file could not be located.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [URLsForResourcesWithExtension:subdirectory:](urls%28forresourceswithextension_subdirectory_%29.md), except that only nonlocalized resources and those in the language-specific `.lproj` directory specified by `localizationName` are searched.

There should typically be little reason to use this method—see Getting the Current Language and Locale. See also [preferredLocalizationsFromArray:forPreferences:](preferredlocalizations%28from_forpreferences_%29.md) for how to determine what localizations are available.

## See Also

### Finding resource files

- [URLForResource:withExtension:subdirectory:](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [URLForResource:withExtension:](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [URLsForResourcesWithExtension:subdirectory:](urls%28forresourceswithextension_subdirectory_%29.md): Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.
- [URLsForResourcesWithExtension:subdirectory:localization:](urls%28forresourceswithextension_subdirectory_localization_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [URLForResource:withExtension:subdirectory:inBundleWithURL:](url%28forresource_withextension_subdirectory_in_%29.md): Creates and returns a file URL for the resource with the specified name and extension in the specified bundle.
- [URLsForResourcesWithExtension:subdirectory:inBundleWithURL:](urls%28forresourceswithextension_subdirectory_in_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, within the specified bundle.
- [pathForResource:ofType:](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.
- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [pathForResource:ofType:inDirectory:forLocalization:](path%28forresource_oftype_indirectory_forlocalization_%29.md): Returns the full pathname for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [pathsForResourcesOfType:inDirectory:forLocalization:](paths%28forresourcesoftype_indirectory_forlocalization_%29.md): Returns an array containing the file for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.
