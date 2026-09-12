> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlgetfilesystemrepresentation(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlgetfilesystemrepresentation(_:_:_:_:))

# CFURLGetFileSystemRepresentation(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with the file system’s native string representation of a given URL’s path.

## Declaration

```swift
func CFURLGetFileSystemRepresentation(_ url: CFURL!, _ resolveAgainstBase: Bool, _ buffer: UnsafeMutablePointer<UInt8>!, _ maxBufLen: CFIndex) -> Bool
```

## Parameters

- `url`: The `CFURL` object whose native file system representation you want to obtain.
- `resolveAgainstBase`: Pass `true` to return an absolute path name.
- `buffer`: A pointer to a character buffer. On return, the buffer holds the native file system’s representation of `url`. The buffer is null-terminated. This parameter must be at least `maxBufLen` in size for the file system in question to avoid failures for insufficiently large buffers.
- `maxBufLen`: The maximum number of characters that can be written to `buffer`.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

No more than `maxBufLen` bytes are written to `buffer`. If `url` requires more than `maxBufLen` bytes to represent itself, including the terminating null byte, this function returns `false`. To avoid this possible failure, you should pass a buffer with size of at least the maximum path length for the file system in question.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData(\_:\_:\_:\_:)](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFSRef(\_:\_:)](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLGetFileSystemRepresentation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with the file system’s native string representation of a given URL’s path.

## Declaration

```objectivec
extern Boolean CFURLGetFileSystemRepresentation(CFURLRef url, Boolean resolveAgainstBase, UInt8 *buffer, CFIndex maxBufLen);
```

## Parameters

- `url`: The `CFURL` object whose native file system representation you want to obtain.
- `resolveAgainstBase`: Pass `true` to return an absolute path name.
- `buffer`: A pointer to a character buffer. On return, the buffer holds the native file system’s representation of `url`. The buffer is null-terminated. This parameter must be at least `maxBufLen` in size for the file system in question to avoid failures for insufficiently large buffers.
- `maxBufLen`: The maximum number of characters that can be written to `buffer`.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

No more than `maxBufLen` bytes are written to `buffer`. If `url` requires more than `maxBufLen` bytes to represent itself, including the terminating null byte, this function returns `false`. To avoid this possible failure, you should pass a buffer with size of at least the maximum path length for the file system in question.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFSRef](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
