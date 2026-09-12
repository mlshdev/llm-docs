> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciedgepreserveupsample](https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample)

# CIEdgePreserveUpsample (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an edge preserve upsample filter.

## Declaration

```swift
protocol CIEdgePreserveUpsample : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](ciedgepreserveupsample/inputimage.md): The image to use as an input image.
- [lumaSigma](ciedgepreserveupsample/lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [smallImage](ciedgepreserveupsample/smallimage.md): The image that the filter upsamples.
- [spatialSigma](ciedgepreserveupsample/spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [edgePreserveUpsample()](cifilter-swift.class/edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
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

# CIEdgePreserveUpsample (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure an edge preserve upsample filter.

## Declaration

```objectivec
@protocol CIEdgePreserveUpsample <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](ciedgepreserveupsample/inputimage.md): The image to use as an input image.
- [lumaSigma](ciedgepreserveupsample/lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [smallImage](ciedgepreserveupsample/smallimage.md): The image that the filter upsamples.
- [spatialSigma](ciedgepreserveupsample/spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [edgePreserveUpsampleFilter](cifilter-swift.class/edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
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
