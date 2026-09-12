> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlgetfsref(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlgetfsref(_:_:))

# CFURLGetFSRef(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Converts a given URL to a file or directory object.

> Not supported

## Declaration

```swift
func CFURLGetFSRef(_ url: CFURL!, _ fsRef: OpaquePointer!) -> Bool
```

## Parameters

- `url`: The `CFURL` object to convert to a file or directory object.
- `fsRef`: Upon return, contains the file or directory object representing `url`.

<a id="return-value"></a>

## Return Value

`true` if the conversion was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The function cannot create an `FSRef` object if any of the leading path parts specified by `url` is an alias. The function can, however, traverse symbolic links.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData(\_:\_:\_:\_:)](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation(\_:\_:\_:\_:)](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLGetFSRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Converts a given URL to a file or directory object.

> Not supported

## Declaration

```objectivec
extern Boolean CFURLGetFSRef(CFURLRef url, struct FSRef *fsRef);
```

## Parameters

- `url`: The `CFURL` object to convert to a file or directory object.
- `fsRef`: Upon return, contains the file or directory object representing `url`.

<a id="return-value"></a>

## Return Value

`true` if the conversion was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

The function cannot create an `FSRef` object if any of the leading path parts specified by `url` is an alias. The function can, however, traverse symbolic links.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
