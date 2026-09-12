> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/mutelayer(_:)](https://developer.apple.com/documentation/usdkit/usdstage/mutelayer(_:))

# muteLayer(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Mutes the layer with the given identifier, excluding its opinions from composition.

## Declaration

```swift
func muteLayer(_ identifier: String)
```

## Parameters

- `identifier`: The identifier of the layer to mute.

## See Also

### Managing layers

- [rootLayer](rootlayer.md): The root layer of this stage.
- [unmuteLayer(\_:)](unmutelayer%28__%29.md): Unmutes the layer with the given identifier, restoring its opinions to composition.
- [isLayerMuted(\_:)](islayermuted%28__%29.md): Returns a Boolean value that indicates whether the layer with the given identifier is muted.
