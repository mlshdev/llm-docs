> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/inputimage

# inputImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image to use as an input image.

## Declaration

```swift
var inputImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [lumaSigma](lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [smallImage](smallimage.md): The image that the filter upsamples.
- [spatialSigma](spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.

# inputImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image to use as an input image.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * inputImage;
```

## See Also

### Instance Properties

- [lumaSigma](lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [smallImage](smallimage.md): The image that the filter upsamples.
- [spatialSigma](spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.
