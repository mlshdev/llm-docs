> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/clear()](https://developer.apple.com/documentation/usdkit/usdlayer/clear())

# clear()

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes all in-memory content from the layer. The file on disk is unaffected until [save()](save%28%29.md) is called.

## Declaration

```swift
func clear()
```

## See Also

### Saving and reloading

- [save()](save%28%29.md): Saves the layer to its source if it has unsaved changes.
- [reload()](reload%28%29.md): Reloads the layer from its source, discarding any unsaved changes.
