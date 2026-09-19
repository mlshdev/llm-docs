> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/augmentationoptions

# augmentationOptions

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

The variations the training session uses to generate more variety in the training dataset.

## Declaration

```swift
var augmentationOptions: MLImageClassifier.ImageAugmentationOptions
```

## See Also

### Accessing the training parameters

- [algorithm](algorithm.md): Model algorithm to be used
- [featureExtractor](featureextractor.md): Deprecated. The underlying base model the training session uses to extract image features as it trains an image classifier.
- [validation](validation.md): The image classifier’s validation dataset.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [validationData](validationdata-swift.property.md): Deprecated. A set of images that the training process uses for validation.
