> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/setopacity(_:at:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/setopacity(_:at:))

# setOpacity(\_:at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the opacity value at a specific time within the time range of the instruction.

## Declaration

```swift
mutating func setOpacity(_ opacity: Float, at time: CMTime)
```

## See Also

### Configuring the opacity

- [addOpacityRamp(\_:)](addopacityramp%28__%29.md): Sets an opacity ramp to apply during a specified time range.
- [opacityRamp(at:)](opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
