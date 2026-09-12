> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addcroprectangleramp(_:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addcroprectangleramp(_:))

# addCropRectangleRamp(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets a crop rectangle ramp to apply during the specified time range.

## Declaration

```swift
mutating func addCropRectangleRamp(_ ramp: AVVideoCompositionLayerInstruction.CropRectangleRamp)
```

## See Also

### Configuring the crop rectangle

- [setCropRectangle(\_:at:)](setcroprectangle%28__at_%29.md): Sets the crop rectangle value at a time within the time range of the instruction.
- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
