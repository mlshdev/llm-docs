> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/deletepathextension()](https://developer.apple.com/documentation/foundation/url/deletepathextension())

# deletePathExtension()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL constructed by removing any path extension.

## Declaration

```swift
mutating func deletePathExtension()
```

<a id="Discussion"></a>

## Discussion

If the URL has an empty path (e.g., `http://www.example.com`), then this function will do nothing.

## See Also

### Removing a path extension

- [deletingPathExtension()](deletingpathextension%28%29.md): Returns a URL constructed by removing any path extension.
