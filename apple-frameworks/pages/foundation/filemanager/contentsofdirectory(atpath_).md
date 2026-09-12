> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/contentsofdirectory(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/contentsofdirectory(atpath:))

# contentsOfDirectory(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow search of the specified directory and returns the paths of any contained items.

## Declaration

```swift
func contentsOfDirectory(atPath path: String) throws -> [String]
```

## Parameters

- `path`: The path to the directory whose contents you want to enumerate.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects, each of which identifies a file, directory, or symbolic link contained in `path`. Returns an empty array if the directory exists but has no contents. In Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

This method performs a shallow search of the directory and therefore does not traverse symbolic links or return the contents of any subdirectories. This method also does not return URLs for the current directory (”`.`”), parent directory (”`..`”), or resource forks (files that begin with “`._`”) but it does return other hidden files (files that begin with a period character). If you need to perform a deep enumeration, use the [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) method instead.

The order of the files in the returned array is undefined.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileExists(atPath:isDirectory:)](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

### Discovering directory contents

- [contentsOfDirectory(at:includingPropertiesForKeys:options:)](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [enumerator(at:includingPropertiesForKeys:options:errorHandler:)](enumerator%28at_includingpropertiesforkeys_options_errorhandler_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [FileManager.DirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [FileManager.VolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLs(includingResourceValuesForKeys:options:)](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectory(atPath:)](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.

# contentsOfDirectoryAtPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a shallow search of the specified directory and returns the paths of any contained items.

## Declaration

```objectivec
- (NSArray<NSString *> *) contentsOfDirectoryAtPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: The path to the directory whose contents you want to enumerate.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects, each of which identifies a file, directory, or symbolic link contained in `path`. Returns an empty array if the directory exists but has no contents. In Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

This method performs a shallow search of the directory and therefore does not traverse symbolic links or return the contents of any subdirectories. This method also does not return URLs for the current directory (”`.`”), parent directory (”`..`”), or resource forks (files that begin with “`._`”) but it does return other hidden files (files that begin with a period character). If you need to perform a deep enumeration, use the [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) method instead.

The order of the files in the returned array is undefined.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileExistsAtPath:isDirectory:](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](../nsfilemanager/enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
