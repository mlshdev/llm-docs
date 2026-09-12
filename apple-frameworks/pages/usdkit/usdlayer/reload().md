> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/reload()](https://developer.apple.com/documentation/usdkit/usdlayer/reload())

# reload()

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reloads the layer from its source, discarding any unsaved changes.

## Declaration

```swift
func reload() throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the layer cannot be reloaded.

## See Also

### Saving and reloading

- [save()](save%28%29.md): Saves the layer to its source if it has unsaved changes.
- [clear()](clear%28%29.md): Removes all in-memory content from the layer. The file on disk is unaffected until [save()](save%28%29.md) is called.
