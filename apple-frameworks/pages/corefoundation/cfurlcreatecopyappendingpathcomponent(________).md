> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatecopyappendingpathcomponent(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatecopyappendingpathcomponent(_:_:_:_:))

# CFURLCreateCopyAppendingPathComponent(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a copy of a given URL and appends a path component.

## Declaration

```swift
func CFURLCreateCopyAppendingPathComponent(_ allocator: CFAllocator!, _ url: CFURL!, _ pathComponent: CFString!, _ isDirectory: Bool) -> CFURL!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `url`: The `CFURL` object to which to append a path component.
- `pathComponent`: The path component to append to `url`.
- `isDirectory`: A Boolean value that specifies whether the string is treated as a directory path when resolving against relative path components. Pass `true` if the new component indicates a directory, `false` otherwise.

<a id="return-value"></a>

## Return Value

A copy of `url` appended with `pathComponent`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The `isDirectory` argument specifies whether or not the new path component points to a file or a to directory. Note that the URL syntax for a directory and for a file at otherwise the same location are slightly different—directory URLs must end in “/”. If you have the URL `http://www.apple.com/foo/` and you append the path component `bar`, then if `isDirectory` is [true](https://developer.apple.com/documentation/swift/true) then the resulting URL is `http://www.apple.com/foo/bar/`, whereas if `isDirectory` is [false](https://developer.apple.com/documentation/swift/false) then the resulting URL is `http://www.apple.com/foo/bar`. This difference is particularly important if you resolve another URL against this new URL. `file.html` relative to `http://www.apple.com/foo/bar` is `http://www.apple.com/foo/file.html`, whereas `file.html` relative to `http://www.apple.com/foo/bar/` is `http://www.apple.com/foo/bar/file.html`.

## See Also

### Creating a CFURL

- [CFURLCopyAbsoluteURL(\_:)](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes(\_:\_:\_:\_:\_:\_:)](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
- [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](cfurlcreatebyresolvingbookmarkdata%28______________%29.md): Returns a new URL made by resolving bookmark data.
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
- [CFURLCreateWithFileSystemPathRelativeToBase(\_:\_:\_:\_:\_:)](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString(\_:\_:\_:)](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.

# CFURLCreateCopyAppendingPathComponent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a copy of a given URL and appends a path component.

## Declaration

```objectivec
extern CFURLRefCFURLCreateCopyAppendingPathComponent(CFAllocatorRef allocator, CFURLRef url, CFStringRef pathComponent, Boolean isDirectory);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `url`: The `CFURL` object to which to append a path component.
- `pathComponent`: The path component to append to `url`.
- `isDirectory`: A Boolean value that specifies whether the string is treated as a directory path when resolving against relative path components. Pass `true` if the new component indicates a directory, `false` otherwise.

<a id="return-value"></a>

## Return Value

A copy of `url` appended with `pathComponent`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The `isDirectory` argument specifies whether or not the new path component points to a file or a to directory. Note that the URL syntax for a directory and for a file at otherwise the same location are slightly different—directory URLs must end in “/”. If you have the URL `http://www.apple.com/foo/` and you append the path component `bar`, then if `isDirectory` is [true](https://developer.apple.com/documentation/swift/true) then the resulting URL is `http://www.apple.com/foo/bar/`, whereas if `isDirectory` is [false](https://developer.apple.com/documentation/swift/false) then the resulting URL is `http://www.apple.com/foo/bar`. This difference is particularly important if you resolve another URL against this new URL. `file.html` relative to `http://www.apple.com/foo/bar` is `http://www.apple.com/foo/file.html`, whereas `file.html` relative to `http://www.apple.com/foo/bar/` is `http://www.apple.com/foo/bar/file.html`.

## See Also

### Creating a CFURL

- [CFURLCopyAbsoluteURL](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
- [CFURLCreateByResolvingBookmarkData](cfurlcreatebyresolvingbookmarkdata%28______________%29.md): Returns a new URL made by resolving bookmark data.
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
- [CFURLCreateWithFileSystemPathRelativeToBase](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.
