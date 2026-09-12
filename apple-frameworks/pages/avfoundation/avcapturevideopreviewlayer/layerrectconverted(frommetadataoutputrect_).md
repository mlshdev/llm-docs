> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/layerrectconverted(frommetadataoutputrect:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerrectconverted(frommetadataoutputrect:))

# layerRectConverted(fromMetadataOutputRect:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle from metadata output coordinates to the coordinate space of the layer.

## Declaration

```swift
func layerRectConverted(fromMetadataOutputRect rectInMetadataOutputCoordinates: CGRect) -> CGRect
```

## Parameters

- `rectInMetadataOutputCoordinates`: A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the preview layer’s coordinate system.

<a id="Discussion"></a>

## Discussion

A metadata capture output’s [rectOfInterest](../avcapturemetadataoutput/rectofinterest.md) a [CGRect](../../corefoundation/cgrect.md) value where `{0,0}` represents the top-left of the picture area, and `{1,1}` represents the bottom-right on an unrotated image.

The system takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration when making the conversion.

## See Also

### Converting between coordinate spaces

- [layerPointConverted(fromCaptureDevicePoint:)](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointConverted(fromLayerPoint:)](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [metadataOutputRectConverted(fromLayerRect:)](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObject(for:)](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.

# rectForMetadataOutputRectOfInterest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle from metadata output coordinates to the coordinate space of the layer.

## Declaration

```objectivec
- (CGRect) rectForMetadataOutputRectOfInterest:(CGRect) rectInMetadataOutputCoordinates;
```

## Parameters

- `rectInMetadataOutputCoordinates`: A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the preview layer’s coordinate system.

<a id="Discussion"></a>

## Discussion

A metadata capture output’s [rectOfInterest](../avcapturemetadataoutput/rectofinterest.md) a [CGRect](../../corefoundation/cgrect.md) value where `{0,0}` represents the top-left of the picture area, and `{1,1}` represents the bottom-right on an unrotated image.

The system takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration when making the conversion.

## See Also

### Converting between coordinate spaces

- [pointForCaptureDevicePointOfInterest:](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointOfInterestForPoint:](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [metadataOutputRectOfInterestForRect:](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObjectForMetadataObject:](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.
