> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appendpathextension(_:)](https://developer.apple.com/documentation/foundation/url/appendpathextension(_:))

# appendPathExtension(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the specified path extension to self.

## Declaration

```swift
mutating func appendPathExtension(_ pathExtension: String)
```

## Parameters

- `pathExtension`: The extension to append.

<a id="Discussion"></a>

## Discussion

If the URL has an empty path, such as `http://www.example.com`, this function does nothing. Certain special characters (for example, Unicode right-to-left marks) can’t be path extensions. If `pathExtension` contains any of those characters, the function returns an unchanged URL.

## See Also

### Adding a path extension

- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a URL by appending the specified path extension to self.
- [appendPathExtension(for:)](appendpathextension%28for_%29.md): Appends the preferred path extension for the type you specify.
- [appendingPathExtension(for:)](appendingpathextension%28for_%29.md): Returns a URL by appending the preferred path extension for the type you specify to the URL’s last path component.
