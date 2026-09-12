> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciperspectiverotate](https://developer.apple.com/documentation/coreimage/ciperspectiverotate)

# CIPerspectiveRotate (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a perspective rotate filter.

## Declaration

```swift
protocol CIPerspectiveRotate : CIFilterProtocol
```

## Topics

### Instance Properties

- [focalLength](ciperspectiverotate/focallength.md): The 35mm equivalent focal length of the input image.
- [inputImage](ciperspectiverotate/inputimage.md): The image to process.
- [pitch](ciperspectiverotate/pitch.md): The pitch angle, in radians.
- [roll](ciperspectiverotate/roll.md): The roll angle, in radians.
- [yaw](ciperspectiverotate/yaw.md): The yaw angle, in radians.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [perspectiveRotate()](cifilter-swift.class/perspectiverotate%28%29.md): Rotates an image in a 3D space.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.

# CIPerspectiveRotate (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a perspective rotate filter.

## Declaration

```objectivec
@protocol CIPerspectiveRotate <CIFilter>
```

## Topics

### Instance Properties

- [focalLength](ciperspectiverotate/focallength.md): The 35mm equivalent focal length of the input image.
- [inputImage](ciperspectiverotate/inputimage.md): The image to process.
- [pitch](ciperspectiverotate/pitch.md): The pitch angle, in radians.
- [roll](ciperspectiverotate/roll.md): The roll angle, in radians.
- [yaw](ciperspectiverotate/yaw.md): The yaw angle, in radians.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [perspectiveRotateFilter](cifilter-swift.class/perspectiverotate%28%29.md): Rotates an image in a 3D space.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.
