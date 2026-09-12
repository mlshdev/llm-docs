> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatestringbyreplacingpercentescapes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatestringbyreplacingpercentescapes(_:_:_:))

# CFURLCreateStringByReplacingPercentEscapes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new string by replacing any percent escape sequences with their character equivalent.

## Declaration

```swift
func CFURLCreateStringByReplacingPercentEscapes(_ allocator: CFAllocator!, _ originalString: CFString!, _ charactersToLeaveEscaped: CFString!) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `originalString`: The `CFString` object to be copied and modified.
- `charactersToLeaveEscaped`: Characters whose percent escape sequences, such as `%20` for a space character, you want to leave intact. Pass `NULL` to specify that no percent escapes be replaced, or the empty string (`CFSTR("")`) to specify that all be replaced.

<a id="return-value"></a>

## Return Value

A new `CFString` object, or `NULL` if the percent escapes cannot be converted to characters, assuming UTF-8 encoding. If no characters need to be replaced, this function returns the original string with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData(\_:\_:\_:\_:)](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes(\_:\_:\_:\_:\_:)](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding(\_:\_:\_:\_:)](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation(\_:\_:\_:\_:)](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef(\_:\_:)](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString(\_:)](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.

# CFURLCreateStringByReplacingPercentEscapes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new string by replacing any percent escape sequences with their character equivalent.

## Declaration

```objectivec
extern CFStringRefCFURLCreateStringByReplacingPercentEscapes(CFAllocatorRef allocator, CFStringRef originalString, CFStringRef charactersToLeaveEscaped);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFString` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `originalString`: The `CFString` object to be copied and modified.
- `charactersToLeaveEscaped`: Characters whose percent escape sequences, such as `%20` for a space character, you want to leave intact. Pass `NULL` to specify that no percent escapes be replaced, or the empty string (`CFSTR("")`) to specify that all be replaced.

<a id="return-value"></a>

## Return Value

A new `CFString` object, or `NULL` if the percent escapes cannot be converted to characters, assuming UTF-8 encoding. If no characters need to be replaced, this function returns the original string with its reference count incremented. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting URLs to Other Representations

- [CFURLCreateData](cfurlcreatedata%28________%29.md): Creates a `CFData` object containing the content of a given URL.
- [CFURLCreateStringByAddingPercentEscapes](cfurlcreatestringbyaddingpercentescapes%28__________%29.md): Deprecated. Creates a copy of a string, replacing certain characters with the equivalent percent escape sequence based on the specified encoding.
- [CFURLCreateStringByReplacingPercentEscapesUsingEncoding](cfurlcreatestringbyreplacingpercentescapesusingencoding%28________%29.md): Deprecated. Creates a new string by replacing any percent escape sequences with their character equivalent.
- [CFURLGetFileSystemRepresentation](cfurlgetfilesystemrepresentation%28________%29.md): Fills a buffer with the file system’s native string representation of a given URL’s path.
- [CFURLGetFSRef](cfurlgetfsref%28____%29.md): Deprecated. Converts a given URL to a file or directory object.
- [CFURLGetString](cfurlgetstring%28__%29.md): Returns the URL as a `CFString` object.
