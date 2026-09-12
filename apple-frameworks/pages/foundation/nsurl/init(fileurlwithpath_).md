> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/init(fileurlwithpath:)](https://developer.apple.com/documentation/foundation/nsurl/init(fileurlwithpath:))

# init(fileURLWithPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly created NSURL referencing the local file or directory at `path`.

## Declaration

```swift
init(fileURLWithPath path: String)
```

## Parameters

- `path`: The path that the NSURL object will represent. `path` should be a valid system path, and must not be an empty path. If `path` begins with a tilde, it must first be expanded with [expandingTildeInPath](../nsstring/expandingtildeinpath.md). If `path` is a relative path, it is treated as being relative to the current working directory.

<a id="return-value"></a>

## Return Value

An NSURL object initialized with `path`.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="Discussion"></a>

## Discussion

Invoking this method is equivalent to invoking [init(scheme:host:path:)](init%28scheme_host_path_%29.md) with scheme [NSURLFileScheme](../nsurlfilescheme.md), a `nil` host, and `path`.

This method assumes that `path` is a directory if it ends with a slash. If `path` does not end with a slash, the method examines the file system to determine if `path` is a file or a directory. If `path` exists in the file system and is a directory, the method appends a trailing slash. If `path` does not exist in the file system, the method assumes that it represents a file and does not append a trailing slash.

As an alternative, consider using [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md), which allows you to explicitly specify whether the returned `NSURL` object represents a file or directory.

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
- [fileURL(withPathComponents:)](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
- [init(resolvingAliasFileAt:options:)](init%28resolvingaliasfileat_options_%29.md): Returns a new URL made by resolving the alias file at `url`.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29.md): Initializes a newly created NSURL that points to a location specified by resolving bookmark data.
- [fileURL(withFileSystemRepresentation:isDirectory:relativeTo:)](fileurl%28withfilesystemrepresentation_isdirectory_relativeto_%29.md): Returns a new URL object initialized with a C string representing a local file system path.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Fills the provided buffer with a C string representing a local file system path.

# initFileURLWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly created NSURL referencing the local file or directory at `path`.

## Declaration

```objectivec
- (instancetype) initFileURLWithPath:(NSString *) path;
```

## Parameters

- `path`: The path that the NSURL object will represent. `path` should be a valid system path, and must not be an empty path. If `path` begins with a tilde, it must first be expanded with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md). If `path` is a relative path, it is treated as being relative to the current working directory.

<a id="return-value"></a>

## Return Value

An NSURL object initialized with `path`.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="Discussion"></a>

## Discussion

Invoking this method is equivalent to invoking [initWithScheme:host:path:](init%28scheme_host_path_%29.md) with scheme [NSURLFileScheme](../nsurlfilescheme.md), a `nil` host, and `path`.

This method assumes that `path` is a directory if it ends with a slash. If `path` does not end with a slash, the method examines the file system to determine if `path` is a file or a directory. If `path` exists in the file system and is a directory, the method appends a trailing slash. If `path` does not exist in the file system, the method assumes that it represents a file and does not append a trailing slash.

As an alternative, consider using [initFileURLWithPath:isDirectory:](init%28fileurlwithpath_isdirectory_%29.md), which allows you to explicitly specify whether the returned `NSURL` object represents a file or directory.

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
- [fileURLWithPathComponents:](fileurl%28withpathcomponents_%29.md): Initializes and returns a newly created NSURL object as a file URL with specified path components.
- [URLByResolvingAliasFileAtURL:options:error:](init%28resolvingaliasfileat_options_%29.md): Returns a new URL made by resolving the alias file at `url`.
