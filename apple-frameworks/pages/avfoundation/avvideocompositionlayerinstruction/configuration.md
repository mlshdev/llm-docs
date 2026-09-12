> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration)

# AVVideoCompositionLayerInstruction.Configuration

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configurable properties for initializing a new AVVideoCompositionLayerInstruction instance.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(assetTrack:)](configuration/init%28assettrack_%29.md): Creates a new video composition layer instruction for the given track.
- [init(trackID:)](configuration/init%28trackid_%29.md): Creates a new video composition layer instruction for the given track ID.

### Configuring the crop rectangle

- [setCropRectangle(\_:at:)](configuration/setcroprectangle%28__at_%29.md): Sets the crop rectangle value at a time within the time range of the instruction.
- [addCropRectangleRamp(\_:)](configuration/addcroprectangleramp%28__%29.md): Sets a crop rectangle ramp to apply during the specified time range.
- [cropRectangleRamp(at:)](configuration/croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.

### Configuring the opacity

- [setOpacity(\_:at:)](configuration/setopacity%28__at_%29.md): Sets the opacity value at a specific time within the time range of the instruction.
- [addOpacityRamp(\_:)](configuration/addopacityramp%28__%29.md): Sets an opacity ramp to apply during a specified time range.
- [opacityRamp(at:)](configuration/opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.

### Configuring the transform

- [setTransform(\_:at:)](configuration/settransform%28__at_%29.md): Sets the transform value at a time within the time range of the instruction.
- [addTransformRamp(\_:)](configuration/addtransformramp%28__%29.md): Sets a transform ramp to apply during a given time range.
- [transformRamp(at:)](configuration/transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.

### Inspecting the configuration

- [trackID](configuration/trackid.md): The track identifier of the source track to which the compositor will apply the instruction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a layer instruction

- [init(configuration:)](init%28configuration_%29.md): Initialize an AVVideoCompositionLayerInstruction with a configuration.
