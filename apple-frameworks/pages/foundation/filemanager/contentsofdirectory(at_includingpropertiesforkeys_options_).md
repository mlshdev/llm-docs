> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/contentsofdirectory(at:includingpropertiesforkeys:options:)](https://developer.apple.com/documentation/foundation/filemanager/contentsofdirectory(at:includingpropertiesforkeys:options:))

# contentsOfDirectory(at:includingPropertiesForKeys:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow search of the specified directory and returns URLs for the contained items.

## Declaration

```swift
func contentsOfDirectory(at url: URL, includingPropertiesForKeys keys: [URLResourceKey]?, options mask: FileManager.DirectoryEnumerationOptions = []) throws -> [URL]
```

## Parameters

- `url`: The URL for the directory whose contents you want to enumerate.
- `keys`: An array of keys that identify the file properties that you want pre-fetched for each item in the directory. For each returned URL, the specified properties are fetched and cached in the [NSURL](../nsurl.md) object. For a list of keys you can specify, see [Common File System Resource Keys](../../corefoundation/common-file-system-resource-keys.md).

  If you want directory contents to have no pre-fetched file properties, pass an empty array to this parameter. If you want directory contents to have default set of pre-fetched file properties, pass `nil` to this parameter.
- `mask`: Options for the enumeration. Because this method performs only shallow enumerations, options that prevent descending into subdirectories or packages are not allowed; the only supported option is [skipsHiddenFiles](directoryenumerationoptions/skipshiddenfiles.md).

<a id="return-value"></a>

## Return Value

An array of [NSURL](../nsurl.md) objects, each of which identifies a file, directory, or symbolic link contained in `url`. If the directory contains no entries, this method returns an empty array. When using Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

This method performs a shallow search of the directory and therefore does not traverse symbolic links or return the contents of any subdirectories. This method also does not return URLs for the current directory (”`.`”), parent directory (”`..`”), or resource forks (files that begin with “`._`”) but it does return other hidden files. If you need to perform a deep enumeration, use the [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) method instead.

The order of the files in the returned array is undefined.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Discovering directory contents

- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [FileManager.DirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

# contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow search of the specified directory and returns URLs for the contained items.

## Declaration

```objectivec
- (NSArray<NSURL *> *) contentsOfDirectoryAtURL:(NSURL *) url includingPropertiesForKeys:(NSArray<NSString *> *) keys options:(NSDirectoryEnumerationOptions) mask error:(NSError **) error;
```

## Parameters

- `url`: The URL for the directory whose contents you want to enumerate.
- `keys`: An array of keys that identify the file properties that you want pre-fetched for each item in the directory. For each returned URL, the specified properties are fetched and cached in the [NSURL](../nsurl.md) object. For a list of keys you can specify, see [Common File System Resource Keys](../../corefoundation/common-file-system-resource-keys.md).

  If you want directory contents to have no pre-fetched file properties, pass an empty array to this parameter. If you want directory contents to have default set of pre-fetched file properties, pass `nil` to this parameter.
- `mask`: Options for the enumeration. Because this method performs only shallow enumerations, options that prevent descending into subdirectories or packages are not allowed; the only supported option is [NSDirectoryEnumerationSkipsHiddenFiles](directoryenumerationoptions/skipshiddenfiles.md).
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

An array of [NSURL](../nsurl.md) objects, each of which identifies a file, directory, or symbolic link contained in `url`. If the directory contains no entries, this method returns an empty array. When using Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

This method performs a shallow search of the directory and therefore does not traverse symbolic links or return the contents of any subdirectories. This method also does not return URLs for the current directory (”`.`”), parent directory (”`..`”), or resource forks (files that begin with “`._`”) but it does return other hidden files. If you need to perform a deep enumeration, use the [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) method instead.

The order of the files in the returned array is undefined.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Discovering directory contents

- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
