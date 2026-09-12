> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciedgepreserveupsample/smallimage](https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/smallimage)

# smallImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image that the filter upsamples.

## Declaration

```swift
var smallImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [lumaSigma](lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [spatialSigma](spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.

# smallImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image that the filter upsamples.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * smallImage;
```

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [lumaSigma](lumasigma.md): A value that specifies the influence of the input image’s luma information on the upsampling operation.
- [spatialSigma](spatialsigma.md): A value that specifies the influence of the input image’s spatial information on the upsampling operation.
