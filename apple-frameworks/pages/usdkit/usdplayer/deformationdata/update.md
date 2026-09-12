> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/update](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/update)

# USDPlayer.DeformationData.Update

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Delta update carrying only the deformation fields that changed since the last frame.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [blendShapes](update/blendshapes.md): Changed blend shape data.
- [id](update/id.md): Unique identifier for the deformation resource being updated.
- [renormalization](update/renormalization.md): Changed renormalization data.
- [skinning](update/skinning.md): Changed skinning data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
