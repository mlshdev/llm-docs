> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/capturedevicepointconverted(fromlayerpoint:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/capturedevicepointconverted(fromlayerpoint:))

# captureDevicePointConverted(fromLayerPoint:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a point from layer coordinates to the coordinate space of the capture device.

## Declaration

```swift
func captureDevicePointConverted(fromLayerPoint pointInLayer: CGPoint) -> CGPoint
```

## Parameters

- `pointInLayer`: A point in layer coordinates to convert.

<a id="return-value"></a>

## Return Value

A point in capture device coordinates.

<a id="Discussion"></a>

## Discussion

A capture device’s [focusPointOfInterest](../avcapturedevice/focuspointofinterest.md) and [exposurePointOfInterest](../avcapturedevice/exposurepointofinterest.md) properties provide a [CGPoint](../../corefoundation/cgpoint.md) value where `{0,0}` represents the top-left and `{1,1}` represents the bottom-right of the unrotated image.

The conversion performed by this method takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration.

## See Also

### Converting between coordinate spaces

- [layerPointConverted(fromCaptureDevicePoint:)](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [layerRectConverted(fromMetadataOutputRect:)](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectConverted(fromLayerRect:)](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObject(for:)](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.

# captureDevicePointOfInterestForPoint: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a point from layer coordinates to the coordinate space of the capture device.

## Declaration

```objectivec
- (CGPoint) captureDevicePointOfInterestForPoint:(CGPoint) pointInLayer;
```

## Parameters

- `pointInLayer`: A point in layer coordinates to convert.

<a id="return-value"></a>

## Return Value

A point in capture device coordinates.

<a id="Discussion"></a>

## Discussion

A capture device’s [focusPointOfInterest](../avcapturedevice/focuspointofinterest.md) and [exposurePointOfInterest](../avcapturedevice/exposurepointofinterest.md) properties provide a [CGPoint](../../corefoundation/cgpoint.md) value where `{0,0}` represents the top-left and `{1,1}` represents the bottom-right of the unrotated image.

The conversion performed by this method takes the layer’s frame size and its [videoGravity](videogravity.md) into consideration.

## See Also

### Converting between coordinate spaces

- [pointForCaptureDevicePointOfInterest:](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [rectForMetadataOutputRectOfInterest:](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectOfInterestForRect:](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
- [transformedMetadataObjectForMetadataObject:](transformedmetadataobject%28for_%29.md): Converts a metadata object’s visual properties to layer coordinates.
