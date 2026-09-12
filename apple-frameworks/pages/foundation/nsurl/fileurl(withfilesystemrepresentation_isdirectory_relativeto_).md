> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/fileurl(withfilesystemrepresentation:isdirectory:relativeto:)](https://developer.apple.com/documentation/foundation/nsurl/fileurl(withfilesystemrepresentation:isdirectory:relativeto:))

# fileURL(withFileSystemRepresentation:isDirectory:relativeTo:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL object initialized with a C string representing a local file system path.

## Declaration

```swift
class func fileURL(withFileSystemRepresentation path: UnsafePointer<CChar>, isDirectory isDir: Bool, relativeTo baseURL: URL?) -> URL
```

## Parameters

- `path`: A null-terminated C string in file system representation containing the path to represent as a URL. If this path is a relative path, it is treated as being relative to the current working directory.
- `isDir`: [true](https://developer.apple.com/documentation/swift/true) if the last path part is a directory, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `baseURL`: The base URL for the new URL object. This must be a file URL. If `path` is absolute, this URL is ignored.

<a id="return-value"></a>

## Return Value

Returns the new object.

<a id="Discussion"></a>

## Discussion

The file system representation format is described in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

## See Also

### Creating a URL object

- [init(string:)](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(string:relativeTo:)](init%28string_relativeto_%29.md): Initializes an NSURL object with a base URL and a relative string.
- [fileURL(withPath:isDirectory:)](fileurl%28withpath_isdirectory_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURL(withPath:relativeTo:)](fileurl%28withpath_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURL(withPath:isDirectory:relativeTo:)](fileurl%28withpath_isdirectory_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURL(withPath:)](fileurl%28withpath_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [init(fileURLWithPath:)](init%28fileurlwithpath_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURL(withPathComponents:)](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
- [init(resolvingAliasFileAt:options:)](init%28resolvingaliasfileat_options_%29.md): Returns a new URL made by resolving the alias file at `url`.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29.md): Initializes a newly created NSURL that points to a location specified by resolving bookmark data.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Fills the provided buffer with a C string representing a local file system path.

# fileURLWithFileSystemRepresentation:isDirectory:relativeToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL object initialized with a C string representing a local file system path.

## Declaration

```objectivec
+ (NSURL *) fileURLWithFileSystemRepresentation:(const char *) path isDirectory:(BOOL) isDir relativeToURL:(NSURL *) baseURL;
```

## Parameters

- `path`: A null-terminated C string in file system representation containing the path to represent as a URL. If this path is a relative path, it is treated as being relative to the current working directory.
- `isDir`: [true](https://developer.apple.com/documentation/swift/true) if the last path part is a directory, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `baseURL`: The base URL for the new URL object. This must be a file URL. If `path` is absolute, this URL is ignored.

<a id="return-value"></a>

## Return Value

Returns the new object.

<a id="Discussion"></a>

## Discussion

The file system representation format is described in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

## See Also

### Creating a URL object

- [URLWithString:](urlwithstring_.md): Creates and returns an NSURL object initialized with a provided URL string.
- [initWithString:](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [URLWithString:encodingInvalidCharacters:](urlwithstring_encodinginvalidcharacters_.md): Creates and returns an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [URLWithString:relativeToURL:](urlwithstring_relativetourl_.md): Creates and returns an NSURL object initialized with a base URL and a relative string.
- [initWithString:relativeToURL:](init%28string_relativeto_%29.md): Initializes an NSURL object with a base URL and a relative string.
- [fileURLWithPath:isDirectory:](fileurl%28withpath_isdirectory_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [initFileURLWithPath:isDirectory:](init%28fileurlwithpath_isdirectory_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPath:relativeToURL:](fileurl%28withpath_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:relativeToURL:](init%28fileurlwithpath_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:isDirectory:relativeToURL:](fileurl%28withpath_isdirectory_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:isDirectory:relativeToURL:](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:](fileurl%28withpath_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [initFileURLWithPath:](init%28fileurlwithpath_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPathComponents:](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
