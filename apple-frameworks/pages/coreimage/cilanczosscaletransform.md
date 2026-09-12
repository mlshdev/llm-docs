> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilanczosscaletransform](https://developer.apple.com/documentation/coreimage/cilanczosscaletransform)

# CILanczosScaleTransform (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a Lanczos scale transform filter.

## Declaration

```swift
protocol CILanczosScaleTransform : CIFilterProtocol
```

## Topics

### Instance Properties

- [aspectRatio](cilanczosscaletransform/aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](cilanczosscaletransform/inputimage.md): The image to use as an input image.
- [scale](cilanczosscaletransform/scale.md): The scaling factor to use on the image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [lanczosScaleTransform()](cifilter-swift.class/lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.

# CILanczosScaleTransform (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a Lanczos scale transform filter.

## Declaration

```objectivec
@protocol CILanczosScaleTransform <CIFilter>
```

## Topics

### Instance Properties

- [aspectRatio](cilanczosscaletransform/aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](cilanczosscaletransform/inputimage.md): The image to use as an input image.
- [scale](cilanczosscaletransform/scale.md): The scaling factor to use on the image.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [lanczosScaleTransformFilter](cifilter-swift.class/lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CIPerspectiveCorrection](ciperspectivecorrection.md): The properties you use to configure a perspective correction filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.
