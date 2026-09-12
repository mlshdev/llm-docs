> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/deletingpathextension()](https://developer.apple.com/documentation/foundation/url/deletingpathextension())

# deletingPathExtension()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL constructed by removing any path extension.

## Declaration

```swift
func deletingPathExtension() -> URL
```

<a id="Discussion"></a>

## Discussion

If the URL has an empty path (e.g., `http://www.example.com`), then this function will return the URL unchanged.

## See Also

### Removing a path extension

- [deletePathExtension()](deletepathextension%28%29.md): Returns a URL constructed by removing any path extension.
