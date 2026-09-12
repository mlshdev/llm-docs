> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/init(resolvingbookmarkdata:options:relativeto:bookmarkdataisstale:)](https://developer.apple.com/documentation/foundation/nsurl/init(resolvingbookmarkdata:options:relativeto:bookmarkdataisstale:))

# init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly created NSURL that points to a location specified by resolving bookmark data.

## Declaration

```swift
convenience init(resolvingBookmarkData bookmarkData: Data, options: NSURL.BookmarkResolutionOptions = [], relativeTo relativeURL: URL?, bookmarkDataIsStale isStale: UnsafeMutablePointer<ObjCBool>?) throws
```

## Parameters

- `bookmarkData`: The bookmark data the URL is derived from.
- `options`: Options taken into account when resolving the bookmark data.
- `relativeURL`: The base URL that the bookmark data is relative to.
- `isStale`: If [true](https://developer.apple.com/documentation/swift/true), the bookmark data is stale.

<a id="return-value"></a>

## Return Value

An NSURL initialized by resolving `bookmarkData`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

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
- [fileURL(withFileSystemRepresentation:isDirectory:relativeTo:)](fileurl%28withfilesystemrepresentation_isdirectory_relativeto_%29.md): Returns a new URL object initialized with a C string representing a local file system path.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Fills the provided buffer with a C string representing a local file system path.

# initByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly created NSURL that points to a location specified by resolving bookmark data.

## Declaration

```objectivec
- (instancetype) initByResolvingBookmarkData:(NSData *) bookmarkData options:(NSURLBookmarkResolutionOptions) options relativeToURL:(NSURL *) relativeURL bookmarkDataIsStale:(BOOL *) isStale error:(NSError **) error;
```

## Parameters

- `bookmarkData`: The bookmark data the URL is derived from.
- `options`: Options taken into account when resolving the bookmark data.
- `relativeURL`: The base URL that the bookmark data is relative to.
- `isStale`: If [true](https://developer.apple.com/documentation/swift/true), the bookmark data is stale.
- `error`: The error that occurred in the case that the URL cannot be created.

<a id="return-value"></a>

## Return Value

An NSURL initialized by resolving `bookmarkData`. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

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
