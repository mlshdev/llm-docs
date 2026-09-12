> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/enumerator(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/enumerator(atpath:))

# enumerator(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.

## Declaration

```swift
func enumerator(atPath path: String) -> FileManager.DirectoryEnumerator?
```

## Parameters

- `path`: The path of the directory to enumerate.

<a id="return-value"></a>

## Return Value

A [FileManager.DirectoryEnumerator](directoryenumerator.md) object that enumerates the contents of the directory at `path`.

<a id="discussion"></a>

## Discussion

If `path` is a filename, the method returns an enumerator object that enumerates no files—the first call to [nextObject()](../nsenumerator/nextobject%28%29.md) will return `nil`.

Because the enumeration is deep—that is, it lists the contents of all subdirectories—this enumerator object is useful for performing actions that involve large file-system subtrees. This method does not resolve symbolic links encountered in the traversal process, nor does it recurse through them if they point to a directory.

This code fragment enumerates the subdirectories and files under a user’s `Documents` directory and processes all files with an extension of `.doc`:

```objc
NSString *docsDir = [NSHomeDirectory() stringByAppendingPathComponent:  @"Documents"];
NSFileManager *localFileManager=[[NSFileManager alloc] init];
NSDirectoryEnumerator *dirEnum =
    [localFileManager enumeratorAtPath:docsDir];
 
NSString *file;
while ((file = [dirEnum nextObject])) {
    if ([[file pathExtension] isEqualToString: @"doc"]) {
        // process the document
        [self scanDocument: [docsDir stringByAppendingPathComponent:file]];
    }
}
```

The [FileManager.DirectoryEnumerator](directoryenumerator.md) class has methods for obtaining the attributes of the existing path and of the parent directory and for skipping descendants of the existing path.

## See Also

### Related Documentation

- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [FileManager.DirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

# enumeratorAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.

## Declaration

```objectivec
- (NSDirectoryEnumerator<NSString *> *) enumeratorAtPath:(NSString *) path;
```

## Parameters

- `path`: The path of the directory to enumerate.

<a id="return-value"></a>

## Return Value

A [NSDirectoryEnumerator](directoryenumerator.md) object that enumerates the contents of the directory at `path`.

<a id="discussion"></a>

## Discussion

If `path` is a filename, the method returns an enumerator object that enumerates no files—the first call to [nextObject](../nsenumerator/nextobject%28%29.md) will return `nil`.

Because the enumeration is deep—that is, it lists the contents of all subdirectories—this enumerator object is useful for performing actions that involve large file-system subtrees. This method does not resolve symbolic links encountered in the traversal process, nor does it recurse through them if they point to a directory.

This code fragment enumerates the subdirectories and files under a user’s `Documents` directory and processes all files with an extension of `.doc`:

```objc
NSString *docsDir = [NSHomeDirectory() stringByAppendingPathComponent:  @"Documents"];
NSFileManager *localFileManager=[[NSFileManager alloc] init];
NSDirectoryEnumerator *dirEnum =
    [localFileManager enumeratorAtPath:docsDir];
 
NSString *file;
while ((file = [dirEnum nextObject])) {
    if ([[file pathExtension] isEqualToString: @"doc"]) {
        // process the document
        [self scanDocument: [docsDir stringByAppendingPathComponent:file]];
    }
}
```

The [NSDirectoryEnumerator](directoryenumerator.md) class has methods for obtaining the attributes of the existing path and of the parent directory and for skipping descendants of the existing path.

## See Also

### Related Documentation

- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [NSDirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
