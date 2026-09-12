> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatestringbyaddingpercentescapes(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatestringbyaddingpercentescapes(_:_:_:_:_:))

# CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.

> Use \[NSString stringByAddingPercentEncodingWithAllowedCharacters:\] instead, which always uses the recommended UTF-8 encoding, and which encodes for a specific URL component or subcomponent (since each URL component or subcomponent has different rules for what characters are valid).

## Declaration

```swift
func CFURLCreateStringByAddingPercentEscapes(_ allocator: CFAllocator!, _ originalString: CFString!, _ charactersToLeaveUnescaped: CFString!, _ legalURLCharactersToBeEscaped: CFString!, _ encoding: CFStringEncoding) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `originalString`: The `CFString` object to copy.
- `charactersToLeaveUnescaped`: Characters whose percent escape sequences you want to leave intact. Pass `NULL` to specify that all illegal characters be escaped.
- `legalURLCharactersToBeEscaped`: Legal characters to be escaped. Pass `NULL` to specify that no legal characters be replaced.
- `encoding`: The encoding to use for the translation. If you are uncertain of the correct encoding, you should use UTF-8 ([CFStringBuiltInEncodings.UTF8](cfstringbuiltinencodings/utf8.md)), which is the encoding designated by RFC 2396 as the correct encoding for use in URLs.

<a id="return-value"></a>

## Return Value

A copy of `originalString` replacing certain characters. If it does not need to be modified (no percent escape sequences are missing), this function may merely return `originalString` with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The characters escaped are all characters that are not legal URL characters (based on RFC 2396), plus any characters in `legalURLCharactersToBeEscaped`, less any characters in `charactersToLeaveUnescaped`. To simply correct any non-URL characters in an otherwise correct URL string, pass `NULL` for the `allocator`, `charactersToLeaveEscaped`, and `legalURLCharactersToBeEscaped` parameters, and [CFStringBuiltInEncodings.UTF8](cfstringbuiltinencodings/utf8.md) as the `encoding` parameter.

It may be difficult to use this function to “clean up” unescaped or partially escaped URL strings where sequences are unpredictable and you cannot specify `charactersToLeaveUnescaped`. Instead, you can “pre-process” a URL string using [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md) then add the escape characters using [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md), as shown in the following code fragment.

```objc
CFStringRef originalURLString = CFSTR("http://online.store.com/storefront/?request=get-document&doi=10.1175%2F1520-0426(2005)014%3C1157:DODADSS%3E2.0.CO%3B2");
CFStringRef preprocessedString =
    CFURLCreateStringByReplacingPercentEscapesUsingEncoding(kCFAllocatorDefault, originalURLString, CFSTR(""), kCFStringEncodingUTF8);
CFStringRef urlString =
    CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault, preprocessedString, NULL, NULL, kCFStringEncodingUTF8);
url = CFURLCreateWithString(kCFAllocatorDefault, urlString, NULL);
```

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData(\_:\_:\_:\_:)](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation(\_:\_:\_:\_:)](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef(\_:\_:)](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLCreateStringByAddingPercentEscapes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.

> Use \[NSString stringByAddingPercentEncodingWithAllowedCharacters:\] instead, which always uses the recommended UTF-8 encoding, and which encodes for a specific URL component or subcomponent (since each URL component or subcomponent has different rules for what characters are valid).

## Declaration

```objectivec
extern CFStringRefCFURLCreateStringByAddingPercentEscapes(CFAllocatorRef allocator, CFStringRef originalString, CFStringRef charactersToLeaveUnescaped, CFStringRef legalURLCharactersToBeEscaped, CFStringEncoding encoding);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `originalString`: The `CFString` object to copy.
- `charactersToLeaveUnescaped`: Characters whose percent escape sequences you want to leave intact. Pass `NULL` to specify that all illegal characters be escaped.
- `legalURLCharactersToBeEscaped`: Legal characters to be escaped. Pass `NULL` to specify that no legal characters be replaced.
- `encoding`: The encoding to use for the translation. If you are uncertain of the correct encoding, you should use UTF-8 ([kCFStringEncodingUTF8](cfstringbuiltinencodings/utf8.md)), which is the encoding designated by RFC 2396 as the correct encoding for use in URLs.

<a id="return-value"></a>

## Return Value

A copy of `originalString` replacing certain characters. If it does not need to be modified (no percent escape sequences are missing), this function may merely return `originalString` with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The characters escaped are all characters that are not legal URL characters (based on RFC 2396), plus any characters in `legalURLCharactersToBeEscaped`, less any characters in `charactersToLeaveUnescaped`. To simply correct any non-URL characters in an otherwise correct URL string, pass `NULL` for the `allocator`, `charactersToLeaveEscaped`, and `legalURLCharactersToBeEscaped` parameters, and [kCFStringEncodingUTF8](cfstringbuiltinencodings/utf8.md) as the `encoding` parameter.

It may be difficult to use this function to “clean up” unescaped or partially escaped URL strings where sequences are unpredictable and you cannot specify `charactersToLeaveUnescaped`. Instead, you can “pre-process” a URL string using [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md) then add the escape characters using [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md), as shown in the following code fragment.

```objc
CFStringRef originalURLString = CFSTR("http://online.store.com/storefront/?request=get-document&doi=10.1175%2F1520-0426(2005)014%3C1157:DODADSS%3E2.0.CO%3B2");
CFStringRef preprocessedString =
    CFURLCreateStringByReplacingPercentEscapesUsingEncoding(kCFAllocatorDefault, originalURLString, CFSTR(""), kCFStringEncodingUTF8);
CFStringRef urlString =
    CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault, preprocessedString, NULL, NULL, kCFStringEncodingUTF8);
url = CFURLCreateWithString(kCFAllocatorDefault, urlString, NULL);
```

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByReplacingPercentEscapes](cfurlcreatestringbyreplacingpercentescapes%28______%29.md): Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
