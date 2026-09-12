> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/fileurl(withpath:isdirectory:)](https://developer.apple.com/documentation/foundation/nsurl/fileurl(withpath:isdirectory:))

# fileURL(withPath:isDirectory:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a newly created NSURL object as a file URL with a specified path.

## Declaration

```swift
class func fileURL(withPath path: String, isDirectory isDir: Bool) -> URL
```

## Parameters

- `path`: The path that the NSURL object will represent. `path` should be a valid system path, and must not be an empty path. If `path` begins with a tilde, it must first be expanded with [expandingTildeInPath](../nsstring/expandingtildeinpath.md). If `path` is a relative path, it is treated as being relative to the current working directory.
- `isDir`: A Boolean value that specifies whether `path` is treated as a directory path when resolving against relative path components. Pass [true](https://developer.apple.com/documentation/swift/true) if the `path` indicates a directory, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An NSURL object initialized with `path`.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

## See Also

### Creating a URL object

- [init(string:)](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(string:relativeTo:)](init%28string_relativeto_%29.md): Initializes an NSURL object with a base URL and a relative string.
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
- [fileURL(withFileSystemRepresentation:isDirectory:relativeTo:)](fileurl%28withfilesystemrepresentation_isdirectory_relativeto_%29.md): Returns a new URL object initialized with a C string representing a local file system path.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Fills the provided buffer with a C string representing a local file system path.

# fileURLWithPath:isDirectory: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a newly created NSURL object as a file URL with a specified path.

## Declaration

```objectivec
+ (NSURL *) fileURLWithPath:(NSString *) path isDirectory:(BOOL) isDir;
```

## Parameters

- `path`: The path that the NSURL object will represent. `path` should be a valid system path, and must not be an empty path. If `path` begins with a tilde, it must first be expanded with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md). If `path` is a relative path, it is treated as being relative to the current working directory.
- `isDir`: A Boolean value that specifies whether `path` is treated as a directory path when resolving against relative path components. Pass [true](https://developer.apple.com/documentation/swift/true) if the `path` indicates a directory, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An NSURL object initialized with `path`.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

## See Also

### Creating a URL object

- [URLWithString:](urlwithstring_.md): Creates and returns an NSURL object initialized with a provided URL string.
- [initWithString:](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [URLWithString:encodingInvalidCharacters:](urlwithstring_encodinginvalidcharacters_.md): Creates and returns an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [URLWithString:relativeToURL:](urlwithstring_relativetourl_.md): Creates and returns an NSURL object initialized with a base URL and a relative string.
- [initWithString:relativeToURL:](init%28string_relativeto_%29.md): Initializes an NSURL object with a base URL and a relative string.
- [initFileURLWithPath:isDirectory:](init%28fileurlwithpath_isdirectory_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPath:relativeToURL:](fileurl%28withpath_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:relativeToURL:](init%28fileurlwithpath_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:isDirectory:relativeToURL:](fileurl%28withpath_isdirectory_relativeto_%29.md): Initializes and returns a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [initFileURLWithPath:isDirectory:relativeToURL:](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Initializes a newly created file NSURL referencing the local file or directory at path, relative to a base URL.
- [fileURLWithPath:](fileurl%28withpath_%29.md): Initializes and returns a newly created NSURL object as a file URL with a specified path.
- [initFileURLWithPath:](init%28fileurlwithpath_%29.md): Initializes a newly created NSURL referencing the local file or directory at `path`.
- [fileURLWithPathComponents:](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
- [URLByResolvingAliasFileAtURL:options:error:](init%28resolvingaliasfileat_options_%29.md): Returns a new URL made by resolving the alias file at `url`.
