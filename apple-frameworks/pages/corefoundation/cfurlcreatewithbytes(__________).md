> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatewithbytes(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatewithbytes(_:_:_:_:_:))

# CFURLCreateWithBytes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFURL` object using a given character bytes.

## Declaration

```swift
func CFURLCreateWithBytes(_ allocator: CFAllocator!, _ URLBytes: UnsafePointer<UInt8>!, _ length: CFIndex, _ encoding: CFStringEncoding, _ baseURL: CFURL!) -> CFURL!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `URLBytes`: The character bytes to convert into a `CFURL` object.
- `length`: The number of bytes in `URLBytes`.
- `encoding`: The string encoding of the `URLBytes` string. This encoding is also used to interpret percent escape sequences.
- `baseURL`: The URL to which `URLBytes` is relative. Pass `NULL` if `URLBytes` contains an absolute URL or if you want to create a relative URL. If `URLBytes` contains an absolute URL, this parameter is ignored.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The specified string encoding will be used both to interpret `URLBytes`, and to interpret any percent-escapes within the string.

> **Note**

>  This function does not support string encoding which isn’t a superset of ASCII encoding. Both [CFURLGetBytes(\_:\_:\_:)](cfurlgetbytes%28______%29.md) and [CFURLGetByteRangeForComponent(\_:\_:\_:)](cfurlgetbyterangeforcomponent%28______%29.md) require 7-bit ASCII characters to be stored in a single 8-bit byte. The following [CFStringEncodings](cfstringencodings.md) can be used: [CFStringBuiltInEncodings.macRoman](cfstringbuiltinencodings/macroman.md), [CFStringBuiltInEncodings.windowsLatin1](cfstringbuiltinencodings/windowslatin1.md), [CFStringBuiltInEncodings.isoLatin1](cfstringbuiltinencodings/isolatin1.md), [CFStringBuiltInEncodings.nextStepLatin](cfstringbuiltinencodings/nextsteplatin.md), [CFStringBuiltInEncodings.ASCII](cfstringbuiltinencodings/ascii.md) and [CFStringBuiltInEncodings.UTF8](cfstringbuiltinencodings/utf8.md).

## See Also

### Creating a CFURL

- [CFURLCopyAbsoluteURL(\_:)](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes(\_:\_:\_:\_:\_:\_:)](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
- [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](cfurlcreatebyresolvingbookmarkdata%28______________%29.md): Returns a new URL made by resolving bookmark data.
- [CFURLCreateCopyAppendingPathComponent(\_:\_:\_:\_:)](cfurlcreatecopyappendingpathcomponent%28________%29.md): Creates a copy of a given URL and appends a path component.
- [CFURLCreateCopyAppendingPathExtension(\_:\_:\_:)](cfurlcreatecopyappendingpathextension%28______%29.md): Creates a copy of a given URL and appends a path extension.
- [CFURLCreateCopyDeletingLastPathComponent(\_:\_:)](cfurlcreatecopydeletinglastpathcomponent%28____%29.md): Creates a copy of a given URL with the last path component deleted.
- [CFURLCreateCopyDeletingPathExtension(\_:\_:)](cfurlcreatecopydeletingpathextension%28____%29.md): Creates a copy of a given URL with its last path extension removed.
- [CFURLCreateFilePathURL(\_:\_:\_:)](cfurlcreatefilepathurl%28______%29.md): Returns a new file path URL that refers to the same resource as a specified URL.
- [CFURLCreateFileReferenceURL(\_:\_:\_:)](cfurlcreatefilereferenceurl%28______%29.md): Returns a new file reference URL that points to the same resource as a specified URL.
- [CFURLCreateFromFileSystemRepresentation(\_:\_:\_:\_:)](cfurlcreatefromfilesystemrepresentation%28________%29.md): Creates a new `CFURL` object for a file system entity using the native representation.
- [CFURLCreateFromFileSystemRepresentationRelativeToBase(\_:\_:\_:\_:\_:)](cfurlcreatefromfilesystemrepresentationrelativetobase%28__________%29.md): Creates a `CFURL` object from a native character string path relative to a base URL.
- [CFURLCreateFromFSRef(\_:\_:)](cfurlcreatefromfsref%28____%29.md): Deprecated. Creates a URL from a given directory or file.
- [CFURLCreateWithFileSystemPath(\_:\_:\_:\_:)](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithFileSystemPathRelativeToBase(\_:\_:\_:\_:\_:)](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString(\_:\_:\_:)](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.

# CFURLCreateWithBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFURL` object using a given character bytes.

## Declaration

```objectivec
extern CFURLRefCFURLCreateWithBytes(CFAllocatorRef allocator, const UInt8 *URLBytes, CFIndex length, CFStringEncoding encoding, CFURLRef baseURL);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `URLBytes`: The character bytes to convert into a `CFURL` object.
- `length`: The number of bytes in `URLBytes`.
- `encoding`: The string encoding of the `URLBytes` string. This encoding is also used to interpret percent escape sequences.
- `baseURL`: The URL to which `URLBytes` is relative. Pass `NULL` if `URLBytes` contains an absolute URL or if you want to create a relative URL. If `URLBytes` contains an absolute URL, this parameter is ignored.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The specified string encoding will be used both to interpret `URLBytes`, and to interpret any percent-escapes within the string.

> **Note**

>  This function does not support string encoding which isn’t a superset of ASCII encoding. Both [CFURLGetBytes](cfurlgetbytes%28______%29.md) and [CFURLGetByteRangeForComponent](cfurlgetbyterangeforcomponent%28______%29.md) require 7-bit ASCII characters to be stored in a single 8-bit byte. The following [CFStringEncodings](cfstringencodings.md) can be used: [kCFStringEncodingMacRoman](cfstringbuiltinencodings/macroman.md), [kCFStringEncodingWindowsLatin1](cfstringbuiltinencodings/windowslatin1.md), [kCFStringEncodingISOLatin1](cfstringbuiltinencodings/isolatin1.md), [kCFStringEncodingNextStepLatin](cfstringbuiltinencodings/nextsteplatin.md), [kCFStringEncodingASCII](cfstringbuiltinencodings/ascii.md) and [kCFStringEncodingUTF8](cfstringbuiltinencodings/utf8.md).

## See Also

### Creating a CFURL

- [CFURLCopyAbsoluteURL](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
- [CFURLCreateByResolvingBookmarkData](cfurlcreatebyresolvingbookmarkdata%28______________%29.md): Returns a new URL made by resolving bookmark data.
- [CFURLCreateCopyAppendingPathComponent](cfurlcreatecopyappendingpathcomponent%28________%29.md): Creates a copy of a given URL and appends a path component.
- [CFURLCreateCopyAppendingPathExtension](cfurlcreatecopyappendingpathextension%28______%29.md): Creates a copy of a given URL and appends a path extension.
- [CFURLCreateCopyDeletingLastPathComponent](cfurlcreatecopydeletinglastpathcomponent%28____%29.md): Creates a copy of a given URL with the last path component deleted.
- [CFURLCreateCopyDeletingPathExtension](cfurlcreatecopydeletingpathextension%28____%29.md): Creates a copy of a given URL with its last path extension removed.
- [CFURLCreateFilePathURL](cfurlcreatefilepathurl%28______%29.md): Returns a new file path URL that refers to the same resource as a specified URL.
- [CFURLCreateFileReferenceURL](cfurlcreatefilereferenceurl%28______%29.md): Returns a new file reference URL that points to the same resource as a specified URL.
- [CFURLCreateFromFileSystemRepresentation](cfurlcreatefromfilesystemrepresentation%28________%29.md): Creates a new `CFURL` object for a file system entity using the native representation.
- [CFURLCreateFromFileSystemRepresentationRelativeToBase](cfurlcreatefromfilesystemrepresentationrelativetobase%28__________%29.md): Creates a `CFURL` object from a native character string path relative to a base URL.
- [CFURLCreateFromFSRef](cfurlcreatefromfsref%28____%29.md): Deprecated. Creates a URL from a given directory or file.
- [CFURLCreateWithFileSystemPath](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithFileSystemPathRelativeToBase](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.
