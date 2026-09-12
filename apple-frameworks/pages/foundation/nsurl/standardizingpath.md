> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/standardizingpath](https://developer.apple.com/documentation/foundation/nsurl/standardizingpath)

# standardizingPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL that points to the same resource as the original URL using an absolute path. (read-only)

## Declaration

```swift
var standardizingPath: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property only works on URLs with the `file:` path scheme. For all other URLs, it returns a copy of the original URL.

Like [standardizingPath](../nsstring/standardizingpath.md), this property can make the following changes in the provided URL:

- Expand an initial tilde expression using [expandingTildeInPath](../nsstring/expandingtildeinpath.md).
- Reduce empty components and references to the current directory (that is, the sequences “//” and “/./”) to single path separators.
- In absolute paths only, resolve references to the parent directory (that is, the component “..”) to the real parent directory if possible using [resolvingSymlinksInPath](../nsstring/resolvingsymlinksinpath.md), which consults the file system to resolve each potential symbolic link.

In relative paths, because symbolic links can’t be resolved, references to the parent directory are left in place.

- Remove an initial component of “/private” from the path if the result still indicates an existing file or directory (checked by consulting the file system).

Note that the path contained by this property may still have symbolic link components in it. Note also that this property only works with file paths (not, for example, string representations of URLs).

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
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.

# URLByStandardizingPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL that points to the same resource as the original URL using an absolute path. (read-only)

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URLByStandardizingPath;
```

<a id="Discussion"></a>

## Discussion

This property only works on URLs with the `file:` path scheme. For all other URLs, it returns a copy of the original URL.

Like [stringByStandardizingPath](../nsstring/standardizingpath.md), this property can make the following changes in the provided URL:

- Expand an initial tilde expression using [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md).
- Reduce empty components and references to the current directory (that is, the sequences “//” and “/./”) to single path separators.
- In absolute paths only, resolve references to the parent directory (that is, the component “..”) to the real parent directory if possible using [stringByResolvingSymlinksInPath](../nsstring/resolvingsymlinksinpath.md), which consults the file system to resolve each potential symbolic link.

In relative paths, because symbolic links can’t be resolved, references to the parent directory are left in place.

- Remove an initial component of “/private” from the path if the result still indicates an existing file or directory (checked by consulting the file system).

Note that the path contained by this property may still have symbolic link components in it. Note also that this property only works with file paths (not, for example, string representations of URLs).

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
- [URLByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.
