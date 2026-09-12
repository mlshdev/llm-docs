> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/transformedmetadataobject(for:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/transformedmetadataobject(for:))

# transformedMetadataObject(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a metadata object’s visual properties to layer coordinates.

## Declaration

```swift
func transformedMetadataObject(for metadataObject: AVMetadataObject) -> AVMetadataObject?
```

## Parameters

- `metadataObject`: The metadata object whose visual properties you want to convert. The metadata object must originate from the same [AVCaptureInput](../avcaptureinput.md) as the preview layer.

<a id="return-value"></a>

## Return Value

A metadata object with coordinates converted into layer coordinates, or `nil` if the  metadata object originates from an input source other than that of the preview layer.

<a id="Discussion"></a>

## Discussion

The system provides the metadata object’s bounds as a rectangle where `{0,0}` represents the top-left of the picture area, and `{1,1}` represents the bottom-right on an unrotated image. Face metadata objects also provide [yawAngle](../avmetadatafaceobject/yawangle.md) and [rollAngle](../avmetadatafaceobject/rollangle.md) values with respect to an unrotated picture.

The conversion takes orientation, mirroring, layer bounds and video gravity into consideration.

## See Also

### Converting between coordinate spaces

- [layerPointConverted(fromCaptureDevicePoint:)](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointConverted(fromLayerPoint:)](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [layerRectConverted(fromMetadataOutputRect:)](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectConverted(fromLayerRect:)](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.

# transformedMetadataObjectForMetadataObject: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a metadata object’s visual properties to layer coordinates.

## Declaration

```objectivec
- (AVMetadataObject *) transformedMetadataObjectForMetadataObject:(AVMetadataObject *) metadataObject;
```

## Parameters

- `metadataObject`: The metadata object whose visual properties you want to convert. The metadata object must originate from the same [AVCaptureInput](../avcaptureinput.md) as the preview layer.

<a id="return-value"></a>

## Return Value

A metadata object with coordinates converted into layer coordinates, or `nil` if the  metadata object originates from an input source other than that of the preview layer.

<a id="Discussion"></a>

## Discussion

The system provides the metadata object’s bounds as a rectangle where `{0,0}` represents the top-left of the picture area, and `{1,1}` represents the bottom-right on an unrotated image. Face metadata objects also provide [yawAngle](../avmetadatafaceobject/yawangle.md) and [rollAngle](../avmetadatafaceobject/rollangle.md) values with respect to an unrotated picture.

The conversion takes orientation, mirroring, layer bounds and video gravity into consideration.

## See Also

### Converting between coordinate spaces

- [pointForCaptureDevicePointOfInterest:](layerpointconverted%28fromcapturedevicepoint_%29.md): Converts a point from the coordinate space of the capture device to the coordinate space of the layer.
- [captureDevicePointOfInterestForPoint:](capturedevicepointconverted%28fromlayerpoint_%29.md): Converts a point from layer coordinates to the coordinate space of the capture device.
- [rectForMetadataOutputRectOfInterest:](layerrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle from metadata output coordinates to the coordinate space of the layer.
- [metadataOutputRectOfInterestForRect:](metadataoutputrectconverted%28fromlayerrect_%29.md): Converts a rectangle from layer coordinates to the coordinate space of the metadata output.
