> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedprediction](https://developer.apple.com/documentation/createmlcomponents/annotatedprediction)

# AnnotatedPrediction

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An annotated prediction.

## Declaration

```swift
struct AnnotatedPrediction<Prediction, Annotation>
```

## Topics

### Creating an annotated prediction

- [init(prediction:annotation:)](annotatedprediction/init%28prediction_annotation_%29.md): Creates an annotated preditction.

### Getting the properties

- [annotation](annotatedprediction/annotation.md): The ground truth annotation.
- [prediction](annotatedprediction/prediction.md): The predicted value.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Annotations

- [AnnotatedFiles](annotatedfiles.md): An annotated files collection.
- [AnnotatedBatch](annotatedbatch.md): A batch of annotated examples for fitting a supervised estimator.
- [AnnotatedFeature](annotatedfeature.md): An annotated example for fitting a supervised estimator.
- [AnnotatedFeatureProvider](annotatedfeatureprovider.md): An adaptor that converts a regular estimator to a tabular estimator by selecting features and annotations from columns.
- [DataFrameTemporalAnnotationParameters](dataframetemporalannotationparameters.md): Annotation parameters for the dataframe containing temporal annotations.
