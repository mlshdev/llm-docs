> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cibicubicscaletransform](https://developer.apple.com/documentation/coreimage/cibicubicscaletransform)

# CIBicubicScaleTransform (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a bicubic scale transform filter.

## Declaration

```swift
protocol CIBicubicScaleTransform : CIFilterProtocol
```

## Topics

### Instance Properties

- [aspectRatio](cibicubicscaletransform/aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](cibicubicscaletransform/inputimage.md): The image to use as an input image.
- [parameterB](cibicubicscaletransform/parameterb.md): The value of B to use for the cubic resampling function.
- [parameterC](cibicubicscaletransform/parameterc.md): The value of C to use for the cubic resampling function.
- [scale](cibicubicscaletransform/scale.md): The scaling factor to use on the image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [bicubicScaleTransform()](cifilter-swift.class/bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.

### Protocols

- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.

# CIBicubicScaleTransform (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a bicubic scale transform filter.

## Declaration

```objectivec
@protocol CIBicubicScaleTransform <CIFilter>
```

## Topics

### Instance Properties

- [aspectRatio](cibicubicscaletransform/aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](cibicubicscaletransform/inputimage.md): The image to use as an input image.
- [parameterB](cibicubicscaletransform/parameterb.md): The value of B to use for the cubic resampling function.
- [parameterC](cibicubicscaletransform/parameterc.md): The value of C to use for the cubic resampling function.
- [scale](cibicubicscaletransform/scale.md): The scaling factor to use on the image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [bicubicScaleTransformFilter](cifilter-swift.class/bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.

### Protocols

- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.
