> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(resolvingbookmarkdata:options:relativeto:bookmarkdataisstale:)-3ic6f](https://developer.apple.com/documentation/foundation/url/init(resolvingbookmarkdata:options:relativeto:bookmarkdataisstale:)-3ic6f)

# init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift 4.2+

Creates a URL that refers to a location specified by resolving bookmark data.

## Declaration

```swift
init(resolvingBookmarkData data: Data, options: URL.BookmarkResolutionOptions = [], relativeTo url: URL? = nil, bookmarkDataIsStale: inout Bool) throws
```

## Parameters

- `data`: The bookmark data used to construct a URL.
- `options`: Options taken into account when resolving the bookmark data.

  To resolve a security-scoped bookmark to support App Sandbox, include the [withSecurityScope](../nsurl/bookmarkresolutionoptions/withsecurityscope.md) option.
- `url`: The base URL that the bookmark data is relative to.

  If you’re resolving a security-scoped bookmark to obtain a security-scoped URL, use this parameter as follows:

  - To resolve an app-scoped bookmark, use a value of `nil`.
  - To resolve a document-scoped bookmark, use the *absolute* path (despite this parameter’s name) to the document from which you retrieved the bookmark.

  App Sandbox doesn’t restrict which URL values you can pass to this parameter.
- `bookmarkDataIsStale`: On return, if `true`, the bookmark data is stale. Your app should create a new bookmark using the returned URL and use it in place of any stored copies of the existing bookmark.

## See Also

### Creating a URL from a string

- [init(string:)](init%28string_%29.md): Creates a URL instance from the provided string.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates a URL instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(string:relativeTo:)](init%28string_relativeto_%29.md): Creates a URL instance from the provided string, relative to another URL.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-97e6x.md): Initializes a URL that refers to a location specified by resolving bookmark data.
