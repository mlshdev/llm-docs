> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/blendshapedata/update

# USDPlayer.DeformationData.BlendShapeData.Update

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Delta update carrying only the blend shape fields that changed since the last frame.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [positionOffsets](update/positionoffsets.md): Changed position delta offsets.
- [weights](update/weights.md): Changed blend shape weights.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
