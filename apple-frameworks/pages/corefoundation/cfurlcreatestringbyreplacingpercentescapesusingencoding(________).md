> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatestringbyreplacingpercentescapesusingencoding(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatestringbyreplacingpercentescapesusingencoding(_:_:_:_:))

# CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a new string by replacing any percent escape sequences with their character equivalent.

> Use \[NSString stringByRemovingPercentEncoding\] or CFURLCreateStringByReplacingPercentEscapes() instead, which always uses the recommended UTF-8 encoding.

## Declaration

```swift
func CFURLCreateStringByReplacingPercentEscapesUsingEncoding(_ allocator: CFAllocator!, _ origString: CFString!, _ charsToLeaveEscaped: CFString!, _ encoding: CFStringEncoding) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `origString`: The `CFString` object to be copied and modified.
- `charsToLeaveEscaped`: Characters whose percent escape sequences, such as `%20` for a space character, you want to leave intact. Pass `NULL` to specify that no percent escapes be replaced, or the empty string (`CFSTR("")`) to specify that all be replaced.
- `encoding`: Specifies the encoding to use when interpreting percent escapes. If you are uncertain of the correct encoding, you should use UTF-8 ([CFStringBuiltInEncodings.UTF8](cfstringbuiltinencodings/utf8.md)), which is the encoding designated by RFC 3986 as the correct encoding for use in URLs.

<a id="return-value"></a>

## Return Value

A new `CFString` object, or `NULL` if the percent escapes cannot be converted to characters, assuming the encoding given by `encoding`. If no characters need to be replaced, this function returns the original string with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData(\_:\_:\_:\_:)](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation(\_:\_:\_:\_:)](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef(\_:\_:)](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLCreateStringByReplacingPercentEscapesUsingEncoding (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a new string by replacing any percent escape sequences with their character equivalent.

> Use \[NSString stringByRemovingPercentEncoding\] or CFURLCreateStringByReplacingPercentEscapes() instead, which always uses the recommended UTF-8 encoding.

## Declaration

```objectivec
extern CFStringRefCFURLCreateStringByReplacingPercentEscapesUsingEncoding(CFAllocatorRef allocator, CFStringRef origString, CFStringRef charsToLeaveEscaped, CFStringEncoding encoding);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `origString`: The `CFString` object to be copied and modified.
- `charsToLeaveEscaped`: Characters whose percent escape sequences, such as `%20` for a space character, you want to leave intact. Pass `NULL` to specify that no percent escapes be replaced, or the empty string (`CFSTR("")`) to specify that all be replaced.
- `encoding`: Specifies the encoding to use when interpreting percent escapes. If you are uncertain of the correct encoding, you should use UTF-8 ([kCFStringEncodingUTF8](cfstringbuiltinencodings/utf8.md)), which is the encoding designated by RFC 3986 as the correct encoding for use in URLs.

<a id="return-value"></a>

## Return Value

A new `CFString` object, or `NULL` if the percent escapes cannot be converted to characters, assuming the encoding given by `encoding`. If no characters need to be replaced, this function returns the original string with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapes](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
