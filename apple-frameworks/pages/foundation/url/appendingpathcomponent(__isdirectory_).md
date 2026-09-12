> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appendingpathcomponent(_:isdirectory:)](https://developer.apple.com/documentation/foundation/url/appendingpathcomponent(_:isdirectory:))

# appendingPathComponent(\_:isDirectory:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 8.0+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a URL by appending the specified path component to self, specifying whether the resulting path is a directory.

> Use appending(path:directoryHint:) instead

## Declaration

```swift
func appendingPathComponent(_ pathComponent: String, isDirectory: Bool) -> URL
```

## Parameters

- `pathComponent`: The path component to add.
- `isDirectory`: If `true`, the method treats the path component as a directory.

<a id="return-value"></a>

## Return Value

A new URL with the path component appended.

<a id="Discussion"></a>

## Discussion

The URL syntax for a directory and for a file at otherwise the same location are slightly different — directory URLs must end in `/`. If you append the path component `second` to the URL `http://www.example.com/first/`, if `isDirectory` is `true`, the resulting URL is `http://www.example.com/first/second/.` If `isDirectory` is `false`, the resulting URL is `http://www.example.com/first/second`.

This difference is particularly important if you resolve another URL against this new URL. For example, the path component `file.html` relative to `http://www.example.com/first/second` is `http://www.apple.com/first/file.html`, whereas relative to `http://www.example.com/first/second/`, it’s `http://www.example.com/first/second/file.html`.

New code should use [appending(path:directoryHint:)](appending%28path_directoryhint_%29.md) instead of this method.

## See Also

### Adding path components

- [append(path:directoryHint:)](append%28path_directoryhint_%29.md): Appends a path to the URL, with a hint for handling directory awareness.
- [append(component:directoryHint:)](append%28component_directoryhint_%29.md): Appends a path component to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:)](appendpathcomponent%28__%29.md): Deprecated. Appends a path component to the URL.
- [appendPathComponent(\_:isDirectory:)](appendpathcomponent%28__isdirectory_%29.md): Deprecated. Appends a path component to the URL, specifying whether the resulting path is a directory.
- [appending(path:directoryHint:)](appending%28path_directoryhint_%29.md): Returns a URL by appending the specified path to the URL, with a hint for handling directory awareness.
- [appending(component:directoryHint:)](appending%28component_directoryhint_%29.md): Returns a URL by appending the specified path component to the URL, with a hint for handling directory awareness.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Deprecated. Returns a URL by appending the specified path component to self.
- [append(components:directoryHint:)](append%28components_directoryhint_%29.md): Appends multiple path components to the URL, with a hint for handling directory awareness.
- [appending(components:directoryHint:)](appending%28components_directoryhint_%29.md): Returns a new URL by appending multiple path components to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:conformingTo:)](appendpathcomponent%28__conformingto_%29.md): Appends a path component to the URL that conforms to a uniform type identifier.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component that conforms to a uniform type identifier.
