> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/deletinglastpathcomponent](https://developer.apple.com/documentation/foundation/nsurl/deletinglastpathcomponent)

# deletingLastPathComponent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL you create by removing the last path component from the receiver. (read-only)

## Declaration

```swift
var deletingLastPathComponent: URL? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s URL represents the root path, this property contains a copy of the original URL. Otherwise, if the original URL has only one path component, this property contains the empty string.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL()](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [appendingPathComponent(\_:isDirectory:)](appendingpathcomponent%28__isdirectory_%29.md): Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [appendingPathExtension(for:)](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [deletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [standardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.

# URLByDeletingLastPathComponent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL you create by removing the last path component from the receiver. (read-only)

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URLByDeletingLastPathComponent;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s URL represents the root path, this property contains a copy of the original URL. Otherwise, if the original URL has only one path component, this property contains the empty string.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [URLByAppendingPathComponent:](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [URLByAppendingPathComponent:isDirectory:](appendingpathcomponent%28__isdirectory_%29.md): Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.
- [URLByAppendingPathComponent:conformingToType:](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [URLByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [URLByAppendingPathExtensionForType:](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [URLByDeletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [URLByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [URLByStandardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.
