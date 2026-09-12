> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/metadataoutputrectconverted(fromoutputrect:)](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/metadataoutputrectconverted(fromoutputrect:))

# metadataOutputRectConverted(fromOutputRect:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle in the capture output object’s coordinate system to one in the coordinate system used for metadata outputs.

## Declaration

```swift
func metadataOutputRectConverted(fromOutputRect rectInOutputCoordinates: CGRect) -> CGRect
```

## Parameters

- `rectInOutputCoordinates`: A rectangle in the [AVCaptureOutput](../avcaptureoutput.md) object’s coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="Discussion"></a>

## Discussion

An [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object expresses its [rectOfInterest](../avcapturemetadataoutput/rectofinterest.md) as a [CGRect](../../corefoundation/cgrect.md) where 0,0 represents the top-left of the picture area, and 1,1 represents the bottom-right on an unrotated picture. This convenience method converts a rectangle in the coordinate space of the output to a rectangle of interest in the coordinate space of a metadata output whose capture device provides input to the output. The conversion takes orientation, mirroring, and scaling into consideration.

See [transformedMetadataObject(for:connection:)](transformedmetadataobject%28for_connection_%29.md) for a full discussion of how the system applies orientation and mirroring to sample buffers passing through the output.

## See Also

### Converting between coordinate systems

- [transformedMetadataObject(for:connection:)](transformedmetadataobject%28for_connection_%29.md): Converts a metadata object’s visual properties to layer coordinates.
- [outputRectConverted(fromMetadataOutputRect:)](outputrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle in the coordinate system used for metadata outputs to one in the capture output object’s coordinate system.

# metadataOutputRectOfInterestForRect: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Converts a rectangle in the capture output object’s coordinate system to one in the coordinate system used for metadata outputs.

## Declaration

```objectivec
- (CGRect) metadataOutputRectOfInterestForRect:(CGRect) rectInOutputCoordinates;
```

## Parameters

- `rectInOutputCoordinates`: A rectangle in the [AVCaptureOutput](../avcaptureoutput.md) object’s coordinate system.

<a id="return-value"></a>

## Return Value

A rectangle in the [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) coordinate system.

<a id="Discussion"></a>

## Discussion

An [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object expresses its [rectOfInterest](../avcapturemetadataoutput/rectofinterest.md) as a [CGRect](../../corefoundation/cgrect.md) where 0,0 represents the top-left of the picture area, and 1,1 represents the bottom-right on an unrotated picture. This convenience method converts a rectangle in the coordinate space of the output to a rectangle of interest in the coordinate space of a metadata output whose capture device provides input to the output. The conversion takes orientation, mirroring, and scaling into consideration.

See [transformedMetadataObjectForMetadataObject:connection:](transformedmetadataobject%28for_connection_%29.md) for a full discussion of how the system applies orientation and mirroring to sample buffers passing through the output.

## See Also

### Converting between coordinate systems

- [transformedMetadataObjectForMetadataObject:connection:](transformedmetadataobject%28for_connection_%29.md): Converts a metadata object’s visual properties to layer coordinates.
- [rectForMetadataOutputRectOfInterest:](outputrectconverted%28frommetadataoutputrect_%29.md): Converts a rectangle in the coordinate system used for metadata outputs to one in the capture output object’s coordinate system.
