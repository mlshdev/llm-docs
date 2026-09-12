> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/init(string:encodinginvalidcharacters:)](https://developer.apple.com/documentation/foundation/nsurl/init(string:encodinginvalidcharacters:))

# init(string:encodingInvalidCharacters:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.

## Declaration

```swift
convenience init?(string URLString: String, encodingInvalidCharacters: Bool)
```

## Parameters

- `URLString`: A URL location.
- `encodingInvalidCharacters`: A Boolean value that indicates whether the initializer attempts to encode any invalid characters in `string`.

<a id="Discussion"></a>

## Discussion

If `encodingInvalidCharacters` is `true`, this initializer tries to encode the string to create a valid URL. If the URL string is still invalid after encoding, the initializer returns `nil`.

## See Also

### Creating a URL object

- [init(string:)](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
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
- [fileURL(withFileSystemRepresentation:isDirectory:relativeTo:)](fileurl%28withfilesystemrepresentation_isdirectory_relativeto_%29.md): Returns a new URL object initialized with a C string representing a local file system path.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Fills the provided buffer with a C string representing a local file system path.

# initWithString:encodingInvalidCharacters: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) URLString encodingInvalidCharacters:(BOOL) encodingInvalidCharacters;
```

## Parameters

- `URLString`: A URL location.
- `encodingInvalidCharacters`: A Boolean value that indicates whether the initializer attempts to encode any invalid characters in `string`.

<a id="Discussion"></a>

## Discussion

If `encodingInvalidCharacters` is `true`, this initializer tries to encode the string to create a valid URL. If the URL string is still invalid after encoding, the initializer returns `nil`.

## See Also

### Creating a URL object

- [URLWithString:](urlwithstring_.md): Creates and returns an NSURL object initialized with a provided URL string.
- [initWithString:](init%28string_%29.md): Initializes an NSURL object with a provided URL string.
- [URLWithString:encodingInvalidCharacters:](urlwithstring_encodinginvalidcharacters_.md): Creates and returns an instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
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
- [URLByResolvingAliasFileAtURL:options:error:](init%28resolvingaliasfileat_options_%29.md): Returns a new URL made by resolving the alias file at `url`.
