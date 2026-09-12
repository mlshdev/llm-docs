> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/outputrectconverted(frommetadataoutputrect:)](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/outputrectconverted(frommetadataoutputrect:))

# outputRectConverted(fromMetadataOutputRect:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle in the coordinate system used for metadata outputs to one in the capture output object’s coordinate system.

## Declaration

```swift
func outputRectConverted(fromMetadataOutputRect rectInMetadataOutputCoordinates: CGRect) -> CGRect
```

## Parameters

- `rectInMetadataOutputCoordinates`: A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the [AVCaptureOutput](../avcaptureoutput.md) object’s coordinate system.

<a id="Discussion"></a>

## Discussion

The rectangle of interest for an [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object is in a coordinate system extending from `{0,0}` in the top-left to `{1,1}` in the bottom-right, relative to the device’s natural orientation. A capture output object uses a pixel coordinate space which you may zoom, rotate, or mirror.

## See Also

### Converting between coordinate systems

- [transformedMetadataObject(for:connection:)](transformedmetadataobject%28for_connection_%29.md): Converts a metadata object’s visual properties to layer coordinates.
- [metadataOutputRectConverted(fromOutputRect:)](metadataoutputrectconverted%28fromoutputrect_%29.md): Converts a rectangle in the capture output object’s coordinate system to one in the coordinate system used for metadata outputs.

# rectForMetadataOutputRectOfInterest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle in the coordinate system used for metadata outputs to one in the capture output object’s coordinate system.

## Declaration

```objectivec
- (CGRect) rectForMetadataOutputRectOfInterest:(CGRect) rectInMetadataOutputCoordinates;
```

## Parameters

- `rectInMetadataOutputCoordinates`: A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the [AVCaptureOutput](../avcaptureoutput.md) object’s coordinate system.

<a id="Discussion"></a>

## Discussion

The rectangle of interest for an [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object is in a coordinate system extending from `{0,0}` in the top-left to `{1,1}` in the bottom-right, relative to the device’s natural orientation. A capture output object uses a pixel coordinate space which you may zoom, rotate, or mirror.

## See Also

### Converting between coordinate systems

- [transformedMetadataObjectForMetadataObject:connection:](transformedmetadataobject%28for_connection_%29.md): Converts a metadata object’s visual properties to layer coordinates.
- [metadataOutputRectOfInterestForRect:](metadataoutputrectconverted%28fromoutputrect_%29.md): Converts a rectangle in the capture output object’s coordinate system to one in the coordinate system used for metadata outputs.
