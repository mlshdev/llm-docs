> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatewithfilesystempathrelativetobase(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatewithfilesystempathrelativetobase(_:_:_:_:_:))

# CFURLCreateWithFileSystemPathRelativeToBase(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFURL` object using a local file system path string relative to a base URL.

## Declaration

```swift
func CFURLCreateWithFileSystemPathRelativeToBase(_ allocator: CFAllocator!, _ filePath: CFString!, _ pathStyle: CFURLPathStyle, _ isDirectory: Bool, _ baseURL: CFURL!) -> CFURL!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `filePath`: The path string to convert to a `CFURL` object.
- `pathStyle`: The operating system path style used in the `filePath` string. See [CFURLPathStyle](cfurlpathstyle.md) for a list of possible values.
- `isDirectory`: A Boolean value that specifies whether `filePath` is treated as a directory path when resolving against relative path components. Pass `true` if the pathname indicates a directory, `false` otherwise.
- `baseURL`: The base URL against which to resolve the `filePath`.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function takes a path name in the form of a `CFString` object, resolves it against a base URL, and returns a new `CFURL` object containing the result.

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
- [CFURLCreateWithBytes(\_:\_:\_:\_:\_:)](cfurlcreatewithbytes%28__________%29.md): Creates a `CFURL` object using a given character bytes.
- [CFURLCreateWithFileSystemPath(\_:\_:\_:\_:)](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithString(\_:\_:\_:)](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.

# CFURLCreateWithFileSystemPathRelativeToBase (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a `CFURL` object using a local file system path string relative to a base URL.

## Declaration

```objectivec
extern CFURLRefCFURLCreateWithFileSystemPathRelativeToBase(CFAllocatorRef allocator, CFStringRef filePath, CFURLPathStyle pathStyle, Boolean isDirectory, CFURLRef baseURL);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `filePath`: The path string to convert to a `CFURL` object.
- `pathStyle`: The operating system path style used in the `filePath` string. See [CFURLPathStyle](cfurlpathstyle.md) for a list of possible values.
- `isDirectory`: A Boolean value that specifies whether `filePath` is treated as a directory path when resolving against relative path components. Pass `true` if the pathname indicates a directory, `false` otherwise.
- `baseURL`: The base URL against which to resolve the `filePath`.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function takes a path name in the form of a `CFString` object, resolves it against a base URL, and returns a new `CFURL` object containing the result.

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
- [CFURLCreateWithBytes](cfurlcreatewithbytes%28__________%29.md): Creates a `CFURL` object using a given character bytes.
- [CFURLCreateWithFileSystemPath](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithString](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.
