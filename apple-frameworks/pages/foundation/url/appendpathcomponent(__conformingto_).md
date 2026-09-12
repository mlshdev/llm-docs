> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appendpathcomponent(_:conformingto:)](https://developer.apple.com/documentation/foundation/url/appendpathcomponent(_:conformingto:))

# appendPathComponent(\_:conformingTo:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Appends a path component to the URL that conforms to a uniform type identifier.

## Declaration

```swift
mutating func appendPathComponent(_ partialName: String, conformingTo contentType: UTType)
```

## Parameters

- `partialName`: The name of path component without the type.
- `contentType`: A uniform type identifier that determines the default extension.

<a id="Discussion"></a>

## Discussion

Use this method when you want to mix partial input from a user or other source, and need to produce a complete filename suitable for that input. For example, if you download a file from the internet and know its MIME type, you can use this method to ensure the URL has the correct filename extension where you save the file.

If `partialName` already has a path extension, and that path extension is valid for file system objects of type `contentType`, the function doesn’t add an extension before appending it to the URL. For example, if the inputs are `puppy.jpg` and [jpeg](../../uniformtypeidentifiers/uttype-swift.struct/jpeg.md), respectively, the function returns a URL with an appended path component of `puppy.jpg`. However, if the inputs are `puppy.jpg` and [plainText](../../uniformtypeidentifiers/uttype-swift.struct/plaintext.md), respectively, the function returns a URL with an appended path component of `puppy.jpg.txt`. If you want to replace any existing path extension, use the [deletePathExtension()](deletepathextension%28%29.md) method first.

If the function can’t append the path component, it returns an unchanged URL.

> **Note**

>  The modified URL has a directory path if `contentType` conforms to [directory](../../uniformtypeidentifiers/uttype-swift.struct/directory.md).

For more information about types, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

## See Also

### Adding path components

- [append(path:directoryHint:)](append%28path_directoryhint_%29.md): Appends a path to the URL, with a hint for handling directory awareness.
- [append(component:directoryHint:)](append%28component_directoryhint_%29.md): Appends a path component to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:)](appendpathcomponent%28__%29.md): Deprecated. Appends a path component to the URL.
- [appendPathComponent(\_:isDirectory:)](appendpathcomponent%28__isdirectory_%29.md): Deprecated. Appends a path component to the URL, specifying whether the resulting path is a directory.
- [appending(path:directoryHint:)](appending%28path_directoryhint_%29.md): Returns a URL by appending the specified path to the URL, with a hint for handling directory awareness.
- [appending(component:directoryHint:)](appending%28component_directoryhint_%29.md): Returns a URL by appending the specified path component to the URL, with a hint for handling directory awareness.
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Deprecated. Returns a URL by appending the specified path component to self.
- [appendingPathComponent(\_:isDirectory:)](appendingpathcomponent%28__isdirectory_%29.md): Deprecated. Returns a URL by appending the specified path component to self, specifying whether the resulting path is a directory.
- [append(components:directoryHint:)](append%28components_directoryhint_%29.md): Appends multiple path components to the URL, with a hint for handling directory awareness.
- [appending(components:directoryHint:)](appending%28components_directoryhint_%29.md): Returns a new URL by appending multiple path components to the URL, with a hint for handling directory awareness.
- [appendingPathComponent(\_:conformingTo:)](appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component that conforms to a uniform type identifier.
