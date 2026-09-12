> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/unmutelayer(_:)](https://developer.apple.com/documentation/usdkit/usdstage/unmutelayer(_:))

# unmuteLayer(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Unmutes the layer with the given identifier, restoring its opinions to composition.

## Declaration

```swift
func unmuteLayer(_ identifier: String)
```

## Parameters

- `identifier`: The identifier of the layer to unmute.

## See Also

### Managing layers

- [rootLayer](rootlayer.md): The root layer of this stage.
- [muteLayer(\_:)](mutelayer%28__%29.md): Mutes the layer with the given identifier, excluding its opinions from composition.
- [isLayerMuted(\_:)](islayermuted%28__%29.md): Returns a Boolean value that indicates whether the layer with the given identifier is muted.
