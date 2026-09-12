> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/opacityramp(at:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/opacityramp(at:))

# opacityRamp(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the opacity ramp that includes a specified time.

## Declaration

```swift
func opacityRamp(at time: CMTime) -> AVVideoCompositionLayerInstruction.OpacityRamp?
```

## See Also

### Configuring the opacity

- [setOpacity(\_:at:)](setopacity%28__at_%29.md): Sets the opacity value at a specific time within the time range of the instruction.
- [addOpacityRamp(\_:)](addopacityramp%28__%29.md): Sets an opacity ramp to apply during a specified time range.
