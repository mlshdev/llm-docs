> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicoremlmodel/inputimage](https://developer.apple.com/documentation/coreimage/cicoremlmodel/inputimage)

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

- [headIndex](headindex.md): A number that specifies which output of a multihead Core ML model applies the effect on the image.
- [model](model.md): The Core ML model used to apply the effect on the image.
- [softmaxNormalization](softmaxnormalization.md): A Boolean value that specifies whether to apply Softmax normalization to the output of the model.

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

- [headIndex](headindex.md): A number that specifies which output of a multihead Core ML model applies the effect on the image.
- [model](model.md): The Core ML model used to apply the effect on the image.
- [softmaxNormalization](softmaxnormalization.md): A Boolean value that specifies whether to apply Softmax normalization to the output of the model.
