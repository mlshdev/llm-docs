> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/path(forresource:oftype:)](https://developer.apple.com/documentation/foundation/bundle/path(forresource:oftype:))

# path(forResource:ofType:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full pathname for the resource identified by the specified name and file extension.

## Declaration

```swift
func path(forResource name: String?, ofType ext: String?) -> String?
```

## Parameters

- `name`: The name of the resource file.

  If you specify `nil`, the method returns the first resource file it finds with the specified extension.
- `ext`: The filename extension of the file to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and the file is the first file encountered that exactly matches `name`.

<a id="return-value"></a>

## Return Value

The full pathname for the resource file, or `nil` if the file could not be located.

<a id="Discussion"></a>

## Discussion

The method first looks for a matching resource file in the non-localized resource directory of the specified bundle. If a matching resource file is not found, it then looks in the top level of an available language-specific `.lproj` folder. (The search order for the language-specific folders corresponds to the user’s preferences.) It does not recurse through other subfolders at any of these locations. For more details on how localized resources are found, read [The Bundle Search Pattern](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW7) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

The following code fragment gets the path to a plist within the bundle, and loads it into an `NSDictionary`:

```objc
NSBundle *thisBundle = [NSBundle bundleForClass:[self class]];
if (commonDictionaryPath = [thisBundle pathForResource:@"CommonDictionary" ofType:@"plist"]) {
    theDictionary = [[NSDictionary alloc] initWithContentsOfFile:commonDictionaryPath];
}
```

## See Also

### Finding resource files

- [url(forResource:withExtension:subdirectory:)](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [url(forResource:withExtension:)](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [urls(forResourcesWithExtension:subdirectory:)](urls%28forresourceswithextension_subdirectory_%29.md): Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.
- [url(forResource:withExtension:subdirectory:localization:)](url%28forresource_withextension_subdirectory_localization_%29.md): Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [urls(forResourcesWithExtension:subdirectory:localization:)](urls%28forresourceswithextension_subdirectory_localization_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [url(forResource:withExtension:subdirectory:in:)](url%28forresource_withextension_subdirectory_in_%29.md): Creates and returns a file URL for the resource with the specified name and extension in the specified bundle.
- [urls(forResourcesWithExtension:subdirectory:in:)](urls%28forresourceswithextension_subdirectory_in_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, within the specified bundle.
- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [path(forResource:ofType:inDirectory:forLocalization:)](path%28forresource_oftype_indirectory_forlocalization_%29.md): Returns the full pathname for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [paths(forResourcesOfType:inDirectory:forLocalization:)](paths%28forresourcesoftype_indirectory_forlocalization_%29.md): Returns an array containing the file for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.

# pathForResource:ofType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full pathname for the resource identified by the specified name and file extension.

## Declaration

```objectivec
- (NSString *) pathForResource:(NSString *) name ofType:(NSString *) ext;
```

## Parameters

- `name`: The name of the resource file.

  If you specify `nil`, the method returns the first resource file it finds with the specified extension.
- `ext`: The filename extension of the file to locate.

  If you specify an empty string or `nil`, the extension is assumed not to exist and the file is the first file encountered that exactly matches `name`.

<a id="return-value"></a>

## Return Value

The full pathname for the resource file, or `nil` if the file could not be located.

<a id="Discussion"></a>

## Discussion

The method first looks for a matching resource file in the non-localized resource directory of the specified bundle. If a matching resource file is not found, it then looks in the top level of an available language-specific `.lproj` folder. (The search order for the language-specific folders corresponds to the user’s preferences.) It does not recurse through other subfolders at any of these locations. For more details on how localized resources are found, read [The Bundle Search Pattern](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW7) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

The following code fragment gets the path to a plist within the bundle, and loads it into an `NSDictionary`:

```objc
NSBundle *thisBundle = [NSBundle bundleForClass:[self class]];
if (commonDictionaryPath = [thisBundle pathForResource:@"CommonDictionary" ofType:@"plist"]) {
    theDictionary = [[NSDictionary alloc] initWithContentsOfFile:commonDictionaryPath];
}
```

## See Also

### Finding resource files

- [URLForResource:withExtension:subdirectory:](url%28forresource_withextension_subdirectory_%29.md): Returns the file URL for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [URLForResource:withExtension:](url%28forresource_withextension_%29.md): Returns the file URL for the resource identified by the specified name and file extension.
- [URLsForResourcesWithExtension:subdirectory:](urls%28forresourceswithextension_subdirectory_%29.md): Returns an array of file URLs for all resources identified by the specified file extension and located in the specified bundle subdirectory.
- [URLForResource:withExtension:subdirectory:localization:](url%28forresource_withextension_subdirectory_localization_%29.md): Returns the file URL for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [URLsForResourcesWithExtension:subdirectory:localization:](urls%28forresourceswithextension_subdirectory_localization_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [URLForResource:withExtension:subdirectory:inBundleWithURL:](url%28forresource_withextension_subdirectory_in_%29.md): Creates and returns a file URL for the resource with the specified name and extension in the specified bundle.
- [URLsForResourcesWithExtension:subdirectory:inBundleWithURL:](urls%28forresourceswithextension_subdirectory_in_%29.md): Returns an array containing the file URLs for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, within the specified bundle.
- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [pathForResource:ofType:inDirectory:forLocalization:](path%28forresource_oftype_indirectory_forlocalization_%29.md): Returns the full pathname for the resource identified by the specified name and file extension, located in the specified bundle subdirectory, and limited to global resources and those associated with the specified localization.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [pathsForResourcesOfType:inDirectory:forLocalization:](paths%28forresourcesoftype_indirectory_forlocalization_%29.md): Returns an array containing the file for all bundle resources having the specified filename extension, residing in the specified resource subdirectory, and limited to global resources and those associated with the specified localization.
- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.
