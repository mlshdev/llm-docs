> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/urls(forresourceswithextension:subdirectory:)](https://developer.apple.com/documentation/foundation/bundle/urls(forresourceswithextension:subdirectory:))

# urls(forResourcesWithExtension:subdirectory:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.

## Declaration

```swift
func urls(forResourcesWithExtension ext: String?, subdirectory subpath: String?) -> [URL]?
```

## Parameters

- `ext`: The filename extension of the files to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and all of the files in `subpath` are returned.
- `subpath`: The name of the bundle subdirectory.

<a id="return-value"></a>

## Return Value

An array of file URLs for the resource files or `nil` if no files could be located at `subpath` with `extension`. Returns an empty array if no matching resource files are found.

<a id="Discussion"></a>

## Discussion

If `subpath` is `nil`, this method searches the top-level non-localized resource directory and the top-level of any language-specific directories. (In macOS, the top-level non-localized resource directory is typically called `Resources` but in iOS, it is the main bundle directory.)

For example, suppose you have a Mac app with a modern bundle and you specify `@"Documentation"` for the `subpath` parameter. This method would first look in the `Contents/Resources/Documentation` directory of the bundle, followed by the `Documentation` subdirectories of each language-specific `.lproj` directory. (The search order for the language-specific directories corresponds to the user’s preferences.) This method does not recurse through any other subdirectories at any of these locations. For more details see [The Bundle Search Pattern](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW7) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

## See Also

### Finding resource files

- [url(forResource:withExtension:subdirectory:)](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [url(forResource:withExtension:)](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [url(forResource:withExtension:subdirectory:localization:)](url%28forresource_withextension_subdirectory_localization_%29.md): Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
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

# URLsForResourcesWithExtension:subdirectory: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.

## Declaration

```objectivec
- (NSArray<NSURL *> *) URLsForResourcesWithExtension:(NSString *) ext subdirectory:(NSString *) subpath;
```

## Parameters

- `ext`: The filename extension of the files to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and all of the files in `subpath` are returned.
- `subpath`: The name of the bundle subdirectory.

<a id="return-value"></a>

## Return Value

An array of file URLs for the resource files or `nil` if no files could be located at `subpath` with `extension`. Returns an empty array if no matching resource files are found.

<a id="Discussion"></a>

## Discussion

If `subpath` is `nil`, this method searches the top-level non-localized resource directory and the top-level of any language-specific directories. (In macOS, the top-level non-localized resource directory is typically called `Resources` but in iOS, it is the main bundle directory.)

For example, suppose you have a Mac app with a modern bundle and you specify `@"Documentation"` for the `subpath` parameter. This method would first look in the `Contents/Resources/Documentation` directory of the bundle, followed by the `Documentation` subdirectories of each language-specific `.lproj` directory. (The search order for the language-specific directories corresponds to the user’s preferences.) This method does not recurse through any other subdirectories at any of these locations. For more details see [The Bundle Search Pattern](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW7) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

## See Also

### Finding resource files

- [URLForResource:withExtension:subdirectory:](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [URLForResource:withExtension:](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [URLForResource:withExtension:subdirectory:localization:](url%28forresource_withextension_subdirectory_localization_%29.md): Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
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
