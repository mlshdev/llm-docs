> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciperspectivecorrection](https://developer.apple.com/documentation/coreimage/ciperspectivecorrection)

# CIPerspectiveCorrection (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a perspective correction filter.

## Declaration

```swift
protocol CIPerspectiveCorrection : CIFourCoordinateGeometryFilter
```

## Topics

### Instance Properties

- [crop](ciperspectivecorrection/crop.md): A rectangle that specifies the extent of the corrected image.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md)

## See Also

### Related Documentation

- [perspectiveCorrection()](cifilter-swift.class/perspectivecorrection%28%29.md): Transforms an image’s perspective.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.

# CIPerspectiveCorrection (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a perspective correction filter.

## Declaration

```objectivec
@protocol CIPerspectiveCorrection <CIFourCoordinateGeometryFilter>
```

## Topics

### Instance Properties

- [crop](ciperspectivecorrection/crop.md): A rectangle that specifies the extent of the corrected image.

## Relationships

### Inherits From

- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md)

## See Also

### Related Documentation

- [perspectiveCorrectionFilter](cifilter-swift.class/perspectivecorrection%28%29.md): Transforms an image’s perspective.

### Protocols

- [CIBicubicScaleTransform](cibicubicscaletransform.md): The properties you use to configure a bicubic scale transform filter.
- [CIEdgePreserveUpsample](ciedgepreserveupsample.md): The properties you use to configure an edge preserve upsample filter.
- [CIFourCoordinateGeometryFilter](cifourcoordinategeometryfilter.md): The properties you use to configure a geometry adjustment filters that requires four coordinates.
- [CIKeystoneCorrectionCombined](cikeystonecorrectioncombined.md): The properties you use to configure a keystone correction combined filter.
- [CIKeystoneCorrectionHorizontal](cikeystonecorrectionhorizontal.md): The properties you use to configure a keystone correction horizontal filter.
- [CIKeystoneCorrectionVertical](cikeystonecorrectionvertical.md): The properties you use to configure a keystone correction vertical filter.
- [CILanczosScaleTransform](cilanczosscaletransform.md): The properties you use to configure a Lanczos scale transform filter.
- [CIPerspectiveRotate](ciperspectiverotate.md): The properties you use to configure a perspective rotate filter.
- [CIPerspectiveTransform](ciperspectivetransform.md): The properties you use to configure a perspective transform filter.
- [CIPerspectiveTransformWithExtent](ciperspectivetransformwithextent.md): The properties you use to configure a perspective transform with extent filter.
- [CIStraighten](cistraighten.md): The properties you use to configure a straighten filter.
