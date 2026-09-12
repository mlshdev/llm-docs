> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicoremlmodel/model](https://developer.apple.com/documentation/coreimage/cicoremlmodel/model)

# model (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The Core ML model used to apply the effect on the image.

## Declaration

```swift
var model: MLModel { get set }
```

## See Also

### Instance Properties

- [headIndex](headindex.md): A number that specifies which output of a multihead Core ML model applies the effect on the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [softmaxNormalization](softmaxnormalization.md): A Boolean value that specifies whether to apply Softmax normalization to the output of the model.

# model (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The Core ML model used to apply the effect on the image.

## Declaration

```objectivec
@property (nonatomic, retain) MLModel * model;
```

## See Also

### Instance Properties

- [headIndex](headindex.md): A number that specifies which output of a multihead Core ML model applies the effect on the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [softmaxNormalization](softmaxnormalization.md): A Boolean value that specifies whether to apply Softmax normalization to the output of the model.
