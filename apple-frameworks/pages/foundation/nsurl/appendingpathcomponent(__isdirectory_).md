> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/appendingpathcomponent(_:isdirectory:)](https://developer.apple.com/documentation/foundation/nsurl/appendingpathcomponent(_:isdirectory:))

# appendingPathComponent(\_:isDirectory:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.

## Declaration

```swift
func appendingPathComponent(_ pathComponent: String, isDirectory: Bool) -> URL?
```

## Parameters

- `pathComponent`: The path component to add to the URL.
- `isDirectory`: If [true](https://developer.apple.com/documentation/swift/true), a trailing slash is appended after `pathComponent`.

<a id="return-value"></a>

## Return Value

A new URL with `pathComponent` appended.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="Discussion"></a>

## Discussion

If the original URL does not end with a forward slash and `pathComponent` does not begin with a forward slash, a forward slash is inserted between the two parts of the returned URL, unless the original URL is the empty string.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL()](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [appendingPathExtension(for:)](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [deletingLastPathComponent](deletinglastpathcomponent.md): A URL you create by removing the last path component from the receiver. (read-only)
- [deletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [standardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.

# URLByAppendingPathComponent:isDirectory: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new URL by appending a path component to the original URL, along with a trailing slash if the component is a directory.

## Declaration

```objectivec
- (NSURL *) URLByAppendingPathComponent:(NSString *) pathComponent isDirectory:(BOOL) isDirectory;
```

## Parameters

- `pathComponent`: The path component to add to the URL.
- `isDirectory`: If [true](https://developer.apple.com/documentation/swift/true), a trailing slash is appended after `pathComponent`.

<a id="return-value"></a>

## Return Value

A new URL with `pathComponent` appended.

## Mentioned In

- [Improving performance and stability when accessing the file system](../improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="Discussion"></a>

## Discussion

If the original URL does not end with a forward slash and `pathComponent` does not begin with a forward slash, a forward slash is inserted between the two parts of the returned URL, unless the original URL is the empty string.

## See Also

### Modifying and Converting a File URL

- [filePathURL](filepathurl.md): A file path URL that points to the same resource as the URL object. (read-only)
- [fileReferenceURL](filereferenceurl%28%29.md): Returns a new file reference URL that points to the same resource as the receiver.
- [URLByAppendingPathComponent:](appendingpathcomponent%28__%29.md): Returns a new URL by appending a path component to the original URL.
- [URLByAppendingPathComponent:conformingToType:](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component with the file extension for a uniform type identifier.
- [URLByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new URL by appending a path extension to the original URL.
- [URLByAppendingPathExtensionForType:](appendingpathextension%28for_%29.md): Returns a URL by appending the path extension for a uniform type identifier.
- [URLByDeletingLastPathComponent](deletinglastpathcomponent.md): A URL you create by removing the last path component from the receiver. (read-only)
- [URLByDeletingPathExtension](deletingpathextension.md): A URL you create by removing the path extension from the receiver, if any. (read-only)
- [URLByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A URL that points to the same resource as the receiver and includes no symbolic links. (read-only)
- [URLByStandardizingPath](standardizingpath.md): A URL that points to the same resource as the original URL using an absolute path. (read-only)
- [hasDirectoryPath](hasdirectorypath.md): A Boolean value that indicates whether the URL string’s path represents a directory.
