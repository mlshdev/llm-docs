> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/layerpointconverted(fromcapturedevicepoint:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerpointconverted(fromcapturedevicepoint:))

# layerPointConverted(fromCaptureDevicePoint:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a point from the coordinate space of the capture device to the coordinate space of the layer.

## Declaration

```swift
func layerPointConverted(fromCaptureDevicePoint captureDevicePointOfInterest: CGPoint) -> CGPoint
```

## Parameters

- `captureDevicePointOfInterest`: A point in capture device coordinates to convert.

<a id="return-value"></a>

## Return Value

A point in layer coordinates.

<a id="Discussion"></a>

## Discussion

A capture device’s [focusPointOfInterest](../avcapturedevice/focuspointofinterest.md) and [exposurePointOfInterest](../avcapturedevice/exposurepointofinterest.md) properties provide a [CGPoint](../../corefoundation/cgpoint.md) value where `{0,0}` represents the top-left and `{1,1}` represents the bottom-right of the unrotated image.

The system takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration when making the conversion.

## See Also

### Converting between coordinate spaces

- [captureDevicePointConverted(fromLayerPoint:)](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [layerRectConverted(fromMetadataOutputRect:)](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectConverted(fromLayerRect:)](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObject(for:)](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.

# pointForCaptureDevicePointOfInterest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a point from the coordinate space of the capture device to the coordinate space of the layer.

## Declaration

```objectivec
- (CGPoint) pointForCaptureDevicePointOfInterest:(CGPoint) captureDevicePointOfInterest;
```

## Parameters

- `captureDevicePointOfInterest`: A point in capture device coordinates to convert.

<a id="return-value"></a>

## Return Value

A point in layer coordinates.

<a id="Discussion"></a>

## Discussion

A capture device’s [focusPointOfInterest](../avcapturedevice/focuspointofinterest.md) and [exposurePointOfInterest](../avcapturedevice/exposurepointofinterest.md) properties provide a [CGPoint](../../corefoundation/cgpoint.md) value where `{0,0}` represents the top-left and `{1,1}` represents the bottom-right of the unrotated image.

The system takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration when making the conversion.

## See Also

### Converting between coordinate spaces

- [captureDevicePointOfInterestForPoint:](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [rectForMetadataOutputRectOfInterest:](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectOfInterestForRect:](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObjectForMetadataObject:](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.
