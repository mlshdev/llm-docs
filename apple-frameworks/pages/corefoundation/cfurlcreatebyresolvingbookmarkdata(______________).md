> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatebyresolvingbookmarkdata(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatebyresolvingbookmarkdata(_:_:_:_:_:_:_:))

# CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL made by resolving bookmark data.

## Declaration

```swift
func CFURLCreateByResolvingBookmarkData(_ allocator: CFAllocator!, _ bookmark: CFData!, _ options: CFURLBookmarkResolutionOptions, _ relativeToURL: CFURL!, _ resourcePropertiesToInclude: CFArray!, _ isStale: UnsafeMutablePointer<DarwinBoolean>!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFURL>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bookmark`: The bookmark data the URL is derived from.
- `options`: Options taken into account when resolving the bookmark data.

  To resolve a security-scoped bookmark to support App Sandbox, you must include (by way of bitwise `OR` operators with any other options in this parameter) the [cfurlBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md) option.
- `relativeToURL`: The base URL that the bookmark data is relative to. Can be `NULL`.

  If you are resolving a security-scoped bookmark to obtain a security-scoped URL, use this parameter as follows:

  - To resolve an app-scoped bookmark, use a value of `nil`.
  - To resolve a document-scoped bookmark, use the *absolute* path (despite this parameter’s name) to the document from which you retrieved the bookmark.
- `resourcePropertiesToInclude`: An array of resource properties to include when creating the URL. Can be `NULL`.
- `isStale`: If [true](https://developer.apple.com/documentation/swift/true), the bookmark data is stale.
- `error`: The error that occurred in the case that the URL cannot be created.

<a id="return-value"></a>

## Return Value

A new URL made by resolving `bookmark`, or `NULL` if an error occurs.

<a id="Discussion"></a>

## Discussion

To obtain a security-scoped URL from a security-scoped bookmark, call this method using the [cfurlBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md) option. In addition, to use security scope, you must first have enabled the appropriate entitlements for your app, as described in [Enabling Security-Scoped Bookmark and URL Access](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW18).

To then obtain access to the file-system resource pointed to by a security-scoped URL (in other words, to bring the resource into your app’s sandbox), call the [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md) function (or its Cocoa equivalent) on the URL.

For an app-scoped bookmark, no sandboxed app other than the one that created the bookmark can obtain access to the file-system resource that the URL (obtained from the bookmark) points to.

For a document-scoped bookmark, any sandboxed app that has access to the bookmark data itself, and has access to the document that owns the bookmark, can obtain access to the resource.

> **Version note**

>  Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## See Also

### Related Documentation

- [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.

### Creating a CFURL

- [CFURLCopyAbsoluteURL(\_:)](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes(\_:\_:\_:\_:\_:\_:)](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
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
- [CFURLCreateWithFileSystemPathRelativeToBase(\_:\_:\_:\_:\_:)](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString(\_:\_:\_:)](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.

# CFURLCreateByResolvingBookmarkData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL made by resolving bookmark data.

## Declaration

```objectivec
extern CFURLRefCFURLCreateByResolvingBookmarkData(CFAllocatorRef allocator, CFDataRef bookmark, CFURLBookmarkResolutionOptions options, CFURLRef relativeToURL, CFArrayRef resourcePropertiesToInclude, Boolean *isStale, CFErrorRef*error);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bookmark`: The bookmark data the URL is derived from.
- `options`: Options taken into account when resolving the bookmark data.

  To resolve a security-scoped bookmark to support App Sandbox, you must include (by way of bitwise `OR` operators with any other options in this parameter) the [kCFURLBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md) option.
- `relativeToURL`: The base URL that the bookmark data is relative to. Can be `NULL`.

  If you are resolving a security-scoped bookmark to obtain a security-scoped URL, use this parameter as follows:

  - To resolve an app-scoped bookmark, use a value of `nil`.
  - To resolve a document-scoped bookmark, use the *absolute* path (despite this parameter’s name) to the document from which you retrieved the bookmark.
- `resourcePropertiesToInclude`: An array of resource properties to include when creating the URL. Can be `NULL`.
- `isStale`: If [true](https://developer.apple.com/documentation/swift/true), the bookmark data is stale.
- `error`: The error that occurred in the case that the URL cannot be created.

<a id="return-value"></a>

## Return Value

A new URL made by resolving `bookmark`, or `NULL` if an error occurs.

<a id="Discussion"></a>

## Discussion

To obtain a security-scoped URL from a security-scoped bookmark, call this method using the [kCFURLBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md) option. In addition, to use security scope, you must first have enabled the appropriate entitlements for your app, as described in [Enabling Security-Scoped Bookmark and URL Access](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingAppSandbox.html#//apple_ref/doc/uid/TP40011195-CH4-SW18).

To then obtain access to the file-system resource pointed to by a security-scoped URL (in other words, to bring the resource into your app’s sandbox), call the [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md) function (or its Cocoa equivalent) on the URL.

For an app-scoped bookmark, no sandboxed app other than the one that created the bookmark can obtain access to the file-system resource that the URL (obtained from the bookmark) points to.

For a document-scoped bookmark, any sandboxed app that has access to the bookmark data itself, and has access to the document that owns the bookmark, can obtain access to the resource.

> **Version note**

>  Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## See Also

### Related Documentation

- [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.

### Creating a CFURL

- [CFURLCopyAbsoluteURL](cfurlcopyabsoluteurl%28__%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL against its base.
- [CFURLCreateAbsoluteURLWithBytes](cfurlcreateabsoluteurlwithbytes%28____________%29.md): Creates a new `CFURL` object by resolving the relative portion of a URL, specified as bytes, against its given base URL.
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
- [CFURLCreateWithFileSystemPathRelativeToBase](cfurlcreatewithfilesystempathrelativetobase%28__________%29.md): Creates a `CFURL` object using a local file system path string relative to a base URL.
- [CFURLCreateWithString](cfurlcreatewithstring%28______%29.md): Creates a `CFURL` object using a given `CFString` object.
