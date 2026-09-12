> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatedata(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatedata(_:_:_:_:))

# CFURLCreateData(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFData` object containing the content of a given URL.

## Declaration

```swift
func CFURLCreateData(_ allocator: CFAllocator!, _ url: CFURL!, _ encoding: CFStringEncoding, _ escapeWhitespace: Bool) -> CFData!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFData` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `url`: The URL to convert into a `CFData` object.
- `encoding`: The string encoding to use when converting `url` into a `CFData` object.
- `escapeWhitespace`: `true` if you want to escape whitespace characters in the URL, `false` otherwise.

<a id="return-value"></a>

## Return Value

A new `CFData` object containing the content of `url`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function escapes any character that is not 7-bit ASCII with the byte-code for the given encoding. If `escapeWhitespace` is `true`, whitespace characters (’ ’, ‘\\t’, ‘\\r’, ‘\\n’) will be escaped as well. This is desirable if you want to embed the URL into a larger text stream like HTML.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation(\_:\_:\_:\_:)](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef(\_:\_:)](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLCreateData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFData` object containing the content of a given URL.

## Declaration

```objectivec
extern CFDataRefCFURLCreateData(CFAllocatorRef allocator, CFURLRef url, CFStringEncoding encoding, Boolean escapeWhitespace);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFData` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `url`: The URL to convert into a `CFData` object.
- `encoding`: The string encoding to use when converting `url` into a `CFData` object.
- `escapeWhitespace`: `true` if you want to escape whitespace characters in the URL, `false` otherwise.

<a id="return-value"></a>

## Return Value

A new `CFData` object containing the content of `url`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function escapes any character that is not 7-bit ASCII with the byte-code for the given encoding. If `escapeWhitespace` is `true`, whitespace characters (’ ’, ‘\\t’, ‘\\r’, ‘\\n’) will be escaped as well. This is desirable if you want to embed the URL into a larger text stream like HTML.

## See Also

### Converting URLs to Other Representations

- [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
