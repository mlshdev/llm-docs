> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/settransform(_:at:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/settransform(_:at:))

# setTransform(\_:at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the transform value at a time within the time range of the instruction.

## Declaration

```swift
mutating func setTransform(_ transform: CGAffineTransform, at time: CMTime)
```

## See Also

### Configuring the transform

- [addTransformRamp(\_:)](addtransformramp%28__%29.md): Sets a transform ramp to apply during a given time range.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
