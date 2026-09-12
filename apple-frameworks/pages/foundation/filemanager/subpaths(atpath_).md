> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/subpaths(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/subpaths(atpath:))

# subpaths(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings identifying the paths for all items in the specified directory.

## Declaration

```swift
func subpaths(atPath path: String) -> [String]?
```

## Parameters

- `path`: The path of the directory to list.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects, each of which contains the path of an item in the directory specified by `path`. If `path` is a symbolic link, this method traverses the link. This method returns `nil` if it cannot retrieve the device of the linked-to file.

<a id="Discussion"></a>

## Discussion

This method recurses the specified directory and its subdirectories. The method skips the “`.`” and “`..`” directories at each level of the recursion.

This method reveals every element of the subtree at `path`, including the contents of file packages (such as apps, nib files, and RTFD files). This code fragment gets the contents of `/System/Library/Fonts` after verifying that the directory exists:

```objc
BOOL isDir = NO;
NSArray *subpaths;
NSString *fontPath = @"/System/Library/Fonts";
NSFileManager *fileManager = [[NSFileManager alloc] init];
if ([fileManager fileExistsAtPath:fontPath isDirectory:&isDir] && isDir)
    subpaths = [fileManager subpathsAtPath:fontPath];
```

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.5 and later, use [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md) instead.

## See Also

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [FileManager.DirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.

# subpathsAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings identifying the paths for all items in the specified directory.

## Declaration

```objectivec
- (NSArray<NSString *> *) subpathsAtPath:(NSString *) path;
```

## Parameters

- `path`: The path of the directory to list.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects, each of which contains the path of an item in the directory specified by `path`. If `path` is a symbolic link, this method traverses the link. This method returns `nil` if it cannot retrieve the device of the linked-to file.

<a id="Discussion"></a>

## Discussion

This method recurses the specified directory and its subdirectories. The method skips the “`.`” and “`..`” directories at each level of the recursion.

This method reveals every element of the subtree at `path`, including the contents of file packages (such as apps, nib files, and RTFD files). This code fragment gets the contents of `/System/Library/Fonts` after verifying that the directory exists:

```objc
BOOL isDir = NO;
NSArray *subpaths;
NSString *fontPath = @"/System/Library/Fonts";
NSFileManager *fileManager = [[NSFileManager alloc] init];
if ([fileManager fileExistsAtPath:fontPath isDirectory:&isDir] && isDir)
    subpaths = [fileManager subpathsAtPath:fontPath];
```

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.5 and later, use [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md) instead.

## See Also

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
