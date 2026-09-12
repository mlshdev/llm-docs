> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/mountedvolumeurls(includingresourcevaluesforkeys:options:)](https://developer.apple.com/documentation/foundation/filemanager/mountedvolumeurls(includingresourcevaluesforkeys:options:))

# mountedVolumeURLs(includingResourceValuesForKeys:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of URLs that identify the mounted volumes available on the device.

## Declaration

```swift
func mountedVolumeURLs(includingResourceValuesForKeys propertyKeys: [URLResourceKey]?, options: FileManager.VolumeEnumerationOptions = []) -> [URL]?
```

## Parameters

- `propertyKeys`: An array of keys that identify the file properties that you want pre-fetched for each volume. For each returned URL, the values for these keys are cached in the corresponding [NSURL](../nsurl.md) objects. You may specify `nil` for this parameter. For a list of keys you can specify, see Common File System Resource Keys.
- `options`: Option flags for the enumeration. For a list of possible values, see [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md).

<a id="return-value"></a>

## Return Value

An array of `NSURL` objects identifying the mounted volumes.

> **Important**

>  This method returns `nil` on platforms other than macOS.

<a id="Discussion"></a>

## Discussion

This call may block if I/O is required to determine values for the requested `propertyKeys`.

## See Also

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [FileManager.DirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

# mountedVolumeURLsIncludingResourceValuesForKeys:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of URLs that identify the mounted volumes available on the device.

## Declaration

```objectivec
- (NSArray<NSURL *> *) mountedVolumeURLsIncludingResourceValuesForKeys:(NSArray<NSString *> *) propertyKeys options:(NSVolumeEnumerationOptions) options;
```

## Parameters

- `propertyKeys`: An array of keys that identify the file properties that you want pre-fetched for each volume. For each returned URL, the values for these keys are cached in the corresponding [NSURL](../nsurl.md) objects. You may specify `nil` for this parameter. For a list of keys you can specify, see Common File System Resource Keys.
- `options`: Option flags for the enumeration. For a list of possible values, see [NSVolumeEnumerationOptions](volumeenumerationoptions.md).

<a id="return-value"></a>

## Return Value

An array of `NSURL` objects identifying the mounted volumes.

> **Important**

>  This method returns `nil` on platforms other than macOS.

<a id="Discussion"></a>

## Discussion

This call may block if I/O is required to determine values for the requested `propertyKeys`.

## See Also

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
