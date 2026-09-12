> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appending(component:directoryhint:)](https://developer.apple.com/documentation/foundation/url/appending(component:directoryhint:))

# appending(component:directoryHint:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a URL by appending the specified path component to the URL, with a hint for handling directory awareness.

## Declaration

```swift
func appending<S>(component: S, directoryHint: URL.DirectoryHint = .inferFromPath) -> URL where S : StringProtocol
```

## Parameters

- `component`: The path component to add.
- `directoryHint`: A hint to the initializer to indicate whether the path is a directory, or to instruct the method to make this determination. Defaults to [URL.DirectoryHint.inferFromPath](directoryhint/inferfrompath.md).

<a id="return-value"></a>

## Return Value

A new URL that appends the specified path to the original URL.

<a id="Discussion"></a>

## Discussion

This method percent-encodes any path separators (`/`) in the path component before appending the component to the path. If you don’t want this encoding, use [appending(path:directoryHint:)](appending%28path_directoryhint_%29.md) instead.

## See Also

### Adding path components

- [append(path:directoryHint:)](append%28path_directoryhint_%29.md): Appends a path to the URL, with a hint for handling directory awareness.
- [append(component:directoryHint:)](append%28component_directoryhint_%29.md): Appends a path component to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:)](appendpathcomponent%28__%29.md): Deprecated. Appends a path component to the URL.
- [appendPathComponent(\_:isDirectory:)](appendpathcomponent%28__isdirectory_%29.md): Deprecated. Appends a path component to the URL, specifying whether the resulting path is a directory.
- [appending(path:directoryHint:)](appending%28path_directoryhint_%29.md): Returns a URL by appending the specified path to the URL, with a hint for handling directory awareness.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Deprecated. Returns a URL by appending the specified path component to self.
- [appendingPathComponent(\_:isDirectory:)](appendingpathcomponent%28__isdirectory_%29.md): Deprecated. Returns a URL by appending the specified path component to self, specifying whether the resulting path is a directory.
- [append(components:directoryHint:)](append%28components_directoryhint_%29.md): Appends multiple path components to the URL, with a hint for handling directory awareness.
- [appending(components:directoryHint:)](appending%28components_directoryhint_%29.md): Returns a new URL by appending multiple path components to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:conformingTo:)](appendpathcomponent%28__conformingto_%29.md): Appends a path component to the URL that conforms to a uniform type identifier.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component that conforms to a uniform type identifier.
