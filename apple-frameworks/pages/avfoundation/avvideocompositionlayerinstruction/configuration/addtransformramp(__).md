> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addtransformramp(_:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addtransformramp(_:))

# addTransformRamp(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets a transform ramp to apply during a given time range.

## Declaration

```swift
mutating func addTransformRamp(_ ramp: AVVideoCompositionLayerInstruction.TransformRamp)
```

## See Also

### Configuring the transform

- [setTransform(\_:at:)](settransform%28__at_%29.md): Sets the transform value at a time within the time range of the instruction.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
