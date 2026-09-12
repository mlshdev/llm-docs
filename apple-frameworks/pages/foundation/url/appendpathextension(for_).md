> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appendpathextension(for:)](https://developer.apple.com/documentation/foundation/url/appendpathextension(for:))

# appendPathExtension(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Appends the preferred path extension for the type you specify.

## Declaration

```swift
mutating func appendPathExtension(for contentType: UTType)
```

## Parameters

- `contentType`: A uniform type identifier.

<a id="Discussion"></a>

## Discussion

Use this method when you want to mix partial input from a user or other source, and need to produce a complete filename suitable for that input. For example, if you download a file from the internet and know its MIME type, you can use this method to ensure the URL has the correct filename extension where you save the file.

If `partialName` already has a path extension, and that path extension is valid for file system objects of type `contentType`, the function doesn’t add an extension before appending it to the URL. For example, if the inputs are `puppy.jpg` and [jpeg](../../uniformtypeidentifiers/uttype-swift.struct/jpeg.md), respectively, the function returns a URL with an appended path component of `puppy.jpg`. However, if the inputs are `puppy.jpg` and [plainText](../../uniformtypeidentifiers/uttype-swift.struct/plaintext.md), respectively, the function returns a URL with an appended path component of `puppy.jpg.txt`. If you want to replace any existing path extension, use the [deletePathExtension()](deletepathextension%28%29.md) method first.

If the function can’t append the path component, it returns an unchanged URL.

For more information about types, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

## See Also

### Adding a path extension

- [appendPathExtension(\_:)](appendpathextension%28__%29.md): Appends the specified path extension to self.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a URL by appending the specified path extension to self.
- [appendingPathExtension(for:)](appendingpathextension%28for_%29.md): Returns a URL by appending the preferred path extension for the type you specify to the URL’s last path component.
