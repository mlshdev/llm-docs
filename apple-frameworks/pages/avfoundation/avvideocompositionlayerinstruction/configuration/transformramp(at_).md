> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/transformramp(at:)

# transformRamp(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the transform ramp that includes a specified time.

## Declaration

```swift
func transformRamp(at time: CMTime) -> AVVideoCompositionLayerInstruction.TransformRamp?
```

## See Also

### Configuring the transform

- [setTransform(\_:at:)](settransform%28__at_%29.md): Sets the transform value at a time within the time range of the instruction.
- [addTransformRamp(\_:)](addtransformramp%28__%29.md): Sets a transform ramp to apply during a given time range.
