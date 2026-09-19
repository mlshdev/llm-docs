> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlimageclassifier/modelparameters-swift.struct/validationdata-swift.property

# validationData

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS 10.14+ (deprecated in 10.15) · visionOS 1.0+

A set of images that the training process uses for validation.

> Use the validation property instead.

## Declaration

```swift
var validationData: [String : [URL]]? { get set }
```

## See Also

### Accessing the training parameters

- [algorithm](algorithm.md): Model algorithm to be used
- [featureExtractor](featureextractor.md): Deprecated. The underlying base model the training session uses to extract image features as it trains an image classifier.
- [validation](validation.md): The image classifier’s validation dataset.
- [maxIterations](maxiterations.md): The maximum number of iterations the training session can use.
- [augmentationOptions](augmentationoptions.md): The variations the training session uses to generate more variety in the training dataset.
