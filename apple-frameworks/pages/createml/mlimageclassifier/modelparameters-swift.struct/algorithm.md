> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/algorithm

# algorithm

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Model algorithm to be used

## Declaration

```swift
var algorithm: MLImageClassifier.ModelParameters.ModelAlgorithmType { get set }
```

## See Also

### Accessing the training parameters

- [featureExtractor](featureextractor.md): Deprecated. The underlying base model the training session uses to extract image features as it trains an image classifier.
- [validation](validation.md): The image classifier’s validation dataset.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
- [validationData](validationdata-swift.property.md): Deprecated. A set of images that the training process uses for validation.
