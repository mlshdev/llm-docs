> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/resolvingsymlinksinpath](https://developer.apple.com/documentation/foundation/nsurl/resolvingsymlinksinpath)

# resolvingSymlinksInPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)

## Declaration

```swift
var resolvingSymlinksInPath: URL? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver has no symbolic links, this property contains a copy of the original URL.

If some symbolic links cannot be resolved, this property contains those broken symbolic links.

If the name of the receiving path begins with `/private`, this property strips off the `/private` designator, provided the result is the name of an existing file.

This property only works on URLs with the `file:` path scheme. For all other URLs, it contains a copy of the receiver.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL()](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [appendingPathComponent(\_:isDirectory:)](appendingpathcomponent%28__isdirectory_%29.md): Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [appendingPathExtension(for:)](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [deletingLastPathComponent](deletinglastpathcomponent.md): A URL you create by removing the last path component from the receiver. (read-only)
- [deletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [standardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.

# URLByResolvingSymlinksInPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URLByResolvingSymlinksInPath;
```

<a id="Discussion"></a>

## Discussion

If the receiver has no symbolic links, this property contains a copy of the original URL.

If some symbolic links cannot be resolved, this property contains those broken symbolic links.

If the name of the receiving path begins with `/private`, this property strips off the `/private` designator, provided the result is the name of an existing file.

This property only works on URLs with the `file:` path scheme. For all other URLs, it contains a copy of the receiver.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [URLByAppendingPathComponent:](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [URLByAppendingPathComponent:isDirectory:](appendingpathcomponent%28__isdirectory_%29.md): Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.
- [URLByAppendingPathComponent:conformingToType:](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [URLByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [URLByAppendingPathExtensionForType:](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [URLByDeletingLastPathComponent](deletinglastpathcomponent.md): A URL you create by removing the last path component from the receiver. (read-only)
- [URLByDeletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [URLByStandardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.
