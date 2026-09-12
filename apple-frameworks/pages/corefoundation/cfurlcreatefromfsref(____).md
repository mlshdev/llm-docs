> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatefromfsref(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatefromfsref(_:_:))

# CFURLCreateFromFSRef(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a URL from a given directory or file.

> Not supported

## Declaration

```swift
func CFURLCreateFromFSRef(_ allocator: CFAllocator!, _ fsRef: OpaquePointer!) -> CFURL!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fsRef`: The file or directory representing the URL.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

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
- [CFURLCreateWithBytes(\_:\_:\_:\_:\_:)](cfurlcreatewithbytes%28__________%29.md): Creates a `CFURL` object using a given character bytes.
- [CFURLCreateWithFileSystemPath(\_:\_:\_:\_:)](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithFileSystemPathRelativeToBase(\_:\_:\_:\_:\_:)](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString(\_:\_:\_:)](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.

# CFURLCreateFromFSRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a URL from a given directory or file.

> Not supported

## Declaration

```objectivec
extern CFURLRefCFURLCreateFromFSRef(CFAllocatorRef allocator, const struct FSRef *fsRef);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fsRef`: The file or directory representing the URL.

<a id="return-value"></a>

## Return Value

A new `CFURL` object. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

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
- [CFURLCreateWithBytes](cfurlcreatewithbytes%28__________%29.md): Creates a `CFURL` object using a given character bytes.
- [CFURLCreateWithFileSystemPath](cfurlcreatewithfilesystempath%28________%29.md): Creates a `CFURL` object using a local file system path string.
- [CFURLCreateWithFileSystemPathRelativeToBase](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.
