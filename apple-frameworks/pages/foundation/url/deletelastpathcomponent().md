> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/deletelastpathcomponent()](https://developer.apple.com/documentation/foundation/url/deletelastpathcomponent())

# deleteLastPathComponent()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL constructed by removing the last path component of self.

## Declaration

```swift
mutating func deleteLastPathComponent()
```

<a id="Discussion"></a>

## Discussion

This function may either remove a path component or append `/..`.

If the URL has an empty path (e.g., `http://www.example.com`), then this function will do nothing.

## See Also

### Removing path components

- [deletingLastPathComponent()](deletinglastpathcomponent%28%29.md): Returns a URL constructed by removing the last path component of self.
