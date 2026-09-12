> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(string:encodinginvalidcharacters:)](https://developer.apple.com/documentation/foundation/url/init(string:encodinginvalidcharacters:))

# init(string:encodingInvalidCharacters:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a URL instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.

## Declaration

```swift
init?(string: String, encodingInvalidCharacters: Bool)
```

## Parameters

- `string`: A URL location.
- `encodingInvalidCharacters`: A Boolean value that indicates whether the initializer attempts to encode any invalid characters in `string`.

<a id="Discussion"></a>

## Discussion

If `encodingInvalidCharacters` is `true`, this initializer tries to encode the string to create a valid URL. If the URL string is still invalid after encoding, the initializer returns `nil`.

## See Also

### Creating a URL from a string

- [init(string:)](init%28string_%29.md): Creates a URL instance from the provided string.
- [init(string:relativeTo:)](init%28string_relativeto_%29.md): Creates a URL instance from the provided string, relative to another URL.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-3ic6f.md): Creates a URL that refers to a location specified by resolving bookmark data.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-97e6x.md): Initializes a URL that refers to a location specified by resolving bookmark data.
