> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/modelparameters-swift.struct/featureextractor](https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/featureextractor)

# featureExtractor

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 11.0) · visionOS 1.0+

The underlying base model the training session uses to extract image features as it trains an image classifier.

> Use featureExtractor in ModelAlgorithmType instead.

## Declaration

```swift
var featureExtractor: MLImageClassifier.FeatureExtractorType { get set }
```

<a id="discussion"></a>

## Discussion

When you train an image classifier with Create ML, you don’t train a complete model that converts images to labels. Instead, Create ML leverages a *feature extractor*, which is another model that identifies a set of general but distinguishing image characteristics. You can either use Create ML’s `scenePrint` feature extractor or provide your own custom feature extractor.

In either case, you train your model to map the feature extractor’s output to labels in a process known as *transfer learning*. Your model effectively borrows the knowledge of the feature extractor to accelerate its own training process while requiring fewer training images.

## See Also

### Accessing the training parameters

- [algorithm](algorithm.md): Model algorithm to be used
- [validation](validation.md): The image classifier’s validation dataset.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
- [validationData](validationdata-swift.property.md): Deprecated. A set of images that the training process uses for validation.
