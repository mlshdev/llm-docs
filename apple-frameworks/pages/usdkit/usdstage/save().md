> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/save()](https://developer.apple.com/documentation/usdkit/usdstage/save())

# save()

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Saves the stage’s changed layers to their sources.

## Declaration

```swift
func save() throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if a layer cannot be saved. Some layers may already have been saved when the failure occurs.

## See Also

### Saving and reloading

- [saveSessionLayers()](savesessionlayers%28%29.md): Saves the stage’s changed session layers to their sources.
- [reload()](reload%28%29.md): Reloads the stage’s layers from their sources, discarding any unsaved changes.
