> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/configuration/setcroprectangle(_:at:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/setcroprectangle(_:at:))

# setCropRectangle(\_:at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the crop rectangle value at a time within the time range of the instruction.

## Declaration

```swift
mutating func setCropRectangle(_ rect: CGRect, at time: CMTime)
```

## See Also

### Configuring the crop rectangle

- [addCropRectangleRamp(\_:)](addcroprectangleramp%28__%29.md): Sets a crop rectangle ramp to apply during the specified time range.
- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
